
export const Validator = (() => {
  const form = document.querySelector('form');
  form.addEventListener("submit", handleSubmit);
  form.querySelector("#email").addEventListener("input", checkEmail);
  const countrySelector = form.querySelector("#country");
  countrySelector.addEventListener("onchange", checkPostalCode);

  const postalCode = form.querySelector("#postal-code");
  postalCode.addEventListener("input", checkPostalCode);
//   form.querySelector("#password").addEventListener("input", checkPassword);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");

  }

  function checkEmail(event) {
    const email = event.target;
    const errorElement = email.parentElement.querySelector('span');
     
    console.log(email);
    
    if (email.validity.valid) {
      errorElement.textContent = "";
      errorElement.className = "error";
    }
    else {
        showEmailError(email, errorElement);
    }
  }

  //might only work for input. not select for example
  function showEmailError(email, error) {
    if (email.validity.valueMissing) {
        error.textContent = "Please enter an email address";
    }
    else if (email.validity.typeMismatch) {
        error.textContent = "This should be an email address!";
    }

    error.className = "error active";
  }  

  function checkPostalCode() {
    // For each country, defines the pattern that the postal code has to follow
    const constraints = {
        ch: [
        "^(CH-)?\\d{4}$",
        "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
        ],
        fr: [
        "^(F-)?\\d{5}$",
        "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
        ],
        de: [
        "^(D-)?\\d{5}$",
        "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
        ],
        nl: [
        "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
        "Dutch postal codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
        ],
    };

    // Read the country id
    const country = countrySelector.value;
    const error = postalCode.parentElement.querySelector('span');

    // Build the constraint checker
    const constraint = new RegExp(constraints[country][0], "");
    console.log(constraint);

    if (postalCode.validity.valueMissing) {
        error.textContent = "Please enter a postal code!";
    }
    else if (constraint.test(postalCode.value)) {
        // The postal code follows the constraint, we use the ConstraintAPI to tell it
        error.textContent = "";
        error.className = "error";
        postalCode.validity.valid = true;
    } else {
        // The postal code doesn't follow the constraint, we use the ConstraintAPI to
        // give a message about the format required for this country
        error.textContent = constraints[country][1];
        error.className = "error active";
        postalCode.validity.valid = false;
    }
}

  
});