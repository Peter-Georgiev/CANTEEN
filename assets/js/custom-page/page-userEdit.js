const passwordEdit = $('#pass_edit');
const passwordNew = $('#pass_new');
const passwordFirst = passwordNew.find('#form_password_first');
const passwordSecond = passwordNew.find('#form_password_second');

$(document).ready(function () {

    passwordNew.hide();
    passwordFirst.attr('disabled', true);
    passwordSecond.attr('disabled', true);

    $('#loadingBox').hide();
    $('#user_edit').show();

    passwordEdit.on('change', (event) => {
        if (!passwordNew.is(':visible') &&
            passwordFirst.prop("disabled") &&
            passwordSecond.prop("disabled")) {

            passwordNew.show();
            passwordFirst.attr('disabled', false);
            passwordSecond.attr('disabled', false);
        } else {
            passwordNew.hide();
            passwordFirst.attr('disabled', true);
            passwordSecond.attr('disabled', true);
        }
    });
});