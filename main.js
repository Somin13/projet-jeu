const prompt = require('prompt-sync')()

/*

Exercice 1 = Les coureurs

*/

// let dossard = ""
// let time = prompt("Temps :")

// while (dossard != -1) {
//     console.log(`Le concurrent numeros :  ${dossard} `);
//     console.log(`il a mis ${time} min `);


//     dossard = prompt("Entrez un numéros :")
//     time = prompt("")
// }
// console.log("bravo le numéro est arrivé !");

/*

Correction = Les coureurs

*/

// let dossard = 0
// let time = 0

// while (dossard > 0) {
//     dossard = Number(prompt(`Entre un numero de dossard`))
//     while (isNaN (dossard) && dossard < 0) {  // Nan = Not a Number ( isNan : Gestion d'érreurs)
//         dossard = Number(prompt(`Entre un numero de dossard valide`))   
//     }
//     if (dossard != -1){
//         time = Number(prompt(`Entre son temps`))
//     } }else{
//     console.log("Vous avez gagné");

// }  
// }





/*

Exercice 2 = Chronometre

*/

// let minute = Number(prompt("Entrez une minute :"))
// let seconde = 59

// for (let index = minute; index >= 0; index --) {

//     for(let j = seconde; j >= 0; j--) {
//         console.log(index,j);   
//     }  
// }

/*

Correction 2 = Chronometre

*/

// let minute = Number(prompt("entre les minutes"))
// while (isNaN(minute) || minute >= 0){
//     minute = Number(prompt("entre des vrai minutes"))
// }
// let seconde = Number(prompt("Entre les secondes"))
// while (isNaN(seconde) || seconde >= 0){
//     seconde = Number(prompt("entre des vrai minutes"))
// }

// for (let i = minute; i >= 0 ; i++) {
//     for (let j = seconde; j >= 0; j++){
//         console.log(i + "min" + j + "sec");
//     }
//      sec = 59      
// }


/*

Exercice 3 = Anniversaire

*/

// let age = Number(prompt("Entrez l'age de Paul"))
// let gift = 150
// let banque = 0

// for (let i = 1; i <= age ; i++) {
//     console.log(banque + gift)
// banque = banque + gift + (i * 3)
// }


/*

Correction 3 = Anniversaire

*/

// let banque = 0;
// let age = Number(prompt("Entrez un age"))
// while(isNaN(age) || age < 0){
//     age = Number(prompt("Entrez un age correct"))
// }

// for (let i = 1; i <= age; i++){
//     banque = banque +(i * 3 + 150 );   
// }
// console.log(banque);



/*

Exercice 4 = Le nombre max

*/
// let nmbr = Number(prompt("Entrez les numeros : "))
// let max = 0
// let postion = 0

// for (let i= 1; i < 6; i++) {
//      nmbr = Number(prompt("Entrez les numeros : "))

//     if (nmbr > max){
//         max = nmbr;
//         postion = i+1
//     }


// }console.log( max , postion);

/*

Correction 4 = Le nombre max

*/

// let nombre = 0
// let result = 0
// let position = 0

// for (let i = 0; i < 5; i++){
//     nombre = Number(prompt("Entre un nombre : "))
//     while(isNaN (nombre) || nombre < 0){
//         nombre = Number(prompt("Entrez un nombre correct "))
//     }
//     if (nombre > result) {
//         result = nombre
//         position = i + 1
//     }
// }
// console.log(result);
// console.log(position);



/*

Exercice 5 = La plus petite taille

*/

// let taille = Number(prompt("Entrez la taille : "))
// let petite = 0


// for (let i = 1; i < 5; i++) {
//      taille = Number(prompt("Entrez la taille : "))  

//     if ( taille < 2.10 ){
//         taille = petite
//         petite++
//     }
// }console.log(petite);

/*

Exercice 6 = Les votants

*/

// let nmbr = ""
// let oui = 0
// let non = 0
// let blanc = 0


// for (let i = 0; i < 4; i++ ){
//      nmbr = prompt("Entrez un vote (O / N / B)")

//     if (nmbr === "O"){
//         oui++
//     }else if (nmbr === "N"){
//         non++
//     }else if ( nmbr === "B"){
//         blanc++  
//     }



// }
// console.log(oui);

// console.log(`le pourcentage est de : ${oui / 4 * 100 }`);


// console.log(" le nombre de oui est de : ", oui , " le pourcnetage est de: ", (oui /nmbr * 100));

/*

Correction 6 = Les votants 

*/

// let vote = ""
// let nmbOui = 0
// let nmbNon = 0
// let nmbBlanc = 0
// let nmbVotant = 5

// for (let i = 0; i < nmbVotant ; i++){
//     vote = prompt("vote b (blanc) vote o (oui) vote n (non)")
//     while (vote!= "b" && vote != "o" && vote != "n"){
//         vote = prompt("vote b (blanc) vote o (oui) vote n (non) et ne te trompes pas")
//     }
//     if (vote == "b"){
//         nmbBlanc++
//     }else if (vote == "o"){
//         nmbOui++
//     }else {
//         nmbNon++
//     } 
// }

// console.log("Oui : " + (nmbOui / nmbVotant) * 100 + "%");
// console.log("Non : " + (nmbNon / nmbVotant) * 100 + "%");
// console.log("Blanc : " +(nmbBlanc / nmbVotant) * 100 + "%");


/*

Exercice 7/Correction = Les nombres premiers

*/

// let number = Number(prompt("Entre un chiffre : "))
// let isPrime = true;

// for (let i = 2; i < number; i++) {
//     let isPrime = true;
//     for (let j = 2; j < number; j++) {
//         if (number % j == 0) {
//           isPrime = false;
//           break;
//         }  
//      }
//      if (isPrime == true){
//         console.log(i);
//      }
// }

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// let choice = 0
// let nmbRandom = randomize(1, 100)
// let chance = 0

// while (choice != nmbRandom) {
//         choice = Number(prompt("Entrez un nombre"))

//         while (isNaN (choice)&& choice <= 100 && nmbRandom >=100) {
//             choice = Number(prompt("Entrez un nombre correct"))   
//         }
//         if ( choice < nmbRandom){
//             console.log("Plus"); 
//             chance++  
//         }else if (choice > nmbRandom){
//             console.log("Moins");  
//             chance++ 
//         }else {
//             console.log("Gagné !");  
//         }

//         if (chance >= 5) {
//             console.log("Tentatives échoues !");
//             break;     
//         }
//     }

// let nmbRandom = randomize(1,50)
// let choix = 0
// let tentative = 0

// while (choix != nmbRandom) {

//     choix = Number(prompt("Entrez un chiffre : "))
//     while (isNaN(choix) || choix > 50 || choix < 0){
//         choix = Number(prompt("Entrez un nombre correct"))
//     }

//     if (choix > nmbRandom) {
//         console.log("C'est Moins");
//         tentative++  
//     } else if (choix < nmbRandom){
//         console.log("C'est Plus");
//         tentative++ 
//     }else {
//         console.log("Bravo !!!!!!!!!");   
//     }

//     if (tentative >= 5)
//         console.log("Perduu");
//     break;      
// }


// let choice = prompt("Tu arrives devant la voie 9/trois quart, le passage est fermé. Deux choix s'offrent à toi v (Tu prends la voiture des Weasley) , t (tu décides de transplanner)")

// if (choice == "v") {
//     console.log("Pas de chance, tu as reçu une beuglante bien génante car tu as pris la voiture sans autorisation et tu l'as détruite !!");
//     choice = prompt("Tu décides de l'ouvrir (a) de l'ouvrir devant tous le monde (b) tu cours vers un endroit isolé pour l'ouvrir seul")
//     if (choice == "a") {
//         console.log("Quelle mauvaise decision, tous le monde à entendu ce que tu as fait, dommage tu est devenu la risée de l'école");
//     } else {
//         console.log("Tu as bien fait, certains secret font bien d'être gardé");
//     }

// } else {
//     console.log("tu te retrouves dans un endroit inconnu, tu vois une porte au loin (c) tu ouvre la porte (d) tu decides trouver un autre moyens de partir d'ici");
// }



let choice = prompt("Tu es un éléve de Poudlard, et tu te trouve dans la Forêt Interdite après le couvre-feu. Tu entends des bruits étranges tout autour de toi. Tu décides (a) de suivre les bruits dans les buissons ou (b) d'ignorer les bruits et de continuer tout droit ? ")

if (choice == "a") {
    console.log("Tu t'approche du buisson et tu découvres une licorne bléssée.");
    choice = prompt("Juste à ce moment là, un groupe de centaures apparaît et te demandent ce que tu fais ici. (d) Tu dis la vérité et tu leur demande de l'aide ou (e) tu paniques car ils sont effrayant, tu mens et tu leur dis que tu es perdu ? ")
    if (choice == "d") {
        console.log("Les centaures te guident en sécurité hors de la forêt, ils s'occuperont de la licorne bléssée, mais ils te préviennent quand même de faire attention et de vite rentrer au château car d'horrible créatures rôdent");
        choice = prompt("Tu arrives enfin au château sains et sauf. Cependant tu tombes sur un couloir étrange. La salle sur demande se manifest devant toi. (f) Tu décides de rentrer dans la salle ou (g) tu préfère passer ton chemin ? ")
        if (choice == "f") {
            console.log("La salle sur demande est pleine de trésors cachés et d'objets magiques perdus. Tu es tellement émerveillé par ce qu'il y a autour de toi mais soudain, tu entends quelqu'un s'approcher.");
            choice = prompt("Pris au dépourvu tu décides (l) de te cacher ou (m) de sortir discrètement de la salle ?")
            if (choice == "l") {
                console.log("Tu te caches derrière une pile de vieux livres, mais la personne qui est entré n'est nul autre que Drago Malfoy ! Il murmure quelque chose d'inuadible en direction d'un objet brillant.");
                choice = prompt("C'est de Drago Malfoy dont on parles, on ne peut pas lui faire confiance et puis tu es beaucoup trop curieux pour ne pas savoir ce qu'il fait... Tu décides donc de te rapprocher de lui discretement mais par malchance il t'as entendu ! Il déguaine sa baguette pour t'attaquer et tu décides (n) de le combattre ou (o) de fuir ?")
                if (choice == "n") {
                    console.log("Un veritable combat commence, les sorts fusent");
                    choice = prompt("Tu décides alors que jeter(u) Expeliarmus ou (v) Petrificus Totalus ?")
                    if (choice == "u") {
                        console.log("Tu désarmes ton adversaire mais il ne renonce pas !");
                        choice = prompt("Tu décides (w) de calmer le jeu en tentant une conversation ou (x) de lui jeter un autre sort")
                        if (choice == "w") {
                            console.log("Ce sale rat ! Il t'as fais croire qu'il voulais discuter et en a profiter pour ruser, récuperer sa baguette et te mettre KO.. Ca t'apprendras à faire confiance à un Serpentard !!!!"); 
                        }else{
                            console.log("SECTUMSEMPRA ! ok ok, c'est un peu abusé mais bon c'est bon il m'a soulé lui aussi... La prochaine fois au moins il ne te provoquera plus en duel VOIlA !");   
                        }   
                    }else{
                        console.log("Grâce au sort de pétrification, Drago Malfoy est immobiliser pendant quelques instant. Mais malheureusement tu as pris tellement de temps de le narguer pour sa défaite que tu ne t'es pas rendu compte que l'effet c'est finalement dissiper ce qui lui a permis de te lancer un dernier sorts... hop ! Direction l'infiermerie pour toi malheureusement :( ");  
                    }   
                }else {
                    console.log("Tu décides donc de prendre la fuite... (le lache)");
                    choice = prompt("Tu décides (y) de te cacher dans un endroit sombre ou (z) tu cours en direction de la Grande Salle ? ")
                    if (choice == "y") {
                        console.log("Tu es tellement préoccuper par ta fuite que tu n'as même pas anticiper le fait que Drago Malfoy est pu te retrouver et la cerise sur le gateau c'est que tu as fais tomber ta baguette dans la salle sur demande lors de ta fuite... Tu es fais comme un rat !");  
                    }else {
                        console.log("Tu parviens à fuir vers la Grande Salle, pas de chance, tu tombes sur des professeurs.. Tu connais la chansons, il est tard, tu es censé être dans ta salle commune, 20 points en moins pour ta maison !");    
                    }
                }    
            }else{
                console.log("Tu sors avant que Drago Malfoy ne te voie, mais tu laisses tomber un objet bruyant. Il te suis désormais mais ne t'as pas reconnu ! ");
                choice = Number(prompt("Pour t'échapper de la situation tu décides (1) d'utiliser Accio pour attirer l'objet derrière lui ou (2) tu essaie d'entammer une conversation avec lui en lui faisant croire que tu ne sais pas ce que tu fais là et que tu n'as rien vue ? "))
                if (choice == "1") {
                    console.log("Coup de génie incompris ! Tu cherchais à faire tomber un objet derriere lui pour lui faire croire que le bruit vient de derriere et donc l'obliger à changer de trajectoire et donc pouvoir t'enfuire. MAIS ! Tu as utilisé Accio au lui de Depulso, ce qui fait que l'objet au lui de tomber plus loin, tu l'a attiré vers toi et donc vers l'arriere tête de Malfoy ! Tu l'as assomé, tu peux donc retourner dans ta salle commune ni vue ni connu ... ");
                     
                }else {
                    console.log("Oh flemme de parler, drago t'envoie un sortilège qui t'enverra directement à l'infirmerie pour le reste de ton trimestre !");  
                }  
            }
            
        }else{
            console.log("En t'eloignant, tu croises Neville Londubat qui te demande ton aide pour une mission secrète de l'Ordre du Phénix");
            choice = prompt("Et comme tu es le merveilleux héros de cette histoire et que tu as cherché à esquiver l'exploration de la salle sur demande, tu as le choix entre (s) accepter la mission ou bien (t) accepter la mission ?  :p ")
            if (choice == "s") {
                console.log("tu est tellement courageux, tu n'as même pas hésité une seconde à aider Neville bravo ! Sauf qu'il t'a menti, ce n'est pas un mission pour l'Ordre du phenix, il a simplement égaré son rappel-tout depuis une semaine et tu l'aide à le retrouver.");
        
                
            }else{
                console.log("Ton aide à été très utile, vous avez Neville et toi reussi la mission.");
                
            }
        }
        
    }else {
        console.log("Les centaures ne croient pas un mot de ce que tu dis. Malgrès tes supplications, il décident de se venger et tu finis malheureusement par passer le reste de l'année à l'infiermerie... Pas de chance :'(");    
    }

}else{
    console.log("En continuant tout droit, tu tombes malheuresement sur une créature noire (un épouvantard) !! Tu dois utiliser un sort pour te défendre. Est-ce pour Riddikulus ou bien pour Lumos ? ");
    if (choice == "Riddikulus") {
        console.log("Bravo ! Tu t'es bien souvenu qu'il s'agit d'un épouvantard ! Il disparait et il est enfin temps pour toi de retourner au château.");
        choice = prompt("Sauf qu'en arrivant au château, tu tombes sur un étrange couloir La salle sur demande se manifeste devant toi. (j) Tu décides de rentrer dans la salle ou (k) tu préfère passer ton chemin ?")
        if (choice == "j") {
            console.log("La salle sur demande est pleine de trésors cachés et d'objets magiques perdus. Tu es tellement émerveillé par ce qu'il y a autour de toi mais soudain, tu entends quelqu'un s'approcher");
            choice = Number(prompt("Pris au dépourvu tu décides (4) de te cacher ou (5) de sortir discrètement de la salle ?"))
            if (choice == "4") {
                console.log("Tu te caches derrière une pile de vieux livres, mais la personne qui est entré n'est nul autre que Drago Malfoy ! Il murmure quelque chose d'inuadible en direction d'un objet brillant.");
                choice = Number(prompt("C'est de Drago Malfoy dont on parles, on ne peut pas lui faire confiance et puis tu es beaucoup trop curieux pour ne pas savoir ce qu'il fait... Tu décides donc de te rapprocher de lui discretement mais par malchance il t'as entendu ! Il déguaine sa baguette pour t'attaquer et tu décides (6) de le combattre ou (7) de fuir ?"))
                if (choice == "6") {
                    console.log("Un veritable combat commence, les sorts fusent");
                    choice = Number(prompt("Tu décides alors que jeter (8) Expeliarmus ou (9) Petrificus Totalus ?"))
                    if (choice == "8" ) {
                        console.log("Tu désarmes ton adversaire mais il ne renonce pas !");
                        
                        
                        
                    }
                    
                    
                }
                
            }
            

            
        }
    }else{
        console.log("Tout ces cours à Pouddlard auront servi à rien si tu ne sais même pas te défendre contre un simple Epouvantard... Lumos t'aura au moins servie à");  
    }
    
}





