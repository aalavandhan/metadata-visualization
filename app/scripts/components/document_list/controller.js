(function(){
  var app = angular.module("c.components.documentList");
  app.controller("c.components.documentList.Controller", [
    "$scope", "c.data.Document", "c.util.services.StateHandler", "c.util.services.Paginator", "$location",
    function($scope, Document, StateHandler, Paginator, $location){

      function loadDocuments(){
        $scope.state.initiate();
        $scope.paginator.paginate({
          "docType" : $scope.docType,
          "size": 10,
          "from": 0,
          "_source": {
            "include": [
              "id",
              "doi",
              "journal.title",
              "mime-type",
              "journal.header-title",
              "journal.authors",
              "journal.abstract",
              "metadata-score",
              "local-path",
            ]
          }
        }, function(){
          $scope.state.success();
        }, function(){
          $scope.state.fatal();
        });
      };

      function defineScope(){
        $scope.state = StateHandler.getInstance();
        $scope.documents = [ ];
        $scope.paginator = Paginator.getInstance(Document, "search").on($scope.documents);
        $scope.loadDocuments = loadDocuments;

        $scope.openDocument = function(d){
          $location.path("/documents/" + d['mime-type'] + "/" + d.id);
        };
      };

      defineScope();
      loadDocuments();
    }
  ]);
}());
