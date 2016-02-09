angular.module('char_sheet.level', [])

.controller('levelCounter', function($scope) {

  $scope.currentLevel = 1;

  $scope.counterUp = function() {
    $scope.currentLevel = $scope.currentLevel + 1;
  };

  $scope.counterDown = function() {
    $scope.currentLevel = $scope.currentLevel - 1;
  };

});

