app.controller("flipctrl", function($scope, $http){

 $http.get("/json/json.json")
    .then(function(response) {
     console.log(response);
    $scope.names = response.data.mydata;

        
    });



    var total=0;

$scope.add = function(index, price, textbox){


  total=total+price*textbox;
  $scope.total=total;
 $scope.hiddenbtn[index]=true;


 };


 
 $scope.minus=function(index, price, textbox){

  total=total-price*textbox;
    $scope.total=total;
    $scope.hiddenbtn[index]=false;

    
  };



  $scope.hiddenbtn = function (index) {
 
        //alert("inside sub function      " + index +"------------"+ $scope.hiddenbtn[index]);
        if (angular.isUndefined($scope.hiddenbtn[index])) {
            $scope.hiddenbtn[index] = true;
        }
        else if (angular.equals($scope.hiddenbtn[index], false)) {
            $scope.hiddenbtn[index] = true;
            //$scope.items[i].itemval[index] = 1;
            //$scope.itemval[index] = 1;
        }
        else if (angular.equals($scope.hiddenbtn[index], true)) {
            $scope.hiddenbtn[index] = false;
        }
        else {
            $scope.hiddenbtn[index] = false;
        }
          //alert("outside sub function      " + index + "------------" + $scope.hiddenbtn[index]);
    };

});