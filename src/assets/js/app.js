(function(angular) {
	'use strict';

	var invoices = angular.module('mydeealModule', []);

	invoices.controller('MyDeealController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

    $scope.form = "";
    $scope.data = {}

	/*	$http.get('./assets/data/deeal.json').then(function(response) {
			$scope.data = response.data;
		()});*/

    $scope.changeForm = function(form) {
      $scope.form = form;
      $('html, body').animate({
                   scrollTop: $("#activeForm").offset().top
                }, 1000);
    }

  }]);
})(window.angular);
