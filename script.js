/************************************************************
 * FICHIER : tests_javascript_fondamentaux.js
 * AUTEUR : Reine AHODAKIN
 * OBJECTIF :
 *     Ce fichier contient mes tests personnels pour
 *     maîtriser les fondamentaux de JavaScript.
 *
 * CONTENU :
 *     - Variables
 *     - Conditions
 *     - Fonctions
 *     - Tableaux et objets
 *     - Boucles
 *     - Opérateurs
 *     - Opérateurs logiques
 *     - Opérateur ternaire
 *
 * NOTE PERSONNELLE :
 *     Ce fichier représente ma phase d’apprentissage.
 *     Il me permettra plus tard de revoir les bases
 *     et d’observer ma progression.
 ************************************************************/


/************************************************************
 * SECTION 1 — VARIABLES SIMPLES (TYPES PRIMITIFS)
 ************************************************************/

/*
   Ici je teste les types primitifs :
   - string
   - number
   - boolean
   - null
*/

let product = "Ordinateur";     // Type : string
let prix = 200000;              // Type : number
let enstock = false;            // Type : boolean
let description = null;         // null = valeur intentionnellement vide
let reduction = 20;             // Pourcentage


/************************************************************
 * SECTION 2 — TABLEAU D’OBJETS
 ************************************************************/

/*
   Objectif :
   Comprendre comment structurer plusieurs produits
   sous forme de tableau contenant des objets.
*/

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


/************************************************************
 * SECTION 3 — CONDITIONS (if / else)
 ************************************************************/

/*
   Test d’une condition simple avec un boolean.
   Si enstock = true → disponible
   Sinon → non disponible
*/

if (enstock) {
    console.log("Le produit " + product + " est disponible !");
} else {
    console.log("Le produit " + product + " n'est pas disponible !");
}


/*
   Test d’une condition numérique :
   Vérifier si une réduction est appliquée.
*/

if (reduction > 0) {
    console.log("Bonne nouvelle ! " + reduction + "% de réduction.");
} else {
    console.log("Pas de réduction actuellement");
}


/************************************************************
 * SECTION 4 — FONCTION DE CALCUL
 ************************************************************/

/*
   Fonction réutilisable pour calculer un prix après réduction.

   Pourquoi créer une fonction ?
   → Pour éviter de répéter le calcul plusieurs fois.
   → Pour rendre le code plus propre et maintenable.
*/

function prixproduct(prix, reduction) {

    if (reduction > 0) {
        // Calcul mathématique du pourcentage
        return prix - (prix * reduction / 100);
    }

    return prix; // retour direct si pas de réduction
}

// Test de la fonction
console.log("Prix final :", prixproduct(prix, reduction), "CFA");


/************************************************************
 * SECTION 5 — BOUCLE FOR
 ************************************************************/

/*
   Objectif :
   Parcourir tous les produits du tableau
   et appliquer la fonction de calcul.
*/

for (let i = 0; i < products.length; i++) {

    let prixfinal = prixproduct(products[i].prix, products[i].reduction);

    console.log(products[i].nom + " ---> " + prixfinal + " CFA");
}


/************************************************************
 * SECTION 6 — CONDITIONS MULTIPLES & TERNAIRE
 ************************************************************/

const heure = 14;

/*
   Test if / else if / else
   Simulation d’un message selon l’heure.
*/

if (heure < 12) {
    console.log("Bonjour");
} else if (heure < 18) {
    console.log("Bon après-midi");
} else {
    console.log("Bonsoir");
}

/*
   Version simplifiée avec opérateur ternaire.
   Syntaxe : condition ? valeur_si_vrai : valeur_si_faux
*/

heure < 12 ? console.log("Bonjour") : console.log("Bonsoir");


/************************************************************
 * SECTION 7 — OPERATEURS DE COMPARAISON
 ************************************************************/

const a = 10;
const b = 10;

/*
   Test des opérateurs :
   <  <=  >  >=  ==  ===  !=  !==
*/

console.log(a < b);
console.log(a <= b);
console.log(a > b);
console.log(a >= b);
console.log(a == b);   // comparaison simple
console.log(a === b);  // comparaison stricte (recommandée)


/************************************************************
 * SECTION 8 — OPERATEURS LOGIQUES
 ************************************************************/

/*
   &&  → ET logique
   ||  → OU logique
*/

console.log(true && false);
console.log(true || false);


/************************************************************
 * SECTION 9 — CONDITIONS IMBRIQUÉES
 ************************************************************/

const age = 20;

/*
   Exemple de if imbriqué.
   Permet de comprendre la hiérarchie des conditions.
*/

if (age >= 18) {

    if (age >= 65) {
        console.log("Est senior");
    } else {
        console.log("Est majeur");
    }

} else {
    console.log("Est mineur");
}


/************************************************************
 * SECTION 10 — BOUCLES
 ************************************************************/

/*
   Boucle for classique.
*/

for (let i = 0; i < 6; i++) {
    console.log("i = " + i);
}


const tableau = [1, 2, 3, 4, 5];

for (let j = 0; j < tableau.length; j++) {
    console.log(tableau[j]);
}