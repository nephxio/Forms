// JavaScript code for form validation
let field = document.getElementById('inputField');

let subButton = document.getElementById('submit');
submit.addEventListener('click', function(event) {
  // Prevent form from submitting
  event.preventDefault();

  // Retrieve the input field value
  let input = field.value;

  // Regular expression pattern for alphanumeric input
  let regex = /^[a-zA-Z0-9]+$/
  // Check if the input value matches the pattern
  if (regex.test(input)) {
    // Valid input: clear the error message
    field.setCustomValidity(''); 

    // Valid input: display confirmation and submit the form
    confirm('Form submitted successfully.');
  }
  else {
    // Invalid input: display error message
    confirm('Input must be alphanumeric.');
  }
});