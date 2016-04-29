module app.product {
    export class ProductController {
        private products: Product[] = [];

        constructor(private productDataService: app.services.IProductDataService)
        {
            this.productDataService.getAll()
                .then((products: Product[]) => {
                    this.products = products;
                });
        }
    }

    productController.$inject = [
        'app.services.ProductDataService'
    ];

    function productController(productDataService): ProductController {
        return new ProductController(productDataService);
    };

    angular.module('app.product')
        .controller('app.product.ProductController', productController);
}