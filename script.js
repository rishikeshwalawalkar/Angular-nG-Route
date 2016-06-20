// Code goes here

var orderApp = angular.module('orderApp', ['ngRoute'])

orderApp.config(['$routeProvider', 
function($routeProvider) {
  $routeProvider.
  when('/ShowOrder/:zipCode', {
    templateUrl : 'order_details.html',
    controller : 'orderCntrl'
  });
}]);

orderApp.controller('orderCntrl', function($scope, $routeParams, $http) {
  //$scope.order_id = $routeParams.zipCode;
	$scope.zip = $routeParams.zipCode;
  $http.get("users.json").success
		  (function(data) {
		    for(var index in data){
		      if(data[index.zip] == $scope.zip){
		        console.log(data.city);
	        $scope.info = data[index].desc + ":" + data.city; 
	          break;
		      }
		      else
		      {
		        $scope.info = "Invalid ID";
		      }
		      
		    }
  });
  
})