(function(){
  var app = angular.module("c.components.idfLocation");
  app.directive("cIdfLocation", [function(){
    return{
      scope: {
        docType: "=",
        entity: "=",
        query: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/idf_location/template.html",
      controller: "c.components.idfLocation.Controller",

      link: function($scope, elem , attrs){
        var bubble_map = new Datamap({
          element: elem.find(".idf-location")[0],
          height: 800,
          geographyConfig: {
            popupOnHover: false,
            highlightOnHover: false
          },
          fills: {
            defaultFill: '#ABDDA4',
            USA: 'red',
            // RUS: 'red'
          }
        });

        var loadMap = function(data){
          bubble_map.bubbles(data, {
            popupTemplate: function(geo, d) {
              return '<div class="hoverinfo">Name:' + d.name + ' Score: ' + d.radius;
            }
          });
        };

        $scope.loadMap = loadMap;
      }
    };
  }]);

}());
