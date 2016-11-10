var angular = require('angular');
require('angular-resource');
require('angular-route');
require('../service');

angular.module('addForm', [])
    .component('addForm', {
        template: require('../form/add.html'),
        controller: FormController,
        bindings: {
            'post': '<'
        }
    });

FormController.$inject = ['$routeParams','postService','$scope', '$location', '$resource','$uibModal'];

function FormController($routeParams,postService,$scope, $location, $resource, $uibModal) {
    var vm = this;
    var id = $routeParams.id;

    vm.post = new postService;

    if (id) {
        vm.post.$get({id: id});
    };

    vm.isNewPost = function () {
        return (!!id)
    };
    vm.addPost = function (data) {
        newTag(data);
        newDate(data);
        vm.post.$save(function(){
            $location.path('/');
        })
    };

    vm.updatePost = function (data) {
        newDate(data);
        newTag(data);


        vm.post.$update(function()  {
            $location.path('/');
        });

    };

    vm.deletePost = function (){
        console.log('Delete post is run');
        var modalInstance = $uibModal.open({
            template: require('../form/modal.html'),
            controller: 'ModalController as ctrl',
            scope: $scope,
            resolve:{
                id: function () {
                    return id;
                }
            }
        });

        modalInstance.result.then(function () {
            vm.post.$delete(function (resp) {
                $location.path('/');
            });
        });
    };

    function newDate(data){
        data.date = new Date();
    }
    function newTag (data){
        if (data.tag) {
            data.tags = data.tag.split(',');
        }
    }
}