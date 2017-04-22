(function(){
  'use strict';
angular.module("LunchCheck",[])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject=['$scope', '$filter'];
function LunchCheckController($scope, $filter){
  $scope.dishes = "";
  $scope.message = "";
  $scope.msgColor = "";
  $scope.inpColor = "";

  $scope.check = function() {
    var len = $scope.dishes.split(",");
    len = len.filter(function(elem){
      return elem.trim() !="";
    }).length;

    $scope.msgColor = 'Green';
    $scope.inpColor = 'Green';

    if (len > 3)
      $scope.message = "Too much!";
    else if (len > 0)
      $scope.message = "Enjoy!";
    else {
      $scope.message = "Please enter data first";
      $scope.msgColor = 'Red';
      $scope.inpColor = 'Red';
    }
  };
}
})();
