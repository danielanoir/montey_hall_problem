var montyHall = angular.module('montyHall', []);
console.log("HI");

montyHall.controller('mainController', function($scope) {

var Door = function(isOpen, isSelected, isPrize) {
  this.isOpen = isOpen;
  this.isSelected = isSelected;
  this.isPrize = isPrize;
};

  $scope.door1 = new Door(0, 0, 0);
  $scope.door2 = new Door(0, 0, 0);
  $scope.door3 = new Door(0, 0, 0);


});

// $(document).ready(function(){
//   alert("Welcome to the Monty Hall game show! behind one door is a car and behind the other two doors are goats. You win if you choose the car. Please click a door to choose.")
//   console.log($(".door").attr("ng-isOpen"));
//   var currentPrize = 0;
//
//   $("#goatOne").hide();
//   $("#goatTwo").hide();
//   $("#car").hide();
//
//   $(".door1").click(function() {
//     $("#goatTwo").hide();
//     $("#goatOne").hide();
//     $("#car").show();
//   });
//
//   $(".door2").click(function() {
//     $("#goatTwo").hide();
//     $("#goatOne").show();
//     $("#car").hide();
//   });
//
//   $(".door3").click(function() {
//     $("#goatTwo").show();
//     $("#goatOne").hide();
//     $("#car").hide();
//   });
//
//   currentPrize = 1;

// });
