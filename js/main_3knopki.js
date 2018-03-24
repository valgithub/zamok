
var counter0 = 0;
var counter1 = 0;
var counter2 = 0;
var count0 = 0;
var count1 = 0;
var count2 = 0;


button0.onclick = function(){
		console.log("counter0 =  " + (counter0++))
}
button1.onclick = function(){
		console.log("counter1 =  " + (counter1++))
}	
	
button2.onclick = function(){
		console.log("counter2 =  " + (counter2++))
}	

button3.onclick = function(){

	var button=document.createElement("button");
	var buttonText=document.createTextNode("Угадайте пароль");
	button.appendChild(buttonText);
	var parent=document.getElementById("div3");
	var child=document.getElementById("button3");
	parent.replaceChild(button,child);
	button.id="button4";

		button0.onclick = function(){
				console.log("count0 =  " + (count0++))
		}
		button1.onclick = function(){
				console.log("count1 =  " + (count1++))
		}	
			
		button2.onclick = function(){
				console.log("count2 =  " + (count2++))
		}
		button4.onclick = function(){
			if (count0==counter0&&count1==counter1&&count2==counter2)
				 {alert("Замок открыт")}
			else {alert("Замок блокирован")}

			var parent=document.getElementById("div3");
			var child=document.getElementById("button4");
			parent.removeChild(child);

		}
}