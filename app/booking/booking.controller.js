import angular from 'angular';
import { each } from 'lodash';
import DataService from '../services/data.service';

export default function BookingController(DataService) {
	var vm = this;

	vm.today = new Date();
	vm.departureDate = new Date();
	vm.handleDepartureDateChange = handleDepartureDateChange;

	DataService.getJsonAssets('PAXTYPES_AND_AVAILS').then(function (res) {
		vm.availabilities = res.data.availabilities;
		vm.passengerTypes = res.data.passenger_types;
		each(vm.passengerTypes, (passengerType) => passengerType.paxNos = 0);
	});
	
	function handleDepartureDateChange() {
		// Updates departure date
		vm.departureDate = new Date(vm.date);
		// Resets the number of passengers selected
		each(vm.passengerTypes, (passengerType) => passengerType.paxNos = 0);
	}
}