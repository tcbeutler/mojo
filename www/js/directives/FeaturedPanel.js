angular.module('mojo.directives')

.directive('featuredPanel', function() {
  return {
    restrict: 'E',
    scope: {
      featuredPanel: '=featued'
    },
    templateUrl: 'views/featured.html'
  }
});