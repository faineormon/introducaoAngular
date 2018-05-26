angular.module("meuModulo")
.controller("indexController", function($scope) {
			$scope.titulo = "Sistema com Angular JS";
			$scope.alunos = [
				{nome:"Camila", email:"camila@mail.com.br", nota1:65, nota2:80, nota3:55},
				{nome:"Pedro", email:"pedro@mail.com.br", nota1:75, nota2:80, nota3:55},
				{nome:"Murilo", email:"murilo@mail.com.br", nota1:65, nota2:60, nota3:55},
				{nome:"João", email:"joao@mail.com.br", nota1:95, nota2:80, nota3:55},
				{nome:"Ana", email:"ana@mail.com.br", nota1:65, nota2:30, nota3:55}
			];

	var init = function() {
		$scope.alunos.forEach(function(aluno) {
			aluno.media = mediaFun(aluno);
		});
		limpaForm();
	};

		var mediaFun = function(Aluno) {
		var media = (parseFloat(Aluno.nota1)+parseFloat(Aluno.nota2)+parseFloat(Aluno.nota3))/3;
		return media.toFixed(2);	
		};

	/*$scope.media =function(Aluno) {
		var media = (Aluno.nota1+Aluno.nota2+Aluno.nota3)/3;
		return media.toFixed(2);	
	};*/
	$scope.abreAddAluno = function() {
		$scope.editando = false;
		limpaForm();
		$('#modal1').modal('open');
	};


	$scope.addAluno = function(Aluno) {
		Aluno.media = mediaFun(Aluno);
		$scope.alunos.push(Aluno);
		$('#modal1').modal('close');
		limpaForm();
	};

	$scope.editando = false;
	var alunoEditar;

	$scope.editarAluno = function(Aluno) {
		$scope.editando = true;
		angular.copy(Aluno, $scope.Aluno);
		$('#modal1').modal('open');
		alunoEditar = Aluno;
		
	};

	$scope.salvarAluno = function (Aluno) {
		alunoEditar.nome = Aluno.nome;
		alunoEditar.email = Aluno.email;
		alunoEditar.nota1 = Aluno.nota1;
		alunoEditar.nota2 = Aluno.nota2;
		alunoEditar.nota3 = Aluno.nota3;
		alunoEditar.media = mediaFun(Aluno);
		$('#modal1').modal('close');
	};

	$scope.deletarAluno = function(Aluno) {
		for(var i in $scope.alunos) {
			var aux = $scope.alunos[i];
			if(Aluno === aux) {
				$scope.alunos.splice(i,1);
			}
		}
	};

	var limpaForm = function() {
		$scope.Aluno = {nome:"", email:"", nota1:'', nota2:'', nota3:'', media:''};
	};

	init();
})