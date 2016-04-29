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
                return this.$http.get('');
            };
            return ProductDataService;
        })();
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
