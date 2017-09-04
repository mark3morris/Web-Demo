
//var fs = require('fs');

function getStarted() {
   setInterval(fadeOut,5000);
   $("body").append($mainScreen);
   document.addEventListener('click', checkButtons);
}

function addIt(){
	var textToGet = $("#text1").val();
	$("#text1").val("");

	var isNotAlreadyAnEntry = false;
	for(a = 0; a < listArray.length; a++){
		if(textToGet==listArray[a].name){isNotAlreadyAnEntry = true;}
	}

    if(!isNotAlreadyAnEntry){
	//listArray.push(textToGet);

	var newList = {name: textToGet, subject: "", project: "", date: "", list: []};
	listArray.push(newList);
    }
    else{
    	alert("This has already been added");
    }
	$("#listItem").empty();

	for(a = 0; a < listArray.length; a++){
		$("#listItem").append("<div onclick=\"tellIt(" + a + ")\">" + "- " + listArray[a].name + "</div>");
		//$("#listItem").append("<div onclick=\"tellIt(" + a + ")\">" + listArray[a] + "</div>");
	}
}

function displayAdded(){
	for(a = 0; a < listArray.length; a++){
		$("#listItem").append("<div onclick=\"tellIt(" + a + ")\">" + "- " + listArray[a].name + "</div>");
	}
}

var nameOfCurrentList = "";
var indexOfCurrentList = ""
function tellIt(whichEntry){
	nameOfCurrentList = listArray[whichEntry].name;
	indexOfCurrentList = whichEntry;
	$("#globalContainer").empty();
	$("body").append("<div id=\"title\">" + nameOfCurrentList + "</div><p></p>");
	$("body").append($individualList);
	$("#text6").focus();
	    for(a = 0; a < listArray[indexOfCurrentList].list.length; a++){
	    	$("#listContainer").append("<textArea id=\"text7\">" + listArray[indexOfCurrentList].list[a] + "</textArea>")
	    	//$("#listDiv").append("<textArea id=\"text7\"></textArea>");
	    }
	$(window).scrollTop(0);
}

function saveAndReturn(){
		//for(a = 0; a < listArray[indexOfCurrentList].list.length; a++){
			    //var valueToPass = $("body:fourth-child:nth-child(" + a + ")").val();
				//listArray[indexOfCurrentList].list[a] = valueToPass;
			//}

	$("body").empty();
	$("body").append($mainScreen);
    displayAdded();
}

function whichDiv(){
	alert("Yep");
}
function whichDiv2(){
	alert("Yep2");
}
function whichDiv3(){
	alert("Yep3");
}
function addText(){
	var str = $("#textLine").val();
	$("#mainLine").html(str);
}
function fadeOut(){
	$("#emailAsk").fadeOut(1000);
}
function makeAnotherLine(){
	var testKey = event.keyCode;
	if(testKey == 13){
		listArray[indexOfCurrentList].list.push($("#text6").val());
		$("#text6").val("");
		$("#listContainer").empty();
		$("#listContainer").append("<textArea id=\"text6\" onkeypress=\"makeAnotherLine()\"></textArea>");
		$("#text6").focus();
	    for(a = listArray[indexOfCurrentList].list.length - 1; a > -1; a--){
	    	$("#listContainer").append("<textArea id=\"text7\" onkeypress=\"changeALine(" + a + ")\">" + listArray[indexOfCurrentList].list[a] + "</textArea>");
	    }
	}
}
function changeALine(listIndex){
	//var testKey = event.keyCode;
		//if(testKey != 13){
		var valueToChange = $(":focus").val();

        $("#listContainer").empty();
		$("#listContainer").append("<textArea id=\"text6\" onkeypress=\"makeAnotherLine()\"></textArea>");
		for(a = listArray[indexOfCurrentList].list.length - 1; a > -1; a--){
			if(a == listIndex){
				$("#listContainer").append("<textArea id=\"text7\" onkeypress=\"changeALine(" + a + ")\">" + valueToChange + "</textArea>");
				listArray[indexOfCurrentList].list[listIndex] = valueToChange;
			}
			else{
	    	$("#listContainer").append("<textArea id=\"text7\" onkeypress=\"changeALine(" + a + ")\">" + listArray[indexOfCurrentList].list[a] + "</textArea>");
	        }
	    }
	//}
}


var $mainLine = "<div id=\"mainLine\" onclick=\"whichDiv()\">Yabba</div>";
var $secondLine = "<div id=\"secondLine\" onclick=\"whichDiv2()\">Dabba</div>";
var $thirdLine = "<div id=\"thirdLine\" onclick=\"whichDiv3()\">Do</div>";
var $textLine = "<textarea id=\"textLine\" class=\"basicStyle\" onkeypress=\"addText()\">";
var listArray = [];

var a1 = "<div id=\"spacer\"></div><div id=\"leftPad\"></div><div id=\"globalContainer\"><div id=\"mainContainer\">";
var a2 = "<div id=\"emailAsk\">Leave it! Gaaaaah!</div><div><div id=\"title\"> Make A List! </div><p></p>";
var a3 = "<div id=\"title2\"> Create a new list: </div><p></p><table id=\"tableContainer\"><tr>";
var a4 = "<td id=\"one\">Name</td><td id=\"one\">Subject</td><td id=\"one\">Project</td></tr>";
var a5 = "<td id=\"one\"><textArea id=\"text1\"></textArea></td><td id=\"one\"><textArea id=\"text2\"></textArea></td>";
var a6 = "<td id=\"one\"><textArea id=\"text3\"></textArea></td></tr></table><p></p><table id=\"tableContainer\">";
var a7 = "<tr><td id=\"addButton\" onClick=\"addIt()\">&nbsp &nbsp Add</td></tr></table><div id=\"title3\"></div>";
var a8 = "<div id=\"title2\"> Search for an existing subject: </div> <p></p>";
var a9 = "<div id=\"one\"><textArea id=\"text4\"></textArea></div><p></p><table id=\"tableContainer\"><tr>";
var a10 = "<td id=\"searchButton\">&nbsp &nbsp Search</td></tr></table><p></p>";
var a11 = "<div id=\"title2\">Or click on a subject from the list below: </div><p></p>";
var a12 = "<div id=\"list\"><div id=\"listItem\"></div></div></div></div><div id=\"#showList\"></div>";

var $mainScreen = "" + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12;

var b0 = "<div id=\"title\"></div><p></p>"; 
var b1 = "<div id=\"listDiv\">";
var b2 = "<div id=\"listContainer\">";
var b3 = "<textArea id=\"text6\" onkeypress=\"makeAnotherLine()\"></textArea>";
var b4 = "<div id=\"paddingDiv\"></div>";
var b5 = "</div>";
var b6 = "<div id=\"saveAndReturn\" onclick=\"saveAndReturn()\">&nbsp &nbsp &nbsp Save and Go Back To Main</div>";
var b7 = "</div>";

var anotherLine = "<textArea id=\"text7\"></textArea>";

var $individualList = "" + b0 + b1 + b2 + b3 + b4 + b5 + b6 + b7;


