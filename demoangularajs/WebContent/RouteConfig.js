/**
 * 
 */
var myApp=angular.module("myApp",['ngRoute']);
myApp.config(function($routeProvider)
{
alert("This is Route Provider");
	$routeProvider.when("/login",{templateUrl:"MyFolder/Login.html"})
	    .when("/register",{templateUrl:"MyFolder/Register.html"});
});
