var montyHall = angular.module('montyHall', []);
montyHall.controller('mainController', function($scope) {

  var Door = function(isOpen, isSelected, isPrize) {
    this.isOpen = isOpen;
    this.isSelected = isSelected;
    this.isPrize = isPrize;
  };

var doorCount = 3;

for (var i = 1; i <= doorCount; i++) {
    isOpen = 0;
    isSelected = 0;
    isPrize = 0;
  var doorName = "door" + i.toString()
  $scope[doorName] = new Door(isOpen,isSelected,isPrize);
}

  var openDoor = function(door) {
    door["isOpen"] = 1;
  }

  console.log($scope);

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
