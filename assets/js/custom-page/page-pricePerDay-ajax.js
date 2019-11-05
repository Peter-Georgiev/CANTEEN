import {table} from './applyDataTable.js'
import {editButton, deleteButton, addOnButton, paidOnButton, rowTextDangerOnOff} from './button-row-table.js';
import {bg} from './languageDataTable.js';
const currentPathname = window.location.pathname;
const path = '/price_per_day';

$(document).ready(function () {
    $.ajax({
        url:        path,
        type:       'POST',
        dataType:   'json',
        async:      true,
        success: function(data, status) {
            table.dataTable({
                data: data['pricesPerDays'],
                rowId: 'id',
                //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
                columns: [
                    {
                        data: 'price', // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Цена'
                    }, {
                        data: function (row, type, val, meta) {
                            if (row.isActive) {
                                return 'В сила';
                            } else if (!row.isActive) {
                                return 'Неактивна';
                            }
                            return `<i></i>`;
                        },
                        title: 'Статус'
                    }, {
                        data: function (row, type, val, meta) {
                            return  row.dateCreate + ', от ' + row.userCreate;
                        },
                        defaultContent: `<i></i>`,
                        title: 'Създаден на'
                    }, {
                        data: function (row, type, val, meta) {
                            let lastEdit = row.lastEdit;
                            let dateCreate = row.dateCreate;
                            if (lastEdit !== dateCreate) {
                                return row.lastEdit + ', от ' + row.userLastEdit;
                            } else if (lastEdit === dateCreate) {
                                return 'Няма';
                            }
                            return `<i></i>`;
                        },
                        title: 'Редактиран на'
                    }, {
                        title: 'Редактиране'
                    }, {
                        title: 'Изтриване'
                    },
                ],
                columnDefs: [ {
                    targets: -2,
                    data: function (row, type, val, meta) {
                        if (!row.isActive) {
                            return "<button id='editBtn' class='btn-default' disabled>Редактиране!</button>";
                        }
                        return "<button id='editBtn' class='btn-warning'>Редактиране!</button>";
                    },
                }, {
                    targets: -1,
                    data: function (row, type, val, meta) {
                        if (!row.isActive) {
                            return "<button id='deleteBtn' class='btn-default' disabled>Изтриване!</button>";
                        }
                        return "<button id='deleteBtn' class='btn-danger'>Изтриване!</button>"
                    },
                }],
                order: [
                    [2, 'asc'], [1, 'des']
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
                    referencePriceForDay();

                    table.on('click', 'button', function () {
                        let rowTable = $(this).parent().parent();
                        rowTable.addClass("text-danger");
                        let rowText = rowTable.children().map(function(){
                            return $.trim($(this).text());
                        }).get();

                        let id = rowTable.attr('id');

                        if (this.id === 'deleteBtn') {
                            let price = rowText[0];
                            let isActive = rowText[1];
                            let create = rowText[2];
                            //let num = (Math.round((price * day) * 100) / 100).toFixed(2);
                            let message = `Изтривате ценоразпис \"${price}лв.\"\n` +
                                `със статус \"${isActive}\", създадено "${create}"!!!`;

                            deleteButton(`${path}/delete/${id}`, rowTable, message);
                        } else if (this.id === 'editBtn') {
                            editButton(`${path}/edit/${id}`);
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
    
    function referencePriceForDay() {
        let isReference = currentPathname === `${path}/create`;

        if (!isReference) {
            let res = currentPathname.split('/');
            let count = 0;
            for(let i = 0; i < res.length; i++) {
                if (res[i] === 'price_per_day' || res[i] === 'edit') {
                    count++;
                }
            }

            isReference = count === 2;
        }

        if (isReference) {
            $('#addPricePerDay #price_per_day_day:input').on('propertychange input', (event) => {
                let day = Number(event.target.value);
                let price = $('#addPricePerDay #price_per_day_price').val();
                let result =(Math.round((price * day) * 100) / 100).toFixed(2);
                $('#addPricePerDay #price_per_day_sum').val(result);
            });

            $('#addPricePerDay #price_per_day_price:input').on('propertychange input', (event) => {
                let price = Number(event.target.value);
                let day = $('#addPricePerDay #price_per_day_day').val();
                let result =(Math.round((price * day) * 100) / 100).toFixed(2);
                $('#addPricePerDay #price_per_day_sum').val(result);
            });
        }
    }
});