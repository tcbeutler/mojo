angular.module('mojo.directives')

.directive('drinksPanel', function() {
  return {
    restrict: 'E',
    scope: {
      featuredPanel: '=drinks'
    },
    templateUrl: 'views/drinks.html'
  }
});