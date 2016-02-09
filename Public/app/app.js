angular.module('char_sheet', ['char_sheet.level', 'char_sheet.races', 'ui.router', 'ngDropdowns'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('character', {
      views: {
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




    //   'level', {
    //   url: '/',
    //   templateUrl: "./level/level.html",
    //   controller: 'levelCounter'
    // })
    // .state('races', {
    //   url: '/',
    //   templateUrl: "./races/races.html",
    //   controller: 'raceSelect'
    // });
    


}]);

