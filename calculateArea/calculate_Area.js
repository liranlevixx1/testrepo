let length;
let width;

function calculateArea() {
//takes the input of the user from the HTML element and asign it to the length and width vars
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 //calc the area
 let area = length * width;
//show the area in the result section
  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}
