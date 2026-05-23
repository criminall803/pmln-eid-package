const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const cnic = document.getElementById("cnic").value.trim();

  const phonePattern = /^03\d{2}-?\d{7}$/;

  const cnicPattern = /^\d{5}-?\d{7}-?\d{1}$/;

  if (!phonePattern.test(phone)) {

    alert("Please enter a valid phone number");

    return;
  }

  if (!cnicPattern.test(cnic)) {

    alert("Please enter a valid CNIC number");

    return;
  }

  // WhatsApp Share

  const message =
    "Apply now for PMLN Eid Package.";

  const whatsappURL =
    `https://wa.me/?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  successMessage.innerHTML =
    "Registration submitted successfully!";

  form.reset();

});