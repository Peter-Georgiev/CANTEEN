const currentPathname = window.location.pathname;
const path = '/payment';
const payment = $('#payment');

$(document).ready(function () {
    $.ajax({
        url:        `${path}/create.ajax`,
        type:       'POST',
        dataType:   'json',
        async:      true,
        success: function(data, status) {
            $('#loadingBox').hide();
            payment.show();
            paymentCreate(data);

        },
        error : function(xhr, textStatus, errorThrown) {
            $('#loadingBox').hide();
            $('.table-responsive').hide();
            $('#errorBox span').text('Грешка в данните от сървъра!');
            $('#errorBox').show();
        },
    });

    function paymentCreate(data) {
        if (currentPathname === `${path}/create`) {
            selectedClassStudent(data, 0, 0);

            payment.find('#class_id').on('change', (event) => {
                let studentId = 0;//Number(payment.find('#student_id').val());
                let num = Number(event.target.value);
                selectedClassStudent(data, studentId, num);
            });

            payment.find('#student_id').on('change', (event) => {
                let num = Number(event.target.value);
                let classId = Number(payment.find('#class_id').val());
                selectedClassStudent(data, num, classId);
            });

            checkPricePayment();
        }
    }

    function selectedClassStudent(data, studentId = 0, classId = 0) {
        let isFirstElement = false;
        let outputClass = [];
        let outputStudent = [];
        let outputPrice = '';
        let outputSeller = '';
        let outputForMonth = '';
        let outputFeeInDays = '';
        let outputIsPaid = '';
        let outputProductId = '';

        $.each(data['classes'], function(key, value) {

            if (classId > 0 && isFirstElement === false) {
                outputClass.push('');
            }

            if (isFirstElement === false) {
                outputStudent.push('');
            }

            if (value.id !== classId) {
                outputClass.push('<option value="' + value.id + '">' + value.name + '</option>');
            } else if (classId > 0) {
                outputClass[0] = '<option value="' + value.id + '">' + value.name + '</option>';
            }

            if (classId > 0 && studentId > 0) {
                if (value.id === classId) {
                    $.each(value.students, function (key, value) {
                        if (value.studentId !== studentId) {
                            outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
                        } else {
                            outputStudent[0] = '<option value="' + value.studentId + '">' + value.student + '</option>';
                            outputSeller = value.seller;
                            outputPrice = value.price;
                            outputForMonth = value.forMonth;
                            outputFeeInDays = value.feeIndays;
                            outputIsPaid = value.isPaid;
                            outputProductId = value.productId;
                        }
                    });
                }
            } else if (classId > 0) {
                if (value.id === classId) {
                    let isFirstStudentName = false;
                    $.each(value.students, function (key, value) {
                        if (isFirstStudentName === false) {
                            outputStudent[0] = '<option value="' + value.studentId + '">' + value.student + '</option>';
                            outputSeller = value.seller;
                            outputPrice = value.price;
                            outputForMonth = value.forMonth;
                            outputFeeInDays = value.feeIndays;
                            outputIsPaid = value.isPaid;
                            outputProductId = value.productId;
                            isFirstStudentName =true;
                        } else {
                            outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
                        }
                    });
                }
            } else if (isFirstElement === false) {
                let isFirstStudentName = false;
                $.each(value.students, function (key, value) {
                    if (isFirstStudentName === false) {
                        outputStudent[0] = '<option value="' + value.studentId + '">' + value.student + '</option>';
                        outputSeller = value.seller;
                        outputPrice = value.price;
                        outputForMonth = value.forMonth;
                        outputFeeInDays = value.feeIndays;
                        outputIsPaid = value.isPaid;
                        outputProductId = value.productId;
                        isFirstStudentName =true;
                    } else {
                        outputStudent.push('<option value="' + value.studentId + '">' + value.student + '</option>');
                    }
                });
            }
            isFirstElement = true;
        });

        payment.find('#class_id').html(outputClass.join(''));
        payment.find('#student_id').html(outputStudent.join(''));
        payment.find('#payment_price').val(outputPrice);
        payment.find('#payment_seller').val(outputSeller);
        payment.find('#product_forMonth').val(outputForMonth);
        payment.find('#product_id').val(outputProductId);
    }

    function checkPricePayment() {
        let btnSave = payment.find('.btn.btn-primary');

        payment.find('#payment_payment:input').on('propertychange input', (event) => {
            let paymentPrice = Number(event.target.value);
            let price = Number(payment.find('#payment_price').val());
            let notification = $('#notifications-table #errorBox');

            if (event.target.value !== '' && price !== paymentPrice) {
                notification.children().text(
                    `Полетата със стойност цена ${price}лв. и плащане ${paymentPrice}лв. трябва да са еднакви!`
                );
                notification.show();
                btnSave.prop('disabled', true);
            } else {
                notification.children().text('Грешка в данните!');
                notification.hide();
                btnSave.prop('disabled', false);
            }
        });
    }
});