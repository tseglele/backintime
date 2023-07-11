const portail = document.getElementById('new');
const playWhere = document.getElementById('playWhere');
const scoreElement = document.getElementById('score');

let intervalDef;

function startInterval() {
  intervalDef = setInterval(() => {
    portail.style.display = "none";
    playWhere.style.display = "block";
  }, 3500);
}

startInterval();

var currentQuestion = 0;
var score = 0;
var scoreMax =100;

var questions = [
  {
    question: "À ton avis, combien de tonnes de cuir sont recyclées par an ?",
    choices: ["10 M", "20 M", "6 M"],
    correctAnswer: 0,
  },
  {
    question: "En France, un million de voitures finissent à la casse chaque année. À ton avis, à combien s'élève le taux de réutilisation ?",
    choices: ["90%", "80%", "57%"],
    correctAnswer: 0,
  },
  {
    question: "Quel matériau est le moins éco-responsable ?",
    choices: ["a. Batterie", "b. Carte de circuit imprimé","c.Métaux Rares"],
    correctAnswer: 0,
  },
  {
    question: "Selon toi, le robot peut-il être construit à des fins écologiques ?",
    choices: ["a. Oui", "b. Non","c.Future"],
    correctAnswer: 0,
  },
  {
    question: "Un e-mail stocké émet combien de grammes de CO² par an ?",
    choices: ["a. 0.5", "b. 10","c. 7"],
    correctAnswer: 1,
  }
];

var savaisTu = [
  {
   connais: "Un milliard d’animaux sont tués pour leur peau chaque année",
    nom: "Carmen HIJOSA",
    titre: "Inventeur du cuir végétal",
    an: "1973",
    imgSRC: "../assets/carmenHijisa.png",
  },
  {
    connais: "Un mail représente 19g de CO² accompagner d’une pièce jointe ",
    nom: "Ray Tomlinson",
    titre: "Inventeur du",
    an: "1973",
    imgSRC: "../assets/rayTomlinson.png",
  },
  {
    connais: "Fairphone est un téléphone éthique facilement réparable, fabriqué avec des matériaux issus du commerce équitable",
    nom: "Martin Cooper",
    titre: "Inventeur du téléphone portatif",
    an: "1973",
    imgSRC: "../assets/martinCooper.png",
  },
  {
    connais: "Slotbot est un automate a l’apparence d’un paresseux pour effectuer des bilan sur la faune et la flore.",
    nom: "Joseph F. Engelberger",
    titre: "Ingénieur américain - premier robot industriel",
    an: "1973",
    imgSRC: "../assets/josephfEngelberger.png",
  },
  {
    connais: "Produire un véhicule électrique demande plus d'énergie et 2 fois plus de gaz à effet deserre que le véhicules thermique ",
    nom: "August Otto",
    titre: "Inventeur du moteur à 4 temps",
    an: "1973",
    imgSRC: "../assets/augustOtto.png",
  },
  {
    connais: "Produire un véhicule électrique demande plus d'énergie et 2 fois plus de gaz à effet deserre que le véhicules thermique ",
    nom: "August Otto",
    titre: "Inventeur du moteur à 4 temps",
    an: "1973",
    imgSRC: "../assets/sound_music.png",
  },
];

var perso = document.querySelector('#savaisTu');
var persoNom = document.querySelector('.persoNom');
var persoRole = document.querySelector('.persoRole');
var persoImg = document.querySelector('#perso');
var persoAnne = document.querySelector('.persoAnne');
var information = document.querySelector('.conInfo');

var quizContainer = document.getElementById("quiz");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("submitBtn");
var resultContainer = document.getElementById("result");

function showQuestion(questionIndex) {

  var question = questions[questionIndex];
  questionElement.textContent = question.question;

  for (var i = 0; i < question.choices.length; i++) {
    var choice = question.choices[i];
    var choiceElement = document.getElementById("choice" + i);
    choiceElement.textContent = choice;
  }

  currentQuestion = questionIndex;

  quizContainer.style.display = "block";
  resultContainer.style.display = "none";

}

function checkAnswer() {
  var selectedChoice = document.querySelector('input[name="choice"]:checked');

  if (!selectedChoice) {
    alert("Veuillez sélectionner une réponse !");
    return;
  }

  var answer = parseInt(selectedChoice.value);

  if (isNaN(answer)) {
    alert("Veuillez sélectionner une réponse valide !");
    return;
  }

  var question = questions[currentQuestion];

  if (answer === question.correctAnswer) {
    score += 20;
  } 
   

  if (score > 100) {
    score = 100;
  }
  if (score >= scoreMax) {
    prix.style.display =" block";
    playWhere.style.display = "none";
  }
  scoreElement.style.width = score + "px";

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion(currentQuestion);
  } 
}

submitButton.addEventListener("click",
  checkAnswer);
  submitButton.addEventListener("click",()=>{
    quizContainer.style.display = "none"; 
  })
  submitButton.addEventListener("click", function() {
    var interval = setInterval(function() {
  
        showInfo(currentQuestion);
        clearInterval(interval);
        console.log(information.textContent)
      
    }, 100);
  });



function showInfo(infoIndex) {
var info = savaisTu[infoIndex];
  
    information.textContent = info.connais;
    persoNom.textContent = info.nom;
    persoRole.textContent = info.titre;
    persoAnne.textContent = info.an;
  
    if (info.imgSRC) {
      persoImg.src = info.imgSRC;
      persoImg.style.display = "block";
    } else {
      persoImg.style.display = "none";
    }
  
    quizContainer.style.display = "none";
    perso.style.display="block";

  }
  
perso.addEventListener("click", function () {
    perso.style.display="none";
  });
const robot = document.querySelector(".robot");
const lettre = document.querySelector(".lettre");
const tel = document.querySelector(".tel");
const moteur = document.querySelector(".moteur");
const chaise = document.querySelector(".chaise");
const lit = document.querySelector(".lit");
const lave = document.querySelector(".lave");
const poupee = document.querySelector(".poupee");
const habits = document.querySelector(".habits");
const fil = document.querySelector(".fil");
const lavbo = document.querySelector(".lavbo");
const dechet = document.querySelector(".dechet");

robot.addEventListener("click", function () {
  showQuestion(0);
})

lettre.addEventListener("click", function () {
  showQuestion(1);

});

tel.addEventListener("click", function () {
  showQuestion(2);

});

moteur.addEventListener("click", function () {
  showQuestion(3);

});

chaise.addEventListener("click", function () {
  showQuestion(4);
});

var popup = document.getElementById("popup");

lit.addEventListener("click", function () {
  popup.style.display = "block";
  });
  
  lave.addEventListener("click", function () {
    popup.style.display = "block";
  });
  
  poupee.addEventListener("click", function () {
    popup.style.display = "block";
  });
  
  habits.addEventListener("click", function () {
    popup.style.display = "block";
  });
  
  fil.addEventListener("click", function () {
    popup.style.display = "block";
  });
  
  lavbo.addEventListener("click", function () {
    popup.style.display = "block";
  });

  popup.addEventListener("click", function () {
    popup.style.display = "none";
  });
  
  dechet.addEventListener("click", function () {
    popup.style.display = "block";
  });
const prix = document.querySelector('#prix')
  if (score==100) {
    prix.style.display =" block";
    playWhere.style.display = "none";
  }