// as in css first get the element we want
/*
var myHeading = document.querySelector('h1');
// and then change its content
myHeading.textContent = 'Hello world!';
*/

// Create an alert if we click with the mouse
document.querySelector('h1').onclick = function() {
	number_one = 1
	number_two = 3
    alert('Multiplication of ' + number_one + 
    	' and ' + number_two + ' is ' + multiply(number_one, number_two)
    	);
}

function multiply(num1, num2){
	return num1 * num2
}

// Change image header when clicking it
var myImage = document.querySelector('img');
myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/Monte_480x480.jpg') {
      myImage.setAttribute ('src','images/creatr.png');
    } else {
      myImage.setAttribute ('src','images/Monte_480x480.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}

function setUserName() {
  var myName = prompt('Please enter your name:');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}