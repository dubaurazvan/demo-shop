$(document).ready(function() {

    var products = [];
    // Get information from server (A fake one in this case)
    $.getJSON('api/products.json', function(data) {
        // Store the ajax data into a variable
        products = data

        $.each(data, function(key, item) {
            // Generate the HTML template for each item.
            var productItemHTML =
            '<div class="row" data-id="' + item.id + '">\
               <div class="col-sm-5 productTitle">\
                    ' + item.name  + '\
                </div>\
                <div class="col-sm-4">\
                    ' + item.category.name + '\
                </div>\
                <div class="col-sm-2">\
                    ' + item.price + '\
                </div>\
                <div class="col-sm-1">\
                    <a href="#" class="glyphicon glyphicon-remove-circle text-danger remove-product"></a>\
                </div>\
            </div>';

            $('#product-list').append(productItemHTML);
        });
    });

    /**
     * Remove action
     */
    $(document).on('click', '.remove-product', function(event) {
        event.preventDefault();

        var element = $(this).parents('.row'),
            item    = (function() {
                var product;
                for(var i=0; i< products.length; i++) {
                    if (products[i].id == element.data('id')) {
                        product = products[i];
                    }
                }
                return product;
            })();

        /**
         *  If the item is marked to isRemovable = false, then we will publish a message to
         *  tell the user that product is not removable
         */
        if (!item.isRemovable) {
            if (!element.find('.productTitle .text-danger').length)
            element.find('.productTitle').append('\
                <div class="row text-danger">\
                    <span class="col-sm-12">\
                        Not able to remove this element\
                    </span>\
                </div>'
            );

            // Remove the alert after 3 seconds
            setTimeout(function() {
                element.find('.productTitle .text-danger').remove()
            }, 3000);

            return;
        }

        // Remove the product from HTML list
        $(this).parents('.row').remove();

        // In case of deleting all the products show the following message
        if (!$('#product-list').children('*').length) {
            $('#product-list').html('<span>No items in the list</span>');
        }
    });
})