'use strict';

fantasyApp.config(function($httpProvider) {
  function myInterceptor($q, $log) {
    function success(response) {
      $log.info('Successful response: ' + response);
      return response;
    },
    function error(response) {
      var status = response.status;
      $log.error('Response status: ' + status + response);
      return $q.reject(response);
    }

    return function(promise) {
      return promise.then(success, error);
    }
  }
  $httpProvider.responseInterceptors.push(myInterceptor)
}