

// document.getElementById("count-el").innerText = 15
let firstName = "Chijioke";
let lastName = " Egbo";
let middleName = "Aloysius";
let myGreeting = "Welcome to the Counter Terminal:- "


fullName = firstName + " - " + middleName + " - "+ lastName;
fulName = lastName + ", " + firstName +" "+ middleName

let count = 0;
let nameEl = document.getElementById("name-el");
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment(){
	count += 1;
	countEl.innerText = count;
}

function save(){
	countStr = count + " - "

	saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}

function myName(){

	nameEl.textContent = myGreeting + " "+ fulName;
}

