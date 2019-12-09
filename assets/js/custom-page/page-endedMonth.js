import {table} from './applyDataTable.js'
import {bg} from './languageDataTable.js';
const path = '/payment';

$(document).ready(function () {
    table.dataTable({
        //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
        order: [
            [0, 'asc'], [2, 'asc'], [1, 'des']
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
        fnDrawCallback: function( oSettings ) {
            $('#loadingBox').hide();
            $('.table-responsive').show();
        },
        footerCallback: function ( row, data, start, end, display ) {
            let columNumver = 2;
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
});