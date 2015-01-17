angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(link) {
   $http.post('/api/links', link).
     success(function(data, status, headers, config) {
       console.log(data);
     }).
     error(function(data, status, headers, config) {
       console.error(data);
     });
  };
});
