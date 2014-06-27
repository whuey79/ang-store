'use strict';

/**
 * @ngdoc function
 * @name angStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angStoreApp
 */
angular.module('angStoreApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
