import {table} from './applyDataTable.js'
import {editButton, deleteButton, addOnButton, rowTextDangerOnOff} from './button-row-table.js';
import {bg} from './languageDataTable.js';
const path = '/student';

$(document).ready(function () {

    table.dataTable({
    //pagingType: 'full_numbers', // "simple" option for 'Previous' and 'Next' buttons only
    columnDefs: [{
        targets: -2,
        data: null,
        defaultContent: "<button id='editBtn' class='text-warning'>Редактиране!</button>"
    }, {
        targets: -1,
        data: null,
        defaultContent: "<button id='deleteBtn' class='text-danger'>Изтриване!</button>"
    }],
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
    drawCallback: function(){
        $('.dataTables_paginate a.paginate_button:not(.disabled)', this.api().table().container())
            .on('click', function(){
               // rowTextDangerOnOff();
            });
    },
    fnDrawCallback: function( oSettings ) {

        $('#loadingBox').hide();
        $('.table-responsive').show();
        rowTextDangerOnOff();

        $('#addOnBtn button').on('click', function () {
            addOnButton(`${path}/create`);
        });
    }
    });

    table.on('click', 'button', function () {
        let rowTable = $(this).parent().parent();
        //rowTable.addClass("text-danger");
        let rowText = rowTable.children().map(function(){
            return $.trim($(this).text());
        }).get();

        let id = rowTable.attr('id');

        if (this.id === 'deleteBtn') {
            let className = rowText[0];
            let studentFullName = rowText[1];
            let message = `Изтриване на ученик \"${studentFullName}\" \nот клас \"${className}\"!!!`;

            deleteButton(`${path}/delete/${id}`, rowTable, message);
        } else if (this.id === 'editBtn') {
            editButton(`${path}/edit/${id}`);
        }
    });
});