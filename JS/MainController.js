myApp.controller('myCtrl', function($scope , $http) {
  var login = false;
  $scope.visib_in = true;
  $scope.logar = function (status){
    login = status;

  if (login == false){
    $scope.footer = false;
    $scope.visib_out = false;
    $scope.visib_in = true;
    $scope.$apply();
  }else{
    $scope.footer = true;
    $scope.visib_out = true;
    $scope.visib_in = false;
    $scope.$apply();
  }
} 
  console.log($scope.myVar);
});
function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
console.log('ID: é o ids ' + profile.getId());
console.log('Name: ' + profile.getName());
alert('Image URL: ' + profile.getImageUrl());
if(profile != null){
  angular.element(document.getElementById('hero')).scope().logar();
}
}
