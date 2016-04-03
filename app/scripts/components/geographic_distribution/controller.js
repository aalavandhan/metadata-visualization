(function(){
  var app = angular.module("c.components.geographicDistribution");
  app.controller("c.components.geographicDistribution.Controller", [
    "$scope", "c.util.services.StateHandler", "c.data.Entity", "leafletDrawEvents",
    function($scope, StateHandler, Entity, leafletDrawEvents){
      var drawnItems = new L.FeatureGroup();
      var drawEvents = leafletDrawEvents.getAvailableEvents();
      drawEvents.forEach(function(eventName){
          $scope.$on('leafletDirectiveDraw.' + eventName, function(e, payload) {
            var leafletEvent, leafletObject, model, modelName;
            leafletEvent = payload.leafletEvent, leafletObject = payload.leafletObject, model = payload.model,
            modelName = payload.modelName;
            handle[eventName.replace('draw:','')](e,leafletEvent, leafletObject, model, modelName);
          });
      });

      var createRegion = function(coords, layer){
        var key = $scope.regions.length + 1,
            regionName = "Region-" + key,
            region = {
              name: regionName,
              coords: coords,
              layer: layer
            };

        $scope.state.initiate();

        Entity.getCountDocumentWithinRegions('application-pdf', coords).then(function(response){
          region.documentCount = response.count;
          $scope.state.success();
          $scope.regions.push(region);
          $scope.data = _.map($scope.regions, function(r){
            return {
              name: r.name,
              value : r.documentCount
            };
          });
        }, function(){
          $scope.state.fatal(" Error while fetching document count for this region. Lat Lon out of bounds");
          drawnItems.removeLayer(region.layer);
        });
      };

      var removeRegion = function(index){
        drawnItems.removeLayer($scope.regions[index].layer);
        $scope.regions.splice(index, 1);
      };

      var handle = {
        created: function(e, leafletEvent, leafletObject, model, modelName) {
          drawnItems.addLayer(leafletEvent.layer);
          createRegion(leafletEvent.layer._latlngs, leafletEvent.layer);
        },
        edited: function(arg) { },
        deleted: function(arg) { },
        drawstart: function(arg) {},
        drawstop: function(arg) {},
        editstart: function(arg) {},
        editstop: function(arg) {},
        deletestart: function(arg) {},
        deletestop: function(arg) {}
      };

      function defineScope(){
        $scope.regions = [ ];
        $scope.data = [ ];
        $scope.map =  {
          center: {
            lat: 0,
            lng: 0,
            zoom: 2
          },
          drawOptions: {
            position: "bottomright",
            draw: {
              polyline: false,
              polygon: false,
              circle:false,
              marker: false
            },
            edit: {
              featureGroup: drawnItems,
              remove: false,
              edit: false,
            }
          }
        };
        $scope.removeRegion = removeRegion;
        $scope.state = StateHandler.getInstance();
      };

      defineScope();
    }
  ]);
}());
