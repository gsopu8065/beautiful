beautiful.factory("DriversService",["$http","$rootScope",
	function($http,$rootScope){

	var DriversService = {};

    DriversService.getDrivers = function() {
      return $http({
        method: 'JSONP', 
        url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK',
      })      
    };

    DriversService.getFlag = function(nationality) {
      return $http({
        method: 'JSONP', 
        url: 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q='+nationality+'&callback=JSON_CALLBACK&imgsz=small',
      })      
    };

    return DriversService;
}]);