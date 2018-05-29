/*Mint egy különleges kávézó tulajdonosa nyilvántartod, hogy milyen kávéfajtákból tudsz kávét készíteni/
 a vendégeid számára. Hozz létre egy tömböt, amiben kávé objektumokat tárolsz. Minden kávéról vedd fel
 a nevét, a származási országát, az erősségét (1 és 10 közötti skálán) és a készletmennyiséget. 
 Tegyél egy kereső mezőt a kávézó oldalára, amiben meg lehet adni a keresendő kávé nevét. 
 Találat esetén írd ki a keresett kávé minden adatát, különben a "Jelenleg nem kapható" felirat 
 jelenjen meg.*/

var caffees = [{
        name: "Tchibo",
        country: "Angola",
        strenght: 10,
        stock: 2,
    },
    {
        name: "Bellaroma",
        country: "Tanzánia",
        strenght: 6,
        stock: 2,
    },
    {
        name: "Pellini",
        country: "Kenya",
        strenght: 8,
        stock: 2,
    },
    {
        name: "Bravo",
        country: "Uganda",
        strenght: 9,
        stock: 14,
    },
    {
        name: "SparRegio",
        country: "CostaRica",
        strenght: 8,
        stock: 5,
    }
]

function caffeshearching() {
    var found = [];
    for (var i = 0; i < caffees.length; i++) {
        if (caffees[i].stock <= 3) {
            found.push(caffees[i]);
        }
    }

    if (found.length == 0) {
        document.getElementById("output").innerHTML = "Jelenleg nem kapható";
    } else {
        var kindof = "";
        for (i = 0; i < found.length; i++) {
            kindof += found[i].name + "<br>";
        }
        document.getElementById("output").innerHTML = kindof;
    }
}