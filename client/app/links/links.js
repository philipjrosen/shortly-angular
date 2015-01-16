angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function(links) {
    $scope.data.links = links;
  };

  $http.get('/api/links').
    success(function(links, status, headers, config) {
      $scope.getLinks(links);
    }).
    error(function(data, status, headers, config) {
      console.log(error);
    });
});
