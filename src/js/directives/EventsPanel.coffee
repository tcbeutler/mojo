angular.module 'mojo.directives' 

.directive 'eventsPanel', ->
  restrict: 'E'
  scope:
    featuredPanel: '=events'
  templateUrl: 'views/events.html'
