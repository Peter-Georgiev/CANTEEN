$(document).ready(function() {
    $(".monthPicker").datepicker({
        language: 'bg',
        dateFormat: 'mm.yy',
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,

        onClose: function(dateText, inst) {
            let month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            let year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).val($.datepicker.formatDate('mm.yy', new Date(year, month, 1)));
        }
    });

    $(".monthPicker").focus(function () {
        $(".ui-datepicker-calendar").hide();
        $("#ui-datepicker-div").position({
            my: "center top",
            at: "center bottom",
            of: $(this)
        });
    });

    jQuery(function($){
        $.datepicker.regional['bg'] = {
            closeText: "избери",
            prevText: "&#x3C;назад",
            nextText: "напред&#x3E;",
            nextBigText: "&#x3E;&#x3E;",
            currentText: "днес",
            monthNames: [ "Януари","Февруари","Март","Април","Май","Юни",
                "Юли","Август","Септември","Октомври","Ноември","Декември" ],
            monthNamesShort: [ "Яну","Фев","Мар","Апр","Май","Юни",
                "Юли","Авг","Сеп","Окт","Нов","Дек" ],
            dayNames: [ "Неделя","Понеделник","Вторник","Сряда","Четвъртък","Петък","Събота" ],
            dayNamesShort: [ "Нед","Пон","Вто","Сря","Чет","Пет","Съб" ],
            dayNamesMin: [ "Не","По","Вт","Ср","Че","Пе","Съ" ],
            weekHeader: "Wk",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };

        $.datepicker.setDefaults($.datepicker.regional['bg']);
    });
});