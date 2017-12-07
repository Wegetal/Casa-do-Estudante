myApp.config(function($routeProvider) {
$routeProvider.when("/", {
templateUrl : "/novo/title.html"
})
.when("/feed", {

    templateUrl : "/novo/feed.html"


})
.when("/perguntar", {

    templateUrl : "/novo/perguntar.html"


})
});
