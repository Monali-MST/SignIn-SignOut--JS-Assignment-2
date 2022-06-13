// **********************************************************************************
//                     Age Calculate Using Input Birthday
// **********************************************************************************

const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    let birthMonth,birthDate,birthYear;

    let birthDetails = {
        date:inputDate.getDate(),
        month:inputDate.getMonth()+1,
        year:inputDate.getFullYear()
    }
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChaecker(currentYear);

    if(
        birthDetails.year > currentYear || 
        (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Invalid Birthday");
        displayResult("-","-","-");
        return;
    }

    birthYear = currentYear - birthDetails.year;

    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth-2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }

    displayResult(birthDate,birthMonth,birthYear);

}

function leapChaecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
    
}

function displayResult(bDate,bMonth,bYear){
    document.getElementById("year").textContent = bYear;
    document.getElementById("month").textContent = bMonth;
    document.getElementById("day").textContent = bDate;
}

// **********************************************************************************
//                             Form Validation
// **********************************************************************************


const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const dobInput = document.getElementById('date-input');
const email = document.getElementById('eml');
const uname = document.getElementById('uname');
const password1 = document.getElementById('psw');
const password2 = document.getElementById('psw2');
const signinUname = document.getElementById('usname');
const signinPassword = document.getElementById('pw');

const firstName = document.querySelector(".fname");
const lastName = document.querySelector(".lname");
const birthday = document.querySelector(".date-input");
const eml = document.querySelector(".eml");
const userName = document.querySelector(".uname");
const pw1 = document.querySelector(".psw1");
const pw2 = document.querySelector(".psw2");
const signinUserName = document.querySelector(".usname");
const signinPsw = document.querySelector(".pw");

// **********************************************************************************
//                              Sign Up Form Validation
// **********************************************************************************

function validation(){
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const dobValue = dobInput.value.trim();
    const emailValue = email.value.trim();
    const unameValue = uname.value.trim();
    const psw1 = password1.value.trim();
    const psw2 = password2.value.trim();
    
    

    if(fnameValue === '') {
        firstName.classList.remove("success");
        firstName.classList.add("error");
        document.getElementById("fname-noti").innerHTML = "Enter first name";
        document.getElementById("fname-noti").style.color = "rgb(248, 3, 3)";
    } else {
        firstName.classList.remove("error");
        firstName.classList.add("success");
        document.getElementById("fname-noti").innerHTML = "Looks good";
        document.getElementById("fname-noti").style.color = "rgb(67, 186, 7)";
    }

    if(lnameValue === '') {
        lastName.classList.remove("success");
        lastName.classList.add("error");
        document.getElementById("lname-noti").innerHTML = "Enter last name";
        document.getElementById("lname-noti").style.color = "rgb(248, 3, 3)";
    } else {
        lastName.classList.remove("error");
        lastName.classList.add("success");
        document.getElementById("lname-noti").innerHTML = "Looks good";
        document.getElementById("lname-noti").style.color = "rgb(67, 186, 7)";
    }

    if(dobValue === '') {
        birthday.classList.remove("success");
        birthday.classList.add("error");
        document.getElementById("dob-noti").innerHTML = "Enter your birthday";
        document.getElementById("dob-noti").style.color = "rgb(248, 3, 3)";
    } else {
        birthday.classList.remove("error");
        birthday.classList.add("success");
        document.getElementById("dob-noti").innerHTML = "Looks good";
        document.getElementById("dob-noti").style.color = "rgb(67, 186, 7)";
    }

    if(emailValue === '') {
        eml.classList.remove("success");
        eml.classList.add("error");
        document.getElementById("email-noti").innerHTML = "Enter your Email";
        document.getElementById("email-noti").style.color = "rgb(248, 3, 3)";
    } else if(emailValue.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
        eml.classList.remove("error");
        eml.classList.add("success");
        document.getElementById("email-noti").innerHTML = "Looks good";
        document.getElementById("email-noti").style.color = "rgb(67, 186, 7)";		
	} else {
        eml.classList.remove("success");
        eml.classList.add("error");
        document.getElementById("email-noti").innerHTML = "Enter a valied email";
        document.getElementById("email-noti").style.color = "rgb(248, 3, 3)";
    }

    if(unameValue === '') {
        userName.classList.remove("success");
        userName.classList.add("error");
        document.getElementById("uname-noti").innerHTML = "Enter Username";
        document.getElementById("uname-noti").style.color = "rgb(248, 3, 3)";
    } else if (unameValue.match(/^[a-z]*$/)){
        userName.classList.remove("error");
        userName.classList.add("success");	
        document.getElementById("uname-noti").innerHTML = "Looks good";
        document.getElementById("uname-noti").style.color = "rgb(67, 186, 7)";	
	} else {
        userName.classList.remove("success");
        userName.classList.add("error");
        document.getElementById("uname-noti").innerHTML = "Only simple letters are accepted";
        document.getElementById("uname-noti").style.color = "rgb(248, 3, 3)";
    }

    if(psw1 === '') {
        pw1.classList.remove("success");
        pw1.classList.add("error");
        document.getElementById("psw1-noti").innerHTML = "Enter your password";
        document.getElementById("psw1-noti").style.color = "rgb(248, 3, 3)";
    } else if (psw1.match(/^(?=.*\d)(?=.*[a-zA-Z]).{6,15}$/)){
        pw1.classList.remove("error");
        pw1.classList.add("success");	
        document.getElementById("psw1-noti").innerHTML = "Looks good";
        document.getElementById("psw1-noti").style.color = "rgb(67, 186, 7)";	
	} else {
        pw1.classList.remove("success");
        pw1.classList.add("error");
        document.getElementById("psw1-noti").innerHTML = "between 6 and 15 character<br>Atleast one letter<br>Atleast one number";
        document.getElementById("psw1-noti").style.color = "rgb(248, 3, 3)";
    }

    if(psw2 === '') {
        pw2.classList.remove("success");
        pw2.classList.add("error");
        document.getElementById("psw2-noti").innerHTML = "Enter your password";
        document.getElementById("psw2-noti").style.color = "rgb(248, 3, 3)";
    } else if(psw1 === psw2){
        if (psw2.match(/^(?=.*\d)(?=.*[a-zA-Z]).{6,15}$/)){
            pw2.classList.remove("error");
            pw2.classList.add("success");
            document.getElementById("psw2-noti").innerHTML = "Looks good";
            document.getElementById("psw2-noti").style.color = "rgb(67, 186, 7)";		
        }
        else {
            pw2.classList.remove("success");
            pw2.classList.add("error");
            document.getElementById("psw2-noti").innerHTML = "between 6 and 15 character<br>Atleast one letter<br>Atleast one number";
            document.getElementById("psw2-noti").style.color = "rgb(248, 3, 3)";
        }	
	} else {
        pw2.classList.remove("success");
        pw2.classList.add("error");
        document.getElementById("psw2-noti").innerHTML = "Password is not same";
        document.getElementById("psw2-noti").style.color = "rgb(248, 3, 3)";
    }

 // **********************************************************************************
//                              Sign in Form Validation
// **********************************************************************************   

    
}

function validation2(){
    const inUname = signinUname.value.trim();
    const inPsw = signinPassword.value.trim();

    if(inUname === '') {
        signinUserName.classList.remove("success");
        signinUserName.classList.add("error");
        document.getElementById("lg-username-noti").innerHTML = "Enter your username";
        document.getElementById("lg-username-noti").style.color = "rgb(248, 3, 3)";
    } else {
        signinUserName.classList.remove("error");
        signinUserName.classList.add("success");
        document.getElementById("lg-username-noti").innerHTML = "Looks good";
        document.getElementById("lg-username-noti").style.color = "rgb(67, 186, 7)";
    }

    if(inPsw === '') {
        signinPsw.classList.remove("success");
        signinPsw.classList.add("error");
        document.getElementById("lg-password-noti").innerHTML = "Enter your password";
        document.getElementById("lg-password-noti").style.color = "rgb(248, 3, 3)";
    } else {
        signinPsw.classList.remove("error");
        signinPsw.classList.add("success");
        document.getElementById("lg-password-noti").innerHTML = "Looks good";
        document.getElementById("lg-password-noti").style.color = "rgb(67, 186, 7)";
    }
}