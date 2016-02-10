angular.module('char_sheet.races', [])

.controller('raceSelect', function($scope) {
  
  $scope.races = {
  gnome: {
    forest: {
      type: "forest, gnome",
      intelligence: 2,
      dexterity: 1
    },
    rock: {
      type: "rock, gnome",
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
      text: $scope.races.gnome.forest.type,
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


