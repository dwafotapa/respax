import { each } from 'lodash';
import DataService from '../services/data.service';

export default function BookingController(DataService) {
	this.today = new Date();
	this.departureDate = new Date();
	DataService.getJsonAssets('PAXTYPES_AND_AVAILS').then((res) => {
		this.availabilities = res.data.availabilities;
		this.passengerTypes = res.data.passenger_types;
		each(this.passengerTypes, (passengerType) => passengerType.paxNos = 0);
	});

	this.handleDepartureDateChange = () => {
		// Updates departure date
		this.departureDate = new Date(this.date);
		// Resets the number of passengers selected
		each(this.passengerTypes, (passengerType) => passengerType.paxNos = 0);
	}
}