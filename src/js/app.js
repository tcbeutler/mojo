angular.module('mojo.controllers', []);
angular.module('mojo.directives', []);

angular.module('mojo', ['ionic', 'mojo.controllers', 'mojo.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('slidebox', {
      url: "/slidebox",
      templateUrl: "views/slidebox.html",
      controller: 'SlideBoxCtrl'
    })

    ;

  $urlRouterProvider.otherwise('/slidebox');
});