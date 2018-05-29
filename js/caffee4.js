/*Mint egy különleges kávézó tulajdonosa nyilvántartod, hogy milyen kávéfajtákból tudsz kávét készíteni/
 a vendégeid számára. Hozz létre egy tömböt, amiben kávé objektumokat tárolsz. Minden kávéról vedd fel
 a nevét, a származási országát, az erősségét (1 és 10 közötti skálán) és a készletmennyiséget. 
 Tegyél egy kereső mezőt a kávézó oldalára, amiben meg lehet adni a keresendő kávé nevét. 
 Találat esetén írd ki a keresett kávé minden adatát, különben a "Jelenleg nem kapható" felirat 
 jelenjen meg.*/
/*Vendégeknek adjuk meg árakat*/

var caffees = [{
        name: "Tchibo",
        country: "Angola",
        strenght: 10,
        stock: 10,
        guestprice: 350,
    },
    {
        name: "Bellaroma",
        country: "Tanzánia",
        strenght: 6,
        stock: 12,
        guestprice: 340,
    },
    {
        name: "Pellini",
        country: "Kenya",
        strenght: 8,
        stock: 2,
        guestprice: 330,
    },
    {
        name: "Bravo",
        country: "Uganda",
        strenght: 9,
        stock: 14,
        guestprice: 300,
    },
    {
        name: "SparRegio",
        country: "CostaRica",
        strenght: 8,
        stock: 5,
        guestprice: 280,
    }
]

function 