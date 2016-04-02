(function(){
  var app = angular.module("c.components.yearMap");
  app.directive("cYearMap", [function(){
    return{
      scope: { },
      replace: true,
      templateUrl: "app/scripts/components/year_map/template.html",
      controller: "c.components.yearMap.Controller"
    };
  }]);

}());
