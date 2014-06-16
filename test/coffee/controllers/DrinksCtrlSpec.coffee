do ->
  describe 'controllers', ->
    beforeEach ->
      angular.module 'mojo'

    it "should assert", ->
      expect(1).toEqual(1);