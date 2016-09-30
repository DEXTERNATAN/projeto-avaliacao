'use strict';

angular.module('prjAvalicao05App')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/divisoes', {
        templateUrl: 'app/divisoes/divisoes.html',
        controller: 'DivisoesCtrl'
      });
  });
