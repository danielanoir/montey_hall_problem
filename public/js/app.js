$(document).ready(function(){
// alert("Welcome to the Monty Hall game show! behind one door is a car and behind the other two doors are goats. You win if you choose the car. Please click a door to choose.")
//

var prizeImages = [$('#goatOne'), $('#goatTwo'), $('#car')]

var rand = prizeImages[Math.floor(Math.random() * prizeImages.length)];
var concat = prizeImages[rand];
function random() {
  document.getElementById("#doorOne").innerHTML = (concat);
}

console.log(rand)




$(".doorOne").on("click", function(){
  console.log("clicked")
  document.getElementById('goatOne').style.visibility='visible';
});

$(".doorTwo").on("click", function(){
  console.log("clicked")
  document.getElementById('goatTwo').style.visibility='visible';

});
$(".doorThree").on("click", function(){
  console.log("clicked")
  document.getElementById('car').style.visibility='visible';

});

});
