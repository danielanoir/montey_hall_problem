The Game:
Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?
*******************************************
PSUEDO:

HTML has 3 divs representing doors. id= door1, door2, door3, class=door and isOpen, isPrize, and isSelected = 0.
JS will change the isPrize to 1 for one random door(using id)
first, show three doors
user clicks one door
onclick, set isSelected = 1
Set isOpen=1 for one random door where isSelected=0 and isPrize=0.
Display isOpen=1 (can be global if isOpen=1 display image)
Prompt user reselect previous choice or click on other door where isOpen=0
isSelected=1 for door just clicked, and 0 for other doors (so it will override previously selected)
then isOpen=1 for all doors

****************************************

Websockets, Mongo, Node, Angular, Express, JavaScript, JQuery, HTML, CSS.

*****************************************

bronze:
  Websockets:
    Use websockets so app is regularly updating with each users scores.


silver:
create two sides: one has the percent correct for when the user switches doors and one side has percent correct when the user doesn't switch doors.

gold
make it so that when the page is refreshed old scores stay and show the "global" percent correct for each section at the top of the page
