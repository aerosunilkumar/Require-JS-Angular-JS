define(['angular', 'angularRoute'], function (angular) {
  var app = angular.module('plunker', ['ngRoute']);
  app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when("/home", {
        templateUrl: "app/home/index.html",
        controller: 'HomeController'
      })
      .when("/about", {
        templateUrl: "app/about/index.html",
        controller: "AboutController"
      })
      .otherwise({
        redirectTo: "/home"
      })
  });
  app.init = function () {
    angular.bootstrap(document.getElementById("plunker"), ['plunker']);
  };

  return app;
});