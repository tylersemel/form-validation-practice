import "./styles.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

console.log("I'm working!");

const Validator = (() => {
  const form = document.querySelector('form');
  form.addEventListener("submit", handleSubmit);
  form.addEventListener("input", validate);

  // const email = form.querySelector('#email');
  // // email.addEventListener("input", validateEmail);

  // const country = form.querySelector('#country');
  // // country.addEventListener("input", validateCountry);
  
  // const postalCode = form.querySelector('#postal-code');
  // // postalCode.addEventListener("input", validatePostalCode);

  // const password = form.querySelector('#password');
  // // password.addEventListener("input", validatePassword);
  
  // const passConfirm = form.querySelector('#pass-confirm');
  // passConfirm.addEventListener("input", validatePassword);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function validate(event) {
    const inputElement = event.target;
    const errorElement = inputElement.parentElement.nextSibling;
     
    console.log(errorElement);
    
    if (inputElement.validity.valid) {
      errorElement.textContent = "";
      errorElement.className = "error";
    }
    else {
      switch (inputElement.id) {
        case "email":
          showEmailError(inputElement, errorElement);
          break;
        default:

      }
    }
  }

  //might only work for input. not select for example
  function showEmailError(email, error) {
    console.log("here");
    if (email.validity.valueMissing) {
      error.textContent = "Please enter an email address";
    }

    error.className = "error active";
  }  

  
})();


