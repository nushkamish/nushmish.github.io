
let dateDiv = document.createElement("div");
let date = new Date();
let hours = date.getHours();
console.log(date);
let colors = ["#ECE8EF", "#DC493A", "#87D68D", "#D741A7", "#E6AF2E"];

let otherText = document.createElement("span");

let container = document.querySelector(".wrapper");

function displayDate() 
{
	let date = new Date();
	container.appendChild(dateDiv);
	container.appendChild(otherText);
	dateDiv.classList.add("time");
	otherText.classList.add("word");
	dateDiv.innerHTML = date;
	otherText.innerHTML = "The Current Time ";
	let randIndex = Math.floor(Math.random() * colors.length);
	let randColor = colors[randIndex];
  	dateDiv.style.color = randColor; 


}

function clearPage()
{
	dateDiv.innerHTML = " ";

}
displayDate();
setInterval(displayDate, 1000);


