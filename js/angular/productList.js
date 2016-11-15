var productList = angular.module('productList', []);

productList
    .controller('ProductListController', function ProductListController($scope, $http) {
        $scope.products = undefined;

        $http
            .get('api/products.json')
            .then(function (response) {
                $scope.products = response.data;
            });
    })

    .controller('ProductListItemController', function ProductListItemController($scope) {
        $scope.delete = function(productId) {

            if (this.product.isRemovable) {
                for(var i=0; i<  this.products.length; i++) {
                    if (this.products[i].id == productId) {
                        this.products.splice(i, 1);
                    }
                }
            } else {
                this.product.showNotAbleToRemove = true;

                setTimeout(function() {
                    this.product.showNotAbleToRemove = false;
                    // Use $apply only when you have an async task (events, timeouts, intervals)
                    // It will trigger the angular renderer to update the HTML
                    this.$apply();
                }.bind(this), 3000);
            }
        }
    })