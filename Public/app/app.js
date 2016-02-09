angular.module('char_sheet', ['char_sheet_races', 'ui.router'])

// .config(function($routeProvider) {
//   $routeProvider
//   .when('/', {
//     templateURL: '../Public/char_sheet.html',
//     controller: 'mainController'
//   });
// })
.controller('mainController', function($scope) {
  $scope.raceSelect();
})
.run