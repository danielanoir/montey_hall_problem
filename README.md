The Game:
Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

****************************************

Websockets, Mongo, Node, Angular, Express, JavaScript, JQuery, HTML, CSS.

*****************************************

bronze:
  Websockets:
    Use websockets so app is regularly updating with each users scores.
  JS:
    use prompts to get user answer
    create 3 divs with classes of door 1, 2 and 3
    create array of 2 goats and 1 car
    attach goat or car to each div randomly from the array. user Math.random to select random picture of goat or car
    hide attachment goat or car
    when user clicks div, show a different card with a goat behind it.
    ask user if they would like to change doors.
    show result

silver:
create two sides: one has the percent correct for when the user switches doors and one side has percent correct when the user doesn't switch doors.

gold
make it so that when the page is refreshed old scores stay and show the "global" percent correct for each section at the top of the page
