/// <reference path="../definitions/angular.d.ts" />
((): void => {
    'use strict';
    angular.module('app', [
       'ngRoute',
        'app.services',
       'app.product'
    ]);
})();

