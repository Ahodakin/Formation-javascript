/************************************************************
 * EXERCICE JAVASCRIPT : GESTION SIMPLE DE PRODUITS
 * ----------------------------------------------------------
 * Objectifs pédagogiques :
 * 1. Comprendre les variables
 * 2. Manipuler un tableau d’objets
 * 3. Utiliser les conditions (if / else)
 * 4. Créer et utiliser une fonction
 * 5. Parcourir un tableau avec une boucle for
 ************************************************************/


/***********************
 * DECLARATION DES VARIABLES
 ***********************/

    // Variables simples (types primitifs)

    let product = "Ordinateur";
    let prix = 200000;
    let enstock = false;
    let description = null;
    let reduction = 20;


// Tableau contenant plusieurs produits.
// Chaque produit est un objet avec des propriétés.
let products = [
    {
        nom: "Chaussure en cuir",
        prix: 2000,
        description: "Chaussure en bonne forme",
        reduction: 5
    },
    {
        nom: "Chaussure en cuir2",
        prix: 3000,
        description: "Chaussure en bonne forme3",
        reduction: 10
    },
    {
        nom: "Chaussure en cuir3",
        prix: 5000,
        description: "Chaussure en bonne forme3",
        reduction: 20
    },
];


/***********************
 * NOTION DES CONDITIONS (if / else)
 ***********************/

// Vérifie si le produit est disponible.
// Si enstock est true → le produit est disponible
// Sinon → il n’est pas disponible
if (enstock) {
    console.log("Le produit " + product + " est disponible !");
} else {
    console.log("Le produit " + product + " n'est pas disponible !");
}


// Vérifie si une réduction existe.
// Si la réduction est supérieure à 0 → promotion active
// Sinon → aucune promotion
if (reduction > 0) {
    console.log("Bonne nouvelle ! " + reduction + "% de réduction sur le produit " + product);
} else {
    console.log("Pas de réduction actuellement");
}


/***********************
 * NOTION DES FONCTIONS
 ***********************/

/*
    Fonction qui calcule le prix final d’un produit
    après application d’une réduction.

    Paramètres :
    - prix : prix initial du produit
    - reduction : pourcentage de réduction

    Retour :
    - prix final après réduction
*/
function prixproduct(prix, reduction) {
    if (reduction > 0) {
        // Exemple : 20% de 1000 = 1000 * 20 / 100
        return prix - (prix * reduction / 100);

    } else {
        return prix;
    }
}


// Appel de la fonction et affichage du résultat
console.log("Le prix final est :", prixproduct(prix, reduction), "CFA");


/***********************
 * BOUCLE FOR (Parcours du tableau)
 ***********************/

/*
    Cette boucle permet de parcourir tous les produits
    du tableau "products".

    i = 0 → premier produit
    i < products.length → on continue tant qu’il reste des produits
    i++ → on passe au produit suivant
*/

for (let i = 0; i < products.length; i++) {

    // Calcul du prix final pour chaque produit
    let prixfinal = prixproduct(products[i].prix, products[i].reduction);

    console.log(products[i].nom + " ---> " + prixfinal + " CFA");
}