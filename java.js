function validation(){
    var username = document.getElementById('exampleInputName').value;
    var email = document.getElementById('exampleInputEmail1').value;
    var number = document.getElementById('exampleInputNumber').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var cpassword = document.getElementById('exampleInputPassword2').value;

    var usercheck = /^[A-Za-z ]{3,50}$/;
    var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
    var numbercheck = /^[6789][0-9]{9}$/;
    var passwordcheck = /^[A-Za-z0-9_!@#$%^&*]{8,16}$/;

    if (usercheck.test(username)){
        document.getElementById('errorname').innerHTML = " ";
    }
    else{
        document.getElementById('errorname').innerHTML = "Please use only Alpabets";
        return false;
    }
    if (emailcheck.test(email)){
        document.getElementById('erroremail').innerHTML = " ";
    }
    else{
        document.getElementById('erroremail').innerHTML = "Please follow valid email syntax";
        return false;
    }

    if (numbercheck.test(number)){
        document.getElementById('errornumber').innerHTML = " ";
    }
    else{
        document.getElementById('errornumber').innerHTML = "Invalid Number";
        return false;
    }

    if (passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorpassword').innerHTML = "Please use alphabet, numeric, special character";
        return false;
    }

    if (cpassword.match(password)){
        document.getElementById('errorcpassword').innerHTML = " ";
    }
    else{
        document.getElementById('errorcpassword').innerHTML = "Password is not matching";
        return false;
    } 
}

function validation1(){
    var email = document.getElementById('exampleInputEmail2').value;
    var cpassword = document.getElementById('exampleInputPassword3').value;

    if (emailcheck.test(email)){
        document.getElementById('erroremail1').innerHTML = " ";
    }
    else{
        document.getElementById('erroremail1').innerHTML = "Please follow valid email syntax";
        return false;
    }

    if (passwordcheck.test(password)){
        document.getElementById('errorpassword1').innerHTML = " ";
    }
    else{
        document.getElementById('errorpassword1').innerHTML = "Please use alphabet, numeric, special character";
        return false;
    }


}    
