function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var seconds = 7; 
var foo; 

function redirect() {
    document.location.href = 'https://ryany321.github.io/Cobra-Client-Download/';
}

function updateSecs() {
    document.getElementById("seconds").innerHTML = seconds;
    seconds--;
    if (seconds == -1) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}

countdownTimer();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  window.addEventListener("load", function(){
    setTimeout(
      function open(event){
        document.querySelector(".popup").style.display = "block";
      },
      1000
    )
  })

  document.querySelector("#close").addEventListener
  ("click", function(){
    document.querySelector(".popup").style.display = "none";
  });

/*  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.location = "https://ryany321.github.io/Cobra-Client-Download/mobile";
 }
 */