//Get modal elements
var modal = document.getElementById('simplemodal');
//get open modal button
var modalbtn = document.getElementById('modalbtn');
//Get close button
var closebtn = document.getElementsByClassName('closebtn')[0];

//listen for click
modalbtn.addEventListener('click',openModal);
//Function to close click 
closebtn.addEventListener('click',closeModal);

//listen for outside click
window.addEventListener('click',outsideclick);

//Function to open modal
function openModal(){
    modal.style.display='block';
}

//Function to close 
function closeModal(){
    modal.style.display='none';
}

//Function to close modal if outside click
function outsideclick(e){
    if(e.target == modal){
        modal.style.display='none';
    }
}

//Top Button

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
