myApp.controller('myCtrl', function($scope , $http, $route) {
  var login = false;
  $scope.visib_in = true;
  $scope.ranking1 = function(){
    $route.reload();
    $http.get("/novo/Database/ranking.php")
    .then(function (response) {

      $scope.ranks = response.data;

  })

  }
  $scope.restart = function(){
    $route.reload();
  }

  $scope.feed = function(){
$route.reload();
$scope.posts = null;
    $http.get("/novo/Database/feed.php")
    .then(function (response) {

      $scope.posts = response.data;
      console.log($scope.posts);
  });}
  $scope.suasperguntas = function () {
    $route.reload();
    $http.get("/novo/Database/suasperguntas.php?id_user="+$scope.profile.getId())
    .then(function (response) {

      $scope.perguntas = response.data;

  })}
  $scope.updatearea= function(titulo,conteudo){
    $scope.updatetitle = titulo;
    $scope.updatecontent = conteudo;

  }
  $scope.updatesubmit = function(titulo,conteudo,id){
    $http.post("/novo/Database/updatepergunta.php",{'id':id , 'titulo': titulo , 'conteudo' : conteudo})
        .then(function(response){
          $scope.suasperguntas();


        })
  }
  $scope.favoritar = function(id){
    $http.post("/novo/Database/favoritar.php",{'id':id})
        .then(function(response){



        })
  }
  $scope.deletarPergunta = function(id, index){

      $scope.perguntas.splice(index,1);

    $http.post("/novo/Database/deletepergunta.php",{'id':id})
        .then(function(response){



        })

  }

  $scope.insert = function(){
    $http.post("/novo/Database/insert.php",{'id':$scope.profile.getId(), 'titulo':$scope.titulo, 'conteudo':$scope.conteudo, 'categoria': $scope.categoria})
        .then(function(response){

          $scope.stat=true;


        })
        setTimeout(function(){
$route.reload();

}, 1000);

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
            $route.reload();
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
