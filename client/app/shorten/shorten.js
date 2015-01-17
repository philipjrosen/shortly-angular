angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function (link) {
        $scope.link = link.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
