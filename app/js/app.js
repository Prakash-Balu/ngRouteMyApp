var app = angular.module('myApp', ['ngRoute' ]);

app.config(function($routeProvider) {
  $routeProvider.
    when('/signin', {
        templateUrl: 'app/template/signin.html',
		controller: 'loginCtrl'
    }).
    when('/home', {
        templateUrl: 'app/template/home.html'
    }).
    otherwise({
        redirectTo: '/signin'
    });
});


app.controller('loginCtrl', ['$scope', '$location', function($scope, $location){
	$scope.loginUser = function() {
		$location.path('/home');
	};
}]);
