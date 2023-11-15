let prompt = require("prompt-sync")();

console.log(
  "Bienvenue John, t'es partant pour une super aventure ? Si t'es là c'est que oui... \n" +
    "T'as pas trop le choix maintenant... Enfin oui... Commençons par les basiques. \n" +
    "Pour choisir la pillule bleue tape : blue \n" +
    "Pour choisir la pillule rouge tape : red"
);
let startGame = prompt("Tu choisis : ");

while (startGame !== "blue" && startGame !== "red") {
  startGame = prompt("Qu'est-ce que tu n'as pas compris ?");
}

if (startGame == "blue") {
  console.log(
    "\n Tu as choisis la pillule bleue... Meskine \n" +
      "Je ne vais plus trop te respecter mais bon c'est ton choix \n" +
      "Pour continuer à faire des choix pétés tape : meskine \n" +
      "Si finalement tu veux changer d'avis et prendre la pipi rouge tape : red"
  );
} else {
  console.log(
    "\n Ahhhh, la bonne petite pillule rouge... \n" +
      "Tu ne sens rien pour le moment... \n" +
      "Ca fait maintenant 5 minutes et toujours rien... Morpheus t'as baisé ? \n" +
      "Choix n°1 : tu vas voir Morpheus pour te plaindre. Entre : morpheus \n" +
      "Choix n° 2 : tu choisis d'attendre encore un peu... Genre 5 min pas plus... Entre : wait"
  );
}

let choiceTwo = prompt("Tu choisis : ");

while (
  choiceTwo !== "meskine" &&
  choiceTwo !== "red" &&
  choiceTwo !== "morpheus" &&
  choiceTwo !== "wait"
) {
  choiceTwo = prompt("Attention aux fautes de frappes, tu choisis : ");
}

if (choiceTwo == "meskine") {
  console.log(
    "\n Bon tu choisis de rester une meskine... \n" +
      "Plus que deux solutions. \n" +
      "Pour t'autosucer. Entre : marilyn \n" +
      "Pour sentir tes pets. Entre : myfarts"
  );
  let finalChoice = prompt("Tu choisis : ");
} else if (choiceTwo == "red") {
  console.log(
    "\n Bonne idée, tu prends la pilule rouge. \n" +
      "Elle monte en deux minutes. \n" +
      "Pour suivre le lapin : lapinou \n" +
      "Pour acheter une bouteille d'eau. Entre : water"
  );
} else if (choiceTwo == "morpheus") {
  console.log(
    "\n En vrai morpheus te met une branlée... \n" +
      "Plus que deux solutions. \n" +
      "Pour ramasser tes dents. Entre : dents \n" +
      "Pour appeler ta mère comme un choisisseur de pillule bleu. Entre : maman"
  );
} else {
  console.log(
    "\n 2 minutes plus tard, c'est monté... \n" +
      "Waaah ma gueule... \n" +
      "Un lapin vient de débarquer. \n" +
      "Pour suivre le lapin. Entre : lapinou \n" +
      "Pour suivre morpheus. Entre : morpheus "
  );
}

let finalChoice = prompt("Tu choisis : ");

while (
  finalChoice !== "dents" &&
  finalChoice !== "maman" &&
  finalChoice !== "morpheus" &&
  finalChoice !== "lapinou"
) {
  finalChoice = prompt("Attention aux fautes de frappes, tu choisis : ");
}

if (finalChoice == "dents") {
  console.log(
    "\n Tu ramasses tes dents. \n" +
      "La prochaine fois t'évitera de faire le malin. \n" +
      "Morpheus on le respect... Wesh."
  );
} else if (finalChoice == "maman") {
  console.log(
    "\n Tu appelles ta mère. \n" +
      "Elle te dit que de toute façon Morpheus elle lui fait confiance. \n" +
      "Un souvenir te revient... Ces lunettes sur la table de la cuisine elles éaient à qui ??"
  );
} else if (finalChoice == "morpheus") {
  console.log(
    "\n Tu suis Morpheus. \n" +
      "Tu sens que vous allez passer une bonne soirée. \n" +
      "Tu lui demanderas si tu peux essayer ses lunettes... :3"
  );
} else {
  console.log(
    "\n Tu suis le lapin. \n" +
      "Tu sais pas trop où il t'amène. \n" +
      "Tu entres par une porte cacher et tu te retrouves... \n" +
      "Dans un stripclub. Personne va te croire, c'est sûr..."
  );
}
