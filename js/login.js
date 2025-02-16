document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const validUsername = "admin";
    const validPassword = "123";
    
    if (username === validUsername && password === validPassword) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("errorMessage").style.display = "none";
        
        setTimeout(function() {
            window.location.href = "index.html";
        }, 900);
    } else {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("successMessage").style.display = "none";
    }
});