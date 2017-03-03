
var app = angular.module("flipkart", ["ngRoute"]);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/shop", {
        templateUrl : "template/main.html",
                controller : "flipctrl"

    })
    .when("/cart", {
        templateUrl : "template/cart.html",



    })
    .when("/totall", {
        templateUrl : "template/total.htm",
                


    })
    .otherwise ({

redirectTo:'/shop'
    });
   
    
}]);


// app.controller("flipctrl", function($scope, $http){
//  $http.get("/json.json")
//     .then(function(response) {
//      console.log(response);
//      $scope.laxmi1=true;
//       $scope.laxmi2=false; 
//            $scope.names = response.data.mydata;

        
//     });