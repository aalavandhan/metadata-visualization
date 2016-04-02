(function(){
  var app = angular.module("c.components.document");
  app.controller("c.components.document.Controller", [
    "$scope", "c.data.Document", "c.util.services.StateHandler",
    function($scope, Document, StateHandler){

      function loadDocument(){
        $scope.state.initiate();

        new Document({ id: $scope.id, docType: $scope.docType }).$get().then(function(response){
          $scope.state.success();
          $scope.document = response;
          $scope.map.markers = drawable($scope.document.geo);
        }, function(){
          $scope.state.fatal("Error while fetching document " + $scope.id);
        })
      };

      function drawable(geo){
        var markers={};
        for(l in geo){
          markers["marker"+l] = {
            lat: geo[l].location.lat,
            lng: geo[l].location.lon,
            message: geo[l].name,
            focus: true,
            draggable: false
          }
        };
        return markers;
      };

      function defineScope(){
        $scope.state = StateHandler.getInstance();
        $scope.map = { };
        if($scope.id && $scope.docType){
          loadDocument();
        };
      };

      defineScope();
    }
  ]);
}());
