var angular = require('angular');
require('angular-ui-bootstrap');

angular
    .module('addForm')
    .controller('ModalController', ModalController);

ModalController.$inject = ['$scope','$uibModalInstance','id'];

function ModalController ($scope, $uibModalInstance, id) {
    var vm = this;

    $scope.ok = function () {
        $uibModalInstance.close(id);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    }
}