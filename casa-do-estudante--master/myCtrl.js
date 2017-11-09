
myApp.controller('myCtrl', function($scope , $http) {
	$scope.myFunc = function(){
    $http.get("oii.php").then(function (response) {$scope.names = response.data.records;});
	}});