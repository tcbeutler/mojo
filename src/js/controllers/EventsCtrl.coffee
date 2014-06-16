do ->
  module = angular.module 'mojo.controllers' 

  module.controller 'EventsCtrl', ($scope) ->
    $scope.test = "Events stuff here"