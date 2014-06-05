'use strict';

// Declare app level module which depends on filters, and services
angular.module('fantasyApp.config', [])

app.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
      .when('/',        { templateUrl: 'views/leagues/list.html' })
      .when('/signin',  { templateUrl: 'views/users/signin.html' })
      .when('/signup',  { templateUrl: 'views/users/signup.html' })
      .when('/nflteams',{ templateUrl: 'views/nfl/list.html', authRequired: true})
      .when('/nflteams/:nflTeamId', { templateUrl: 'views/nfl/view.html', authRequired: true})
      .when('/standings', { templateUrl: 'views/nfl/standings.html', authRequired: true})
      .when('/leagues', { templateUrl: 'views/leagues/list.html', authRequired: true})
      .when('/leagues/create', { templateUrl: 'views/leagues/edit.html', authRequired: true})
      .when('/leagues/:leagueId', { templateUrl: 'views/leagues/view.html', authRequired: true})
      .when('/leagues/:leagueId/edit', { templateUrl: 'views/leagues/edit.html', authRequired: true})
      .when('/players', { templateUrl: 'views/players/list.html', authRequired: true})
      .when('/players/:playerId', { templateUrl: 'views/players/view.html', authRequired: true})
      .otherwise(       { redirectTo: '/' });
    }])
  
  // establish authentication
  .run(['angularFireAuth', 'FBURL', '$rootScope', 
    function(angularFireAuth, FBURL, $rootScope) {
      angularFireAuth.initialize(new Firebase(FBURL), {scope: $rootScope, name: 'auth', path: '/signin'});
      $rootScope.FBURL = FBURL;
    }])

  // your Firebase URL goes here
  // should look something like: https://blahblahblah.firebaseio.com
  .constant('FBURL', 'https://spoonfedweb.firebaseio.com');


