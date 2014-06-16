do ->
  module = angular.module 'mojo.directives'

  module.directive 'featuredPanel', ->
    restrict: "E"
    scope:
      featuredPanel: '=featured'
    templateUrl: 'views/featured.html'
