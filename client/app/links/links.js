angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};

  $scope.getLinks = function () {
    Links.getLinks()
      .then(function (data) {
        console.log('links', data.links);
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
