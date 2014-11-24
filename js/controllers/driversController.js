beautiful.controller("DriversController",["$scope","$rootScope","$log","DriversService",
	function($scope,$rootScope,$log,DriversService){
		

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

	}]);
