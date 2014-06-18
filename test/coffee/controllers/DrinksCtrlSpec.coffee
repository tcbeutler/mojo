do ->
  describe 'controllers', ->
    controller = null
    scope = null

    beforeEach ->
      module 'mojo'
      inject ($rootScope, $controller) ->
        scope = $rootScope.$new()
        controller = $controller('DrinksCtrl', { $scope: scope })

    it "should declare test", ->
      expect scope.test == 'Drinks stuff here'