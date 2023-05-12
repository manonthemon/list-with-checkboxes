
//selects all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

//functions handling click event
function handleCheck(e) {
    console.log(e)
}

//adding event listeners to all checkboxes
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))