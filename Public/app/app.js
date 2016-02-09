angular.module('char_sheet', ['char_sheet.races', 'char_sheet.level', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      tempateUrl: '../index.html'
    })
    .state('level', {
      url: "/level",
      templateUrl: "../level/level.html",
      controller: 'levelCounter'
    });
})

