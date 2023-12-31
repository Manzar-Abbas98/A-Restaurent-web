const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });

  // Hardcoded username and password
  const Username = 'admin';
  const Password = 'password123';

 
  function handleLogin() {
    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    if (username === Username && password === Password) {

     window.location.href = 'main.html';
    }
    else if (username !== Username && password !== Password) {

        errorMessage.textContent = 'Incorrect username & Password';
       } 
    else if (username !== Username) {
      // Incorrect login, display an error message
      errorMessage.textContent = 'Incorrect username';
    }
    else if (password !== Password){
          // Incorrect login, display an error message
      errorMessage.textContent = 'Incorrect password';
    }

  }
  

  // Attach the login form submission handler to the login button
  document.getElementById('login-form').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    handleLogin(); // Call the login function
  });