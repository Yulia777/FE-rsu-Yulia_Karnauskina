var angular = require('angular');
require('angular-resource');
require('./../post/post.module');
require('./../service');
require('./../aside/aside.module');
require('./../tag/tag.module');



angular.module('myMain', ['ngResource','postService','myPost','myAside','myTag','addForm'])
    .component('myMain', {
        template: require('../pages/main.html'),
        controller: function MainController($rootScope, $resource) {
            var vm = this;
            var tagsAll = function (tagsList){
                var tagsArr = [];
                tagsList.forEach(function (item) {
                    if (item.tags) {
                        item.tags.forEach(function (tag) {
                            if (tagsArr.indexOf(tag) == -1) {
                                tagsArr.push(tag);
                            }
                        })
                    }
                });
                return tagsArr;
            };

            $resource('/posts/').query(function(data){
                vm.posts = data;
                vm.tags = tagsAll(vm.posts);
            });
            $resource('/notes/').query(function(data){
                vm.notes = data;
            });

            $rootScope.$on('TagOnClick', function(event, tag){
                vm.searchText = tag;
            });
            $rootScope.$on('searchByAuthor', function(event, author) {
                vm.searchText = author;
            })
        }
    });
