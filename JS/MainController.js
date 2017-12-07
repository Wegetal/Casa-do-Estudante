myApp.controller('myCtrl', function($scope , $http) {
  var login = false;
  $scope.visib_in = true;
  $scope.profile;
  $scope.insert = function(){
    $http.post("/database/insert.php",{'id':profile.getId(), 'titulo':$scope.titulo, 'conteudo':$scope.conteudo, 'categoria': $scope.categoria})
    		.success(function(){
    			$scope.stat=true;
    			$scope.$aplly();

    		})

  }
  $scope.logar = function (status,profile){
    login = status;
    $scope.profile = profile;
    $scope.userpic={'background-image':'url('+profile.getImageUrl()+')',
                    'background-size':'cover',
                    'height':'50px;',
                    'width':'50px;',
                    'border-radius':'50%'};
    $scope.nome = profile.getName();
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

  $http.post("/novo/Database/insertuser.php",{'id':profile.getId(), 'name':profile.getName(), 'email':profile.getEmail(), 'foto': profile.getImageUrl()})
      .then(function(response){
        $scope.stat=true;
      

      });

}

  $scope.fastreply = function(){
    $scope.fastresp = true;
    $scope.$apply();

  }
  $scope.fastreplysubmit = function(){
    $scope.fastresp = false;
    $scope.$apply();
  }
});
function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
console.log('ID: é o ids ' + profile.getId());
console.log('Name: ' + profile.getName());
console.log('adadasdadad'+profile.getEmail());
alert('Image URL: ' + profile.getImageUrl());
if(profile != null){
  angular.element(document.getElementById('hero')).scope().logar(true,profile);
}
}
