angular.module("assessment", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: "/",
		templateUrl: "/views/home.html"
	}).state('about', {
		url: "/about", 
		templateUrl: "/views/about.html"
	}).state('blog', {
		url:"/blog",
		templateUrl: "/views/blog.html"
	}).state('shop', {
		url: '/shop',
		templateUrl: "/views/shop.html"
		//controller: "shopCtrl"
	}).state('details', {
		url: '/products/:id',
		templateUrl: "/views/product-details.html",
		controller: "productDetailsCtrl"
	})

	$urlRouterProvider.otherwise('/')
}).directive("logo", function() {
	return {
		restrict: "E",
		templateUrl: "/views/logo.html"
	}
})
.directive("productTemplate", function() {
	return {
		restrict: "AE",
		templateUrl: "/directive/product-tmpl.html",
		link: function(scope, element, attribute) {
			scope.imageHide = false
			scope.textHide = true
			function swapImage() {
				scope.imageHide = !scope.imageHide
				scope.textHide = !scope.textHide
				console.log("imageHide:" + scope.imageHide)
				console.log("textHide: " + scope.textHide)
			}

			element.on("click", function() {
				swapImage()
			})
		},
		controller: function ($scope, shopService) {
			$scope.items = shopService.getProducts().then(function(response) {
			$scope.items = response.data
			console.log($scope.items[1].id)
			return $scope.items
			})
		}
	}
})


