// ** Module de vérification de mot de passe & validation du formulaire **


const strengthElement = document.getElementById("passwordStrength");

function checkPasswordStrength(password){
    //définir les variables de départ
    let strength = 0;
    let tips = "";
    

    // verrification de la longueur du MdP
    if (password.length < 8){
        tips += "<li>Mot de passe trop court</li>";
    }
    else {
        strength += 1;
    }

    // Vérification des caractères Majuscule et Minuscule
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) { // regEx pour rechercher les caractères minuscule et majuscules 
        strength +=1;
    }
    else {
        tips += "<li>Utiliser des minuscules et des majuscules</li>";
    }

    // Vérification de l'utilisation de nombres 
    if (password.match(/\d/)) { // regEx pour rechercher les chiffres
        strength += 1;
    }
    else {
        tips += "<li>inclure au minimum 1 chiffre</li>";
    }

    // Vérification d'utilisation de caractères spéciaux
    if (password.match(/[^a-zA-Z\d]/)) { // regEx pour rechercher les caractères spéciaux
        strength +=1;
    }
    else {
        tips += "<li>Inclure un caractère Spécial</li>";
    }


    


    // retour sur les résultats obtenues
    if (strength < 2){
        strengthElement.style.color = "red";
        return "Mot de passe faible" + tips;
    } else if (strength === 2){
        strengthElement.style.color = "orange";
        return "Mot de passe moyen" + tips;
    } else if (strength === 3){
        strengthElement.style.color = "black";
        return "Mot de passe fort" + tips;
    } else {
        strengthElement.style.color = "green";
        return "Mot de passe Validé" + tips;
    }

};


const btnConnexion = document.querySelector("button");
const inputPassword = document.getElementById("password");

inputPassword.addEventListener("keydown", function () {
    strengthElement.innerHTML = checkPasswordStrength(inputPassword.value);
});

btnConnexion.addEventListener("click", function (event) {
    event.preventDefault();
    if (strengthElement.innerHTML === "Mot de passe Validé") {
        window.open("coucou.html");
    } else {
        window.alert("Fatal Error 418");
    }
});



// ** Dark mode Toggle **

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  document.getElementById("hero").classList.toggle("dark");
  console.log("kakoukaoku");
});