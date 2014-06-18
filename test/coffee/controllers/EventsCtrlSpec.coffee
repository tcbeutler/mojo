do ->
  describe 'controllers', ->
    controller = null
    scope = null

    beforeEach ->
      module 'mojo'
      inject ($rootScope, $controller) ->
        scope = $rootScope.$new()
        controller = $controller('EventsCtrl', { $scope: scope })

    it "should declare test", ->
      expect(scope.test).toEqual 'Events stuff here'