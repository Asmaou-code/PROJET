const btn = document.getElementById("startbtn");
const Accueil = document.getElementById("Accueil");
const jeu = document.getElementById("jeu");

btn.addEventListener("click", () => {

    Accueil.style.display = "none";
    jeu.style.display = "block";

});
const nombreAffiche = document.getElementById("nombre");
    let dejaClique = false;
    function genererNombre() {
    let nombre = Math.floor(Math.random() *10) + 1;
    nombreAffiche.textContent = nombre;
        dejaClique = false;

}
setInterval( genererNombre, 500);

let Score = 0;

const ScoreAffiche = document.getElementById("Score");

const boutons = document.querySelectorAll("#boutons button");

boutons.forEach((btn) => {
    btn.addEventListener("click", () => {
        alert("tu as clique !");
        let valeur = btn.textContent;
        let nombreActuel = nombreAffiche.textContent;
           console.log("bouton:", valeur,"Affiche:", nombreActuel);
        if (valeur === nombreActuel && !dejaClique){
            Score++;
            ScoreAffiche.textContent = Score;
            dejaClique = true;
        }
    });
});
let temps = 60;
const tempsAffiche = document.getElementById("temps");
const finMessage = document.getElementById("fin");

let setIntervalTemps;

btn.addEventListener("click", () =>{
    console.log("clic detecte");
     Accueil.style.display = "none";
     jeu.style.display = "block"

     //lancer le timer

    intervalTemps = setInterval(() =>{
        temps--;
        tempsAffiche.textContent = temps;

        if (temps === 0){
            clearInterval(intervalTemps);
            finMessage.style.display = "block";
        }
    },1000);
});

