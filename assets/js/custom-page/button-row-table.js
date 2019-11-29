function rowTextDangerOnOff(isOn = true) {
    let token = (window.location.pathname)
        .trim()
        .split('/');

    let id = Number(token[token.length - 1]);
    if (id <= 0) {
        return false;
    }
    let trToken = $('#dataTable tbody tr');

    $(trToken).each(function(){
        if (Number($(this).attr('id')) === id) {
            if (isOn) {
                $(this).addClass('text-danger');
            } else {
                $(this).removeClass('text-danger');
            }
        }
    });
}
function deleteButton(pathname, rowTable, messages) {
    let msg = `!!! ВНИМАНИЕ !!!\n` + messages;
    function confirmDialog(msg) {
        return new Promise(function (resolve, reject) {
            let add = $('div #add');
            let edit = $('div #edit');
            let addOnBtn = $('#addOnBtn');

            if (add.css('display') !== 'none') {
                add.hide();
                addOnBtn.show();
            }

            if (edit.css('display') !== 'none') {
                edit.hide();
                addOnBtn.show();
            }

            let confirmed = window.confirm(msg);

            return confirmed ? resolve(true) : reject(false);
        });
    }

    function href(pathname) {
        window.location.href = pathname;
    }

    function escape() {
        alert('Операцията отказана!');
    }

    confirmDialog(msg)
        .then(() =>  href(pathname) )
        .catch(err => escape());
}

function editButton(pathname) {
    window.location.href = pathname;
    //fetch(`/student/edit/${data.studentId}`, {
    //  method: 'POST'
    //}).then(res => window.location.reload());
}

function addOnButton(pathname) {
    window.location.href = pathname;
}

function paidOnButton(pathname) {
    window.location.href = pathname;
}

function printPdfButton(pathname) {
    window.location.href = pathname;
}

export {editButton, deleteButton, addOnButton, rowTextDangerOnOff, paidOnButton, printPdfButton};