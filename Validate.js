var Fname = document.getElementById("name")
var email = document.getElementById("email")
var pass = document.getElementById("password")
var Gender = document.getElementsByName("gender");
var sport = document.getElementsByName("sports");
var country = document.getElementById("country");
var submit = document.getElementById("submit");
var male = document.getElementById("male");
var female = document.getElementById("female");
var EmailPattern = /^[A-Za-z]{3}[@][0-9]{3}(.com)$/;

var tennis = document.getElementById("tennis");
var football = document.getElementById("football");
var running = document.getElementById("running");



// var count = 0;
// tennis.addEventListener("change",function(){
//     if(tennis.checked){
//         count++;
//     }
//     else{
//         count--;
//     }
// })

// football.addEventListener("change",function(){
//     if(football.checked){
//         count++;
//     }
//     else{
//         count--;
//     }
// })

// running.addEventListener("change",function(){
//     if(running.checked){
//         count++;
//     }
//     else{
//         count--;
//     }
// })






male.addEventListener("change",function(){
    document.getElementById("Gpar").textContent = "";
})
female.addEventListener("change",function(){
    document.getElementById("Gpar").textContent = "";
})

Fname.addEventListener("input",function(){
    if (Fname.value.length == 0) {
        Fname.style.border = "3px solid red";
        document.getElementById("Npar").textContent = "Your Name is required ";
    } 
    
    else if(Fname.value.length >= 3){
        Fname.style.border = "3px solid green"
        document.getElementById("Npar").textContent = "";
    }
    else{
        Fname.style.border = "3px solid red"
        document.getElementById("Npar").textContent = "Your Name must be more than 3 char";
        
    }
})

email.addEventListener("input",function(){
    if (email.value.length == 0) {
        email.style.border = "3px solid red";
        document.getElementById("Epar").textContent = "Your Email is Required";
    } 
    else if (EmailPattern.test(email.value) == false) {
        email.style.border = "3px solid red";
        document.getElementById("Epar").textContent = "Your Email is not Valid";
    } 
    else 
    {
    email.style.border = "3px solid green";
    document.getElementById("Epar").textContent = "";
    }
})

pass.addEventListener("input" , function(){
    if (pass.value.length == 0) {
        pass.style.border = "3px solid red";
        document.getElementById("Ppar").textContent = "Your Pass is required ";
    }
    else if (pass.value.length < 8) {
        pass.style.border = "3px solid red";
        document.getElementById("Ppar").textContent = "Your Pass must be more than 8 char";
    }
    else 
    {
        pass.style.border = "3px solid green";
        document.getElementById("Ppar").textContent = "";
    }
})


submit.addEventListener("click", function (e) {
    e.preventDefault();
    if (Fname.value.length == 0) {
      Fname.style.border = "3px solid red";
      document.getElementById("Npar").textContent = "Your Name is required ";
    } 
    if (email.value.length == 0) {
        email.style.border = "3px solid red";
        document.getElementById("Epar").textContent = "Your Email is Required";
    } 

    if (pass.value.length == 0) {
    pass.style.border = "3px solid red";
    document.getElementById("Ppar").textContent = "Your Pass is required ";
    }


    if (!Gender[0].checked && !Gender[1].checked) {
    document.getElementById("Gpar").textContent = "You Must Select Gender";
    }
    else 
    {
    document.getElementById("Gpar").textContent = "";
    }
    
    var checkArr = [];
    sport.forEach((element) => {
        if (element.checked) {
            checkArr.push(element);
        }
    });

    var validSport;
    if (checkArr.length < 2) 
    {
    document.getElementById("Spar").textContent = "You Must Select at least 2 sports";
    validSport = false;
    }
    else 
    {
    document.getElementById("Spar").textContent = "";
    validSport = true;
    }

    if (country.value == -1) 
    {
    document.getElementById("Cpar").textContent = "You Must Select Country";
    }
    else 
    {
    document.getElementById("Cpar").textContent = "";
    }
});