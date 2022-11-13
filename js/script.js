let displayDate = document.getElementById('date');
let displayHeure = document.getElementById('heure');
let boutonClock = document.getElementById('clock');
let boutonCalendrier = document.getElementById('calendar');
let heure24 = true;
let displayVisible = true;

function afficherDate() {
    let dateActuel = new Date();
    //Variables
    let numJour = dateActuel.getDate(); //numéro du jour
    let mois = dateActuel.getMonth();
    let an = dateActuel.getFullYear();
    let jour = dateActuel.getDay(); //nom du jour
    let affichageNomJour = "";
    let affichageNomMois = "";
    const jourSemaine = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const nomMois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

    //Transformation des valeurs numériques 
    affichageNomJour = jourSemaine[jour];
    affichageNomMois = nomMois[mois];

    boutonCalendrier.onclick = function cacherDate(boutonCalendrier) {
        displayVisible = !displayVisible;
    }

    //Display
    if (displayVisible == true) {
        displayDate.innerHTML = affichageNomJour + " le " + numJour + " " + affichageNomMois + " " + an;
    }
    else if (displayVisible == false) {
        displayDate.innerHTML = "";
    }
}

function afficherHeure() {
    let dateActuel = new Date();
    //Variables
    let heure = dateActuel.getHours();
    let minute = dateActuel.getMinutes();
    let seconde = dateActuel.getSeconds();
    let heureChange = "";
    let AMouPM = " AM";

    boutonClock.onclick = function changerAffichage12h() {
        heure24 = !heure24;
    }

    //Transformation AM ou PM 
    if (heure > 12) {
        AMouPM = " PM";
        heureChange = heure - 12;
    }
    else {
        heureChange = heure;
    }

    //24h ou 12h
    if (heure24 == true)
    {
        displayHeure.innerHTML = heure + ":" + minute + ":" + seconde;
    }
    else if (heure24 == false)
    {
        displayHeure.innerHTML = heureChange + ":" + minute + ":" + seconde + AMouPM;
    }
}   

setInterval(afficherDate, 1000);
setInterval(afficherHeure, 1000);