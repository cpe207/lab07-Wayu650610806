//simple email validation
const emailIn = document.querySelector("#email-input");
const firstN = document.querySelector("#first-name-input");
const lastN = document.querySelector("#last-name-input");
const passW = document.querySelector("#password-input");
const btn = document.querySelector("#submit-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}
emailIn.onkeyup = () => {
  emailIn.classList.remove("is-valid");
  emailIn.classList.remove("is-invalid");
};
firstN.onkeyup = () => {
  firstN.classList.remove("is-valid");
  firstN.classList.remove("is-invalid");
};
lastN.onkeyup = () => {
  lastN.classList.remove("is-valid");
  lastN.classList.remove("is-invalid");
};
passW.onkeyup = () => {
  passW.classList.remove("is-valid");
  passW.classList.remove("is-invalid");
};
btn.onclick = () => {
  let checkEmail = false;
  let checkF = false;
  let checkL = false;
  let checkP = false;
  if (firstN.value.length > 0) {
    firstN.classList.add("is-valid");
    checkF = true;
  } else {
    firstN.classList.add("is-invalid");
  }
  if (lastN.value.length > 0) {
    lastN.classList.add("is-valid");
    checkL = true;
  } else {
    lastN.classList.add("is-invalid");
  }
  if (validateEmail(emailIn.value)) {
    emailIn.classList.add("is-valid");
    checkEmail = true;
  } else {
    emailIn.classList.add("is-invalid");
  }
  if (passW.value.length > 5) {
    passW.classList.add("is-valid");
    checkP = true;
  } else {
    passW.classList.add("is-invalid");
  }
  if (checkEmail && checkF && checkL && checkP) {
    alert("Registered successfully");
  }
};
