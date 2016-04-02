(function(){
  var app = angular.module("c.components.filters");
  app.directive("cDocTypeFilter", [function(){
    return{
      scope:{
        docType: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/filters/doc_type_template.html"
    };
  }]);
}());
