angular.module('ifiske.controllers')
.controller('MapCtrl', function($scope, Area) {
    console.log($scope);
    $scope.map = {};
    $scope.map.centerOnMe = true;
    $scope.$on('$ionicView.beforeEnter', function() {
        Area.getAll()
        .then(function(areas) {
            $scope.map.areas = areas;
        });
    });
});
