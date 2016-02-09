angular.module('char_sheet', ['char_sheet.level', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    // .state('home', {
    //   url: '/',
    //   tempateUrl: '../index.html'
    // })

    .state('level', {
      url: '/',
      templateUrl: "./level/level.html",
      controller: 'levelCounter'
    });


}]);

