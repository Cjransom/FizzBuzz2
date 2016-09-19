function fizzBuzz() {

var intnum = document.getElementById("txtInput").value;


for (var i = 1; i <= intnum; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		var node = document.createElement("LI");                
		var textnode = document.createTextNode("FizzBuzz");       
		node.appendChild(textnode);                             
		document.getElementById("addme").appendChild(node);
	}
	else if (i % 5 == 0){
		var node = document.createElement("LI");                
		var textnode = document.createTextNode("Buzz");       
		node.appendChild(textnode);                             
		document.getElementById("addme").appendChild(node);
	}
	else if (i % 3 == 0) {
		var node = document.createElement("LI");                
		var textnode = document.createTextNode("Fizz");       
		node.appendChild(textnode);                             
		document.getElementById("addme").appendChild(node);
	}
	else {
		var node = document.createElement("LI");                
		var textnode = document.createTextNode(i);       
		node.appendChild(textnode);                             
		document.getElementById("addme").appendChild(node);
	}
}
}