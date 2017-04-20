(function() {
	'use strict';

	angular
		.module('app.core')
		.component('paxnos', {
			bindings: {
				passengerTypes: '<',
				availabilities: '<',
				departureDate: '<',
				displayAlert: '<'
			},
			controller: PaxNosController,
			controllerAs: 'vm',
			templateUrl: 'app/components/paxnos/paxnos.view.html'
		});

	function PaxNosController($filter) {
		var vm = this;
		
		vm.handleDropdownClick = () => $$('#collapsePaxNos').toggleClass('in');
		vm.handleMinusButtonClick = (passengerType) => passengerType.paxNos--;
		vm.handlePlusButtonClick = (passengerType) =>	passengerType.paxNos++;
		vm.getNumberOfPassengersSummary = getNumberOfPassengersSummary;
		vm.isTotalNumberOfPassengersMaxedOut = isTotalNumberOfPassengersMaxedOut;
		vm.getAvailabilitiesForDepartureDate = getAvailabilitiesForDepartureDate;
		vm.getTotalNumberOfPassengers = getTotalNumberOfPassengers;

	  function getNumberOfPassengersSummary() {
	  	var summary = [];
			_.each(vm.passengerTypes, function (passengerType) {
				if (passengerType.paxNos > 0)
		  		summary.push(passengerType.name + ' x ' + passengerType.paxNos);
		  });

			if (_.isEmpty(summary))
		  	return 'Please select...';
		  
		  return summary.join(', ');
	  }

	  function isTotalNumberOfPassengersMaxedOut() {
			var availabilities = vm.getAvailabilitiesForDepartureDate();

			if (availabilities > 0) {
				var totalPaxNos = vm.getTotalNumberOfPassengers();
			  return totalPaxNos >= availabilities;
			}
			
			return true;
		}

		function getAvailabilitiesForDepartureDate() {
			var formattedDepartureDate = $filter('date')(vm.departureDate, 'yyyy-MM-dd');
			var hasAvailabilities = _.findKey(vm.availabilities, function (value, key) {
				return key == formattedDepartureDate;
			});

			if (hasAvailabilities)
				return vm.availabilities[formattedDepartureDate];

			return 0;
	  }

	  function getTotalNumberOfPassengers() {
	  	var totalPaxNos = 0;
			_.each(vm.passengerTypes, function (passengerType) {
				totalPaxNos += passengerType.paxNos;
			});
			
			return totalPaxNos;
		}
	}
})();