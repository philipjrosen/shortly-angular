angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.data.links = [];

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function (data) {
        $scope.data.links = data.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.init = function() {
    $scope.getLinks();
  }

  $scope.init();
});
