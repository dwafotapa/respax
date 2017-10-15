import angular from 'angular';
import { each, isEmpty, findKey } from 'lodash';

export default function PaxNosController($filter) {
	var vm = this;
	
	vm.handleDropdownClick = () => document.getElementById('collapsePaxNos').classList.add('in');
	vm.handleDropdownMouseLeave = () => document.getElementById('collapsePaxNos').classList.remove('in');
	vm.handleMinusButtonClick = (passengerType) => passengerType.paxNos--;
	vm.handlePlusButtonClick = (passengerType) =>	passengerType.paxNos++;
	vm.getNumberOfPassengersSummary = getNumberOfPassengersSummary;
	vm.isTotalNumberOfPassengersMaxedOut = isTotalNumberOfPassengersMaxedOut;
	vm.getAvailabilitiesForDepartureDate = getAvailabilitiesForDepartureDate;
	vm.getTotalNumberOfPassengers = getTotalNumberOfPassengers;

	function getNumberOfPassengersSummary() {
		var summary = [];
		each(vm.passengerTypes, function (passengerType) {
			if (passengerType.paxNos > 0)
				summary.push(passengerType.name + ' x ' + passengerType.paxNos);
		});

		if (isEmpty(summary))
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
		var hasAvailabilities = findKey(vm.availabilities, function (value, key) {
			return key == formattedDepartureDate;
		});

		if (hasAvailabilities)
			return vm.availabilities[formattedDepartureDate];

		return 0;
	}

	function getTotalNumberOfPassengers() {
		var totalPaxNos = 0;
		each(vm.passengerTypes, function (passengerType) {
			totalPaxNos += passengerType.paxNos;
		});
		
		return totalPaxNos;
	}
}