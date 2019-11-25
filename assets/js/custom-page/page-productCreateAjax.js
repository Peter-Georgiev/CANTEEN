const currentPathname = window.location.pathname;
const path = '/product';
const product = $('#product');

$(document).ready(function () {
    $.ajax({
        url:        `${path}/ajax_cr_ed`,
        type:       'POST',
        dataType:   'json',
        async:      true,
        success: function(data, status) {
            $('#loadingBox').hide();
            product.show();
            productCreate(data);
        },
        error : function(xhr, textStatus, errorThrown) {
            $('#loadingBox').hide();
            $('.table-responsive').hide();
            $('#errorBox span').text('Грешка в данните от сървъра!');
            $('#errorBox').show();
        },
    });

    function productCreate(data) {
        if (currentPathname === `${path}/create`) {
            hiddenProductForMonthDay();
            selectedOption(data);
            calculatePriceForDay(data);

            product.find('#class_id').on('change', (event) => {
                selectedOption(data, 0, Number(event.target.value));
            });
        }
    }

    function selectedOption(data, studentId = 0, classId = 0) {
        let isFirstElement = false;
        let tempFirstOption = '';
        let outputClass = [];
        let outputStudent = [];

        $.each(data['classes'], function(key, value) {
            if (classId > 0 && isFirstElement === false) {
                outputClass.push('');
            }

            if (value.id !== classId) {
                outputClass.push('<option value="' + value.id + '">' + value.name + '</option>');
            } else {
                tempFirstOption = '<option value="' + value.id + '">' + value.name + '</option>';
            }

            if (classId > 0 && studentId > 0) {
                if (value.id === classId) {
                    $.each(value.students, function (key, value) {
                        if (value.studentId === studentId) {
                            outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
                        }
                    });
                }
            } else if (classId > 0) {
                if (value.id === classId) {
                    $.each(value.students, function (key, value) {
                        outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
                    });
                }
            } else if (isFirstElement === false) {
                $.each(value.students, function (key, value) {
                    outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
                });
            }
            isFirstElement = true;
        });

        if (classId > 0) {
            outputClass[0] = tempFirstOption;
        }

        product.find('#class_id').html(outputClass.join(''));
        product.find('#student_id').html(outputStudent.join(''));
    }

    function hiddenProductForMonthDay() {
        let productForMonthDay = product.find('#product_forMonth_day');
        if (productForMonthDay) {
            productForMonthDay.hide();
        }
    }

    function calculatePriceForDay(data) {
        product.find('#product_feeInDays:input').on('propertychange input', (event) => {
            let day = Number(event.target.value);
            let price = Number(data['pricePerDays'][0]['price']);
            let result =(Math.round((price * day) * 100) / 100).toFixed(2);
            product.find('#product_price').val(result);
        });
    }
});