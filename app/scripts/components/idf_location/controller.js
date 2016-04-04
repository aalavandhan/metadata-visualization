(function(){
  var app = angular.module("c.components.idfLocation");
  app.controller("c.components.idfLocation.Controller", [
    "$scope", "c.util.services.StateHandler",
    function($scope, StateHandler){
      var normalizedScores = function(data){
        var max = _.max(data, function(x){ return x.score }).score;

        return _.map(data, function(x){
          x.nScore = parseFloat(x.score) / parseFloat(max);
          return clean(x);
        });
      };

      var clean = function(l){
        return {
          name: l.name,
          nScore: l.nScore,
          score: l.score,
          // yeild: 15000,
          country: 'USA',
          // significance: 'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
          fillKey: 'USA',
          // date: '1954-03-01',
          latitude: parseFloat(l.latitude),
          longitude: parseFloat(l.longitude)
        };
      };

      function defineScope(){
        $scope.state = StateHandler.getInstance();
        $scope.state.initiate();
        d3.dsv("|", "text/plain")("data/idf-geo.csv", function(row){
          var coords    = row.coords.split(",");
          row.latitude  = coords[0];
          row.longitude = coords[1];
          return row;
        }, function(data){
          $scope.state.success();
          $scope.data = normalizedScores(data);
          $scope.refresh($scope.data);
        });

        $scope.size = { value: 100 };
        $scope.order = '-1';

        $scope.refresh = function(dx){
          var data,
              normalizationConstant = {
                '-1': 0.25,
                '1': 5,
                '0': 0.75,
              };

          if(parseInt($scope.order) == 0){
            var data = _.shuffle(dx);
          } else {
            data = _.sortBy(dx, function(d){ return parseInt($scope.order) * parseFloat(d.score) });
          };

          data = _.map(data, function(x){
            x.radius = x.nScore * normalizationConstant[$scope.order];;
            return x;
          });

          $scope.loadMap(data.slice(0, $scope.size.value));
        };
      };

      defineScope();
    }
  ]);
}());
