myApp.controller('ask', function($scope , $http,$route) {
  $scope.profile;
  $scope.titulo = "";
  $scope.conteudo="sss";
  $scope.categoria="";
$scope.insert = function(){
  $http.post("/novo/Database/insert.php",{'id':$scope.profile.getId(), 'titulo':$scope.titulo, 'conteudo':$scope.conteudo, 'categoria': $scope.categoria})
      .then(function(response){
        $scope.stat=true;


      })

}

$scope.$watch(function () { return sercie.getProfile(); }, function (newValue, oldValue) {
      if (newValue != null) {

          $scope.profile= newValue;
      }
  }, true);
});
