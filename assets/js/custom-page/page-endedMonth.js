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
        }
    });
});