document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var hasError = false;
  
    // Reset error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    // Simple validation
    if(username.length < 3) {
      document.getElementById('usernameError').textContent = 'Username must be at least 3 characters.';
      hasError = true;
    }
    if(!email.match(/^\S+@\S+\.\S+$/)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email.';
      hasError = true;
    }
    if(password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      hasError = true;
    }
  
    if(!hasError) {
      // Submit the form or send data to server
      console.log('Form submitted', { username, email, password });
      // Can use AJAX or Fetch API to send data to the server here
      alert('Registration successful!');
    }
  });