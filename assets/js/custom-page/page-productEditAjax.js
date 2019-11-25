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
            productEditId(data);
        },
        error : function(xhr, textStatus, errorThrown) {
            $('#loadingBox').hide();
            $('.table-responsive').hide();
            $('#errorBox span').text('Грешка в данните от сървъра!');
            $('#errorBox').show();
        },
    });

    function productEditId(data) {
        hiddenProductForMonthDay();
        let res = currentPathname.split('/');
        let count = 0;
        for(let i = 0; i < res.length; i++) {
            if (res[i] === 'product' || res[i] === 'edit') {
                count++;
            }
        }
        if (count !== 2) {
            return false;
        }

        let classElement = product.find('#class_id');
        let studentId = Number(product.find('#student_id').attr('value'));
        let classId = Number(classElement.attr('value'));

        selectedOption(data, studentId, classId);
        calculatePriceForDay(data);

        classElement.on('change',(event) => {
            selectedOption(data, 0, Number(event.target.value));
        });
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