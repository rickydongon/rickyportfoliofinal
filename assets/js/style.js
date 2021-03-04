$(document).ready(function(){

function submitForm() {
    document.contact-form.submit();
    document.contact-form.reset();
    }

    /**Navbar ***********************/
    window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navstick");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.active').click(function(){
  
  $('#navbarNav').delay(3000).removeClass('show');
  
});


});