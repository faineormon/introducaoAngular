angular.module("meuModulo", ['ngRoute'])

.config(function($routeProfider){
	$routeProfider
	.when("/home",{
		templateUrl:"templates/home.html",
		controller:"indexController"
	})
	.when("/contato",{
		templateUrl:"templates/contato.html",
		controller:"contatoController"
	});

	$routeProfider.otherwise({redirectTo:"/home"});	
});