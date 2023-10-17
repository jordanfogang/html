function calcul_moyenne(){
    var n1=prompt("donner la première note: ");
    var n2=prompt("donner la deuxième note: ");
    var n3=prompt("donner la troisième note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("voici la somme: "+somme+ "<hr>");
    var moyenne= somme/3;

    document.write("voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10){
    document.write("vous etes redoublant");
    }
    else{
    document.write("vous etes Admis");
    }

}

function test_age(){
    let age = prompt('quelle est votre age ?');
    if(age < 18){
        document.write("vous etes mineur");
        document.bgColor="red";
        }
    else{
        document.write("Entrez vous etes majeur");
        document.bgColor="green";
    }
    
}

function simple_affichage(){
    let name = prompt('Donner votre prénom');
    let familyName = prompt('donner votre Nom');

    document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
    document.write("Bonjour" + name + familyName);
    document.write('</div>');
}

function test_couleur(){
    let c = prompt("Donner un couleur");
    if(c == "rouge" || c == "ROUGE"){
        document.body.style.background = "red";
    }
    else if (c == "bleu" || c == "BLEU"){
        document.body.background = "bleue";
    }
    else{
        document.write("couleur non comprise");
    }
}