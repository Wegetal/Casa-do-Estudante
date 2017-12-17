myApp.controller('myCtrl', function($scope , $http, $route) {
  var login = false;
  $scope.visib_in = true;


  $scope.feed = function(){

    $http.get("/novo/Database/feed.php")
    .then(function (response) {

      $scope.posts = response.data;
      console.log($scope.posts);
  });}
  $scope.suasperguntas = function () {
    $http.get("/novo/Database/suasperguntas.php?id_user="+$scope.profile.getId())
    .then(function (response) {

      $scope.perguntas = response.data;

  })
  $scope.deletarPergunta = function(id){
    $http.post("/novo/Database/deletepergunta.php",{'id':id})
        .then(function(response){
          $scope.stat=true;
          alert("Sua Pergunta foi excluida com sucesso");
        window.location = "http://localhost/novo/Index.html";
        })

  }
  }
  $scope.insert = function(){
    $http.post("/novo/Database/insert.php",{'id':$scope.profile.getId(), 'titulo':$scope.titulo, 'conteudo':$scope.conteudo, 'categoria': $scope.categoria})
        .then(function(response){
          $scope.stat=true;


        })

  }
  $scope.logar = function (status,profile){
    login = status;
    $scope.profile = profile;

    $scope.userpic=profile.getImageUrl();
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



      });

}

  $scope.replyload = function(id,num,tam){
    $scope.respostas= [tam];

    $http.get("/novo/Database/respostas.php?id_post="+id)
    .then(function (response) {

      $scope.respostas[num] = response.data;
      console.log("ta nulo" + $scope.respostas[num] );

  })




  }
  $scope.replysubmit = function(answercontent,id_post){
    $http.post("/novo/Database/insertresp.php",{'id_user':$scope.profile.getId(), 'resp':answercontent, 'id_post':id_post})
        .then(function(response){
            $replyload();
        });



  }
});
function onSignIn(googleUser) {
var profile = googleUser.getBasicProfile();
console.log('ID: é o ids ' + profile.getId());
console.log('Name: ' + profile.getName());
console.log('adadasdadad'+profile.getEmail());

if(profile != null){
  angular.element(document.getElementById('hero')).scope().logar(true,profile);
}
}
