define(['app'], function (app) {
  app.controller('HomeController', ['$scope', function ($scope) {
    console.log('HomeCtrl instantiation');
    $scope.name = 'Home Page';
  }]);
});