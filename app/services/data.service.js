import angular from 'angular';

// angular
// 	.module('app.core')
// 	.service('DataService', DataService);

export default function DataService($http, config) {
	var vm = this;

	vm.getJsonAssets = (component) => $http.get(config[component]);
}