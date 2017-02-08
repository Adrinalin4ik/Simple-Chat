var app = angular.module('application',['ngRoute','ngResource','ui.materialize'])

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: '/view/auth/login.html',
		controller: 'auth'
	})
	.otherwise({
		redirectTo: '/login'
	})
})

