angular.module('mojo.controllers', []);

angular.module('mojo', ['ionic', 'mojo.controllers'])

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
      abstract: true,
      controller: 'SlideBoxCtrl'
    })

    .state('slidebox.featured', {
      url: "/featured",
      templateUrl: 'views/featured.html',
      controller: 'FeaturedCtrl'
    })

    .state('slidebox.drinks', {
      url: "/drinks",
      templateUrl: 'views/drinks.html',
      controller: 'DrinksCtrl'
    })

    ;

  $urlRouterProvider.otherwise('/slidebox/featured');
});