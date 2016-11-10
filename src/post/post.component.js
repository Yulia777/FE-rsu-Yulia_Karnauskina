var angular = require('angular');
require('angular-resource');


angular.module('myPost', ['ngResource'])
    .component('myPost', {
        template: require('../post/post.html'),
        bindings: {
            'post': '<'
        },
        controller: PostController
    });

function PostController($scope) {
    var vm = this;
    var postLength = vm.post.text.length;
    vm.isTextLong = function(){
        return postLength>100;
    };

    vm.searchByAuthor = function (author) {
        $scope.$emit('searchByAuthor', author);
    };

    if (vm.isTextLong()) {
        vm.textShow = false;
        vm.limit = 100;

        vm.changeTextView = function () {
            if (vm.textShow) {
                vm.limit = 100;
            } else {
                vm.limit = postLength;
            }
            vm.textShow = !vm.textShow;
        }
    }
}