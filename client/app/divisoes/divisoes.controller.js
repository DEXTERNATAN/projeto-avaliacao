'use strict';

angular.module('prjAvalicao05App')
  .controller('DivisoesCtrl', function ($scope, $http, User) {
    $scope.awesomeThings = [];

    console.log('User: ', User);
    $http.get('/api/Divisoes').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });



  });
