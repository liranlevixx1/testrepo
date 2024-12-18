    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let multi_result = multiply(num1, num2);
                    let add_result = addition(num1, num2);
                    let div_result = division(num1, num2);
                    // Display the result
                    displayResult(multi_result,add_result,div_result);
                
                } else {
                    displayResult('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }
            function addition(a,b){
                debugger;

                return a+b;
            }

            function division(a,b){
                debugger;

                return a/b;
            }

            function displayResult(multi_result,add_result,div_result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The Multiply result is: ${multi_result}`;
                const addResultElement = document.getElementById('add_result');
                addResultElement.textContent = `The Addition result is: ${add_result}`;
                const divResultElement = document.getElementById('div_result');
                divResultElement.textContent = `The Division result is: ${div_result}`;
            }
        