// for demands
const tableBoy = document.getElementById ("table-boy");
const tableGirl = document.getElementById ("table-girl");
const testingButton = document.getElementById ("testingButton");
const boyHeading = document.getElementById ("boyHeading");
const girlHeading = document.getElementById ("girlHeading");

// for the buttons
const translateButtonEnglish = document.getElementById ("translateButtonEnglish");
const translateButtonNepali = document.getElementById ("translateButtonNepali");

// for the heading
const mainHeading = document.getElementById ("mainHeading");
const subButtonHeading = document.getElementById ("sub-buttonHeading");

// for lower body
const lh1 = document.getElementById ("lh1");
const lh2 = document.getElementById ("lh2");
const lh3 = document.getElementById ("lh3");
const lh4 = document.getElementById ("lh4");
const lh5 = document.getElementById ("lh5");

// language of the site -> default -> english
let language = "english";


// function to update the data on the site
function showData () {
	if (language == "english") {
		for (let i = 0; i < arrEnglishBoys.length; i++) {
			let he = document.createElement ("tr");
			tableBoy.append (he);
			
			let tabh1 = document.createElement ("th"); // the table head for position
			let tabh2 = document.createElement ("th"); // the table head for salary
			
			// tableBoy.append (tabh1);
			tabh1.innerText = arrEnglishBoys[i][0];
			// link_tabh1.innerText = arrEnglishBoys[i][0];
			tabh2.innerText = arrEnglishBoys[i][1];
			
			tableBoy.append(tabh1);
			tableBoy.append(tabh2);
		}
		
	}
	else if (language == "nepali") {
		for (let i = 0; i < arrNepaliBoys.length; i++) {
			let he = document.createElement ("tr");
			tableBoy.append (he);
			
			let tabh1 = document.createElement ("th");
			let tabh2 = document.createElement ("th");
			
			tabh1.innerText = arrNepaliBoys[i][0];
			tabh2.innerText = arrNepaliBoys[i][1];
			
			tableBoy.append(tabh1);
			tableBoy.append(tabh2);
		}
	}
	
	// for the girls
	if (language == "english") {
		for (let i = 0; i < arrEnglishGirls.length; i++) {
			let he = document.createElement ("tr");
			tableGirl.append (he);
			
			let tabh1 = document.createElement ("th");
			let tabh2 = document.createElement ("th");
			
			tabh1.innerText = arrEnglishGirls[i][0];
			tabh2.innerText = arrEnglishGirls[i][1];
			
			tableGirl.append(tabh1);
			tableGirl.append(tabh2);
		}
		
	}
	else if (language == "nepali") {
		for (let i = 0; i < arrNepaliGirls.length; i++) {
			let he = document.createElement ("tr");
			tableGirl.append (he);
			
			let tabh1 = document.createElement ("th");
			let tabh2 = document.createElement ("th");
			
			tabh1.innerText = arrNepaliGirls[i][0];
			tabh2.innerText = arrNepaliGirls[i][1];
			
			tableGirl.append(tabh1);
			tableGirl.append(tabh2);
		}
	}
}


function clearDemand () {
	tableBoy.innerHTML = "";
	tableGirl.innerHTML = "";
}

showData ();
boyHeading.innerText = WebsiteDataEnglish [0][0];
girlHeading.innerText = WebsiteDataEnglish [0][1];
mainHeading.innerText = WebsiteDataEnglish [1][0];
subButtonHeading.innerText = WebsiteDataEnglish [2][0];

// for lower body
lh1.innerText = WebsiteDataEnglish [3][0];
lh2.innerText = WebsiteDataEnglish [3][1];
lh3.innerText = WebsiteDataEnglish [3][2];
lh4.innerText = WebsiteDataEnglish [3][3];
lh5.innerText = WebsiteDataEnglish [3][4];



translateButtonNepali.addEventListener ("click", function (e) {
	e.preventDefault ();
	
	clearDemand ();
	language = "nepali";
	boyHeading.innerText = WebsiteDataNepali [0][0];
	girlHeading.innerText = WebsiteDataNepali [0][1];
	
	mainHeading.innerText = WebsiteDataNepali [1][0];
	subButtonHeading.innerText = WebsiteDataNepali [2][0];
	
		
	lh1.innerText = WebsiteDataNepali [3][0];
	lh2.innerText = WebsiteDataNepali [3][1];
	lh3.innerText = WebsiteDataNepali [3][2];
	lh4.innerText = WebsiteDataNepali [3][3];
	lh5.innerText = WebsiteDataNepali [3][4];
	
	setNoticeUp (language);
	
	
	showData ();
})

translateButtonEnglish.addEventListener ("click", function (e) {
	e.preventDefault ();
	
	clearDemand ();
	language = "english";
	boyHeading.innerText = WebsiteDataEnglish [0][0];
	girlHeading.innerText = WebsiteDataEnglish [0][1];
	
	mainHeading.innerText = WebsiteDataEnglish [1][0];
	subButtonHeading.innerText = WebsiteDataEnglish [2][0];
	
	lh1.innerText = WebsiteDataEnglish [3][0];
	lh2.innerText = WebsiteDataEnglish [3][1];
	lh3.innerText = WebsiteDataEnglish [3][2];
	lh4.innerText = WebsiteDataEnglish [3][3];
	lh5.innerText = WebsiteDataEnglish [3][4];
	
	setNoticeUp (language);
	
	showData ();
})


// for notice
const letterHeading = document.getElementById ("newsLetter_lh1");
const letterParagraph = document.getElementById ("newsLetter_lhp");

letterHeading.innerText = NoticeEnglish [0];
letterParagraph.innerText = NoticeEnglish [1];
// settting the contents for to display
function setNoticeUp (lang) {
	if (lang == "english") {
		letterHeading.innerText = NoticeEnglish [0];
		letterParagraph.innerText = NoticeEnglish [1];
	}
	else if (lang == "nepali") {
		letterHeading.innerText = NoticeNepali [0];
		letterParagraph.innerText = NoticeNepali [1];
	}
}