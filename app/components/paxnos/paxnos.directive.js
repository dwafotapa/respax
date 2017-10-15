import angular from 'angular';

export default function ngPosInt() {
	return {
		restrict: 'A',
		require: '?ngModel',
		link: function (scope, element, attrs, controller) {
			controller.$parsers.push(parse);

			function parse(value) {
				// Replaces all characters but digits with empty space
				var attemptedValue = value.replace(/[^0-9]/g, '');

				// Removes any leading zeros
				var attemptedInt = parseInt(attemptedValue, 10);

				// Handles empty inputs
				if (_.isNaN(attemptedInt)) {
					controller.$setViewValue(scope.passengerType.paxNos.toString());
					controller.$render();

					return scope.passengerType.paxNos;
				}

				// Checks if availabilities are maxed out
				var attemptedTotalNumberOfPassengers = scope.$parent.vm.getTotalNumberOfPassengers() - scope.passengerType.paxNos + attemptedInt;
				if (attemptedTotalNumberOfPassengers <= scope.$parent.vm.getAvailabilitiesForDepartureDate())
					controller.$setViewValue(attemptedInt.toString());
				else
					controller.$setViewValue(scope.passengerType.paxNos.toString());

				controller.$render();

				return parseInt(controller.$viewValue, 10);
			}
		}
	};
}