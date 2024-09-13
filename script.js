function wishSriramanavami() {
    var nameInput = document.getElementById("nameInput").value;
    var wishOutput = document.getElementById("wishOutput");
    var letters = /^[A-Za-z\s]+$/;
    var audio = document.querySelector('audio');
    var button = document.querySelector('button');
    button.addEventListener('click', function() {
    audio.play();
    });

    if (nameInput.trim() === "") {
      wishOutput.innerHTML = "Please enter your name.";
    } else if(!letters.test(nameInput)){
      wishOutput.innerHTML="Please enter only alphabets"
    }
    else {
      wishOutput.innerHTML = "Happy Sri Rama Navami, " + nameInput + "!";
      Effectconfetti();
    }
  }

function Effectconfetti()
{
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.6 },
  });
}
  