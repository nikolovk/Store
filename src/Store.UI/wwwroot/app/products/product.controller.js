var app;
(function (app) {
    var product;
    (function (product) {
        var ProductController = (function () {
            function ProductController(productDataService) {
                var _this = this;
                this.productDataService = productDataService;
                this.products = [];
                this.productDataService.getAll()
                    .then(function (products) {
                    _this.products = products;
                });
            }
            return ProductController;
        })();
        product.ProductController = ProductController;
        productController.$inject = [
            'app.services.ProductDataService'
        ];
        function productController(productDataService) {
            return new ProductController(productDataService);
        }
        ;
        angular.module('app.product')
            .controller('app.product.ProductController', productController);
    })(product = app.product || (app.product = {}));
})(app || (app = {}));
