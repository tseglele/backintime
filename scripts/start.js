const play = document.querySelector("#play");
const start = document.querySelector("#start-play");
const skipButtons = document.querySelectorAll(".skip-button");

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const skip = document.querySelectorAll(".skip");
const steps = [one, two, three,first];

let currentStep = 0;
const logo_container = document.querySelector("#logo_start");

function fadeInLogo() {
  const logo = document.querySelector("#logo");
  let opacity = 0;
  const intervalDuration = 80; 
  logo.style.display = "block"; 

  const fadeInInterval = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
      setTimeout(() => {
        start.style.display = "block"; 
        logo_container.style.display = "none"; 
        logo.style.display = "none";
      }, 1000);
    } else {
      opacity += 0.01; 
      logo.style.opacity = opacity.toString();
    }
  }, intervalDuration);
}

fadeInLogo();


play.addEventListener("click", () => {
    start.style.display = "none";
    steps[currentStep].style.display = "block";
    startInterval();
  });

 
  function showStep(stepIndex) {
    if (stepIndex < steps.length) {
      steps[stepIndex - 1].style.display = "none";
      steps[stepIndex].style.display = "block";
      currentStep = stepIndex;
    }
  }
  

  skipButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearInterval(intervalId);
      steps[currentStep].style.display = "none";
      currentStep = index + 1;
      showStep(currentStep);
      startInterval();
    });
  });

var writeText = document.getElementById('typewriter');

var typewriter1 = new Typewriter(writeText, {
  loop: true ,
  deleteAll: 1000,
});

typewriter1
  .pauseFor(1500)
  .typeString('Enfin réveiller,')
  .pauseFor(1500)
  .start();

  var writeText2 = document.getElementById('typewriter2');

  var typewriter2 = new Typewriter(writeText2, {
    loop: true,
    autoStart: true,
    deleteAll: 500,
  });
  
  typewriter2
    .pauseFor(500)
    .typeString('Bonsoir! Vous devez être Nikola Tesla.Nous sommes actuellement le 9 décembre 2026, voila sept jours que la Terre a explosé.Tu es le seul survivant de cette tragédie, tu as été choisie pour la mission suivante ,sauver la Terre.')
    .pauseFor(5000)
    .start();

  function startInterval() {
    intervalId = setInterval(() => {
      showStep(currentStep + 1);
    }, 2000);
  }
  const skipMeets = document.querySelectorAll(".skip-meet");
  const meets = [first, second];
  const meetsStep = 0;
  const meetsLength = meets.length;
  
  function showMeet(meetIndex) {
    const prevMeet = meets[meetIndex - 1];
    const currentMeet = meets[meetIndex];
  
    prevMeet.style.display = "none";
    currentMeet.style.display = "block";
  }
  
  skipMeets.forEach((link, meetIndex) => {
    link.addEventListener("click", () => {
      showMeet(meetIndex + 1);
    });
  });
