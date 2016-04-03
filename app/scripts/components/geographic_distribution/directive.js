(function(){
  var app = angular.module("c.components.geographicDistribution");
  app.directive("cGeoDist", [function(){
    return{
      scope: { },
      replace: true,
      templateUrl: "app/scripts/components/geographic_distribution/template.html",
      controller: "c.components.geographicDistribution.Controller",
      link: function($scope){
        $scope.options =  {
          chart: {
            type: 'pieChart',
            height: 500,
            x: function(d){return d.name; },
            y: function(d){return d.value; },
            showLabels: true,
            duration: 500,
            labelThreshold: 0.01,
            labelSunbeamLayout: true,
            legend: {
              margin: {
                top: 5,
                right: 35,
                bottom: 5,
                left: 0
              }
            }
          }
        };
      }
    };
  }]);

}());
