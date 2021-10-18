
//local storage configuration to store data
function persistInput(input) {
  var key = "input-" + input.id;

  var storedValue = localStorage.getItem(key);

  if (storedValue)
    input.value = storedValue;

  input.addEventListener('input', function () {
    localStorage.setItem(key, input.value);
  });
}

// storing data and popup thank you message function
const signUp = e => {
  let formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    contactNumber: document.getElementById('contactNumber').value,
    female: document.getElementById('female').value,
    male: document.getElementById('male').value,
    other: document.getElementById('other').value,
    consent: document.getElementById('consent').value,

  }
  localStorage.setItem('formData', JSON.stringify(formData));

  //console.log(localStorage.getItem('formData'));


  // submit button loader JQuery code implementation
  $(".loading-icon").removeClass("hide");
  $(".btn").attr("disabled", true);
  $(".btn-txt").text("Submitting...");

  setTimeout(function () {
    $(".loading-icon").addClass("hide");
    $(".btn").attr("disabled", false);
    $(".btn-txt").text("Submit");
  }, 3000);

  //Popup code implementation
  setTimeout(function () {
    document.getElementsByClassName("popup")[0].classList.add("active");
    document.getElementById("form-id").reset();
  }, 3000)


  document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");

  });

  // end
  e.preventDefault();
}




