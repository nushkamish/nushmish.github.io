
let date = new Date();
let hours = date.getHours();
console.log(date);

let container = document.querySelector(".wrapper");

function displayDate() 
{
	let dateDiv = document.createElement("div");
	container.appendChild(dateDiv);
	dateDiv.classList.add("time");
	dateDiv.innerHTML = date;

}

displayDate ();
