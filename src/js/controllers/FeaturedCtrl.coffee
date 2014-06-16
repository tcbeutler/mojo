do ->
  module = angular.module 'mojo.controllers' 

  module.controller 'FeaturedCtrl', ($scope) ->
    $scope.test = "Featured stuff here"