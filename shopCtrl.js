angular.module("assessment").controller("shopCtrl", function($scope, shopService) {
	
$scope.items = shopService.getProducts().then(function(response) {
	$scope.items = response.data
	console.log($scope.items[1].id)
	return $scope.items
})


})


