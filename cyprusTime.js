/* 

this file is solely for the time keeping of cyprus nothing more
*/
let currTime = new Date ();

const monthList = [
	"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
]

const dayList = [
	"Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday",
]

let year = currTime.getUTCFullYear ();
let month = currTime.getUTCMonth ();
let date = currTime.getUTCDate ();
let day = currTime.getUTCDay ();

let hour = currTime.getUTCHours () + 2;
let minutes = currTime.getUTCMinutes ();
let seconds = currTime.getUTCSeconds ();

let cyprusDateString = year + ", " + monthList[month] + " " + date + " (" + dayList[day] + ")";
let cyprusTimeString = hour + " : " + minutes + " : " + seconds;

// updating cyprus time
const cyprusTime = document.getElementById ("cyprusTime");
const cyprusDate = document.getElementById ("cyprusDate");
const cyprusTimeContainer = document.getElementById ("cyprusTimeContainer");

setInterval (function () {
	// updating the time and date every second
	currTime = new Date ();
	hour = currTime.getUTCHours () + 2;
	minutes = currTime.getUTCMinutes ();
	seconds = currTime.getUTCSeconds ();
	
	cyprusTimeString = hour + " : " + minutes + " : " + seconds;
	
	
	cyprusTime.innerText = cyprusTimeString;
	cyprusDate.innerText = cyprusDateString;
}, 1000);