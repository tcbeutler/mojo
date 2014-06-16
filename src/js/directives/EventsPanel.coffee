do ->
  module = angular.module 'mojo.directives' 

  module.directive 'eventsPanel', ->
    restrict: 'E'
    scope:
      featuredPanel: '=events'
    templateUrl: 'views/events.html'
