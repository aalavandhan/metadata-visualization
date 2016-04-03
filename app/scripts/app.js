'use strict';

/**
 * @ngdoc overview
 * @name metadataVisualizationApp
 * @description
 * # metadataVisualizationApp
 *
 * Main module of the application.
 */
angular
  .module('metadataVisualizationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-table',
    'c.components',
    'c.sections',
    'c.util',
    'ui.bootstrap',
    'infinite-scroll',
    'nemLogging',
    'ui-leaflet'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'app/scripts/sections/home/index.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/documents/:type/:id', {
        templateUrl: 'app/scripts/sections/home/document.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/visualizations/tag_cloud', {
        templateUrl: 'app/scripts/sections/visualizations/tag_cloud.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/visualizations/time_dependence', {
        templateUrl: 'app/scripts/sections/visualizations/time_dependence.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/visualizations/year_map', {
        templateUrl: 'app/scripts/sections/visualizations/year_map.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/visualizations/geo_pie', {
        templateUrl: 'app/scripts/sections/visualizations/geo_pie.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .when('/about', {
        templateUrl: 'app/scripts/sections/home/about.html',
        controller: 'c.util.controllers.StaticPageController',
      })

      .otherwise({
        redirectTo: '/'
      });
  })

  .config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push(["$window", "$rootScope", "$q",
      function ($window, $rootScope, $q) {
        return {
          // response: function(response) {
          //   return response
          // }
        };
    }]);
  }]);
