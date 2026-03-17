// ==============================
// SELECTION DES ELEMENTS DU DOM
// ==============================

// ----------- Méthode 1 : querySelector -----------
// Sélectionne le PREMIER élément qui correspond au sélecteur

// Sélection du premier <p> de la page
const el = document.querySelector("p");

// Exemple pour une classe (décommenter si besoin)
// const navbar = document.querySelector(".navbar");


// ----------- Méthode 2 : querySelectorAll -----------
// Sélectionne TOUS les éléments qui correspondent au sélecteur
// Retourne une NodeList (liste d’éléments)

// Sélection de tous les <p>
const el2 = document.querySelectorAll("p");

// Sélection d’un élément avec un ID (moins recommandé avec querySelectorAll)
const el3 = document.querySelectorAll("#p1");

// Affichage dans la console
// console.log(el2);


// ----------- Méthode 3 : getElementById -----------
// Sélectionne un élément UNIQUE par son ID
// C’est la méthode la plus rapide pour les ID

const el4 = document.getElementById("p1");


// ----------- Méthode 4 : getElementsByClassName -----------
// Sélectionne tous les éléments ayant une classe donnée
// Retourne une HTMLCollection

const el5 = document.getElementsByClassName("p");


// ==============================
// CREATION ET MODIFICATION D’ELEMENT
// ==============================

// Création d’un nouvel élément <p>
const el6 = document.createElement("p");

// Ajout d’un attribut (ici une classe CSS)
el6.setAttribute("class", "text-color");

// Ajout du texte dans le paragraphe
el6.textContent = "Ceci est un nouveau paragraphe";

// Ajout de l’élément dans le document (dans le body)
document.body.appendChild(el6);


// ==============================
// ERREUR DANS TON CODE
// ==============================

// ❌ console.log(p1)
// Cette ligne provoque une erreur car "p1" n’est pas défini

// ✅ Correction :
console.log(el4); // ou document.getElementById("p1")