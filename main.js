// Etape 1 - Sélectionner nos éléments
const formulaire = document.querySelector("#formulaire");
const input = document.querySelector("#prix");
const erreur = document.querySelector("small");

let coups = 0
let nombreChoisie ;
// Etape 6 - Créer la fonction vérifier
function verifier(nombre) {
    let instruction = document.createElement('div')
    if (nombre < nombreAleatoire) {
        //c'est plus
        //ajouter un contenu #1 (4) c'est plus
        instruction.innerHTML +=` # ${coups} (${nombreChoisie} ) c'est plus `
        instruction.classList.add('instruction')
        instruction.classList.add('plus')
    }else if (nombre > nombreAleatoire){
        // c'est moins
         instruction.innerHTML +=` # ${coups} (${nombreChoisie}) c'est mois `
        instruction.classList.add('instruction')
        instruction.classList.add('moins')
    }else{
        // felicitation c'est le juste prix
          instruction.innerHTML +=` # ${coups} (${nombreChoisie}) Félicitaton c'est le juste prix `
        instruction.classList.add('instruction ')
        instruction.classList.add('fini') 
        input.disabled = true;
    }
      document.querySelector('#instructions').prepend(instruction);
  
}
// Etape 2 - Cacher l'erreur
erreur.style.display = "none";
// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 1001);

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre

input.addEventListener("keyup", () => {
  if (isNaN(input.value)) {
    erreur.style.display = "block";
  } else {
    erreur.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isNaN(input.value) || input.value === "") {
    input.style.borderColor = "crimson";
  }else{
    coups++
    input.style.borderColor ="silver"
    nombreChoisie = input.value;
    input.value = ""
    verifier(nombreChoisie)
  }
});

