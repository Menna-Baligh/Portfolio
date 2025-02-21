// changecolor logic
const button = document.getElementById('changeColor');
let SecColor = false ; 
button.addEventListener("click" , function (){
    if(SecColor){
        document.documentElement.style.setProperty("--bg-color","black") ;
    }else{
        document.documentElement.style.setProperty("--bg-color","#BDC3C7") ;
    }
    SecColor = !SecColor ;
});

// form Validation
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();

    let errors = false ;

    // catch data
    let fullName = document.getElementById("fullName").value.trim();
    let Email = document.getElementById("email").value.trim();
    let Phone = document.getElementById("phone").value.trim();
    let Subject = document.getElementById("subject").value.trim();
    let msg = document.getElementById("msg").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("subjectError").innerText = "";
    document.getElementById("msgError").innerText = "";
    
    // validate
    if(fullName === ""){
        document.getElementById("nameError").innerText = "Full Name Is Required";
        errors = true ;
    }

    if(!Email.includes("@") || !Email.includes(".")){
        document.getElementById("emailError").innerText = "Enter Email In Right Format";
        errors = true ;
    }

    let pattern = /^[0-9]{10,11}$/ ;
    if(Phone === "" || !pattern.test(Phone)){
        document.getElementById("phoneError").innerText = "Enter Valid Phone Number";
        errors = true ;
    }

    if(Subject === ""){
        document.getElementById("subjectError").innerText = "Subject Is Required";
        errors = true ;
    }

    if(msg === ""){
        document.getElementById("msgError").innerText = "Message Is Required";
        errors = true ;
    }

    // check errors
    if(errors){
        reutrn ;
    }

    alert("Form Submitted Successfully");


});




// to show navBar in resopsive mode
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY ;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight ;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
