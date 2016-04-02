(function(){
  var app = angular.module("c.components.documentList");
  app.directive("cDocumentList", [function(){
    return{
      scope: {
        query: "=",
        docType: "=",
      },
      replace: true,
      templateUrl: "app/scripts/components/document_list/template.html",
      controller: "c.components.documentList.Controller",
    };
  }]);

}());
