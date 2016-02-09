angular.module('char_sheet.races', [])

.controller('raceSelect', function($scope, races) {
  
 
});


var races = {
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
}