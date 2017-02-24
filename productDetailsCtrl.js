angular.module("assessment").controller("productDetailsCtrl", function($scope, shopService, $stateParams) {
	
	
$scope.items = shopService.getProducts().then(function(response) {
	$scope.items = response.data
	$scope.targetItem;
	for(var i = 0; i < $scope.items.length; i++) {
		if ($scope.items[i].id === $stateParams.id) {
			
			$scope.targetItem = $scope.items[i]
		} 
	}
	
	return $scope.targetItem;
})


})