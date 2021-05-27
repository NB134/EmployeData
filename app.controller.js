let app = angular.module("ApiDemo", []);
app.controller("DataController",function ($scope, $http) {
  $scope.UserData = [];
    $scope.bool=false;
    $scope.reset=function(){
        $scope.UserData=[];
    }
  $scope.getData = function() {
    console.log("getDataCalled");
    $http.get("https://jsonplaceholder.typicode.com/users").then(
      function (response) {
          console.log("userdata into scope");
        $scope.UserData = response.data;
      },
      function (response) {
          console.log("Data Not recieved");
       console.log(response.status);
      }
    );
  };
});
