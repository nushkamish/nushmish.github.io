
let dateDiv = document.createElement("div");
let date = new Date();
let hours = date.getHours();
console.log(date);

let container = document.querySelector(".wrapper");

function displayDate() 
{
	let date = new Date();
	container.appendChild(dateDiv);
	dateDiv.classList.add("time");
	dateDiv.innerHTML = date;

}

function clearPage()
{
	dateDiv.innerHTML = " ";
}
displayDate();

let button = document.querySelector(".button");

button.addEventListener("click", clearPage);
button.addEventListener("click", displayDate);

