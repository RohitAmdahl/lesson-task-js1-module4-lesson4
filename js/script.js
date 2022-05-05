// const form = document.querySelector(".container");

// form.onsubmit = function(){
//   event.preventDefault();
//   console.log(event);
// }

const form = document.getElementById("contactform");
const displaySent = document.getElementById ("message");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const button = document.querySelector(".btn");

//console.log(button);
function validData() {

  if (checklength(firstName.value, 1) && checklength(lastName.value, 4) && validDataMail(email.value)) {
      button.disabled = false;
  } else {
      message.innertext = "";
      button.disabled = true;
  }
}

firstName.addEventListener("keyup", validData);
lastName.addEventListener("keyup", validData);
email.addEventListener("keyup", validData);



function submitForm(event){
  event.preventDefault();
  displaySent.innerHTML += `<div class="message"> your Massage has been sent</div>`;

  form.reset();
  event 
}

form.addEventListener("submit", submitForm);

function checklength(value, len){
  if(value.trim().length >= len) {
    return true;
  }else{
   return false;
  }
}



 function validDataMail(email) {
  const regEx = /\S+@\S+\.\S+/;
   const patternMatches = regEx.test(email);
   return patternMatches; 
 }