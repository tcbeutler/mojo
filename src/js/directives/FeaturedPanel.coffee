angular.module 'mojo.directives'

.directive 'featuredPanel', ->
  restrict: "E"
  scope:
    featuredPanel: '=featured'
  templateUrl: 'views/featured.html'
