export default function DataService($http, config) {
	this.getJsonAssets = (component) => $http.get(config[component]);
}