(function(){
  var app = angular.module("c.components.timeVariance");
  app.controller("c.components.timeVariance.Controller", [
    "$scope", "c.util.services.StateHandler", "c.data.Entity", "$timeout", "c.data.Sweet",
    function($scope, StateHandler, Entity, $timeout, Sweet){

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

      function loadTags(query){
        return Sweet.autocomplete(query);
      };

      function executeQuery(){
        // ["global" or "globe"] and ["warming" or "warm"]
        var queryObj = _.map($scope.queries, function(q){
          return _.map(q.tags, function(t){ return t.text.split("-").join(" ") });
        });

        loadTime(queryObj);
      };

      function addQuery(){
        $scope.queries.push({
          tags: [ ]
        });
      };

      function removeQuery(index){
        $scope.queries.splice(index, 1);
      };

      function defineScope(){
        $scope.loadTags = loadTags;
        $scope.queries = [ ];
        $scope.addQuery = addQuery;
        $scope.removeQuery = removeQuery;
        $scope.executeQuery = executeQuery;
        loadTime([ ]);
      };

      defineScope();
    }
  ]);
}());
