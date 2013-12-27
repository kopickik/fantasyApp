'use strict';

angular.module('fantasyApp.services.firebaseRefs', [])
  .factory('FireRef', ['FBURL', 'Firebase',
    function(FBURL, Firebase) {
      return {
        leagues: function() {
          return new Firebase(FBURL+'/leagues');
        }
        ,
        users: function() {
          return new Firebase(FBURL+'/users');
        }
        ,
        players: function() {
          return new Firebase(FBURL+'/players');
        }
      };
    }]);