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
        let res = currentPathname.split('/');
        let count = 0;
        for(let i = 0; i < res.length; i++) {
            if (res[i] === 'product' || res[i] === 'edit' || Number(res[i]) > 0) {
                count++;
            }
        }
        if (count !== 3) {
            return false;
        }

        calculatePriceForDay(data);
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