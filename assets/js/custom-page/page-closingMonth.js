const path = '/payment/end-month/';
const closingMonth = $('#closing_month');
const divClosingMonth = document.querySelector('.js-closing-month');

$(document).ready(function () {
    let data = JSON.parse(
        divClosingMonth.getAttribute('data')
    );
    main(data);

    function main(data) {
        if (data.length === 0) {
            closingMonth.find('#month_id').hide();
            closingMonth.find('.control-label').html('Няма за преключване!');
        } else  {
            selectedClassStudent(data);
            closingMonth.find('#month_id').on('change', (event) => {
                selectedClassStudent(data, event.target.value);
            });
        }

        $('#loadingBox').hide();
        closingMonth.show();
    }

    function selectedClassStudent(data, event = null) {
        let outputDate = [];
        let outputClass = [];
        let tempsDate = [];

        if (event == null) {
            $.each(data, function (key, value) {
                tempsDate.push(key);
                outputDate.push('<option value="' + key + '">' + key + '</option>');
            });

            $.each(data[tempsDate[0]], function (key, value) {
                outputClass.push('<li value="' + value['id'] + '">' + key + '</li>');
            });
        } else {
            $.each(data, function (key, value) {
                if (key === event) {
                    tempsDate.push(key);
                    outputDate.push('<option value="' + key + '">' + key + '</option>');
                    $.each(data[key], function (key, value) {
                        outputClass.push('<li value="' + value['id'] + '">' + key + '</li>');
                    });
                }
            });

            $.each(data, function (key, value) {
                if (key !== event) {
                    outputDate.push('<option value="' + key + '">' + key + '</option>');
                }
            });
        }

        if (outputDate.length > 0 && tempsDate.length > 0) {
            closingMonth.find('#month_id').html(outputDate.join(''));
            closingMonth.find('form').attr( "action", path + tempsDate[0]);
        }

        if (outputClass.length > 0) {
            closingMonth.find('#class #name').html(outputClass.join(''));
        }
    }
});