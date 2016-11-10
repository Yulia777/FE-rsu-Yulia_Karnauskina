var angular = require('angular');
require('angular-resource');


angular.module('myTag', ['ngResource'])
    .component('myTag', {
        template: require('../tag/tag.html'),
        controller: TagController,
        bindings: {
            'tag': '<'
        }
    });

TagController.$inject = ['$rootScope'];

function TagController($rootScope) {
        this.linkClick = function (tag)  {
            $rootScope.$emit('TagOnClick', tag);
        };
}