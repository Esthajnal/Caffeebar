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
        stock: 10,
    },
    {
        name: "Bellaroma",
        country: "Tanzánia",
        strenght: 6,
        stock: 12,
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
    var strangecaffee = document.getElementById("customerscaffe").value;
    var found = null;
    for (var i = 0; i < caffees.length; i++) {
        if (caffees[i].name = strangecaffee) {
            found = caffees[i];
        }
    }

    if (found == null) {
        document.getElementById("output").innerHTML = "Jelenleg nem kapható"
    } else {
        document.getElementById("output").innerHTML =
            (caffees.name + " " + caffees.country + " " + caffees.streght + " " + caffees.stock)