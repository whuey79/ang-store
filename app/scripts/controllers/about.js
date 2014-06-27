'use strict';

/**
 * @ngdoc function
 * @name angStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angStoreApp
 */
angular.module('angStoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
