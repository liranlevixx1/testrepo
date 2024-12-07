
    // declaring a variable for the submit button
    const submitButton=document.getElementById('submitBtn');
    // assigning the submitFeedback to the button to be executed when an onclick event occurs
    submitButton.onclick = submitFeedback;
    
    function submitFeedback() {
        //assigning the user's input to a constant variables
        const username = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const job = document.getElementById('job').value;
        const designation = document.getElementById('designation').value;
        const productType = document.getElementById('productType').value;
        const feedback = document.getElementById('feedbackText').value;
        const userExp = document.getElementById('userExperince').value;
        //once submitted assign the html element with the user's inputs
        document.getElementById('userName').innerHTML = username;
        document.getElementById('userAge').innerHTML = age;
        document.getElementById('userEmail').innerHTML = email;
        document.getElementById('userJob').innerHTML = job;
        document.getElementById('userDesignation').innerHTML = designation;
        document.getElementById('userProductChoice').innerHTML = productType;
        document.getElementById('userFeedback').innerHTML = feedback;
        document.getElementById('userExp').innerHTML = userExp;
        //Alerting that a submition has been made
        alert('Thank you for your valuable feedback')
        //make the user details div visible as a block once the function runs
        document.getElementById('userInfo').style.display = 'block';
    }
    //setting up a listener to the whole form then submitting it once the 'enter' key is clicked
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
        submitFeedback();
        }
    });

