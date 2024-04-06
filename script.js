document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Save login credentials to text file
    var credentials = "Username: " + username + ", Password: " + password + "\n";
    var fileContent = new Blob([credentials], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(fileContent);
    a.download = "logins.txt";
    a.click();
});
