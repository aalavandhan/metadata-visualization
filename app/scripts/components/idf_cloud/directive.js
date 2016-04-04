(function(){
  var app = angular.module("c.components.idfCloud");
  app.directive("cIdfCloud", [function(){
    return{
      scope: {
        docType: "=",
        entity: "=",
        query: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/idf_cloud/template.html",
      controller: "c.components.idfCloud.Controller",

      link: function($scope, elem , attrs){
        var plotData = function(selector, data) {
          $scope.plot = Bubbles(elem.width(), 600, $scope.size.value, $scope.order)
          return d3.select(selector).datum(data).call($scope.plot);
        };

        $scope.display = function(data) {
          elem.find(".idf-cloud").html('');
          return plotData(".idf-cloud", data);
        };

        return ;
      }
    };
  }]);

}());
