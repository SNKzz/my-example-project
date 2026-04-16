 function mouseOverTextForgetPw() {
    document.getElementById("text_forgetpw").style.color = "red";
    
  }
    function mouseOutTextForgetPw() {
    document.getElementById("text_forgetpw").style.color = "black";
  }

  function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    console.log(username);
    console.log(password)
    if (username === "" || password === "") {
      alert("Please enter username and password");
    } else {
      if (username === "admin" && password === "admin") {
      window.location.href = "https://codegym.vn/gioi-thieu-codegym/";
      alert("Login successful");
    } else {
      alert("Wrong username or password!");
    }
    }
  }