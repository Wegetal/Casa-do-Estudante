myApp.config(function($routeProvider) {
$routeProvider.when("/", {
templateUrl : "/novo/title.html"
})
.when("/feed", {

    templateUrl : "feed.html"


})
.when("/suasperguntas", {

    templateUrl : "suasperguntas.html",
    controller     : 'myCtrl',


})
.when("/perguntar", {

    templateUrl : "perguntar.html",
    controller     : 'myCtrl',


})
.when("/ranking", {

    templateUrl : "ranking.html",
    controller     : 'myCtrl',

})
});
