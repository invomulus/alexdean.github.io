function calculatecost(){

//set variables

var spongebobticket = 0;
var Legoticket = 0;
var concessionticket = 0; 
var Carsticket = 0; 

//get numbers input

var spongebobIndex=document.ticketform.spongebob.selectedIndex;
var legoIndex=document.ticketform.lego.selectedIndex;
var starwarsIndex=document.ticketform.starwars.selectedIndex;
var CarsIndex=document.ticketform.Cars.selectedIndex;

// set costs for each ticket

spongebobticket = spongebobIndex * 4.25;
legoticket = legoIndex * 8.50;
starwarsticket = starwarsIndex * 6.50;
Carsticket =CarsIndex * 24;

//add up and print

fullcost = spongebob


document.ticketform.totalcost.value = fullcost.toFixed(2);


}