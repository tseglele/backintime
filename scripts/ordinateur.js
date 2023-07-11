const ordi = document.querySelector("#ordi");
const exit = document.querySelector(".exit");
const ecran = document.querySelector("#ecran");
const niveauDeux = document.querySelector(".niveauDeux");
const motPasse = document.querySelector("#motPasse");
const inter = document.querySelector(".inter");
const lampe = document.querySelector(".lampe");
const bureau = document.querySelector("#bureau");
const lightZoom = document.querySelector('.lightZoom');

ordi.addEventListener("click", () => {
    niveauDeux.style.display = "none";
    ecran.style.display = "block";
  });

  exit.addEventListener("click", () => {
    niveauDeux.style.display = "block";
    ecran.style.display = "none";
  });
  inter.addEventListener("click", () => {
    niveauDeux.classList.toggle("lightUp");
    lampe.style.display = "block";
    bureau.style.display = "block";
    ordi.style.display = "block";
  })

lampe.addEventListener("click", () => {
  lightZoom.style.display = "block";
 niveauDeux.style.display = "none";
})
lightZoom.addEventListener("click", () => {
  lightZoom.style.display = "none";
  niveauDeux.style.display = "block";
 })
 const one = document.querySelector(".one");
 const two = document.querySelector(".two");
 const three = document.querySelector(".three");
 const mission = document.querySelector(".mission");
 const pop = [one, two, three];
 const screenOpen = document.querySelector("#ecranBureau");
 const accueil = document.querySelector(".accueil");
 const accept = document.querySelector(".accept");
 const popStep = 0;
 const popLength = pop.length;
 
 function showPopUp(popIndex) {
   const prevPop = pop[popIndex - 1];
   const currentPop = pop[popIndex];
   
   if (prevPop) {
     prevPop.style.display = "none";
   }
   
   if (currentPop) {
     currentPop.style.display = "block";
     
     if (popIndex >= popLength) {
       mission.style.display = "block";
       accueil.style.display = "none";
     }
   }
 }
 
 pop.forEach((popUp, popIndex) => {
   popUp.addEventListener("click", () => {
     showPopUp(popIndex + 1);
   });
 });
three.addEventListener("click",()=>{
  mission.style.display = "block";
       accueil.style.display = "none";
}) 
const quete =document.querySelector('#quete') 
accept.addEventListener("click",()=>{
  mission.style.display = "none";
  quete.style.display = "block";
}) 

  var motChoisi = "Lumière"; // Mot choisi
var chancesRestantes = 3; // Nombre de chances restantes

function verifierMot() {
  var motEntre = document.getElementById("motPasse").value;

  if (motEntre === motChoisi) {
    ecran.style.display = "none";
    screenOpen.style.display = "block";

  } else {
    chancesRestantes--;
    document.getElementById("chancesRestantes").textContent = chancesRestantes;

    if (chancesRestantes === 0) {
      document.getElementById("message").textContent = "Vous avez épuisé toutes vos chances. Veuillez réessayer plus tard.";
      document.getElementById("motEntre").disabled = true; 
    } else {
      document.getElementById("message").textContent = "Vous avez encore " + chancesRestantes + " chance(s).";
    }
  }
}


