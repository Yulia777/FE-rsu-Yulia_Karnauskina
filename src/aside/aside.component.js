var angular = require('angular');
require('angular-resource');


angular.module('myAside', ['ngResource'])
    .component('myAside', {
        template: require('../aside/aside.html'),
        controller: NoteController,
        bindings: {
            'note': '<'
        }
    });


function NoteController($scope, $resource) {
    var vm = this;
}