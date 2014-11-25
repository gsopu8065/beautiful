beautiful.controller("DriversController",["$scope","$rootScope","$log","$location","DriversService",
	function($scope,$rootScope,$log,$location,DriversService){
		

		DriversService.getDrivers().success(function(data){
      	 $scope.driversList = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		});

						

		$scope.updateDisplay = function(i){
			$scope.displayObject = $scope.driversList[i].Driver;
			
			DriversService.getFlag($scope.displayObject.nationality+" Flag").success(function(data){

				$scope.nationalFlagURL = data.responseData.results[0].url;
				console.log($scope.nationalFlagURL);
			});
		}

		$scope.goToDetails = function(i){
			$location.path("drivers/"+i);			
		}




	}]).
	controller("DriverController",["$scope","$rootScope","$log","$routeParams","DriversService",

	function($scope,$rootScope,$log,$routeParams,DriversService){		

			$scope.id = $routeParams.id;
			$scope.displayObject = $scope.driversList[i].Driver;

	}]);
