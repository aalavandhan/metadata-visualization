(function(){
  var app = angular.module("c.components.yearMap");
  app.controller("c.components.yearMap.Controller", [
    "$scope", "c.util.services.StateHandler", "c.data.Entity","$timeout",
    function($scope, StateHandler, Entity, $timeout){

      $scope.center = {
        lat: 0,
        lng: 0,
        zoom: 2
      };

      $scope.events = {
        map: {
          enable: ['moveend', 'popupopen'],
          logic: 'emit'
        },
        marker: {
          enable: [],
          logic: 'emit'
        }
      };

      $scope.layers = {
        baselayers: {
          osm: {
            name: 'OpenStreetMap',
            type: 'xyz',
            url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          }
        },
        overlays: {
          realworld: {
            name: "Trec Polar Data",
            type: "markercluster",
            visible: true
          }
        }
      };

      function loadLocations(year, size, queries){
        $scope.state.initiate();
        Entity.getLocationsByYear($scope.docType, year, size, queries).then(function(r){
          $scope.state.success();
          $scope.map.markers = _.chain(r)
                                 .reduce(function(m, l, i){
                                    m["marker"+i] = {
                                      message: l.name,
                                      lat: l.lat,
                                      lng: l.lon,
                                      size: l.size,
                                      draggable: false,
                                      layer: 'realworld',
                                    };
                                    return m;
                                 }, { })
                                 .value();
        }, function(){
          $scope.state.fatal();
        });
      };

      function defineScope(){
        $scope.year = { value: 2012 };
        $scope.size = { value: 100  };
        $scope.state = StateHandler.getInstance();
        $scope.loadLocations = loadLocations;
        $timeout(function(){
          loadLocations(2012, 100, [ ]);
        }, 500);
      };

      defineScope();
    }
  ]);
}());
