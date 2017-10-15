import angular from 'angular';
import datepicker from 'angularjs-datepicker/index';
import BookingController from './booking/booking.controller';
import PaxNosController from './components/paxnos/paxnos.component';
import DataService from './services/data.service';
import ngPosInt from './components/paxnos/paxnos.directive';
import template from './components/paxnos/paxnos.view.html';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'angularjs-datepicker/src/css/angular-datepicker.css';
import './app.css';
import './components/paxnos/paxnos.css';

angular
	.module('app.core', [datepicker])
	.controller('BookingController', BookingController)
	.service('DataService', DataService)
	.component('paxnos', {
		bindings: {
			passengerTypes: '<',
			availabilities: '<',
			departureDate: '<',
			displayAlert: '<'
		},
		controller: PaxNosController,
		controllerAs: 'vm',
		template
	})
	.constant('config', {
		PAXTYPES_AND_AVAILS: window.location.href + 'data.json'
	})
	.directive('ngPosInt', ngPosInt);