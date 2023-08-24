document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const createAccountButton = document.getElementById("create-account");
  const errorMessage = document.createElement("p");
  errorMessage.className = "error-message";
  errorMessage.style.color = "red";
  errorMessage.style.display = "none";

  confirmPasswordInput.parentNode.appendChild(errorMessage);

  createAccountButton.addEventListener("click", function (event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
      event.preventDefault();
      errorMessage.textContent = "Passwords do not match!";
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
      showWelcomeMessage(); 
    }
  });

  function showWelcomeMessage() {
    const textSection = document.querySelector(".text-section");
    textSection.innerHTML = "<h2>Welcome! Your account has been successfully created.</h2>";
  }
});