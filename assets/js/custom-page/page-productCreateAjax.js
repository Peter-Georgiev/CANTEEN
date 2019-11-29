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
            selectedClassStudent(data);
            calculatePriceForDay(data);

            product.find('#class_id').on('change', (event) => {
                selectedClassStudent(data, 0, event.target.value);
            });
        }
    }

    function selectedClassStudent(data, studentId = 0, classId = 0) {
        let outputClass = [];
        let outputStudent = [];

        if (classId > 0) {
            $.each(data['classes'], function (key, value) {
                if (value.id == classId) {
                    outputClass.push('<option value="' + value.id + '">' + value.name + '</option>');
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
                }
            });

            $.each(value.students, function (k, v) {
                if (v.studentId != studentId) {
                    outputStudent.push('<option value="' + v.studentId + '">' + v.student + '</option>');
                }
            });
        }

        if (outputClass.length > 0){
            product.find('#class_id').html(outputClass.join(''));
        }
        if (outputStudent.length > 0){
            product.find('#student_id').html(outputStudent.join(''));
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