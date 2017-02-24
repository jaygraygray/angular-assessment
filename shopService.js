angular.module("assessment").service("shopService", function($http) {

this.getProducts = function() {
	return $http.get("https://practiceapi.devmounta.in/products").then(function(response) {
		return response
	})
}

});