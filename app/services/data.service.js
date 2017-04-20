(function() {
	'use strict';
	
	angular
		.module('app.core')
		.service('DataService', DataService);

	function DataService($http, config) {
		var vm = this;

		vm.getJsonAssets = (component) => $http.get(config[component]);
	}
})();