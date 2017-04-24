var app = angular.module('motiveReports', ['ui.router', 'ngRoute' ]);

/*app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  // This is required for Browser Sync to work poperly
  //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  // 
  // For any unmatched url, redirect to /state1 
  $urlRouterProvider.otherwise("/signin");
  // 
  // Now set up the states 
  $stateProvider
    .state('signin', {
      url: "/signin",
      templateUrl: "signin.html",
	  controller: 'loginCtrl'
    })
    .state('home', {
      url: "/home",
      templateUrl: "home.html"
    });
});*/


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
