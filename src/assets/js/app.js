(function(angular) {
	'use strict';

	var deeal = angular.module('mydeealModule', ['angucomplete']);

    deeal.controller('MyDeealController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "";
        $scope.data = [];

  }]);

    deeal.controller('AdminController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

        $scope.form = "demandas.html";
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
