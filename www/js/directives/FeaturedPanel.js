angular.module('mojo.directives')

.directive('featuredPanel', function() {
  return {
    restrict: 'E',
    scope: {
      featuredPanel: '=featured'
    },
    templateUrl: 'views/featured.html'
  }
});