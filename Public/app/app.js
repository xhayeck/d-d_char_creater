angular.module('char_sheet', ['char_sheet.level', 'char_sheet.races', 'ui.router', 'ngDropdowns'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('/home', {
      url: '/home',
      views: {
        '': '../index.html',
        'level': {
          templateUrl: "./level/level.html",
          controller: 'levelCounter'
        },
        'races': {
          templateUrl: "./races/races.html",
          controller: 'raceSelect'
        }
      }
    });
}]);

