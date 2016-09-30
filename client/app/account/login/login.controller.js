'use strict';

angular.module('prjAvalicao05App')
  .controller('LoginCtrl', function ($scope, Auth, $location, $window, User) {
    $scope.user = {};
    $scope.errors = {};
    
    // Use the User $resource to fetch all users
    // $scope.users = User.query();

    // console.log('User: ', User, $scope.users);

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
