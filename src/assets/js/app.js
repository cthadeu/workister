(function(angular) {
	'use strict';

	var deeal = angular.module('mydeealModule', ['ngRoute']);

    deeal.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl : "search_result.html" 
        })
        .when("/professional/signup", {
            templateUrl : "professional_signup.html"
        })
        .when("/clinic/signup", {
            templateUrl : "private_clinic.html"
        })
        .when("/workister/signup", {
            templateUrl : "workister_signup.html"
        });
    });

    deeal.controller('MyDeealController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.searchResult = [
            {
                nome:"Dr. Márcio Guimarães",
                especialidade: "Pediatra",
                endereco: "Av. Dom Helder Camara, 3500",
                municipio: "Rio de Janeiro",
                bairro: "Abolição",
                horariosDisponiveis: [
                    "08:00",
                    "09:00",
                    "13:00",
                    "15:00",
                    "17:00"
                ],
                horarioEscolhido: ""
            },
            {
                nome:"Dr. Márcio Guimarães",
                especialidade: "Pediatra",
                endereco: "Av. Dom Helder Camara, 3500",
                municipio: "Rio de Janeiro",
                bairro: "Abolição",
                horariosDisponiveis: [
                    "08:00",
                    "09:00",
                    "13:00",
                    "15:00",
                    "17:00"
                ],
                horarioEscolhido: ""
            },
            {
                nome:"Dr. Márcio Guimarães",
                especialidade: "Pediatra",
                endereco: "Av. Dom Helder Camara, 3500",
                municipio: "Rio de Janeiro",
                bairro: "Abolição",
                horariosDisponiveis: [
                    "08:00",
                    "09:00",
                    "13:00",
                    "15:00",
                    "17:00"
                ],
                horarioEscolhido: ""
            }
        ];

        $scope.escolherHorario = function(item, horario) {
            item.horarioEscolhido = horario;
        }

        $scope.confirmarAgendamento = function(item) {
            console.log(item);
            swal({
                    title: "Solicitar o agendamento para o horário de " + item.horarioEscolhido + "?",
                    text: "",
                    type: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#00d9d9",
                    confirmButtonText: "Solicitar",
                    closeOnConfirm: false
                },
                function(){
                    swal("Solicitação enviada!", "Sua solicitação foi enviada. Em breve, você receberá um e-mail com a confirmação do agendamento.", "success");
                    item.horarioEscolhido = "";
                }
            );
        }

  }]);

    deeal.controller('AdminController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "demandas.html";
        $scope.deals = [];
        $scope.empresas = [];

        $http.get('./assets/data/empresas.json').then(function(response) {
            $scope.empresas = response.data;
        });

        $http.get('./assets/data/deeal.json').then(function(response) {
            $scope.deals = response.data;
        });

        $http.get('./assets/data/conciliador.json').then(function(response) {
            $scope.conciliadores = response.data;
        });

        $scope.selecionarConciliador = function(name){
            $scope.conciliadorSelecionado = name;
        }

        $scope.goTo = function(item) {
            $scope.form = item;
        }
        $scope.cssStatusDemanda = function(status) {
            if (status == 'em_andamento')
                return 'label-info';
            if (status == 'em_negociacao')
                return 'label-warning'
            if (status == 'finalizada')
                return 'label-success'
        }

        $scope.descreveStatus = function(status) {
            if (status == 'em_andamento')
                return 'Em Andamento';
            if (status == 'em_negociacao')
                return 'Em Negociação'
            if (status == 'finalizada')
                return 'Finalizada'
        }

    }]);


    deeal.controller('AdminConciliadorController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "demandas_conciliador.html";
        $scope.deals = [];
        $scope.conciliadores = [];
        $scope.conciliadorSelecionado = "";
        $scope.empresas = [];

        $http.get('./assets/data/empresas.json').then(function(response) {
            $scope.empresas = response.data;
        });

        $http.get('./assets/data/deeal.json').then(function(response) {
            $scope.deals = response.data;
        });

        $http.get('./assets/data/conciliador.json').then(function(response) {
            $scope.conciliadores = response.data;
        });

        $scope.selecionarConciliador = function(name){
            $scope.conciliadorSelecionado = name;
        }

        $scope.goTo = function(item) {
            $scope.form = item;
            jQuery(".hourNegociation").mask("99:99");
            jQuery(".datepicker").mask("99/99/9999");
            jQuery(".datepicker").datepicker({
                language: 'pt-BR',
                todayHighlight: true,
                dateFormat: 'dd/mm/yyyy'
            });
        }
        $scope.cssStatusDemanda = function(status) {
            if (status == 'em_andamento')
                return 'label-info';
            if (status == 'em_negociacao')
                return 'label-warning'
            if (status == 'finalizada')
                return 'label-success'
        }

        $scope.descreveStatus = function(status) {
            if (status == 'em_andamento')
                return 'Em Andamento';
            if (status == 'em_negociacao')
                return 'Em Negociação'
            if (status == 'finalizada')
                return 'Finalizada'
        }

    }]);

    deeal.controller('AdminEmpresaController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "demandas_empresa.html";
        $scope.deals = [];

        $http.get('./assets/data/empresas.json').then(function(response) {
            $scope.empresas = response.data;
        });

        $http.get('./assets/data/deeal.json').then(function(response) {
            $scope.deals = response.data;
        });

        $http.get('./assets/data/conciliador.json').then(function(response) {
            $scope.conciliadores = response.data;
        });

        $scope.selecionarConciliador = function(name){
            $scope.conciliadorSelecionado = name;
        }

        $scope.goTo = function(item) {
            $scope.form = item;
        }
        $scope.cssStatusDemanda = function(status) {
            if (status == 'em_andamento')
                return 'label-info';
            if (status == 'em_negociacao')
                return 'label-warning'
            if (status == 'finalizada')
                return 'label-success'
        }

        $scope.descreveStatus = function(status) {
            if (status == 'em_andamento')
                return 'Em Andamento';
            if (status == 'em_negociacao')
                return 'Em Negociação'
            if (status == 'finalizada')
                return 'Finalizada'
        }

    }]);
    
})(window.angular);

