/// <reference path="../../definitions/product.d.ts" />
module app.services {
    export interface IProductDataService {
        getAll(): ng.IPromise<Product[]>;
    }

    class ProductDataService implements IProductDataService {
        constructor(private $http: ng.IHttpService) {
        }

        getAll(): ng.IPromise<Product[]> {
            return this.$http.get('/api/products')
                .then((response: ng.IHttpPromiseCallbackArg<Product[]>): Product[] => {
                    return response.data;
                });
        }
    }

    factory.$inject = ['$http'];
    function factory($http: ng.IHttpService): IProductDataService {
        return new ProductDataService($http);
    }

    angular
        .module('app.services')
        .factory('app.services.ProductDataService',
        factory);
}