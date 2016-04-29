/// <reference path="../../definitions/product.d.ts" />
var app;
(function (app) {
    var services;
    (function (services) {
        var ProductDataService = (function () {
            function ProductDataService($http) {
                this.$http = $http;
            }
            ProductDataService.prototype.getAll = function () {
                return this.$http.get('/api/products')
                    .then(function (response) {
                    return response.data;
                });
            };
            return ProductDataService;
        })();
        factory.$inject = ['$http'];
        function factory($http) {
            return new ProductDataService($http);
        }
        angular
            .module('app.services')
            .factory('app.services.ProductDataService', factory);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
