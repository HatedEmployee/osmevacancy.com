const formSubmit = document.getElementById ("nameQuery");
const userInput = document.getElementById ("nameInput");
// const mainTable =	document.getElementById ("mainTable").innerHTML = "";

let storeName = [];

function showTableClear (i) {
	let length = 0;
	mainTable.innerHTML = "";
	let occName = "** Candidate Name ** ";
	let agentName = "** Candidate Name **";
	
	// showing the headers
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
	
	// printing out the real data
	for (let i = 0; i < storeName.length; i++) {
	
			document.getElementById("headingOne").innerText = "Showing Results For '"+ occName + "' referred by '" + agentName + "'";
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
			td1.innerText = arr[storeName[i]][0];
			tr.append (td1);
			
			let td2 = document.createElement ("td");
			td2.innerText = arr[storeName[i]][1];
			tr.append (td2);
			
			let td3 = document.createElement ("td");
			td3.innerText = arr[storeName[i]][2];
			tr.append (td3);
		
			let td4 = document.createElement ("td");
			// td4.innerText = arr[i][3];
			td4.innerText = convertAge (arr[storeName[i]][3]);
			tr.append (td4);
			
			let td5 = document.createElement ("td");
			if (arr[storeName[i]][4] == "0") {
				td5.innerText = "F";
			}
			else if (arr[storeName[i]][4] == "1") {
				td5.innerText = "M";
			}
			else {
				td5.innerText = "NULL";
			}
			// td5.innerText = convertAge (arr[i][4]);
			tr.append (td5);
			
			let td6 = document.createElement ("td");
			if (arr[storeName[i]][5] == "0") {
				td6.innerText = "No";
			}
			else if (arr[storeName[i]][5] == "1") {
				td6.innerText = "Yes";
			}
			else {
				td6.innerText = "NULL";
			}
			tr.append (td6);
			
			let td7 = document.createElement ("td");
			td7.innerText = arr[storeName[i]][6];
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
				td8.innerText = arr[storeName[i]][7] + " years";
			}
			tr.append (td8);
			
			// country of experience
			let td9 = document.createElement ("td");
			if (arr[i][8] == "") {
				td9.innerText = "N/A";
			}
			else {
				td9.innerText = arr[storeName[i]][8];
			}
			tr.append (td9);
			
			// passport No.
			let td10 = document.createElement ("td");
			if (arr[i][9] == "") {
				td10.innerText = "N/A";
			}
			else {
				td10.innerText = arr[storeName[i]][9];
			}
			tr.append (td10);
			
			
			length ++;
	}
}

formSubmit.addEventListener ("submit", function (e) {
	e.preventDefault ();
	let string1 = "";
	storeName = [];
	let index = 0;
	// checking if the inputted text is included in any of the names 
	for (let i = 0; i < arr.length; i++) {
		string1 = userInput.value;
		console.log (userInput.value);
		if (arr[i][0].includes (userInput.value)) {
			// showTableClear (i);
			storeName [index] = i;
			index ++;
			showTableClear (i);
		}
		// else {
			// console.log ("This is not working")
		// }
	}
})
