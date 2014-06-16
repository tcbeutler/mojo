do ->
  module = angular.module 'mojo.directives' 

  .directive 'drinksPanel', -> 
    restrict: 'E',
    scope: 
      featuredPanel: '=drinks'
    templateUrl: 'views/drinks.html'