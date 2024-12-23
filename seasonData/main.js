
// checking if the user is registered and has a session pass
let SECURITY1 = sessionStorage.getItem ("isAllowed");
let SECURITY2 = sessionStorage.getItem ("Username");

// if (SECURITY1 != "true" && SECURITY2 == "") {
	// alert ("You are not a registered User / तपाईं एक दर्ता प्रयोगकर्ता हुनुहुन्न");
	// window.location.replace ("index.html"); // this needs to be changed
// }
// else if (SECURITY1 == "true" && SECURITY2 != "") {
	// alert ("Welcome to the page / पेजमा स्वागत छ");
	// I will set the news here
	// console.log ("The page is reading here");
// }

if ((SECURITY1 != "true" || SECURITY1 == "") && (SECURITY2 == "" || SECURITY2 == "NULL")) {
	// there should be message here
	alert ("You are not a registered User / तपाईं एक दर्ता प्रयोगकर्ता हुनुहुन्न");
	window.location.replace ("loginPage.html"); // this needs to change
}
let kickOutSwitch = true;
for (let i = 0; i < agentsNo.length; i++) {
	if (SECURITY2 == agentsNo[i][0]) {
		kickOutSwitch = false;
	}
}

if (kickOutSwitch) {
	alert ("You are not a registered User / तपाईं एक दर्ता प्रयोगकर्ता हुनुहुन्न");
	window.location.replace ("loginPage.html");			
}

const defaultValue = "showAll";




const occupationNames = [
	"Cook", "Waiter", "Chambermaid", "Housemaid", "Kitchen Helper", "Continental Cook", "Italian Cook", "Sushi Cook", "Panasian Cook", "Barista", "Bartender",
]

// function to change the year into age
function convertAge (localValue) {
	let value = 2024 - Number (localValue);
	return value.toString ();
}


// getting the table
const mainTable = document.getElementById ("mainTable");

// getting the input
const container = document.getElementById ("container");
const mainInput = document.getElementById ("mainInput");
const jobInput = document.getElementById ("jobInput");
const enterButton = document.getElementById ("enterButton");
const heading = document.getElementById ("headingOne");

// encapsulating in a function
function showData (agentName, occName) {
	mainTable.innerHTML = "";
	let length = 0;
	
	if (occName == "") {
		occName = defaultValue;
	}
	
	if (agentName == "") {
		agentName = defaultValue;
	}
	
	// setting up the table
	let mTr = document.createElement ("tr");
	mainTable.append (mTr); // appending to the main table
	
	let th1 = document.createElement ("th");
	th1.innerText = "S.No.";
	mTr.append (th1);
	
	let th2 = document.createElement ("th");
	th2.innerText = "Name";
	mTr.append (th2);
	
	let th3 = document.createElement ("th");
	th3.innerText = "Contact No.";
	mTr.append (th3);
	
	let th4 = document.createElement ("th");
	th4.innerText = "Positions";
	mTr.append (th4);
	
	let th5 = document.createElement ("th");
	th5.innerText = "Age";
	mTr.append (th5);
	
	let th6 = document.createElement ("th");
	th6.innerText = "Sex";
	mTr.append (th6);
	
	let th7 = document.createElement ("th");
	th7.innerText = "Pol\nMed";
	mTr.append (th7);
	
	let th8 = document.createElement ("th");
	th8.innerText = "Referred By.";
	mTr.append (th8);
	
	let th9 = document.createElement ("th");
	th9.innerText = "Yrs. of Exp";
	mTr.append (th9);
	
	let th10 = document.createElement ("th");
	th10.innerText = "Ctry. of Exp";
	mTr.append (th10);
	
	let th11 = document.createElement ("th");
	th11.innerText = "Passport No.";
	mTr.append (th11);
	
	// let rTh = document.createElement ("th");
	// rTh.innerText = "Referred By.";
	// mTr.append (rTh);
	
	
	// setting up the loop
	for (let i = 0; i < arr.length; i++) {
		// if searching by agent name
		if ((agentName != defaultValue || occName != defaultValue) && arr[i][6] == agentName && occName == defaultValue) {
			heading.innerText = "Showing Results For 'AnyJob' referred by '" + agentName + "'";
			// if (arr[i][6] == agentName && arr[i][2] == occName)
			// first make a tr
			let tr = document.createElement ("tr");
			mainTable.append (tr); // appending the tr to the table
			
			// now creating other elements
			let th = document.createElement ("th");
			th.innerText = length + 1; // setting the value of the th
			tr.append (th); // appending the th to the tr
			
			// now creating other remaining elements
			let td1 = document.createElement ("td");
			td1.innerText = arr[i][0];
			tr.append (td1);
			
			let td2 = document.createElement ("td");
			td2.innerText = arr[i][1];
			tr.append (td2);
			
			let td3 = document.createElement ("td");
			td3.innerText = arr[i][2];
			tr.append (td3);
		
			let td4 = document.createElement ("td");
			// td4.innerText = arr[i][3];
			td4.innerText = convertAge (arr[i][3]);
			tr.append (td4);
			
			let td5 = document.createElement ("td");
			if (arr[i][4] == "0") {
				td5.innerText = "F";
			}
			else if (arr[i][4] == "1") {
				td5.innerText = "M";
			}
			else {
				td5.innerText = "NULL";
			}
			// td5.innerText = convertAge (arr[i][4]);
			tr.append (td5);
			
			let td6 = document.createElement ("td");
			if (arr[i][5] == "0") {
				td6.innerText = "No";
			}
			else if (arr[i][5] == "1") {
				td6.innerText = "Yes";
			}
			else {
				td6.innerText = "NULL";
			}
			tr.append (td6);
			
			let td7 = document.createElement ("td");
			td7.innerText = arr[i][6];
			tr.append (td7);
			
			// let td8 = document.createElement ("td");
			// td8.innerText = arr[i][7];
			// tr.append (td8);
			
			// year of experience
			let td8 = document.createElement ("td");
			if (arr[i][7] == "") {
				td8.innerText = "N/A";
			}
			else {				
				td8.innerText = arr[i][7] + " years";
			}
			tr.append (td8);
			
			// country of experience
			let td9 = document.createElement ("td");
			if (arr[i][8] == "") {
				td9.innerText = "N/A";
			}
			else {
				td9.innerText = arr[i][8];
			}
			tr.append (td9);
			
			// passport No.
			let td10 = document.createElement ("td");
			if (arr[i][9] == "") {
				td10.innerText = "N/A";
			}
			else {
				td10.innerText = arr[i][9];
			}
			tr.append (td10);
			
			length ++;
		}
		// if agent name
		else if ((agentName != defaultValue || occName != defaultValue) && agentName == "showAll" && arr[i][2] == occName) {
			heading.innerText = "Showing Results For '"+ occName + "' referred by 'AnyOne'";
			// console.log ("The program is reading here");
			// if (arr[i][6] == agentName && arr[i][2] == occName)
			// first make a tr
			let tr = document.createElement ("tr");
			mainTable.append (tr); // appending the tr to the table
			
			// now creating other elements
			let th = document.createElement ("th");
			th.innerText = length + 1; // setting the value of the th
			tr.append (th); // appending the th to the tr
			
			// now creating other remaining elements
			let td1 = document.createElement ("td");
			td1.innerText = arr[i][0];
			tr.append (td1);
			
			let td2 = document.createElement ("td");
			td2.innerText = arr[i][1];
			tr.append (td2);
			
			let td3 = document.createElement ("td");
			td3.innerText = arr[i][2];
			tr.append (td3);
		
			let td4 = document.createElement ("td");
			// td4.innerText = arr[i][3];
			td4.innerText = convertAge (arr[i][3]);
			tr.append (td4);
			
			let td5 = document.createElement ("td");
			if (arr[i][4] == "0") {
				td5.innerText = "F";
			}
			else if (arr[i][4] == "1") {
				td5.innerText = "M";
			}
			else {
				td5.innerText = "NULL";
			}
			// td5.innerText = convertAge (arr[i][4]);
			tr.append (td5);
			
			let td6 = document.createElement ("td");
			if (arr[i][5] == "0") {
				td6.innerText = "No";
			}
			else if (arr[i][5] == "1") {
				td6.innerText = "Yes";
			}
			else {
				td6.innerText = "NULL";
			}
			tr.append (td6);
			
			let td7 = document.createElement ("td");
			td7.innerText = arr[i][6];
			tr.append (td7);
			
			// let td8 = document.createElement ("td");
			// td8.innerText = arr[i][7];
			// tr.append (td8);
			
			// year of experience
			let td8 = document.createElement ("td");
			if (arr[i][7] == "") {
				td8.innerText = "N/A";
			}
			else {				
				td8.innerText = arr[i][7] + " years";
			}
			tr.append (td8);
			
			// country of experience
			let td9 = document.createElement ("td");
			if (arr[i][8] == "") {
				td9.innerText = "N/A";
			}
			else {
				td9.innerText = arr[i][8];
			}
			tr.append (td9);
			
			// passport No.
			let td10 = document.createElement ("td");
			if (arr[i][9] == "") {
				td10.innerText = "N/A";
			}
			else {
				td10.innerText = arr[i][9];
			}
			tr.append (td10);
			
			length ++;
		}
		
		// if there are two filters
		if (arr[i][6] == agentName && arr[i][2] == occName) {
			heading.innerText = "Showing Results For '"+ occName + "' referred by '" + agentName + "'";
			// console.log ("The program is reading here 2");
			// if (arr[i][6] == agentName && arr[i][2] == occName)
			// first make a tr
			let tr = document.createElement ("tr");
			mainTable.append (tr); // appending the tr to the table
			
			// now creating other elements
			let th = document.createElement ("th");
			th.innerText = length + 1; // setting the value of the th
			tr.append (th); // appending the th to the tr
			
			// now creating other remaining elements
			let td1 = document.createElement ("td");
			td1.innerText = arr[i][0];
			tr.append (td1);
			
			let td2 = document.createElement ("td");
			td2.innerText = arr[i][1];
			tr.append (td2);
			
			let td3 = document.createElement ("td");
			td3.innerText = arr[i][2];
			tr.append (td3);
		
			let td4 = document.createElement ("td");
			// td4.innerText = arr[i][3];
			td4.innerText = convertAge (arr[i][3]);
			tr.append (td4);
			
			let td5 = document.createElement ("td");
			if (arr[i][4] == "0") {
				td5.innerText = "F";
			}
			else if (arr[i][4] == "1") {
				td5.innerText = "M";
			}
			else {
				td5.innerText = "NULL";
			}
			// td5.innerText = convertAge (arr[i][4]);
			tr.append (td5);
			
			let td6 = document.createElement ("td");
			if (arr[i][5] == "0") {
				td6.innerText = "No";
			}
			else if (arr[i][5] == "1") {
				td6.innerText = "Yes";
			}
			else {
				td6.innerText = "NULL";
			}
			tr.append (td6);
			
			let td7 = document.createElement ("td");
			td7.innerText = arr[i][6];
			tr.append (td7);
			
			// let td8 = document.createElement ("td");
			// td8.innerText = arr[i][7];
			// tr.append (td8);
			
			// year of experience
			let td8 = document.createElement ("td");
			if (arr[i][7] == "") {
				td8.innerText = "N/A";
			}
			else {				
				td8.innerText = arr[i][7] + " years";
			}
			tr.append (td8);
			
			// country of experience
			let td9 = document.createElement ("td");
			if (arr[i][8] == "") {
				td9.innerText = "N/A";
			}
			else {
				td9.innerText = arr[i][8];
			}
			tr.append (td9);
			
			// passport No.
			let td10 = document.createElement ("td");
			if (arr[i][9] == "") {
				td10.innerText = "N/A";
			}
			else {
				td10.innerText = arr[i][9];
			}
			tr.append (td10);
			
			length ++;
		}
		// everything by default
		else if (agentName == defaultValue && occName == defaultValue) {
			heading.innerText = "Showing Results For 'AnyJob' referred by 'AnyOne'";
			// console.log ("The program")
			// first make a tr
			let tr = document.createElement ("tr");
			mainTable.append (tr); // appending the tr to the table
			
			// now creating other elements
			let th = document.createElement ("th");
			th.innerText = length + 1; // setting the value of the th
			tr.append (th); // appending the th to the tr
			
			// now creating other remaining elements
			let td1 = document.createElement ("td");
			td1.innerText = arr[i][0];
			tr.append (td1);
			
			let td2 = document.createElement ("td");
			td2.innerText = arr[i][1];
			tr.append (td2);
			
			let td3 = document.createElement ("td");
			td3.innerText = arr[i][2];
			tr.append (td3);
			
		
			let td4 = document.createElement ("td");
			// td4.innerText = arr[i][3];
			td4.innerText = convertAge (arr[i][3]);
			tr.append (td4);
			
			let td5 = document.createElement ("td");
			if (arr[i][4] == "0") {
				td5.innerText = "F";
			}
			else if (arr[i][4] == "1") {
				td5.innerText = "M";
			}
			else {
				td5.innerText = "NULL";
			}
			tr.append (td5);
			
			let td6 = document.createElement ("td");
			if (arr[i][5] == "0") {
				td6.innerText = "No";
			}
			else if (arr[i][5] == "1") {
				td6.innerText = "Yes";
			}
			else {
				td6.innerText = "NULL";
			}
			tr.append (td6);
			
			let td7 = document.createElement ("td");
			td7.innerText = arr[i][6];
			tr.append (td7);
			
			// let td8 = document.createElement ("td");
			// td8.innerText = arr[i][2];
			// tr.append (td8);
			
			// year of experience
			let td8 = document.createElement ("td");
			if (arr[i][7] == "") {
				td8.innerText = "N/A";
			}
			else {				
				td8.innerText = arr[i][7] + " years";
			}
			tr.append (td8);
			
			// country of experience
			let td9 = document.createElement ("td");
			if (arr[i][8] == "") {
				td9.innerText = "N/A";
			}
			else {
				td9.innerText = arr[i][8];
			}
			tr.append (td9);
			
			// passport No.
			let td10 = document.createElement ("td");
			if (arr[i][9] == "") {
				td10.innerText = "N/A";
			}
			else {
				td10.innerText = arr[i][9];
			}
			tr.append (td10);
			
			
			length ++;
		}
	}
	
}

container.addEventListener ("submit", function (e) {
	e.preventDefault ();
	
	let queryAgent = "";
	let queryJob = "";
	
	if (mainInput.value == "Aman Magar") {
		alert ("If you have any complain regarding the data in this website, please feel free to contact at omshreemahashakti057@gmail.com | Whatsapp: (+977) 9702087159 / यदि तपाइँसँग यस वेबसाइटमा डाटाको बारेमा कुनै गुनासो छ भने, कृपया सम्पर्क गर्न नहिचकिचाउनुहोस् omshreemahashakti057@gmail | Whatsapp: (+977) 9702087159");
	}
	
	for (let i = 0; i < agentNames.length; i++) {
		if (mainInput.value == agentNames[i]) {
			queryAgent = agentNames [i];
		}
	}
	for (let j = 0; j < occupationNames.length; j++) {
		
		if (jobInput.value == occupationNames[j]) {
			queryJob = occupationNames[j];
		}
	}
	
	showData (queryAgent, queryJob);
})


showData (defaultValue, defaultValue);