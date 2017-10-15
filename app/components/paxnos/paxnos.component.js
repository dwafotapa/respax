import angular from 'angular';
import { each, map, isEmpty, findKey } from 'lodash';

export default function PaxNosController($filter) {
	this.handleDropdownClick = () => document.getElementById('collapsePaxNos').classList.add('in');
	this.handleDropdownMouseLeave = () => document.getElementById('collapsePaxNos').classList.remove('in');
	this.handleMinusButtonClick = (passengerType) => passengerType.paxNos--;
	this.handlePlusButtonClick = (passengerType) =>	passengerType.paxNos++;

	this.getNumberOfPassengersSummary = () => {
		let summary = [];
		map(this.passengerTypes, function (passengerType) {
			if (passengerType.paxNos > 0)
				summary.push(passengerType.name + ' x ' + passengerType.paxNos);
		});

		if (isEmpty(summary))
			return 'Please select...';
		
		return summary.join(', ');
	}

	this.isTotalNumberOfPassengersMaxedOut = () => {
		const availabilities = this.getAvailabilitiesForDepartureDate();
		
		if (availabilities > 0) {
			const totalPaxNos = this.getTotalNumberOfPassengers();
			return totalPaxNos >= availabilities;
		}
		
		return true;
	}

	this.getAvailabilitiesForDepartureDate = () => {
		const formattedDepartureDate = $filter('date')(this.departureDate, 'yyyy-MM-dd');
		const hasAvailabilities = findKey(this.availabilities, function (value, key) {
			return key == formattedDepartureDate;
		});

		if (hasAvailabilities)
			return this.availabilities[formattedDepartureDate];

		return 0;
	}

	this.getTotalNumberOfPassengers = () => {
		let totalPaxNos = 0;
		each(this.passengerTypes, function (passengerType) {
			totalPaxNos += passengerType.paxNos;
		});
		
		return totalPaxNos;
	}
}