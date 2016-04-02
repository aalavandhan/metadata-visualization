(function(){
  var app = angular.module("c.components.timeVariance");
  app.directive("cTimeVariance", [function(){
    return{
      scope: {
        docType: "=",
        entity: "=",
        query: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/time_variance/template.html",
      controller: "c.components.timeVariance.Controller",
      link: function($scope, element, attrs){

        $scope.options = {
          "chart": {
            "type": "multiBarChart",
            "height": 450,
            "margin": {
              "top": 20,
              "right": 20,
              "bottom": 45,
              "left": 45
            },
            "clipEdge": true,
            "duration": 500,
            "stacked": true,
            "xAxis": {
              "axisLabel": "Entities",
              "showMaxMin": false,
            },
            "yAxis": {
              "axisLabel": "Frequency",
            }
          }
        };
      }
    };
  }]);

}());
