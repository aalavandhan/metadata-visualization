(function(){
  var app = angular.module("c.components.idfCloud");
  app.controller("c.components.idfCloud.Controller", [
    "$scope", "c.util.services.StateHandler", "d3", "$timeout",
    function($scope, StateHandler, d3, $timeout){

      function loadIDF(){
        $scope.state.initiate();
        d3.dsv("|", "text/plain")("data/idf-sweet.csv", function(data){
          $scope.state.success();
          $scope.data = data;
          $scope.display($scope.data);
        });
      };

      function defineScope(){
        $scope.size = { value: 100 };
        $scope.order = '-1';

        $scope.state = StateHandler.getInstance();
        loadIDF();

        $scope.refresh = function(){
          $scope.display($scope.data);
        };
      };

      defineScope();
    }
  ]);
}());
