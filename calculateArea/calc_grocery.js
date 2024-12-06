//groceries 
let grocery1;
let grocery2;
let grocery3;

function calc (){
//getting the sum inputs from the user
grocery1=  parseFloat(document.getElementById('g1').value);
grocery2=  parseFloat(document.getElementById('g2').value);
grocery3=  parseFloat(document.getElementById('g3').value);

//calculating the sum of them
    sum= grocery1+grocery2+grocery3;
//setting the sum var to the element
    document.getElementById('result').innerText = `The total amount is: ${sum}`;

}
