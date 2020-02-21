import {table} from './applyDataTable.js'
import {editButton, deleteButton, addOnButton, rowTextDangerOnOff} from './button-row-table.js';
import {bg} from './languageDataTable.js';
const path = '/product';

$(document).ready(function () {
    $.ajax({
        url:        path,
        type:       'POST',
        dataType:   'json',
        async:      true,
        success: function(data, status) {
            table.dataTable({
                data: data['products'],
                rowId: 'id',
                //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
                columns: [
                    {
                        data: "class", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Клас'
                    }, {
                        data: "student", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Ученик'
                    }, {
                        data: 'price', // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Цена'
                    }, {
                        data: function (row, type, val, meta) {
                            if (row.isPaid) {
                                return 'Платено';
                            } else if (!row.isPaid) {
                                return 'Неплатено';
                            }
                            return `<i></i>`;
                        },
                        title: 'Статус'
                    }, {
                        data: function (row, type, val, meta) {
                            let number = Number(row.feeInDays);
                            if (number === 1) {
                                return number + ' ден'
                            } else if (number === 0 || number > 1) {
                                return number + ' дни'
                            }
                            return `<i></i>`;
                        },
                        title: 'Такси в дни'
                    }, {
                        data: 'forMonth', // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Такса за месец'
                    }, {
                        data: "dateCreate", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Дата на създаване'
                    }, {
                        data: function (row, type, val, meta) {
                            let lastEdit = row.lastEdit;
                            let dateCreate = row.dateCreate;
                            if (lastEdit !== dateCreate) {
                                return lastEdit;
                            } else if (lastEdit === dateCreate) {
                                return 'Няма';
                            }
                            return `<i></i>`;
                        },
                        title: 'Редакция'
                    }, {
                        data: function (row, type, val, meta) {
                            if ( row.isMonthEnded) {
                                return 'Затворен!';
                            }
                            return 'Отворен!';
                        },
                        title: 'Месечен статус'
                    }, {
                        title: 'Редактиране'
                    }, {
                        title: 'Изтриване'
                    },
                ],
                columnDefs: [{
                    targets: -2,
                    data: function (row, type, val, meta) {
                        if (row.isPaid || row.isMonthEnded) {
                            return "<button id='editBtn' class='btn-default' disabled>Редакция!</button>";
                        }
                        return "<button id='editBtn' class='btn-warning'>Редакция!</button>";
                    },
                }, {
                    targets: -1,
                    data: function (row, type, val, meta) {
                        if (row.isPaid || row.isMonthEnded) {
                            return "<button id='deleteBtn' class='btn-default' disabled>Изтриване!</button>";
                        }
                        return "<button id='deleteBtn' class='btn-danger'>Изтриване!</button>"
                    },
                }],
                order: [
                    [5, 'des'], [0, 'asc'], [1, 'asc'], [6, 'des']
                ],
                language: bg.language,
                dom: 'lfBSrtip',
                buttons: [
                    {extend: 'copy'},
                    //{extend: 'csv'},
                    {extend: 'excel'},
                    {
                        //extend: 'pdfHtml5',
                        extend: 'pdf',
                        orientation: 'landscape',
                        pageSize: 'LEGAL'
                    },
                    {extend: 'print'},
                ],
                drawCallback: function(){
                    $('.dataTables_paginate a.paginate_button:not(.disabled)', this.api().table().container())
                        .on('click', function(){
                            rowTextDangerOnOff();
                        });
                },
                fnDrawCallback: function( oSettings ) {
                    $('#loadingBox').hide();
                    $('.table-responsive').show();
                    rowTextDangerOnOff();

                    table.on('click', 'button', function () {
                        let rowTable = $(this).parent().parent();
                        rowTable.addClass("text-danger");
                        let rowText = rowTable.children().map(function(){
                            return $.trim($(this).text());
                        }).get();

                        let id = rowTable.attr('id');

                        if (this.id === 'deleteBtn') {
                            let studentFullName = rowText[0];
                            let className = rowText[1];
                            let forMonth = rowText[5];
                            let price = rowText[3];
                            let message = `Изтривате плащане на \"${studentFullName}\" от \"${className}\"\n` +
                                `за месец \"${forMonth}\", сума ${price} лв.!!!`;

                            deleteButton(`${path}/delete/${id}`, rowTable, message);
                        } else if (this.id === 'editBtn') {
                            editButton(`${path}/edit/${id}`);
                        } else if (this.id === 'paidBtn') {
                            //paidOnButton(`/payment/create/by/${id}`);
                        }
                    });

                    $('#addOnBtn button').on('click', function () {
                        addOnButton(`${path}/create`);
                    });
                }
            });
        },
        error : function(xhr, textStatus, errorThrown) {
            $('#loadingBox').hide();
            $('.table-responsive').hide();
            $('#errorBox span').text('Грешка в данните от сървъра!');
            $('#errorBox').show();
        },
    });
});