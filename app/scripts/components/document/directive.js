(function(){
  var app = angular.module("c.components.document");
  app.directive("cDocument", [function(){
    return{
      scope: {
        id: "=",
        docType: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/document/template.html",
      controller: "c.components.document.Controller",
    };
  }]);

}());
