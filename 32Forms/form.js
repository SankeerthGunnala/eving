function ValidateFname(){
    var name = document.getElementById('fname').value;
    if(name==' '||name==""){
        document.getElementById('fout').innerText="Please enter first name"
    }else{
        document.getElementById('fout').innerText=""
    }
}

const ValidateEmail = () => {
    var email = document.getElementById('email').value;
    if(email==' '||email==""){
        document.getElementById('eout').innerText="Please enter email"
    }else{
        if(email.match("^([a-zA-Z0-9#]+)@([a-zA-Z0-9#]+)\.([a-zA-Z]{2,5})$")===null){
            document.getElementById('eout').innerText="Please enter valid email"
        }else{
            document.getElementById('eout').innerText=""
        }
    }
}

const ValidatePwd = () => {
    var pwd = document.getElementById('password').value;
    if(pwd.length<15){
        if(pwd.length<8){
            document.getElementById('pout').innerText="Min length of password is 8";
            document.getElementById('ppout').style.background="red";
            document.getElementById('ppout').style.visibility="visible";
        }else if(pwd.length<10){
            document.getElementById('pout').innerText="";
            document.getElementById('ppout').style.background="orange";
        } 
    }else{
        document.getElementById('ppout').style.background="green";
    }
}

function ValidateCpwd(){
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    if(pwd !== cpwd){
        document.getElementById('cpout').innerText="Confirm password does not match"
    }else{
        document.getElementById('cpout').innerText=""
    }
}


const validateseats = () => {
    var seats = document.getElementById('seats').value;
    if(seats.length<6){
       if(seats.length<1){
        document.getElementById('sout').innerText="Min length of password is 8";
            document.getElementById('ssout').style.background="red";
            document.getElementById('ssout').style.visibility="visible";   
       }else if(seats.length<6){document.getElementById('sout').innerText="";
       document.getElementById('ssout').style.background="orange";
    }
      }else{
          document.getElementById('ssout').style.background="green";
      }
}

function validateCseats(){
    var seats = document.getElementById('seats').value;
    var Cseats = document.getElementById('Cseats').value;
    if(seats !== Cseats){
        document.getElementById('Cseats').innerText="confirm seats does not match"
        }else{
            document.getElementById('Cseats').innerText=""
        }
}


document.getElementById('sout').innerText=`No of seats selected is ${seats}`