
// Creating a div element
var divElement = document.createElement("Div");
divElement.id = "divID";

// Styling it
divElement.style.textAlign = "center";
divElement.style.fontWeight = "bold";
divElement.style.fontSize = "smaller";
divElement.style.paddingTop = "15px";

// Adding a paragraph to it
var paragraph = document.createElement("P");
var text = document.createTextNode("Another paragraph, yay! This one will be styled different from the rest since we styled the DIV we specifically created.");
paragraph.appendChild(text);
divElement.appendChild(paragraph);

// Adding a button, cause why not!
var button = document.createElement("Button");
var textForButton = document.createTextNode("Release the alert");
button.appendChild(textForButton);
button.addEventListener("click", function(){
	alert("Hi!");
});
divElement.appendChild(button);

// Appending the div element to body
document.getElementsByTagName("body")[0].appendChild(divElement);