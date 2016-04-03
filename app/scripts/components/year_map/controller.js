(function(){
  var app = angular.module("c.components.yearMap");
  app.controller("c.components.yearMap.Controller", [
    "$scope", "c.util.services.StateHandler", "c.data.Entity",
    function($scope, StateHandler, Entity){

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


      $scope.sliderStop = function(){
        loadLocations($scope.year.value, $scope.size.value);
      };

      function loadLocations(year, size){
        $scope.state.initiate();
        Entity.getLocationsByYear('application-pdf', year, size).then(function(r){
          $scope.state.success();
          $scope.map.markers = _.chain(r)
                                 .reduce(function(m, l, i){
                                    m["marker"+i] = {
                                      message: l.name + ':' + l.size,
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
        loadLocations(2012, 100);
      };

      defineScope();
    }
  ]);
}());
