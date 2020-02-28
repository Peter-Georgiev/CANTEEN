const currentPathname = window.location.pathname;
const payment = $('#payment');

$(document).ready(function () {

    payment.show();
    productEditId();

    function productEditId() {
        let res = currentPathname.split('/');
        let count = 0;
        for(let i = 0; i < res.length; i++) {
            if (res[i] === 'payment' || res[i] === 'edit') {
                count++;
            }
        }

        if (count !== 2) {
            return false;
        }

        checkPricePayment();
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