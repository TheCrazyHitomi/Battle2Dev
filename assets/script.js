function checkPasswordStrength(password){
    //définir les variables de départ
    let strength = 0;
    let tips = "";
    

    // verrification de la longueur du MdP
    if (password.length < 8){
        tips += "Mot de passe trop court";
    }
    else {
        strength += 1;
    }

    // Vérification des caractères Majuscule et Minuscule
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) { // regEx pour rechercher les caractères minuscule et majuscules 
        strength +=1;
    }
    else {
        tips += " Utiliser des minuscules et des majuscules";
    }

    // Vérification de l'utilisation de nombres 
    if (password.match(/\d/)) { // regEx pour rechercher les chiffres
        strength += 1;
    }
    else {
        tips += "inclure au minimum 1 chiffre";
    }

    // Vérification d'utilisation de caractères spéciaux
    if (password.match(/[^a-zA-Z\d]/)) { // regEx pour rechercher les caractères spéciaux
        strength +=1;
    }
    else {
        tips += "Inclure un caractère Spécial";
    }


    //let strengthElement = document.getElementById("passwordStrength");


    // retour sur les résultats obtenues
    if (strength < 2){
        return "Mot de passe faible" + tips;
        //strengthElement.style.color = "red";
    } else if (strength === 2){
        return "Mot de passe moyen" + tips;
        //strengthElement.style.color = "orange";
    } else if (strength === 3){
        return "Mot de passe fort" + tips;
        //strengthElement.style.color = "black";
    } else {
        return "Mot de passe Validé" + tips;
        //strengthElement.style.color = "green";
    }


}


const btnConnexion = document.querySelector("button");
const inputPassword = document.getElementById("password");

btnConnexion.addEventListener("click", function () {
    const errorPassword = checkPasswordStrength(inputPassword.value);
    alert(errorPassword);
});

