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
            main(data);
        },
        error : function(xhr, textStatus, errorThrown) {
            $('#loadingBox').hide();
            $('.table-responsive').hide();
            $('#errorBox span').text('Грешка в данните от сървъра!');
            $('#errorBox').show();
        },
    });

    function main(data) {
        if (data['classes'].length === 0) {
            payment.find('fieldset').hide();
            payment.html('<legend style="text-align: center;">Няма въведени задължения!</legend>');
        } else {
            paymentCreate(data);
        }
    }

    function paymentCreate(data) {
        if (currentPathname === `${path}/create`) {
            selectedClassStudent(data, 0, 0);

            payment.find('#class_id').on('change', (event) => {
                let studentId = 0;//Number(payment.find('#student_id').val());
                let classId = Number(event.target.value);
                selectedClassStudent(data, studentId, classId);
            });

            payment.find('#student_id').on('change', (event) => {
                let studentId = Number(event.target.value);
                let classId = Number(payment.find('#class_id').val());
                selectedClassStudent(data, studentId, classId);
            });

            checkPricePayment();
        }
    }

    function selectedClassStudent(data, studentId = 0, classId = 0) {
        let outputClass = [];
        let outputStudent = [];
        let outputPrice = '';
        let outputSeller = '';
        let outputForMonth = '';
        let outputFeeInDays = '';
        let outputIsPaid = '';
        let outputProductId = '';

        if (classId > 0) {
            $.each(data['classes'], function (key, value) {
                if (value.id == classId) {
                    outputClass.push('<option value="' + value.id + '">' + value.name + '</option>');
                    outputSeller = value.seller;
                    selectStudents(key, value, studentId);
                }
            });
            $.each(data['classes'], function (key, value) {
                if (value.id != classId) {
                   outputClass.push('<option value="' + value.id + '">' + value.name + '</option>');
                }
            });
        } else if (classId == 0) {
            let tempClsId = [];
            $.each(data['classes'], function (key, value) {
                outputClass.push('<option value="' + value.id + '">' + value.name + '</option>');
                tempClsId.push(value.id);
                if (value.id == tempClsId[0]) {
                    outputSeller = value.seller;
                    selectStudents(key, value, studentId);
                }
            });
        }

        function selectStudents(key, value, studentId) {
            let tempStdId = [];
            $.each(value.students, function (k, v) {
                tempStdId.push(v.studentId);
                if (studentId == 0) {
                    studentId = tempStdId[0];
                }

                if (v.studentId == studentId) {
                    outputStudent.push('<option value="' + v.studentId + '">' + v.student + '</option>');
                    outputPrice = v.price;
                    outputForMonth = v.forMonth;
                    outputFeeInDays = v.feeIndays;
                    outputIsPaid = v.isPaid;
                    outputProductId = v.productId;
                }
            });

            $.each(value.students, function (k, v) {
                if (v.studentId != studentId) {
                    outputStudent.push('<option value="' + v.studentId + '">' + v.student + '</option>');
                }
            });
        }

        if (outputClass.length > 0){
            payment.find('#class_id').html(outputClass.join(''));
        }
        if (outputStudent.length > 0){
            payment.find('#student_id').html(outputStudent.join(''));
        }
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