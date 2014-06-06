angular.module('mojo.directives')

.directive('eventsPanel', function() {
  return {
    restrict: 'E',
    scope: {
      featuredPanel: '=events'
    },
    templateUrl: 'views/events.html'
  }
});