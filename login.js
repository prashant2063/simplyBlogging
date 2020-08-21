document.getElementById("loginBtn").addEventListener("click", function(event){
    event.preventDefault()
    var usernameEle = document.getElementById("username");
    var passwordEle = document.getElementById("password");
    var pass = passwordEle.value
    var user = usernameEle.value
    var msg = "";
    var isValid = true;
    if(pass=="" && user==""){
        msg += "Please enter username and paswoord!";
        isValid = false;
    }
    else if(user==""){
        msg += "Please enter username!";
        isValid = false;
    }
    else if(pass==""){
        msg += "Please enter password!";
        isValid = false;
    }
    else{
        var up = /[A-Z]/;
        var lo = /[a-z]/;
        var num = /[0-9]/;
        var sp = /^[A-Za-z0-9 ]+$/;
        if(up.test(pass) == false || lo.test(pass)==false || num.test(pass)==false || sp.test(pass)==true){
            msg += "Please make sure that your password contain atleast 1 uppercase, 1 lowercase, 1 digit and 1 special character!"
            isValid = false;
        }
    }
    if(isValid == true){
        window.location.href = "index.html";
    }
    else{
        document.getElementById("err-msg").innerHTML = msg;
    }
});