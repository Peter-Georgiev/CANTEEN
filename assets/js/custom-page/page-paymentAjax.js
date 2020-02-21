import {table} from './applyDataTable.js'
import {editButton, deleteButton, rowTextDangerOnOff,printPdfButton} from './button-row-table.js';
import {bg} from './languageDataTable.js';
const path = '/payment';

$(document).ready(function () {
    $.ajax({
        url:        path,
        type:       'POST',
        dataType:   'json',
        async:      true,
        success: function(data, status) {
            // Add footer
            table.append('<tfoot><tr><th colspan="12" style="text-align:right"></th><th></th></tr></tfoot>');

            table.dataTable({
                data: data['payments'],
                rowId: 'id',
                //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
                fixedHeader: {
                    header: true,
                    footer: true
                },
                columns: [
                    {
                        data: "class", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Клас'
                    }, {
                        data: "student", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Име на ученик'
                    },{
                        data: "teacher", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Курсов ръководител'
                    }, {
                        data: "payment", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Заявена сума'
                    }, {
                        data: "forMonth", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Такса за месец'
                    }, {
                        data: "price", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Платено'
                    }, {
                        data: "datePurchases", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Платено на дата'
                    }, {
                        data: "user", // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Касиер'
                    }, {
                        data: function (row, type, val, meta) {
                            let lastEdit = row.lastEdit;
                            let datePurchases = row.datePurchases;
                            if (lastEdit !== datePurchases) {
                                return lastEdit + ', от ' + row.lastEditUser;
                            } else if (lastEdit === datePurchases) {
                                return 'Няма'
                            }
                            return `<i></i>`;
                        },
                        title: 'Редакция'
                    }, {
                        data: 'namePayer', // can be null or undefined
                        defaultContent: `<i></i>`,
                        title: 'Вносител'
                    }, {
                        title: 'Печат'
                    }, {
                        title: 'Плащане'
                    }, {
                        title: 'Редактиране'
                    },
                ],
                columnDefs: [{
                    targets: -3,
                    data: function (row, type, val, meta) {

                        return "<button id='printBtn' class='btn-info'>Принтиране</button>";
                    },
                }, {
                    targets: -2,
                    data: function (row, type, val, meta) {
                        //console.log(row.userRole);
                        if (row.isMontEnded) {
                            return "<button id='editBtn' class='btn-default' disabled>Затворено</button>";
                        } else if (row.isPaid) {
                            return "<button id='editBtn' class='btn-danger'>Редакция!</button>";
                        }
                        return "<button id='editBtn' class='btn-warning'>Редакция!</button>";
                    },
                }, {
                    targets: -1,
                    data: function (row, type, val, meta) {
                        if (row.isPaid) {
                            return "<button id='deleteBtn' class='btn-default' disabled>Изтриване!</button>";
                        }
                        return "<button id='deleteBtn' class='btn-danger'>Изтриване!</button>"
                    },
                }],
                order: [
                    [4, 'des'], [0, 'asc'], [1, 'asc'], [6, 'des']
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
                    $(".table-responsive").show();
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
                            let price = rowText[5];
                            let forMonth = rowText[4];
                            let paymentDay = rowText[6];
                            let message = `Изтривате плащане на \"${studentFullName}\" от \"${className}\" клас\n` +
                                `за месец \"${forMonth}\", сума ${price} лв., платено на дата ${paymentDay}.!!!`;

                            deleteButton(`${path}/delete/${id}`, rowTable, message);
                        } else if (this.id === 'editBtn') {
                            editButton(`${path}/edit/${id}`);
                        } else if (this.id === 'printBtn') {
                            printPdfButton(`${path}/pdf/${id}`);
                        }
                    });
                },
                footerCallback: function ( row, data, start, end, display ) {
                    let columNumver = 5;
                    var api = this.api(), data;

                    // Remove the formatting to get integer data for summation
                    let intVal = function (i) {
                        return typeof i === 'string' ?
                            i.replace(/[\лв].+/g, '')*1 :
                            typeof i === 'number' ?
                                i : 0;
                    };

                    // Total over all pages
                    let total = api
                        .column(columNumver)
                        .data()
                        .reduce(function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );

                    // Total over this page
                    let pageTotal = api
                        .column(columNumver, { page: 'current'} )
                        .data()
                        .reduce( function (a, b) {
                            return intVal(a) + intVal(b);
                        }, 0 );

                    // Update footer
                    $(api.column(columNumver).footer() ).html(
                        'Сума на текущата страница: ' + pageTotal.toFixed(2) + ' лв.' +
                        ' ( Сума от всички страници: ' + total.toFixed(2) + ' лв. )'
                    );
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