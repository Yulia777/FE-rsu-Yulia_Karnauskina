var angular = require('angular');
require('angular-route');

angular.module('App').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<my-main></my-main>'
        })
        .when('/add', {
            template: '<add-form></add-form>'
        })
        .when('/:id', {
            template: '<add-form></add-form>'
        })
        .otherwise({
            redirectTo: '/'
        });
});