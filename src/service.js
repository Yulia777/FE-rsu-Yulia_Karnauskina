var angular = require('angular');

angular.module('postService', ['ngResource'])
    .factory("postService", postService);

postService.$inject = ['$resource'];

function postService($resource) {

    var post = $resource('/posts/:id', {id: '@id'}, {
        'update' : {method: 'PUT'}
    });
        return post
};

