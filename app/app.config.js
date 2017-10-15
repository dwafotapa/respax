import angular from 'angular';

angular
	.module('app.core')
	.constant('config', {
		PAXTYPES_AND_AVAILS: 'app/assets/json/data.json'
	});