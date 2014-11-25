beautiful.config(function($routeProvider){
  $routeProvider.
      when('/', { templateUrl: 'partials/driversInfo.html',
                  controller: 'DriverController'
            }).
      when('/page2',{templateUrl: 'partials/page2.html'})
});

beautiful.controller("DriverController",["$scope","$rootScope","$log","$location",

	function($scope,$rootScope,$log,$location){		

			$scope.clickHere = function(){
			$location.path("/page2");			
		}

	}]);
