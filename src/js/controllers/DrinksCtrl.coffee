module = angular.module 'mojo.controllers'

module.controller "DrinksCtrl", [
  "$scope"
  (scope) ->
    scope.test = "Drinks stuff here"
]