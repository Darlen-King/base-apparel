document.getElementById("validate-btn").addEventListener("click", function() {
  var email = document.getElementById("email-input").value;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var validationMsg = document.getElementById("email-validation-msg");
  if (regex.test(email)) {
    validationMsg.innerText = "";
    validationMsg.style.color = "";
  } else {
    validationMsg.innerText = "Please provide a valid email";
    validationMsg.style.color = "hsl(0, 93%, 68%)";
  }
  validationMsg.style.display = "block";
  setTimeout(function() {
    validationMsg.style.display = "none";
  }, 5000);
});