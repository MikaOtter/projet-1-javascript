let prompt = require("prompt-sync")();

let listWaysOne = [
  {
    id: 1,
    text:
      "Bienvenue John, t'es partant pour une super aventure ? Si t'es là c'est que oui... \n" +
      "T'as pas trop le choix maintenant... Enfin oui... Commençons par les basiques. \n" +
      "Pour choisir la pillule bleue tape : blue \n" +
      "Pour choisir la pillule rouge tape : red",
    possChoiceOne: "blue",
    possChoiceTwo: "red",
  },
  {
    id: 2.1,
    text:
      "\n Tu as choisis la pillule bleue... Meskine \n" +
      "Je ne vais plus trop te respecter mais bon c'est ton choix \n" +
      "Pour continuer à faire des choix pétés tape : meskine \n" +
      "Si finalement tu veux changer d'avis et prendre la pipi rouge tape : red",
    possChoiceOne: "meskine",
    possChoiceTwo: "red",
  },
  {
    id: 2.2,
    text:
      "\n Ahhhh, la bonne petite pillule rouge... \n" +
      "Tu ne sens rien pour le moment... \n" +
      "Ca fait maintenant 5 minutes et toujours rien... Morpheus t'as baisé ? \n" +
      "Choix n°1 : tu vas voir Morpheus pour te plaindre. Entre : morpheus \n" +
      "Choix n° 2 : tu choisis d'attendre encore un peu... Genre 5 min pas plus... Entre : wait",
    possChoiceOne: "morpheus",
    possChoiceTwo: "wait",
  },
];

let listWaysTwo = [
  {
    id: 3.1,
    text:
      "\n Bon tu choisis de rester une meskine... \n" +
      "Plus que deux solutions. \n" +
      "Pour t'autos*cer. Entre : marilyn \n" +
      "Pour sentir tes pets. Entre : myfarts",
    possChoiceOne: "marilyn",
    possChoiceTwo: "myfarts",
  },
  {
    id: 3.2,
    text:
      "\n Bonne idée, tu prends la pilule rouge. \n" +
      "Elle monte en deux minutes. \n" +
      "Pour suivre le lapin : lapinou \n" +
      "Pour acheter une bouteille d'eau. Entre : water",
    possChoiceOne: "lapinou",
    possChoiceTwo: "water",
  },
  {
    id: 3.3,
    text:
      "\n En vrai morpheus te met une branlée... \n" +
      "Plus que deux solutions. \n" +
      "Pour ramasser tes dents. Entre : dents \n" +
      "Pour appeler ta mère comme un choisisseur de pillule bleu. Entre : maman",
    possChoiceOne: "dents",
    possChoiceTwo: "maman",
  },
  {
    id: 3.4,
    text:
      "\n 2 minutes plus tard, c'est monté... \n" +
      "Waaah ma gueule... \n" +
      "Un lapin vient de débarquer. \n" +
      "Pour suivre le lapin. Entre : lapinou \n" +
      "Pour suivre morpheus. Entre : morpheus ",
    possChoiceOne: "followlapinou",
    possChoiceTwo: "followmorpheus",
  },
];

let finalWays = [
  {
    id: 3.11,
    text:
      "Tu t'autos*ces... C'est pas joyeux joyeux tout ça." +
      "\n Pas vraiment Sweet Dreams pour le cou...",
  },
  {
    id: 3.12,
    text:
      "Tu te courbes, tu baisses ta tête pour prendre un grand snif de ton propre pet. \n" +
      "Très New Yorkais comme attitude...",
  },
  {
    id: 3.21,
    text:
      "Tu suis le lapinou qui rejoint la scène techno. " +
      "\n Le dancefloor est en foli, Lapinou aussi..." +
      "\nTu finis torse nu entre de lancer une chenille avec lapinou.",
  },
  {
    id: 3.22,
    text:
      "Tu vas acheter une bouteille d'eau. " +
      "\n C'est sûr qu'elle te sera utile. " +
      "\nTu as étonnement soif... L'eau est étonnement bonne...",
  },
  {
    id: 3.31,
    text:
      "\n Tu ramasses tes dents. \n" +
      "La prochaine fois t'évitera de faire le malin. \n" +
      "Morpheus on le respect... Wesh.",
  },
  {
    id: 3.32,
    text:
      "\n Tu appelles ta mère. \n" +
      "Elle te dit que de toute façon Morpheus elle lui fait confiance. \n" +
      "Un souvenir te revient... Ces lunettes sur la table de la cuisine elles éaient à qui ??",
  },
  {
    id: 3.41,
    text:
      "\n Tu suis le lapin. \n" +
      "Tu sais pas trop où il t'amène. \n" +
      "Tu entres par une porte cacher et tu te retrouves... \n" +
      "Dans un stripclub. Personne va te croire, c'est sûr...",
  },
  {
    id: 3.42,
    text:
      "\n Tu suis Morpheus. \n" +
      "Tu sens que vous allez passer une bonne soirée. \n" +
      "Tu lui demanderas si tu peux essayer ses lunettes... :3",
  },
];

// GAME LOGIC
console.log(listWaysOne[0].text);
let startGame = prompt("Tu choisis : ");

while (
  startGame !== listWaysOne[0].possChoiceOne &&
  startGame !== listWaysOne[0].possChoiceTwo
) {
  startGame = prompt("Qu'est-ce que tu n'as pas compris ? Tu choisis : ");
}

if (startGame === listWaysOne[0].possChoiceOne) {
  console.log(listWaysOne[1].text);
} else {
  console.log(listWaysOne[2].text);
}

let choiceTwo = prompt("Tu choisis : ");
while (
  choiceTwo !== listWaysOne[1].possChoiceOne &&
  choiceTwo !== listWaysOne[1].possChoiceTwo &&
  choiceTwo !== listWaysOne[2].possChoiceOne &&
  choiceTwo !== listWaysOne[2].possChoiceTwo
) {
  choiceTwo = prompt("Attention aux fautes de frappes, tu choisis : ");
}

switch (choiceTwo) {
  case listWaysOne[1].possChoiceOne:
    console.log(listWaysTwo[0].text);
    break;
  case listWaysOne[1].possChoiceTwo:
    console.log(listWaysTwo[1].text);
    break;
  case listWaysOne[2].possChoiceOne:
    console.log(listWaysTwo[2].text);
    break;
  case listWaysOne[2].possChoiceTwo:
    console.log(listWaysTwo[3].text);
    break;
}

let finalChoice = prompt("Tu choisis : ");
while (
  finalChoice !== listWaysTwo[0].possChoiceOne &&
  finalChoice !== listWaysTwo[0].possChoiceTwo &&
  finalChoice !== listWaysTwo[1].possChoiceOne &&
  finalChoice !== listWaysTwo[1].possChoiceTwo &&
  finalChoice !== listWaysTwo[2].possChoiceOne &&
  finalChoice !== listWaysTwo[2].possChoiceTwo &&
  finalChoice !== listWaysTwo[3].possChoiceOne &&
  finalChoice !== listWaysTwo[3].possChoiceTwo
) {
  finalChoice = prompt("Attention aux fautes de frappes, tu choisis : ");
}

switch (finalChoice) {
  case listWaysTwo[0].possChoiceOne:
    console.log(finalWays[0].text);
    break;
  case listWaysTwo[0].possChoiceTwo:
    console.log(finalWays[1].text);
    break;
  case listWaysTwo[1].possChoiceOne:
    console.log(finalWays[2].text);
    break;
  case listWaysTwo[1].possChoiceTwo:
    console.log(finalWays[3].text);
    break;
  case listWaysTwo[2].possChoiceOne:
    console.log(finalWays[4].text);
    break;
  case listWaysTwo[2].possChoiceTwo:
    console.log(finalWays[5].text);
    break;
  case listWaysTwo[3].possChoiceOne:
    console.log(finalWays[6].text);
    break;
  case listWaysTwo[3].possChoiceTwo:
    console.log(finalWays[7].text);
    break;
}
