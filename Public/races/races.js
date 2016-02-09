angular.module('char_sheet.races', [])

.controller('raceSelect', function($scope, $state) {
  
  $scope.races = {
  gnome: {
    forest: {
      type: "forest",
      intelligence: 2,
      dexterity: 1
    },
    rock: {
      type: "rock",
      intelligence: 2,
      constitution: 1
    }
  },
  human: {
    standard: {
      type: "human",
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1
      }
    }
  };

  $scope.ddSelectOptions = [
    {
      text: 'Option 1',
      value: 'a value'
    }, 
    {
      text: 'Option 2',
      value: 'another value',
      someprop: 'somevalue'
    }
  ];

  $scope.ddSelectSelected = {};

});


