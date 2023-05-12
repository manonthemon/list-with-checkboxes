//selects all checkboxes
const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

// Variable for the last checked box
let lastChecked;

//functions handling click event
function handleCheck(e) {
  //Check if the shift key is down AND if the checkbox is being checked
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this; //Marks the checked box as last checked
}

//adding event listeners to all checkboxes
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
