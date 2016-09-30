'use strict';

angular.module('prjAvalicao05App')
  .controller('DivisoesCtrl', function ($scope, $http, User, Divisoes) {
    $scope.awesomeThings = [];

    $http.get('/api/Divisoes').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });



  });
