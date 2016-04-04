(function(){
  var app = angular.module("c.components.timeVariance");
  app.controller("c.components.timeVariance.Controller", [
    "$scope", "c.util.services.StateHandler", "c.data.Entity", "$timeout", "c.data.Sweet","$timeout",
    function($scope, StateHandler, Entity, $timeout, Sweet, $timeout){

      function loadTime(q){
        $scope.state = StateHandler.getInstance();
        $scope.state.initiate();
        Entity.getValidDates($scope.docType, "sweet", q).then(function(response){
          $scope.state.success();

          $scope.data = [{
            key: "Document Count",
            values: _.map(response, function(y){
              return { series: "Document Count", x: y.year , y: y.docCount };
            })
          },{
            key: "Occurrence Count",
            values: _.map(response, function(y){
              return { series: "Occurrence Count", x: y.year , y: y.size };
            })
          }];

        }, function(){
          $scope.state.fatal();
        });
      };

      function executeQuery(){
        loadTime($scope.queries);
      };

      function defineScope(){
        $scope.executeQuery = executeQuery;

        $timeout(function(){
          loadTime([ ]);
        }, 500);
      };

      defineScope();
    }
  ]);
}());
