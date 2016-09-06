var montyHall = angular.module('montyHall', []);
montyHall.controller('mainController', ['$scope', function(s) {

  var randBetween = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  var Door = function(doorName, isOpen, isSelected, isPrize) {
    this.doorName = doorName;
    this.isOpen = isOpen;
    this.isSelected = isSelected;
    this.isPrize = isPrize;
  };

var doorCount = 3;
var doorList = [];
var prizeDoor = randBetween(1,doorCount);

for (var i = 1; i <= doorCount; i++) {
  var isOpen = 0;
  var isSelected = 0;
  var isPrize = 0;
  if (i == prizeDoor) {
      isPrize = 1;
  }

  var doorName = "door" + i.toString();
  s[doorName] = new Door(doorName, isOpen,isSelected,isPrize);
  doorList.push(s[doorName]);
}

var openDoor = function(door) {
  door["isOpen"] = 1
}
var selectDoor = function(door) {
  door["isSelected"] = 1
}

console.log(s);

}]);
