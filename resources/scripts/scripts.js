document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.querySelector('.error-message');

    confirmPasswordInput.addEventListener('input', function() {
      if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.style.display = 'block';
      } else {
        errorMessage.style.display = 'red';
      }
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.style.display = 'block';
        event.preventDefault();
      }
    });
  });