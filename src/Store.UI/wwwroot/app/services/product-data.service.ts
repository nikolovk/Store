/// <reference path="../../definitions/product.d.ts" />
module app.services {
    export interface IProductDataService {
        getAll(): ng.IPromise<Product[]>;
    }

    class ProductDataService implements IProductDataService {
        constructor(private $http: ng.IHttpService) {
        }

        getAll(): ng.IPromise<Product[]> {
            return this.$http.get(''
        }
    }
}