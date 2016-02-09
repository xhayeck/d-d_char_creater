angular.module('char_sheet.level', [])

.controller('levelCounter', function($scope, $state) {

  $scope.currentLevel = 1;
  $scope.proficiencyBonus = 2;

  $scope.counterUp = function() {
    $scope.currentLevel = $scope.currentLevel + 1;
  };

  $scope.counterDown = function() {
    $scope.currentLevel = $scope.currentLevel - 1;
  };

  $scope.proficiency = function() {
    if($scope.currentLevel <= 4) {
      $scope.proficiencyBonus = 2;
    } else if($scope.currentLevel <= 8) {
      $scope.proficiencyBonus = 3;
    } else if($scope.currentLevel <= 12) {
      $scope.proficiencyBonus = 4;
    } else if($scope.currentLevel <= 16) {
      $scope.proficiencyBonus = 5;
    } else if($scope.currentLevel <= 20) {
      $scope.proficiencyBonus = 6;
    }
  }
  

});

