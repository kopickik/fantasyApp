/**
* $http interceptor.
* On 401 response – it stores the request and broadcasts ‚event:loginRequired’.
*/
myapp.config(function($httpProvider) {
  var interceptor = ['$rootScope','$q', function(scope, $q) {
    function success(response) {
      return response;
    }
    function error(response) {
      var status = response.status;
      if (status == 401) {
        var deferred = $q.defer();
        var req = {
          config: response.config,
          deferred: deferred
        };
        scope.requests401.push(req);
        scope.$broadcast('event:loginRequired');
        return deferred.promise;
      }
      // otherwise
      return $q.reject(response);
    }
    return function(promise) {
      return promise.then(success, error);
    };
  }];
  $httpProvider.responseInterceptors.push(interceptor);
});