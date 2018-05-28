/*Mint egy különleges kávézó tulajdonosa nyilvántartod, hogy milyen kávéfajtákból tudsz kávét készíteni/
 a vendégeid számára. Hozz létre egy tömböt, amiben kávé objektumokat tárolsz. Minden kávéról vedd fel
 a nevét, a származási országát, az erősségét (1 és 10 közötti skálán) és a készletmennyiséget. 
 Tegyél egy kereső mezőt a kávézó oldalára, amiben meg lehet adni a keresendő kávé nevét. 
 Találat esetén írd ki a keresett kávé minden adatát, különben a "Jelenleg nem kapható" felirat 
 jelenjen meg.*/
/*Csinálj 3 csoportot erősség szerint.*/

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

function caffeesgroups() {
    light = [];
    mid = [];
    strong = [];
    for (i = 0; i < caffees.length; i++) {
        if (caffees[i].strenght >= 1 && caffees[i].strenght <= 3) {
            light.push(caffees[i]);
        } else if (caffees[i].strenght > 3 && caffees[i].strenght <= 7) {
            mid.push(caffees[i]);
        } else if (caffees[i].strenght > 7) {
            strong.push(caffees[i]);
        }
    }

    if (light.length != 0) {
        var lightcaffees = "";
        for (var i = 0; i < light.length; i++) {
            lightcaffees += light[i].name + ",";
        }
        document.getElementById("lightoutput").innerHTML = lightcaffees;
    }


    if (mid.length != 0) {
        var midcaffees = "";
        for (i = 0; i < mid.length; i++) {
            midcaffees += mid[i].name + ",";
        }
        document.getElementById("midoutput").innerHTML = midcaffees;
    }


    if (strong.length != 0) {
        var strongcaffees = "";
        for (i = 0; i < strong.length; i++) {
            strongcaffees += strong[i].name + ",";
        }
        document.getElementById("strongoutput").innerHTML = strongcaffees;
    }

}