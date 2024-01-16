export const status = [
  { value: "aktiv", label: "Aktív" },
  { value: "inaktiv", label: "Inaktív" },
  { value: "ertekesitve", label: "Értékesítve" },
  { value: "lezarva", label: "Lezárva" },
];

export const adType = [
  { value: "elado", label: "Eladó" },
  { value: "kiado", label: "Kiadó" },
];

export const propertyType = [
  { value: "lakas", label: "Lakás" },
  { value: "haz", label: "Ház" },
  { value: "telek", label: "Telek" },
  { value: "iroda", label: "Iroda" },
  { value: "uzlethelyiseg", label: "Üzlethelyiség" },
  { value: "ipari-ingatlan", label: "Ipari ingatlan" },
  { value: "garazs", label: "Garázs" },
  { value: "tarolo", label: "Tároló" },
  { value: "vendeglatohely", label: "Vendéglátóhely" },
  { value: "fejlesztesi-terulet", label: "Fejlesztési terület" },
  { value: "irodahaz", label: "Irodaház" },
  { value: "szallashely", label: "Szálláshely" },
  { value: "mezogazdasagi-terulet", label: "Mezőgazdasági terület" },
];

export const constructionMethod = [
  { value: "Tégla", label: "Tégla" },
  { value: "Panel", label: "Panel" },
];

export const btype = [
  { value: "tegla", label: "Tégla", type: "lakas" },
  { value: "panel", label: "Panel", type: "lakas" },
  { value: "csuszozsalus", label: "Csúszózsalus", type: "lakas" },
  { value: "csaladi-haz", label: "Családi ház", type: "haz" },
  { value: "ikerhaz", label: "Ikerház", type: "haz" },
  { value: "sorhaz", label: "Sorház", type: "haz" },
  { value: "hazresz", label: "Házrész", type: "haz" },
  { value: "tanya", label: "Tanya", type: "haz" },
  { value: "kuria", label: "Kúria", type: "haz" },
  { value: "kastely", label: "Kastély", type: "haz" },
  { value: "utcarol-nyilo", label: "Utcáról nyíló", type: "iroda" },
  { value: "hazban", label: "Házban", type: "iroda" },
  { value: "lakasban", label: "Lakásban", type: "iroda" },
  { value: "a-irodaepulet", label: "A irodaépület", type: "iroda" },
  { value: "a+-irodaepulet", label: "A+ irodaépület", type: "iroda" },
  { value: "b-irodaepulet", label: "B irodaépület", type: "iroda" },
  { value: "c-irodaepulet", label: "C irodaépület", type: "iroda" },
  { value: "bevasarlokozpontban", label: "Bevásárlóközpontban", type: "iroda" },
  { value: "telken", label: "Telken", type: "iroda" },
  { value: "utcarol-nyilo", label: "Utcáról nyíló", type: "uzlethelyiseg" },
  { value: "hazban", label: "Házban", type: "uzlethelyiseg" },
  { value: "lakasban", label: "Lakásban", type: "uzlethelyiseg" },
  { value: "a-irodaepulet", label: "A irodaépület", type: "uzlethelyiseg" },
  { value: "a+-irodaepulet", label: "A+ irodaépület", type: "uzlethelyiseg" },
  { value: "b-irodaepulet", label: "B irodaépület", type: "uzlethelyiseg" },
  { value: "c-irodaepulet", label: "C irodaépület", type: "uzlethelyiseg" },
  {
    value: "bevasarlokozpontban",
    label: "Bevásárlóközpontban",
    type: "uzlethelyiseg",
  },
  { value: "telken", label: "Telken", type: "uzlethelyiseg" },
  { value: "muhely", label: "Műhely", type: "ipari-ingatlan" },
  { value: "raktar", label: "Raktár", type: "ipari-ingatlan" },
  { value: "gyar", label: "Gyár", type: "ipari-ingatlan" },
  { value: "uzem", label: "Üzem", type: "ipari-ingatlan" },
  { value: "aruhaz", label: "Áruház", type: "ipari-ingatlan" },
  { value: "benzinkut", label: "Benzinkút", type: "ipari-ingatlan" },
  {
    value: "sportletesitmeny",
    label: "Sportlétesítmény",
    type: "ipari-ingatlan",
  },
  { value: "egyeb", label: "Egyéb", type: "ipari-ingatlan" },
  { value: "onallo", label: "Önálló", type: "tarolo" },
  { value: "kozos", label: "Közös", type: "tarolo" },
  { value: "bar", label: "Bár", type: "vendeglatohely" },
  { value: "borospince", label: "Borospince", type: "vendeglatohely" },
  { value: "bufe", label: "Büfé", type: "vendeglatohely" },
  { value: "cukraszda", label: "Cukrászda", type: "vendeglatohely" },
  { value: "csarda", label: "Csárda", type: "vendeglatohely" },
  { value: "etelbar", label: "Ételbár", type: "vendeglatohely" },
  { value: "etterem", label: "Étterem", type: "vendeglatohely" },
  { value: "fogado", label: "Fogadó", type: "vendeglatohely" },
  { value: "gyorsetterem", label: "Gyorsétterem", type: "vendeglatohely" },
  { value: "internet-cafe", label: "Internet cafe", type: "vendeglatohely" },
  { value: "kavezo", label: "Kávézó", type: "vendeglatohely" },
  { value: "kocsma", label: "Kocsma", type: "vendeglatohely" },
  { value: "onkiszolgalo", label: "Önkiszolgáló", type: "vendeglatohely" },
  { value: "palacsintazo", label: "Palacsintázó", type: "vendeglatohely" },
  { value: "pekseg", label: "Pékség", type: "vendeglatohely" },
  { value: "pizzeria", label: "Pizzéria", type: "vendeglatohely" },
  { value: "pub", label: "Pub", type: "vendeglatohely" },
  { value: "salatabar", label: "Salátabár", type: "vendeglatohely" },
  { value: "szendvicsbar", label: "Szendvicsbár", type: "vendeglatohely" },
  { value: "szorakozohely", label: "Szórakozóhely", type: "vendeglatohely" },
  { value: "egyeb", label: "Egyéb", type: "vendeglatohely" },
  { value: "altalanos", label: "Általános", type: "fejlesztesi-terulet" },
  { value: "lakoterulet", label: "Lakóterület", type: "fejlesztesi-terulet" },
  { value: "uduloterulet", label: "Üdülőterület", type: "fejlesztesi-terulet" },
  {
    value: "ipari-terulet",
    label: "Ipari terület",
    type: "fejlesztesi-terulet",
  },
  {
    value: "onallo-epulet",
    label: "Önálló épület",
    type: "fejlesztesi-terulet",
  },
  {
    value: "szolgaltatasi-terulet",
    label: "Szolgáltatási terület",
    type: "fejlesztesi-terulet",
  },
  { value: "epuletresz", label: "Épületrész", type: "fejlesztesi-terulet" },
  { value: "a-irodaepulet", label: "A irodaépület", type: "irodahaz" },
  { value: "a+-irodaepulet", label: "A+ irodaépület", type: "irodahaz" },
  { value: "b-irodaepulet", label: "B irodaépület", type: "irodahaz" },
  { value: "c-irodaepulet", label: "C irodaépület", type: "irodahaz" },
  { value: "bevasarlokozpont", label: "Bevásárlóközpont", type: "irodahaz" },
  { value: "szalloda", label: "Szálloda", type: "szallashely" },
  { value: "hotel", label: "Hotel", type: "szallashely" },
  { value: "hostel", label: "Hostel", type: "szallashely" },
  { value: "panzio", label: "Panzió", type: "szallashely" },
  { value: "egyeb", label: "Egyéb", type: "szallashely" },
  { value: "altalanos", label: "Általános", type: "mezogazdasagi-terulet" },
  { value: "gyumolcsos", label: "Gyümölcsös", type: "mezogazdasagi-terulet" },
  { value: "szanto", label: "Szántó", type: "mezogazdasagi-terulet" },
  { value: "szolos", label: "Szőlős", type: "mezogazdasagi-terulet" },
  { value: "erdo", label: "Erdő", type: "mezogazdasagi-terulet" },
  { value: "halasto", label: "Halastó", type: "mezogazdasagi-terulet" },
  { value: "egyeb", label: "Egyéb", type: "mezogazdasagi-terulet" },
];

export const currency = [
  { value: "huf", label: "HUF" },
  { value: "eur", label: "EUR" },
  { value: "usd", label: "USD" },
];

export const furdo = [
  { value: "kulon", label: "Külön" },
  { value: "egyben", label: "Egyben" },
  { value: "kulon-egyben", label: "Külön és egyben is" },
];

export const property_condition = [
  { value: "1", label: "Lakhatatlan" },
  { value: "2", label: "Felújítandó" },
  { value: "3", label: "Lakható" },
  { value: "4", label: "Jó" },
  { value: "5", label: "Nagyon jó" },
  { value: "uj-ep.", label: "Új építésű" },
];

export const building_condition_in = [
  { value: "1", label: "1 - Lakhatatlan" },
  { value: "2", label: "2 - Felújítandó" },
  { value: "3", label: "3 - Lakható" },
  { value: "4", label: "4 - Jó" },
  { value: "5", label: "5 - Nagyon jó" },
  { value: "uj-ep.", label: "Új ép." },
];

export const building_condition_out = [
  { value: "1", label: "1 - Lakhatatlan" },
  { value: "2", label: "2 - Felújítandó" },
  { value: "3", label: "3 - Lakható" },
  { value: "4", label: "4 - Jó" },
  { value: "5", label: "5 - Nagyon jó" },
  { value: "uj-ep.", label: "Új ép." },
];

export const komfort = [
  { value: "komfort-nelkuli", label: "Komfort nélküli" },
  { value: "felkomfortos", label: "Félkomfortos" },
  { value: "komfortos", label: "Komfortos" },
  { value: "osszkomfortos", label: "Összkomfortos" },
  { value: "duplakomfortos", label: "Duplakomfortos" },
  { value: "luxus", label: "Luxus" },
];

export const viewOptions = [
  { value: "utca", label: "Utca" },
  { value: "udvar", label: "Udvar" },
  { value: "panorama", label: "Panoráma" },
  { value: "zoldudvar-/-kert", label: "Zöldudvar / kert" },
];

export const garden = [
  { value: "igen", label: "Igen" },
  { value: "nem", label: "Nem" },
];

export const tetoter = [
  { value: "mindegy", label: "Mindegy" },
  { value: "tetoteri", label: "Tetőtéri" },
  { value: "nem-tetoteri", label: "Nem tetőtéri" },
  {
    value: "legfelso-emelet-nem-tetoteri",
    label: "Legfelső emelet, nem tetőtéri",
  },
  { value: "zaroszint", label: "Zárószint" },
  { value: "penthouse", label: "Penthouse" },
];

export const floorOptions = [
  { value: "-5", label: "-5" },
  { value: "-4", label: "-4" },
  { value: "-3", label: "-3" },
  { value: "-2", label: "-2" },
  { value: "-1", label: "-1" },
  { value: "pinceszint", label: "Pinceszint" },
  { value: "alagsor", label: "Alagsor" },
  { value: "szuteren", label: "Szuterén" },
  { value: "felszuteren", label: "Félszuterén" },
  { value: "foldszint", label: "Földszint" },
  { value: "magasfoldszint", label: "Magasföldszint" },
  { value: "felemelet", label: "Félemelet" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "20+", label: "20+" },
];

export const houseFloors = [
  { value: "-5", label: "-5" },
  { value: "-4", label: "-4" },
  { value: "-3", label: "-3" },
  { value: "-2", label: "-2" },
  { value: "-1", label: "-1" },
  { value: "pinceszint", label: "Pinceszint" },
  { value: "alagsor", label: "Alagsor" },
  { value: "szuteren", label: "Szuterén" },
  { value: "felszuteren", label: "Félszuterén" },
  { value: "foldszint", label: "Földszint" },
  { value: "magasfoldszint", label: "Magasföldszint" },
  { value: "felemelet", label: "Félemelet" },
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "20+", label: "20+" },
];

export const ltyp = [
  { value: "lako-ovezet", label: "Lakó övezet" },
  { value: "udulo-ovezet", label: "Üdülő övezet" },
  { value: "kulterulet", label: "Külterület" },
  { value: "egyeb", label: "Egyéb" },
];

export const rend = [
  { value: "lakoingatlan", label: "Lakóingatlan" },
  { value: "nyaralo", label: "Nyaraló" },
  { value: "egyeb", label: "Egyéb" },
];

export const water = [
  { value: "van", label: "Van" },
  { value: "nincs-adat", label: "Nincs adat" },
  { value: "telken-belul", label: "Telken belül" },
  { value: "utcaban", label: "Utcában" },
  { value: "nincs", label: "Nincs" },
];

export const gas = [
  { value: "van", label: "Van" },
  { value: "nincs-adat", label: "Nincs adat" },
  { value: "telken-belul", label: "Telken belül" },
  { value: "utcaban", label: "Utcában" },
  { value: "nincs", label: "Nincs" },
];

export const sewage = [
  { value: "van", label: "Van" },
  { value: "nincs-adat", label: "Nincs adat" },
  { value: "telken-belul", label: "Telken belül" },
  { value: "utcaban", label: "Utcában" },
  { value: "nincs", label: "Nincs" },
];

export const electr = [
  { value: "van", label: "Van" },
  { value: "nincs-adat", label: "Nincs adat" },
  { value: "telken-belul", label: "Telken belül" },
  { value: "utcaban", label: "Utcában" },
  { value: "nincs", label: "Nincs" },
];

export const builds = [
  { value: "panel", label: "Panel" },
  { value: "tegla", label: "Tégla" },
  { value: "konnyuszerkezetes", label: "Könnyűszerkezetes" },
  { value: "ytong", label: "Ytong" },
  { value: "fa", label: "Fa" },
  { value: "csusztatott-zsalu", label: "Csúsztatott zsalu" },
  { value: "valyog", label: "Vályog" },
  { value: "vegyes-falazat", label: "Vegyes falazat" },
  { value: "vert-falazat", label: "Vert falazat" },
  { value: "egyeb", label: "Egyéb" },
];

export const light = [
  { value: "gyenge", label: "Gyenge" },
  { value: "kozepes", label: "Közepes" },
  { value: "jo", label: "Jó" },
  { value: "napfenyes", label: "Napfényes" },
];

export const legkondicionalo = [
  { value: "van", label: "Van" },
  { value: "nincs", label: "Nincs" },
];

export const heatingOptions = [
  { value: "gaz-(cirko)", label: "Gáz (cirkó)" },
  { value: "gaz-(konvektor)", label: "Gáz (konvektor)" },
  { value: "gaz-(hera)", label: "Gáz (héra)" },
  { value: "gaz+napkollektor", label: "Gáz + napkollektor" },
  { value: "gazkazan", label: "Gázkazán" },
  { value: "elektromos", label: "Elektromos" },
  { value: "egyeb-kazan", label: "Egyéb kazán" },
  { value: "egyeb", label: "Egyéb" },
  { value: "tavfutes", label: "Távfűtés" },
  { value: "hazkozponti", label: "Házközponti" },
  {
    value: "hazkozponti-egyedi-meressel",
    label: "Házközponti egyedi méréssel",
  },
  { value: "geotermikus", label: "Geotermikus" },
  { value: "tavfutes-egyedi-merovel", label: "Távfűtés egyedi mérővel" },
  { value: "hoszivattyus", label: "Hőszivattyús" },
];

export const lift = [
  { value: "nincs", label: "Nincs" },
  { value: "kulcsos", label: "Kulcsos" },
  { value: "hivo", label: "Hívó" },
];

export const orientationOptions = [
  { value: "eny", label: "ÉNY" },
  { value: "ek", label: "ÉK" },
  { value: "k", label: "K" },
  { value: "d", label: "D" },
  { value: "dk", label: "DK" },
  { value: "dny", label: "DNY" },
  { value: "ny", label: "NY" },
  { value: "e", label: "É" },
];

export const stair = [
  { value: "zart-lepcsohaz", label: "Zárt lépcsőház" },
  { value: "korfolyoso", label: "Körfolyosó" },
];

export const disabled = [
  { value: "igen", label: "Igen" },
  { value: "nem", label: "Nem" },
];

export const parktype = [
  { value: "onallo-garazs", label: "Önálló garázs" },
  { value: "teremgarazs", label: "Teremgarázs" },
  { value: "udvari-beallo", label: "Udvari beálló" },
  { value: "utcaban-i", label: "Utcában - Ingyenes" },
  { value: "utcaban-f", label: "Utcában - Fizetős" },
];

export const extras = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
  { value: "32", label: "32" },
  { value: "33", label: "33" },
  { value: "34", label: "34" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "35", label: "35" },
  { value: "36", label: "36" },
  { value: "37", label: "37" },
  { value: "38", label: "38" },
  { value: "39", label: "39" },
  { value: "40", label: "40" },
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
  { value: "45", label: "45" },
  { value: "46", label: "46" },
  { value: "47", label: "47" },
  { value: "48", label: "48" },
  { value: "49", label: "49" },
  { value: "50", label: "50" },
  { value: "51", label: "51" },
  { value: "52", label: "52" },
  { value: "53", label: "53" },
  { value: "53", label: "53" },
  { value: "53", label: "53" },
  { value: "54", label: "54" },
  { value: "55", label: "55" },
  { value: "56", label: "56" },
];

export const builtYear = [
  { value: 2024, label: "2024" },
  { value: 2023, label: "2023" },
  { value: 2022, label: "2022" },
  { value: 2021, label: "2021" },
  { value: 2020, label: "2020" },
  { value: 2019, label: "2019" },
  { value: 2018, label: "2018" },
  { value: 2017, label: "2017" },
  { value: 2016, label: "2016" },
  { value: 2015, label: "2015" },
  { value: 2014, label: "2014" },
  { value: 2013, label: "2013" },
  { value: 2012, label: "2012" },
  { value: 2011, label: "2011" },
  { value: 2010, label: "2010" },
  { value: 2009, label: "2009" },
  { value: 2008, label: "2008" },
  { value: 2007, label: "2007" },
  { value: 2006, label: "2006" },
  { value: 2005, label: "2005" },
  { value: 2004, label: "2004" },
  { value: 2003, label: "2003" },
  { value: 2002, label: "2002" },
  { value: 2001, label: "2001" },
  { value: 2000, label: "2000" },
  { value: 1999, label: "1999" },
  { value: 1998, label: "1998" },
  { value: 1997, label: "1997" },
  { value: 1996, label: "1996" },
  { value: 1995, label: "1995" },
  { value: 1994, label: "1994" },
  { value: 1993, label: "1993" },
  { value: 1992, label: "1992" },
  { value: 1991, label: "1991" },
  { value: 1990, label: "1990" },
  { value: 1980 - 1990, label: "1980 és 1990 között" },
  { value: 1970 - 1980, label: "1970 és 1980 között" },
  { value: 1960 - 1970, label: "1960 és 1970 között" },
  { value: 1950 - 1960, label: "1950 és 1960 között" },
  { value: 1950, label: "1950 vagy régebbi" },
];

export const ceilingHeightOptions = [
  { value: "3 méter alatti", label: "3 méter alatti" },
  { value: "3 méter feletti", label: "3 méter feletti" },
];

export const settlementOptions = [
  {
    value: "Aba",
    label: "Aba",
  },
  {
    value: "Abádszalók",
    label: "Abádszalók",
  },
  {
    value: "Abaliget",
    label: "Abaliget",
  },
  {
    value: "Abasár",
    label: "Abasár",
  },
  {
    value: "Abaújalpár",
    label: "Abaújalpár",
  },
  {
    value: "Abaújkér",
    label: "Abaújkér",
  },
  {
    value: "Abaújlak",
    label: "Abaújlak",
  },
  {
    value: "Abaújszántó",
    label: "Abaújszántó",
  },
  {
    value: "Abaújszolnok",
    label: "Abaújszolnok",
  },
  {
    value: "Abaújvár",
    label: "Abaújvár",
  },
  {
    value: "Abda",
    label: "Abda",
  },
  {
    value: "Abod",
    label: "Abod",
  },
  {
    value: "Abony",
    label: "Abony",
  },
  {
    value: "Ábrahámhegy",
    label: "Ábrahámhegy",
  },
  {
    value: "Ács",
    label: "Ács",
  },
  {
    value: "Acsa",
    label: "Acsa",
  },
  {
    value: "Acsád",
    label: "Acsád",
  },
  {
    value: "Acsalag",
    label: "Acsalag",
  },
  {
    value: "Ácsteszér",
    label: "Ácsteszér",
  },
  {
    value: "Adács",
    label: "Adács",
  },
  {
    value: "Ádánd",
    label: "Ádánd",
  },
  {
    value: "Adásztevel",
    label: "Adásztevel",
  },
  {
    value: "Adony",
    label: "Adony",
  },
  {
    value: "Adorjánháza",
    label: "Adorjánháza",
  },
  {
    value: "Adorjás",
    label: "Adorjás",
  },
  {
    value: "Ág",
    label: "Ág",
  },
  {
    value: "Agárd",
    label: "Agárd",
  },
  {
    value: "Ágasegyháza",
    label: "Ágasegyháza",
  },
  {
    value: "Ágasegyházai-rét",
    label: "Ágasegyházai-rét",
  },
  {
    value: "Ágfalva",
    label: "Ágfalva",
  },
  {
    value: "Aggtelek",
    label: "Aggtelek",
  },
  {
    value: "Agyagosszergény",
    label: "Agyagosszergény",
  },
  {
    value: "Ajak",
    label: "Ajak",
  },
  {
    value: "Ajka",
    label: "Ajka",
  },
  {
    value: "Aka",
    label: "Aka",
  },
  {
    value: "Akasztó",
    label: "Akasztó",
  },
  {
    value: "Alacska",
    label: "Alacska",
  },
  {
    value: "Alap",
    label: "Alap",
  },
  {
    value: "Alattyán",
    label: "Alattyán",
  },
  {
    value: "Albertirsa",
    label: "Albertirsa",
  },
  {
    value: "Alcsipuszta",
    label: "Alcsipuszta",
  },
  {
    value: "Alcsútdoboz",
    label: "Alcsútdoboz",
  },
  {
    value: "Algyő",
    label: "Algyő",
  },
  {
    value: "Alibánfa",
    label: "Alibánfa",
  },
  {
    value: "Almamellék",
    label: "Almamellék",
  },
  {
    value: "Almásfüzitő",
    label: "Almásfüzitő",
  },
  {
    value: "Almásháza",
    label: "Almásháza",
  },
  {
    value: "Almáskamarás",
    label: "Almáskamarás",
  },
  {
    value: "Almáskeresztúr",
    label: "Almáskeresztúr",
  },
  {
    value: "Álmosd",
    label: "Álmosd",
  },
  {
    value: "Alsó Tó",
    label: "Alsó Tó",
  },
  {
    value: "Alsó-kő-forrás",
    label: "Alsó-kő-forrás",
  },
  {
    value: "Alsóberecki",
    label: "Alsóberecki",
  },
  {
    value: "Alsóbogát",
    label: "Alsóbogát",
  },
  {
    value: "Alsódobsza",
    label: "Alsódobsza",
  },
  {
    value: "Alsóföldi Tanyák",
    label: "Alsóföldi Tanyák",
  },
  {
    value: "Alsógagy",
    label: "Alsógagy",
  },
  {
    value: "Alsómocsolád",
    label: "Alsómocsolád",
  },
  {
    value: "Alsónána",
    label: "Alsónána",
  },
  {
    value: "Alsónémedi",
    label: "Alsónémedi",
  },
  {
    value: "Alsónemesapáti",
    label: "Alsónemesapáti",
  },
  {
    value: "Alsónyék",
    label: "Alsónyék",
  },
  {
    value: "Alsóörs",
    label: "Alsóörs",
  },
  {
    value: "Alsópáhok",
    label: "Alsópáhok",
  },
  {
    value: "Alsópetény",
    label: "Alsópetény",
  },
  {
    value: "Alsórajk",
    label: "Alsórajk",
  },
  {
    value: "Alsóregmec",
    label: "Alsóregmec",
  },
  {
    value: "Alsószenterzsébet",
    label: "Alsószenterzsébet",
  },
  {
    value: "Alsószentiván",
    label: "Alsószentiván",
  },
  {
    value: "Alsószentkirály",
    label: "Alsószentkirály",
  },
  {
    value: "Alsószentmárton",
    label: "Alsószentmárton",
  },
  {
    value: "Alsószölnök",
    label: "Alsószölnök",
  },
  {
    value: "Alsószuha",
    label: "Alsószuha",
  },
  {
    value: "Alsótelekes",
    label: "Alsótelekes",
  },
  {
    value: "Alsótold",
    label: "Alsótold",
  },
  {
    value: "Alsóújlak",
    label: "Alsóújlak",
  },
  {
    value: "Alsóvadász",
    label: "Alsóvadász",
  },
  {
    value: "Alsózsolca",
    label: "Alsózsolca",
  },
  {
    value: "Altracs-tó",
    label: "Altracs-tó",
  },
  {
    value: "Ambrózfalva",
    label: "Ambrózfalva",
  },
  {
    value: "Ambrustanya",
    label: "Ambrustanya",
  },
  {
    value: "Anarcs",
    label: "Anarcs",
  },
  {
    value: "Andaházapuszta",
    label: "Andaházapuszta",
  },
  {
    value: "Andocs",
    label: "Andocs",
  },
  {
    value: "Andornaktálya",
    label: "Andornaktálya",
  },
  {
    value: "Andrásfa",
    label: "Andrásfa",
  },
  {
    value: "Angyalföld",
    label: "Angyalföld",
  },
  {
    value: "Annavölgy",
    label: "Annavölgy",
  },
  {
    value: "Apácatorna",
    label: "Apácatorna",
  },
  {
    value: "Apagy",
    label: "Apagy",
  },
  {
    value: "Apaj",
    label: "Apaj",
  },
  {
    value: "Aparhant",
    label: "Aparhant",
  },
  {
    value: "Apátfalva",
    label: "Apátfalva",
  },
  {
    value: "Apáti",
    label: "Apáti",
  },
  {
    value: "Apátistvánfalva",
    label: "Apátistvánfalva",
  },
  {
    value: "Apátvarasd",
    label: "Apátvarasd",
  },
  {
    value: "Apavára",
    label: "Apavára",
  },
  {
    value: "Apc",
    label: "Apc",
  },
  {
    value: "Áporka",
    label: "Áporka",
  },
  {
    value: "Apostag",
    label: "Apostag",
  },
  {
    value: "Aquincum",
    label: "Aquincum",
  },
  {
    value: "Aranyad",
    label: "Aranyad",
  },
  {
    value: "Aranyosapáti",
    label: "Aranyosapáti",
  },
  {
    value: "Aranyosgadány",
    label: "Aranyosgadány",
  },
  {
    value: "Árgyelán-dűlő",
    label: "Árgyelán-dűlő",
  },
  {
    value: "Arka",
    label: "Arka",
  },
  {
    value: "Arló",
    label: "Arló",
  },
  {
    value: "Arnót",
    label: "Arnót",
  },
  {
    value: "Árok Möge",
    label: "Árok Möge",
  },
  {
    value: "Árok-szeg-dűlő",
    label: "Árok-szeg-dűlő",
  },
  {
    value: "Ároktő",
    label: "Ároktő",
  },
  {
    value: "Árontanya",
    label: "Árontanya",
  },
  {
    value: "Árpádhalom",
    label: "Árpádhalom",
  },
  {
    value: "Árpás",
    label: "Árpás",
  },
  {
    value: "Ártánd",
    label: "Ártánd",
  },
  {
    value: "Ásotthalom",
    label: "Ásotthalom",
  },
  {
    value: "Ásványpuszta",
    label: "Ásványpuszta",
  },
  {
    value: "Ásványráró",
    label: "Ásványráró",
  },
  {
    value: "Aszaló",
    label: "Aszaló",
  },
  {
    value: "Ászár",
    label: "Ászár",
  },
  {
    value: "Aszód",
    label: "Aszód",
  },
  {
    value: "Aszófő",
    label: "Aszófő",
  },
  {
    value: "Áta",
    label: "Áta",
  },
  {
    value: "Átány",
    label: "Átány",
  },
  {
    value: "Atka",
    label: "Atka",
  },
  {
    value: "Átokháza",
    label: "Átokháza",
  },
  {
    value: "Attala",
    label: "Attala",
  },
  {
    value: "Avas",
    label: "Avas",
  },
  {
    value: "Babarc",
    label: "Babarc",
  },
  {
    value: "Babarcszőlős",
    label: "Babarcszőlős",
  },
  {
    value: "Bableves",
    label: "Bableves",
  },
  {
    value: "Babó",
    label: "Babó",
  },
  {
    value: "Babócsa",
    label: "Babócsa",
  },
  {
    value: "Bábolna",
    label: "Bábolna",
  },
  {
    value: "Bábonymegyer",
    label: "Bábonymegyer",
  },
  {
    value: "Babosdöbréte",
    label: "Babosdöbréte",
  },
  {
    value: "Babót",
    label: "Babót",
  },
  {
    value: "Bács-dűlő",
    label: "Bács-dűlő",
  },
  {
    value: "Bács-Kiskun",
    label: "Bács-Kiskun",
  },
  {
    value: "Bácsalmás",
    label: "Bácsalmás",
  },
  {
    value: "Bácsbokod",
    label: "Bácsbokod",
  },
  {
    value: "Bácsborsód",
    label: "Bácsborsód",
  },
  {
    value: "Bacsóház",
    label: "Bacsóház",
  },
  {
    value: "Bácsszentgyörgy",
    label: "Bácsszentgyörgy",
  },
  {
    value: "Bácsszőlős",
    label: "Bácsszőlős",
  },
  {
    value: "Badacsony",
    label: "Badacsony",
  },
  {
    value: "Badacsonytomaj",
    label: "Badacsonytomaj",
  },
  {
    value: "Badacsonytördemic",
    label: "Badacsonytördemic",
  },
  {
    value: "Bag",
    label: "Bag",
  },
  {
    value: "Bagamér",
    label: "Bagamér",
  },
  {
    value: "Bagi-szeg",
    label: "Bagi-szeg",
  },
  {
    value: "Bagiföld",
    label: "Bagiföld",
  },
  {
    value: "Baglad",
    label: "Baglad",
  },
  {
    value: "Bagod",
    label: "Bagod",
  },
  {
    value: "Bagolyvár",
    label: "Bagolyvár",
  },
  {
    value: "Bágyogszovát",
    label: "Bágyogszovát",
  },
  {
    value: "Baj",
    label: "Baj",
  },
  {
    value: "Baja",
    label: "Baja",
  },
  {
    value: "Bajánsenye",
    label: "Bajánsenye",
  },
  {
    value: "Bajna",
    label: "Bajna",
  },
  {
    value: "Bajna-dűlő",
    label: "Bajna-dűlő",
  },
  {
    value: "Bajót",
    label: "Bajót",
  },
  {
    value: "Bak",
    label: "Bak",
  },
  {
    value: "Bakháza",
    label: "Bakháza",
  },
  {
    value: "Bakóca",
    label: "Bakóca",
  },
  {
    value: "Bakonszeg",
    label: "Bakonszeg",
  },
  {
    value: "Bakony",
    label: "Bakony",
  },
  {
    value: "Bakonya",
    label: "Bakonya",
  },
  {
    value: "Bakonybánk",
    label: "Bakonybánk",
  },
  {
    value: "Bakonybél",
    label: "Bakonybél",
  },
  {
    value: "Bakonycsernye",
    label: "Bakonycsernye",
  },
  {
    value: "Bakonygyirót",
    label: "Bakonygyirót",
  },
  {
    value: "Bakonyjákó",
    label: "Bakonyjákó",
  },
  {
    value: "Bakonykoppány",
    label: "Bakonykoppány",
  },
  {
    value: "Bakonykúti",
    label: "Bakonykúti",
  },
  {
    value: "Bakonynána",
    label: "Bakonynána",
  },
  {
    value: "Bakonyoszlop",
    label: "Bakonyoszlop",
  },
  {
    value: "Bakonypéterd",
    label: "Bakonypéterd",
  },
  {
    value: "Bakonypölöske",
    label: "Bakonypölöske",
  },
  {
    value: "Bakonyság",
    label: "Bakonyság",
  },
  {
    value: "Bakonysárkány",
    label: "Bakonysárkány",
  },
  {
    value: "Bakonyszentiván",
    label: "Bakonyszentiván",
  },
  {
    value: "Bakonyszentkirály",
    label: "Bakonyszentkirály",
  },
  {
    value: "Bakonyszentlászló",
    label: "Bakonyszentlászló",
  },
  {
    value: "Bakonyszombathely",
    label: "Bakonyszombathely",
  },
  {
    value: "Bakonyszücs",
    label: "Bakonyszücs",
  },
  {
    value: "Bakonytamási",
    label: "Bakonytamási",
  },
  {
    value: "Bakos-ér",
    label: "Bakos-ér",
  },
  {
    value: "Baks",
    label: "Baks",
  },
  {
    value: "Baksa",
    label: "Baksa",
  },
  {
    value: "Baktakék",
    label: "Baktakék",
  },
  {
    value: "Baktalórántháza",
    label: "Baktalórántháza",
  },
  {
    value: "Baktüttös",
    label: "Baktüttös",
  },
  {
    value: "Balajt",
    label: "Balajt",
  },
  {
    value: "Balaskópuszta",
    label: "Balaskópuszta",
  },
  {
    value: "Balassagyarmat",
    label: "Balassagyarmat",
  },
  {
    value: "Balástya",
    label: "Balástya",
  },
  {
    value: "Balaton",
    label: "Balaton",
  },
  {
    value: "Balatonakali",
    label: "Balatonakali",
  },
  {
    value: "Balatonakarattya",
    label: "Balatonakarattya",
  },
  {
    value: "Balatonalmádi",
    label: "Balatonalmádi",
  },
  {
    value: "Balatonberény",
    label: "Balatonberény",
  },
  {
    value: "Balatonboglár",
    label: "Balatonboglár",
  },
  {
    value: "Balatoncsicsó",
    label: "Balatoncsicsó",
  },
  {
    value: "Balatonederics",
    label: "Balatonederics",
  },
  {
    value: "Balatonendréd",
    label: "Balatonendréd",
  },
  {
    value: "Balatonfenyves",
    label: "Balatonfenyves",
  },
  {
    value: "Balatonfőkajár",
    label: "Balatonfőkajár",
  },
  {
    value: "Balatonföldvár",
    label: "Balatonföldvár",
  },
  {
    value: "Balatonfüred",
    label: "Balatonfüred",
  },
  {
    value: "Balatonfűzfő",
    label: "Balatonfűzfő",
  },
  {
    value: "Balatongyörök",
    label: "Balatongyörök",
  },
  {
    value: "Balatonhenye",
    label: "Balatonhenye",
  },
  {
    value: "Balatonkenese",
    label: "Balatonkenese",
  },
  {
    value: "Balatonkeresztúr",
    label: "Balatonkeresztúr",
  },
  {
    value: "Balatonlelle",
    label: "Balatonlelle",
  },
  {
    value: "Balatonmagyaród",
    label: "Balatonmagyaród",
  },
  {
    value: "Balatonmáriafürdő",
    label: "Balatonmáriafürdő",
  },
  {
    value: "Balatonőszöd",
    label: "Balatonőszöd",
  },
  {
    value: "Balatonrendes",
    label: "Balatonrendes",
  },
  {
    value: "Balatonszabadi",
    label: "Balatonszabadi",
  },
  {
    value: "Balatonszárszó",
    label: "Balatonszárszó",
  },
  {
    value: "Balatonszemes",
    label: "Balatonszemes",
  },
  {
    value: "Balatonszentgyörgy",
    label: "Balatonszentgyörgy",
  },
  {
    value: "Balatonszepezd",
    label: "Balatonszepezd",
  },
  {
    value: "Balatonszőlős",
    label: "Balatonszőlős",
  },
  {
    value: "Balatonudvari",
    label: "Balatonudvari",
  },
  {
    value: "Balatonújlak",
    label: "Balatonújlak",
  },
  {
    value: "Balatonvilágos",
    label: "Balatonvilágos",
  },
  {
    value: "Balázspuszta",
    label: "Balázspuszta",
  },
  {
    value: "Balczó-halom",
    label: "Balczó-halom",
  },
  {
    value: "Balf",
    label: "Balf",
  },
  {
    value: "Balinka",
    label: "Balinka",
  },
  {
    value: "Balkány",
    label: "Balkány",
  },
  {
    value: "Ballapuszta",
    label: "Ballapuszta",
  },
  {
    value: "Ballószög",
    label: "Ballószög",
  },
  {
    value: "Balmaz",
    label: "Balmaz",
  },
  {
    value: "Balmazújváros",
    label: "Balmazújváros",
  },
  {
    value: "Balog-tanya",
    label: "Balog-tanya",
  },
  {
    value: "Balogunyom",
    label: "Balogunyom",
  },
  {
    value: "Balotaszállás",
    label: "Balotaszállás",
  },
  {
    value: "Balsa",
    label: "Balsa",
  },
  {
    value: "Bálvány",
    label: "Bálvány",
  },
  {
    value: "Bálványos",
    label: "Bálványos",
  },
  {
    value: "Bana",
    label: "Bana",
  },
  {
    value: "Bánatos",
    label: "Bánatos",
  },
  {
    value: "Bánd",
    label: "Bánd",
  },
  {
    value: "Bánfa",
    label: "Bánfa",
  },
  {
    value: "Bánhorváti",
    label: "Bánhorváti",
  },
  {
    value: "Bánk",
    label: "Bánk",
  },
  {
    value: "Bánokszentgyörgy",
    label: "Bánokszentgyörgy",
  },
  {
    value: "Bánom-kert",
    label: "Bánom-kert",
  },
  {
    value: "Bánomtanya",
    label: "Bánomtanya",
  },
  {
    value: "Bánréve",
    label: "Bánréve",
  },
  {
    value: "Bár",
    label: "Bár",
  },
  {
    value: "Barabás",
    label: "Barabás",
  },
  {
    value: "Barackos",
    label: "Barackos",
  },
  {
    value: "Baracs",
    label: "Baracs",
  },
  {
    value: "Baracska",
    label: "Baracska",
  },
  {
    value: "Barákapuszta",
    label: "Barákapuszta",
  },
  {
    value: "Báránd",
    label: "Báránd",
  },
  {
    value: "Bárány-ér",
    label: "Bárány-ér",
  },
  {
    value: "Baranya",
    label: "Baranya",
  },
  {
    value: "Baranyahídvég",
    label: "Baranyahídvég",
  },
  {
    value: "Baranyajenő",
    label: "Baranyajenő",
  },
  {
    value: "Baranyaszentgyörgy",
    label: "Baranyaszentgyörgy",
  },
  {
    value: "Barát-ér-dűlő",
    label: "Barát-ér-dűlő",
  },
  {
    value: "Barátság-kert",
    label: "Barátság-kert",
  },
  {
    value: "Barbacs",
    label: "Barbacs",
  },
  {
    value: "Barbacsi-tó",
    label: "Barbacsi-tó",
  },
  {
    value: "Barcs",
    label: "Barcs",
  },
  {
    value: "Bárda-hát",
    label: "Bárda-hát",
  },
  {
    value: "Bárdudvarnok",
    label: "Bárdudvarnok",
  },
  {
    value: "Barlahida",
    label: "Barlahida",
  },
  {
    value: "Bárna",
    label: "Bárna",
  },
  {
    value: "Barna-máj",
    label: "Barna-máj",
  },
  {
    value: "Barnag",
    label: "Barnag",
  },
  {
    value: "Báró-tag",
    label: "Báró-tag",
  },
  {
    value: "Barosspuszta",
    label: "Barosspuszta",
  },
  {
    value: "Bársonyos",
    label: "Bársonyos",
  },
  {
    value: "Bartapuszta",
    label: "Bartapuszta",
  },
  {
    value: "Bás-halom-dűlő",
    label: "Bás-halom-dűlő",
  },
  {
    value: "Basa-gödör",
    label: "Basa-gödör",
  },
  {
    value: "Basal",
    label: "Basal",
  },
  {
    value: "Baskó",
    label: "Baskó",
  },
  {
    value: "Báta",
    label: "Báta",
  },
  {
    value: "Bátaapáti",
    label: "Bátaapáti",
  },
  {
    value: "Bátaszék",
    label: "Bátaszék",
  },
  {
    value: "Baté",
    label: "Baté",
  },
  {
    value: "Batka-tanya",
    label: "Batka-tanya",
  },
  {
    value: "Bátmonostor",
    label: "Bátmonostor",
  },
  {
    value: "Bátonyterenye",
    label: "Bátonyterenye",
  },
  {
    value: "Bátorliget",
    label: "Bátorliget",
  },
  {
    value: "Battonya",
    label: "Battonya",
  },
  {
    value: "Bátya",
    label: "Bátya",
  },
  {
    value: "Batyk",
    label: "Batyk",
  },
  {
    value: "Batyka",
    label: "Batyka",
  },
  {
    value: "Bázakerettye",
    label: "Bázakerettye",
  },
  {
    value: "Bazsi",
    label: "Bazsi",
  },
  {
    value: "Bazsómajor",
    label: "Bazsómajor",
  },
  {
    value: "Béb",
    label: "Béb",
  },
  {
    value: "Becsehely",
    label: "Becsehely",
  },
  {
    value: "Becsek",
    label: "Becsek",
  },
  {
    value: "Becske",
    label: "Becske",
  },
  {
    value: "Becsked",
    label: "Becsked",
  },
  {
    value: "Becskeháza",
    label: "Becskeháza",
  },
  {
    value: "Becsvölgye",
    label: "Becsvölgye",
  },
  {
    value: "Bedegkér",
    label: "Bedegkér",
  },
  {
    value: "Bedő",
    label: "Bedő",
  },
  {
    value: "Bejcgyertyános",
    label: "Bejcgyertyános",
  },
  {
    value: "Békás",
    label: "Békás",
  },
  {
    value: "Bekecs",
    label: "Bekecs",
  },
  {
    value: "Békés",
    label: "Békés",
  },
  {
    value: "Békéscsaba",
    label: "Békéscsaba",
  },
  {
    value: "Békéssámson",
    label: "Békéssámson",
  },
  {
    value: "Békésszentandrás",
    label: "Békésszentandrás",
  },
  {
    value: "Bélapátfalva",
    label: "Bélapátfalva",
  },
  {
    value: "Bélavár",
    label: "Bélavár",
  },
  {
    value: "Belecska",
    label: "Belecska",
  },
  {
    value: "Beled",
    label: "Beled",
  },
  {
    value: "Beleg",
    label: "Beleg",
  },
  {
    value: "Belezna",
    label: "Belezna",
  },
  {
    value: "Beleznaitanya",
    label: "Beleznaitanya",
  },
  {
    value: "Bélmegyer",
    label: "Bélmegyer",
  },
  {
    value: "Beloiannisz",
    label: "Beloiannisz",
  },
  {
    value: "Belső-iszap",
    label: "Belső-iszap",
  },
  {
    value: "Belső-legelő",
    label: "Belső-legelő",
  },
  {
    value: "Belső-Somogy",
    label: "Belső-Somogy",
  },
  {
    value: "Belsősárd",
    label: "Belsősárd",
  },
  {
    value: "Belvárdgyula",
    label: "Belvárdgyula",
  },
  {
    value: "Benedek-dűlő",
    label: "Benedek-dűlő",
  },
  {
    value: "Benk",
    label: "Benk",
  },
  {
    value: "Bénye",
    label: "Bénye",
  },
  {
    value: "Bér",
    label: "Bér",
  },
  {
    value: "Bérbaltavár",
    label: "Bérbaltavár",
  },
  {
    value: "Bercel",
    label: "Bercel",
  },
  {
    value: "Berceli-Bonafika",
    label: "Berceli-Bonafika",
  },
  {
    value: "Beregdaróc",
    label: "Beregdaróc",
  },
  {
    value: "Beregi-Tiszahát",
    label: "Beregi-Tiszahát",
  },
  {
    value: "Beregsurány",
    label: "Beregsurány",
  },
  {
    value: "Berek",
    label: "Berek",
  },
  {
    value: "Berekböszörmény",
    label: "Berekböszörmény",
  },
  {
    value: "Berekfürdő",
    label: "Berekfürdő",
  },
  {
    value: "Beremend",
    label: "Beremend",
  },
  {
    value: "Berente",
    label: "Berente",
  },
  {
    value: "Beret",
    label: "Beret",
  },
  {
    value: "Beréte-tó",
    label: "Beréte-tó",
  },
  {
    value: "Berettyóújfalu",
    label: "Berettyóújfalu",
  },
  {
    value: "Beretvás-föld",
    label: "Beretvás-föld",
  },
  {
    value: "Berged",
    label: "Berged",
  },
  {
    value: "Berhida",
    label: "Berhida",
  },
  {
    value: "Berkenye",
    label: "Berkenye",
  },
  {
    value: "Berkesd",
    label: "Berkesd",
  },
  {
    value: "Berkesz",
    label: "Berkesz",
  },
  {
    value: "Bernátrész",
    label: "Bernátrész",
  },
  {
    value: "Bernecebaráti",
    label: "Bernecebaráti",
  },
  {
    value: "Berva",
    label: "Berva",
  },
  {
    value: "Berzék",
    label: "Berzék",
  },
  {
    value: "Berzence",
    label: "Berzence",
  },
  {
    value: "Bésató",
    label: "Bésató",
  },
  {
    value: "Besence",
    label: "Besence",
  },
  {
    value: "Besenyőd",
    label: "Besenyőd",
  },
  {
    value: "Besenyőtelek",
    label: "Besenyőtelek",
  },
  {
    value: "Besenyszög",
    label: "Besenyszög",
  },
  {
    value: "Besnyő",
    label: "Besnyő",
  },
  {
    value: "Beszterec",
    label: "Beszterec",
  },
  {
    value: "Bezedek",
    label: "Bezedek",
  },
  {
    value: "Bezenye",
    label: "Bezenye",
  },
  {
    value: "Bezeréd",
    label: "Bezeréd",
  },
  {
    value: "Bezi",
    label: "Bezi",
  },
  {
    value: "Bezinai Szőlők",
    label: "Bezinai Szőlők",
  },
  {
    value: "Biatorbágy",
    label: "Biatorbágy",
  },
  {
    value: "Bicsérd",
    label: "Bicsérd",
  },
  {
    value: "Bicske",
    label: "Bicske",
  },
  {
    value: "Bihardancsháza",
    label: "Bihardancsháza",
  },
  {
    value: "Biharkeresztes",
    label: "Biharkeresztes",
  },
  {
    value: "Biharnagybajom",
    label: "Biharnagybajom",
  },
  {
    value: "Bihartorda",
    label: "Bihartorda",
  },
  {
    value: "Biharugra",
    label: "Biharugra",
  },
  {
    value: "Bika-rakodó",
    label: "Bika-rakodó",
  },
  {
    value: "Bika-rét",
    label: "Bika-rét",
  },
  {
    value: "Bika-zug",
    label: "Bika-zug",
  },
  {
    value: "Bikács",
    label: "Bikács",
  },
  {
    value: "Bikal",
    label: "Bikal",
  },
  {
    value: "Bikató",
    label: "Bikató",
  },
  {
    value: "Bimbó-hegy-dűlő",
    label: "Bimbó-hegy-dűlő",
  },
  {
    value: "Binye-ráta",
    label: "Binye-ráta",
  },
  {
    value: "Biri",
    label: "Biri",
  },
  {
    value: "Biri-szőlő-dűlő",
    label: "Biri-szőlő-dűlő",
  },
  {
    value: "Birján",
    label: "Birján",
  },
  {
    value: "Birkás-Perjés-dűlő",
    label: "Birkás-Perjés-dűlő",
  },
  {
    value: "Bírótanya",
    label: "Bírótanya",
  },
  {
    value: "Bisse",
    label: "Bisse",
  },
  {
    value: "Bitang-dűlő",
    label: "Bitang-dűlő",
  },
  {
    value: "Bő",
    label: "Bő",
  },
  {
    value: "Boba",
    label: "Boba",
  },
  {
    value: "Bobáktanya",
    label: "Bobáktanya",
  },
  {
    value: "Boc-kerek",
    label: "Boc-kerek",
  },
  {
    value: "Bocfölde",
    label: "Bocfölde",
  },
  {
    value: "Boconád",
    label: "Boconád",
  },
  {
    value: "Bőcs",
    label: "Bőcs",
  },
  {
    value: "Bócsa",
    label: "Bócsa",
  },
  {
    value: "Bocska",
    label: "Bocska",
  },
  {
    value: "Bocskaikert",
    label: "Bocskaikert",
  },
  {
    value: "Bocskor-kert",
    label: "Bocskor-kert",
  },
  {
    value: "Boda",
    label: "Boda",
  },
  {
    value: "Boda-zug",
    label: "Boda-zug",
  },
  {
    value: "Bodajk",
    label: "Bodajk",
  },
  {
    value: "Bodajki-hegy",
    label: "Bodajki-hegy",
  },
  {
    value: "Bodakajtor",
    label: "Bodakajtor",
  },
  {
    value: "Bödd-Bakod",
    label: "Bödd-Bakod",
  },
  {
    value: "Böde",
    label: "Böde",
  },
  {
    value: "Bödeháza",
    label: "Bödeháza",
  },
  {
    value: "Bódi-hát",
    label: "Bódi-hát",
  },
  {
    value: "Bodmér",
    label: "Bodmér",
  },
  {
    value: "Bodó-tag",
    label: "Bodó-tag",
  },
  {
    value: "Bodolyabér",
    label: "Bodolyabér",
  },
  {
    value: "Bodolyó-rét",
    label: "Bodolyó-rét",
  },
  {
    value: "Bodonhely",
    label: "Bodonhely",
  },
  {
    value: "Bodonos-kút-dűlő",
    label: "Bodonos-kút-dűlő",
  },
  {
    value: "Bodor-kút-dűlő",
    label: "Bodor-kút-dűlő",
  },
  {
    value: "Bodorfa",
    label: "Bodorfa",
  },
  {
    value: "Bodrog",
    label: "Bodrog",
  },
  {
    value: "Bodroghalom",
    label: "Bodroghalom",
  },
  {
    value: "Bodrogkeresztúr",
    label: "Bodrogkeresztúr",
  },
  {
    value: "Bodrogkisfalud",
    label: "Bodrogkisfalud",
  },
  {
    value: "Bodrogköz",
    label: "Bodrogköz",
  },
  {
    value: "Bodrogolaszi",
    label: "Bodrogolaszi",
  },
  {
    value: "Bódvalenke",
    label: "Bódvalenke",
  },
  {
    value: "Bódvarákó",
    label: "Bódvarákó",
  },
  {
    value: "Bódvaszilas",
    label: "Bódvaszilas",
  },
  {
    value: "Bodzás",
    label: "Bodzás",
  },
  {
    value: "Bodzás-zug",
    label: "Bodzás-zug",
  },
  {
    value: "Bogács",
    label: "Bogács",
  },
  {
    value: "Bogád",
    label: "Bogád",
  },
  {
    value: "Bogádmindszent",
    label: "Bogádmindszent",
  },
  {
    value: "Bogáncs-dűlő",
    label: "Bogáncs-dűlő",
  },
  {
    value: "Bogaras",
    label: "Bogaras",
  },
  {
    value: "Bogárzó Tó",
    label: "Bogárzó Tó",
  },
  {
    value: "Bogdása",
    label: "Bogdása",
  },
  {
    value: "Bögi-dűlő",
    label: "Bögi-dűlő",
  },
  {
    value: "Bögi-szőlő",
    label: "Bögi-szőlő",
  },
  {
    value: "Boglyáslengés-dűlő",
    label: "Boglyáslengés-dűlő",
  },
  {
    value: "Boglyodka",
    label: "Boglyodka",
  },
  {
    value: "Bögöt",
    label: "Bögöt",
  },
  {
    value: "Bögöte",
    label: "Bögöte",
  },
  {
    value: "Bogyiszló",
    label: "Bogyiszló",
  },
  {
    value: "Bogyoszló",
    label: "Bogyoszló",
  },
  {
    value: "Bohnyat-dűlő",
    label: "Bohnyat-dűlő",
  },
  {
    value: "Böhönye",
    label: "Böhönye",
  },
  {
    value: "Bojár",
    label: "Bojár",
  },
  {
    value: "Bojt",
    label: "Bojt",
  },
  {
    value: "Bókaháza",
    label: "Bókaháza",
  },
  {
    value: "Bökény",
    label: "Bökény",
  },
  {
    value: "Bokod",
    label: "Bokod",
  },
  {
    value: "Bököny",
    label: "Bököny",
  },
  {
    value: "Bokor",
    label: "Bokor",
  },
  {
    value: "Bokortanya",
    label: "Bokortanya",
  },
  {
    value: "Bölcske",
    label: "Bölcske",
  },
  {
    value: "Boldog",
    label: "Boldog",
  },
  {
    value: "Boldog-szög",
    label: "Boldog-szög",
  },
  {
    value: "Boldogasszonyfa",
    label: "Boldogasszonyfa",
  },
  {
    value: "Boldogházi-dűlő",
    label: "Boldogházi-dűlő",
  },
  {
    value: "Boldogkőújfalu",
    label: "Boldogkőújfalu",
  },
  {
    value: "Boldogkőváralja",
    label: "Boldogkőváralja",
  },
  {
    value: "Boldva",
    label: "Boldva",
  },
  {
    value: "Bolhás",
    label: "Bolhás",
  },
  {
    value: "Bolhó",
    label: "Bolhó",
  },
  {
    value: "Bóly",
    label: "Bóly",
  },
  {
    value: "Boncodfölde",
    label: "Boncodfölde",
  },
  {
    value: "Bóni-láp",
    label: "Bóni-láp",
  },
  {
    value: "Bonnya",
    label: "Bonnya",
  },
  {
    value: "Bónom-zug",
    label: "Bónom-zug",
  },
  {
    value: "Bőny",
    label: "Bőny",
  },
  {
    value: "Bonyhád",
    label: "Bonyhád",
  },
  {
    value: "Bonyhádvarasd",
    label: "Bonyhádvarasd",
  },
  {
    value: "Borbála",
    label: "Borbála",
  },
  {
    value: "Borbála-kert",
    label: "Borbála-kert",
  },
  {
    value: "Borbás-tó",
    label: "Borbás-tó",
  },
  {
    value: "Börcs",
    label: "Börcs",
  },
  {
    value: "Bordány",
    label: "Bordány",
  },
  {
    value: "Bőrdec",
    label: "Bőrdec",
  },
  {
    value: "Borgáta",
    label: "Borgáta",
  },
  {
    value: "Boros-tó",
    label: "Boros-tó",
  },
  {
    value: "Borota",
    label: "Borota",
  },
  {
    value: "Borsfa",
    label: "Borsfa",
  },
  {
    value: "Borsó-föld",
    label: "Borsó-föld",
  },
  {
    value: "Borsó-zug",
    label: "Borsó-zug",
  },
  {
    value: "Borsodbóta",
    label: "Borsodbóta",
  },
  {
    value: "Borsodgeszt",
    label: "Borsodgeszt",
  },
  {
    value: "Borsodi-medence",
    label: "Borsodi-medence",
  },
  {
    value: "Borsodi-Mezőség",
    label: "Borsodi-Mezőség",
  },
  {
    value: "Borsodivánka",
    label: "Borsodivánka",
  },
  {
    value: "Borsodnádasd",
    label: "Borsodnádasd",
  },
  {
    value: "Borsodszentgyörgy",
    label: "Borsodszentgyörgy",
  },
  {
    value: "Borsodszirák",
    label: "Borsodszirák",
  },
  {
    value: "Borsosberény",
    label: "Borsosberény",
  },
  {
    value: "Borsosi-tó",
    label: "Borsosi-tó",
  },
  {
    value: "Borszörcsök",
    label: "Borszörcsök",
  },
  {
    value: "Borzavár",
    label: "Borzavár",
  },
  {
    value: "Börzönce",
    label: "Börzönce",
  },
  {
    value: "Börzönpuszta",
    label: "Börzönpuszta",
  },
  {
    value: "Börzsöny",
    label: "Börzsöny",
  },
  {
    value: "Bősárkány",
    label: "Bősárkány",
  },
  {
    value: "Bosta",
    label: "Bosta",
  },
  {
    value: "Bőszénfa",
    label: "Bőszénfa",
  },
  {
    value: "Bótiszállás",
    label: "Bótiszállás",
  },
  {
    value: "Botpalád",
    label: "Botpalád",
  },
  {
    value: "Botykapeterd",
    label: "Botykapeterd",
  },
  {
    value: "Bozsok",
    label: "Bozsok",
  },
  {
    value: "Bózsva",
    label: "Bózsva",
  },
  {
    value: "Bozzai",
    label: "Bozzai",
  },
  {
    value: "Brassó-zug",
    label: "Brassó-zug",
  },
  {
    value: "Bucsa",
    label: "Bucsa",
  },
  {
    value: "Bucsu",
    label: "Bucsu",
  },
  {
    value: "Búcsúszentlászló",
    label: "Búcsúszentlászló",
  },
  {
    value: "Bucsuta",
    label: "Bucsuta",
  },
  {
    value: "Budai-hegység",
    label: "Budai-hegység",
  },
  {
    value: "Budajenő",
    label: "Budajenő",
  },
  {
    value: "Budakalász",
    label: "Budakalász",
  },
  {
    value: "Budakeszi",
    label: "Budakeszi",
  },
  {
    value: "Budaörs",
    label: "Budaörs",
  },
  {
    value: "Budapest",
    label: "Budapest",
  },
  {
    value: "Büdös Tó",
    label: "Büdös Tó",
  },
  {
    value: "Büdös-lápos",
    label: "Büdös-lápos",
  },
  {
    value: "Büdös-szék",
    label: "Büdös-szék",
  },
  {
    value: "Bugac",
    label: "Bugac",
  },
  {
    value: "Bugacpusztaháza",
    label: "Bugacpusztaháza",
  },
  {
    value: "Bugyi",
    label: "Bugyi",
  },
  {
    value: "Bugyogó",
    label: "Bugyogó",
  },
  {
    value: "Buj",
    label: "Buj",
  },
  {
    value: "Buják",
    label: "Buják",
  },
  {
    value: "Bük",
    label: "Bük",
  },
  {
    value: "Bükk",
    label: "Bükk",
  },
  {
    value: "Bükkábrány",
    label: "Bükkábrány",
  },
  {
    value: "Bükkaranyos",
    label: "Bükkaranyos",
  },
  {
    value: "Bükkmogyorósd",
    label: "Bükkmogyorósd",
  },
  {
    value: "Bükkösd",
    label: "Bükkösd",
  },
  {
    value: "Bükkszék",
    label: "Bükkszék",
  },
  {
    value: "Bükkszentkereszt",
    label: "Bükkszentkereszt",
  },
  {
    value: "Bükkzsérc",
    label: "Bükkzsérc",
  },
  {
    value: "Büngösd",
    label: "Büngösd",
  },
  {
    value: "Bürkös",
    label: "Bürkös",
  },
  {
    value: "Bürüs",
    label: "Bürüs",
  },
  {
    value: "Buskai-földek",
    label: "Buskai-földek",
  },
  {
    value: "Büssü",
    label: "Büssü",
  },
  {
    value: "Bústanya",
    label: "Bústanya",
  },
  {
    value: "Bűt-hát",
    label: "Bűt-hát",
  },
  {
    value: "Büttös",
    label: "Büttös",
  },
  {
    value: "Búzás Tó",
    label: "Búzás Tó",
  },
  {
    value: "Buzsák",
    label: "Buzsák",
  },
  {
    value: "Cák",
    label: "Cák",
  },
  {
    value: "Cakó",
    label: "Cakó",
  },
  {
    value: "Cakóháza",
    label: "Cakóháza",
  },
  {
    value: "Cece",
    label: "Cece",
  },
  {
    value: "Cégény-rét",
    label: "Cégény-rét",
  },
  {
    value: "Cégénydányád",
    label: "Cégénydányád",
  },
  {
    value: "Cegléd",
    label: "Cegléd",
  },
  {
    value: "Ceglédbercel",
    label: "Ceglédbercel",
  },
  {
    value: "Ceglédi-dűlő",
    label: "Ceglédi-dűlő",
  },
  {
    value: "Celldömölk",
    label: "Celldömölk",
  },
  {
    value: "Cered",
    label: "Cered",
  },
  {
    value: "Cherekhat",
    label: "Cherekhat",
  },
  {
    value: "Chernelházadamonya",
    label: "Chernelházadamonya",
  },
  {
    value: "Cibak-dűlő",
    label: "Cibak-dűlő",
  },
  {
    value: "Cibakháza",
    label: "Cibakháza",
  },
  {
    value: "Cibere",
    label: "Cibere",
  },
  {
    value: "Cifra-kert",
    label: "Cifra-kert",
  },
  {
    value: "Cifra-Nyésta",
    label: "Cifra-Nyésta",
  },
  {
    value: "Cifraszállás",
    label: "Cifraszállás",
  },
  {
    value: "Cigánd",
    label: "Cigánd",
  },
  {
    value: "Cikó",
    label: "Cikó",
  },
  {
    value: "Cina-derék",
    label: "Cina-derék",
  },
  {
    value: "Cinegés",
    label: "Cinegés",
  },
  {
    value: "Cirák",
    label: "Cirák",
  },
  {
    value: "Csáb-Bodzás-dűlő",
    label: "Csáb-Bodzás-dűlő",
  },
  {
    value: "Csabacsűd",
    label: "Csabacsűd",
  },
  {
    value: "Csabai-legelő",
    label: "Csabai-legelő",
  },
  {
    value: "Csabaszabadi",
    label: "Csabaszabadi",
  },
  {
    value: "Csabdi",
    label: "Csabdi",
  },
  {
    value: "Csabrendek",
    label: "Csabrendek",
  },
  {
    value: "Csáfordjánosfa",
    label: "Csáfordjánosfa",
  },
  {
    value: "Csaholc",
    label: "Csaholc",
  },
  {
    value: "Csaj-tó",
    label: "Csaj-tó",
  },
  {
    value: "Csajág",
    label: "Csajág",
  },
  {
    value: "Csákány",
    label: "Csákány",
  },
  {
    value: "Csákánydoroszló",
    label: "Csákánydoroszló",
  },
  {
    value: "Csákberény",
    label: "Csákberény",
  },
  {
    value: "Csákvár",
    label: "Csákvár",
  },
  {
    value: "Csámpa",
    label: "Csámpa",
  },
  {
    value: "Csanádalberti",
    label: "Csanádalberti",
  },
  {
    value: "Csanádapáca",
    label: "Csanádapáca",
  },
  {
    value: "Csanádpalota",
    label: "Csanádpalota",
  },
  {
    value: "Csánig",
    label: "Csánig",
  },
  {
    value: "Csány",
    label: "Csány",
  },
  {
    value: "Csanyik-völgy",
    label: "Csanyik-völgy",
  },
  {
    value: "Csányoszró",
    label: "Csányoszró",
  },
  {
    value: "Csanytelek",
    label: "Csanytelek",
  },
  {
    value: "Csapi",
    label: "Csapi",
  },
  {
    value: "Csapó-tag",
    label: "Csapó-tag",
  },
  {
    value: "Csapod",
    label: "Csapod",
  },
  {
    value: "Csárda-dűlő",
    label: "Csárda-dűlő",
  },
  {
    value: "Csárda-kert",
    label: "Csárda-kert",
  },
  {
    value: "Csárdaszállás",
    label: "Csárdaszállás",
  },
  {
    value: "Csarnóta",
    label: "Csarnóta",
  },
  {
    value: "Csaroda",
    label: "Csaroda",
  },
  {
    value: "Csárpa-telek",
    label: "Csárpa-telek",
  },
  {
    value: "Császár",
    label: "Császár",
  },
  {
    value: "Császártöltés",
    label: "Császártöltés",
  },
  {
    value: "Császló",
    label: "Császló",
  },
  {
    value: "Csátalja",
    label: "Csátalja",
  },
  {
    value: "Csatár",
    label: "Csatár",
  },
  {
    value: "Csataszög",
    label: "Csataszög",
  },
  {
    value: "Csatka",
    label: "Csatka",
  },
  {
    value: "Csávoly",
    label: "Csávoly",
  },
  {
    value: "Csebény",
    label: "Csebény",
  },
  {
    value: "Csébi-sziget",
    label: "Csébi-sziget",
  },
  {
    value: "Csécse",
    label: "Csécse",
  },
  {
    value: "Cséfán",
    label: "Cséfán",
  },
  {
    value: "Csegöld",
    label: "Csegöld",
  },
  {
    value: "Cseh-tag",
    label: "Cseh-tag",
  },
  {
    value: "Csehbánya",
    label: "Csehbánya",
  },
  {
    value: "Csehi",
    label: "Csehi",
  },
  {
    value: "Csehimindszent",
    label: "Csehimindszent",
  },
  {
    value: "Cselling",
    label: "Cselling",
  },
  {
    value: "Csém",
    label: "Csém",
  },
  {
    value: "Csemő",
    label: "Csemő",
  },
  {
    value: "Csempeszkopács",
    label: "Csempeszkopács",
  },
  {
    value: "Csengele",
    label: "Csengele",
  },
  {
    value: "Csenger",
    label: "Csenger",
  },
  {
    value: "Csengersima",
    label: "Csengersima",
  },
  {
    value: "Csengerújfalu",
    label: "Csengerújfalu",
  },
  {
    value: "Csengetyű-dűlő",
    label: "Csengetyű-dűlő",
  },
  {
    value: "Csengőd",
    label: "Csengőd",
  },
  {
    value: "Csénye",
    label: "Csénye",
  },
  {
    value: "Csenyéte",
    label: "Csenyéte",
  },
  {
    value: "Csép",
    label: "Csép",
  },
  {
    value: "Csépa",
    label: "Csépa",
  },
  {
    value: "Csepel-sziget",
    label: "Csepel-sziget",
  },
  {
    value: "Csepreg",
    label: "Csepreg",
  },
  {
    value: "Csepűs-szőlő",
    label: "Csepűs-szőlő",
  },
  {
    value: "Csér",
    label: "Csér",
  },
  {
    value: "Cser Alja",
    label: "Cser Alja",
  },
  {
    value: "Cser-köz-erdő",
    label: "Cser-köz-erdő",
  },
  {
    value: "Cserdi",
    label: "Cserdi",
  },
  {
    value: "Csere-rész",
    label: "Csere-rész",
  },
  {
    value: "Cserénfa",
    label: "Cserénfa",
  },
  {
    value: "Cserép-dűlő",
    label: "Cserép-dűlő",
  },
  {
    value: "Cserepes",
    label: "Cserepes",
  },
  {
    value: "Cserepes-Hatos",
    label: "Cserepes-Hatos",
  },
  {
    value: "Cserépfalu",
    label: "Cserépfalu",
  },
  {
    value: "Cserépváralja",
    label: "Cserépváralja",
  },
  {
    value: "Cseres",
    label: "Cseres",
  },
  {
    value: "Cserés-hegy",
    label: "Cserés-hegy",
  },
  {
    value: "Csergettyű",
    label: "Csergettyű",
  },
  {
    value: "Csergettyű-lapos",
    label: "Csergettyű-lapos",
  },
  {
    value: "Cserhát",
    label: "Cserhát",
  },
  {
    value: "Cserháthaláp",
    label: "Cserháthaláp",
  },
  {
    value: "Cserhátsurány",
    label: "Cserhátsurány",
  },
  {
    value: "Cserhátszentiván",
    label: "Cserhátszentiván",
  },
  {
    value: "Cserkeszőlő",
    label: "Cserkeszőlő",
  },
  {
    value: "Cserkút",
    label: "Cserkút",
  },
  {
    value: "Csernely",
    label: "Csernely",
  },
  {
    value: "Cserő-köz",
    label: "Cserő-köz",
  },
  {
    value: "Cserszegtomaj",
    label: "Cserszegtomaj",
  },
  {
    value: "Csertalakos",
    label: "Csertalakos",
  },
  {
    value: "Csertő",
    label: "Csertő",
  },
  {
    value: "Csesznek",
    label: "Csesznek",
  },
  {
    value: "Csesztreg",
    label: "Csesztreg",
  },
  {
    value: "Csesztve",
    label: "Csesztve",
  },
  {
    value: "Csetény",
    label: "Csetény",
  },
  {
    value: "Csévharaszt",
    label: "Csévharaszt",
  },
  {
    value: "Csibrák",
    label: "Csibrák",
  },
  {
    value: "Csicske",
    label: "Csicske",
  },
  {
    value: "Csicsó",
    label: "Csicsó",
  },
  {
    value: "Csicsós",
    label: "Csicsós",
  },
  {
    value: "Csiderberek",
    label: "Csiderberek",
  },
  {
    value: "Csiff",
    label: "Csiff",
  },
  {
    value: "Csiga",
    label: "Csiga",
  },
  {
    value: "Csikér",
    label: "Csikér",
  },
  {
    value: "Csikéria",
    label: "Csikéria",
  },
  {
    value: "Csikó-kert",
    label: "Csikó-kert",
  },
  {
    value: "Csíkos",
    label: "Csíkos",
  },
  {
    value: "Csíkos-dűlő",
    label: "Csíkos-dűlő",
  },
  {
    value: "Csikóstőttős",
    label: "Csikóstőttős",
  },
  {
    value: "Csikószín",
    label: "Csikószín",
  },
  {
    value: "Csiktó",
    label: "Csiktó",
  },
  {
    value: "Csikvánd",
    label: "Csikvánd",
  },
  {
    value: "Csillag-dűlő",
    label: "Csillag-dűlő",
  },
  {
    value: "Csillagpuszta",
    label: "Csillagpuszta",
  },
  {
    value: "Csillagtanyák",
    label: "Csillagtanyák",
  },
  {
    value: "Csincse",
    label: "Csincse",
  },
  {
    value: "Csipkerek",
    label: "Csipkerek",
  },
  {
    value: "Csipkés",
    label: "Csipkés",
  },
  {
    value: "Csipkés-dűlő",
    label: "Csipkés-dűlő",
  },
  {
    value: "Csípszila",
    label: "Csípszila",
  },
  {
    value: "Csiri-tag",
    label: "Csiri-tag",
  },
  {
    value: "Csiribpuszta",
    label: "Csiribpuszta",
  },
  {
    value: "Csitár",
    label: "Csitár",
  },
  {
    value: "Csivag",
    label: "Csivag",
  },
  {
    value: "Csizmás Tó",
    label: "Csizmás Tó",
  },
  {
    value: "Csobád",
    label: "Csobád",
  },
  {
    value: "Csobaj",
    label: "Csobaj",
  },
  {
    value: "Csobánc",
    label: "Csobánc",
  },
  {
    value: "Csobánka",
    label: "Csobánka",
  },
  {
    value: "Csöde",
    label: "Csöde",
  },
  {
    value: "Csögle",
    label: "Csögle",
  },
  {
    value: "Csókakő",
    label: "Csókakő",
  },
  {
    value: "Csökmő",
    label: "Csökmő",
  },
  {
    value: "Csököly",
    label: "Csököly",
  },
  {
    value: "Csokonyavisonta",
    label: "Csokonyavisonta",
  },
  {
    value: "Csokvaomány",
    label: "Csokvaomány",
  },
  {
    value: "Csolnok",
    label: "Csolnok",
  },
  {
    value: "Csólyospálos",
    label: "Csólyospálos",
  },
  {
    value: "Csoma",
    label: "Csoma",
  },
  {
    value: "Csomád",
    label: "Csomád",
  },
  {
    value: "Csombárd",
    label: "Csombárd",
  },
  {
    value: "Csömend",
    label: "Csömend",
  },
  {
    value: "Csömödér",
    label: "Csömödér",
  },
  {
    value: "Csömör",
    label: "Csömör",
  },
  {
    value: "Csomorkány",
    label: "Csomorkány",
  },
  {
    value: "Csomorkányi-oldal",
    label: "Csomorkányi-oldal",
  },
  {
    value: "Csónak-kút",
    label: "Csónak-kút",
  },
  {
    value: "Csónakázó-tó",
    label: "Csónakázó-tó",
  },
  {
    value: "Csönge",
    label: "Csönge",
  },
  {
    value: "Csöngetmajor",
    label: "Csöngetmajor",
  },
  {
    value: "Csongrád",
    label: "Csongrád",
  },
  {
    value: "Csonka Pál",
    label: "Csonka Pál",
  },
  {
    value: "Csonka-dűlő",
    label: "Csonka-dűlő",
  },
  {
    value: "Csonka-fűz",
    label: "Csonka-fűz",
  },
  {
    value: "Csonkahegyhát",
    label: "Csonkahegyhát",
  },
  {
    value: "Csonkamindszent",
    label: "Csonkamindszent",
  },
  {
    value: "Csonkás",
    label: "Csonkás",
  },
  {
    value: "Csopak",
    label: "Csopak",
  },
  {
    value: "Csór",
    label: "Csór",
  },
  {
    value: "Csorna",
    label: "Csorna",
  },
  {
    value: "Csörnyeföld",
    label: "Csörnyeföld",
  },
  {
    value: "Csörög",
    label: "Csörög",
  },
  {
    value: "Csörötnek",
    label: "Csörötnek",
  },
  {
    value: "Csorvás",
    label: "Csorvás",
  },
  {
    value: "Csősz",
    label: "Csősz",
  },
  {
    value: "Csót",
    label: "Csót",
  },
  {
    value: "Csóványos",
    label: "Csóványos",
  },
  {
    value: "Csővár",
    label: "Csővár",
  },
  {
    value: "Csücsök",
    label: "Csücsök",
  },
  {
    value: "Csugar-part",
    label: "Csugar-part",
  },
  {
    value: "Csuka-kert",
    label: "Csuka-kert",
  },
  {
    value: "Csukás-tó",
    label: "Csukás-tó",
  },
  {
    value: "Csurgó",
    label: "Csurgó",
  },
  {
    value: "Csurgónagymarton",
    label: "Csurgónagymarton",
  },
  {
    value: "Csutaj",
    label: "Csutaj",
  },
  {
    value: "Cún",
    label: "Cún",
  },
  {
    value: "Dabas",
    label: "Dabas",
  },
  {
    value: "Dabronc",
    label: "Dabronc",
  },
  {
    value: "Dabrony",
    label: "Dabrony",
  },
  {
    value: "Dad",
    label: "Dad",
  },
  {
    value: "Dádi-szőlőhegy",
    label: "Dádi-szőlőhegy",
  },
  {
    value: "Dág",
    label: "Dág",
  },
  {
    value: "Dáka",
    label: "Dáka",
  },
  {
    value: "Dalmand",
    label: "Dalmand",
  },
  {
    value: "Damak",
    label: "Damak",
  },
  {
    value: "Dámóc",
    label: "Dámóc",
  },
  {
    value: "Dánszentmiklós",
    label: "Dánszentmiklós",
  },
  {
    value: "Dány",
    label: "Dány",
  },
  {
    value: "Darab-dűlő",
    label: "Darab-dűlő",
  },
  {
    value: "Daraboshegy",
    label: "Daraboshegy",
  },
  {
    value: "Darány",
    label: "Darány",
  },
  {
    value: "Darassa",
    label: "Darassa",
  },
  {
    value: "Darnó",
    label: "Darnó",
  },
  {
    value: "Darnózseli",
    label: "Darnózseli",
  },
  {
    value: "Darú-dűlő",
    label: "Darú-dűlő",
  },
  {
    value: "Darú-halom-dűlő",
    label: "Darú-halom-dűlő",
  },
  {
    value: "Daru-hát",
    label: "Daru-hát",
  },
  {
    value: "Daru-sziget",
    label: "Daru-sziget",
  },
  {
    value: "Darvas",
    label: "Darvas",
  },
  {
    value: "Dávod",
    label: "Dávod",
  },
  {
    value: "Dázsony",
    label: "Dázsony",
  },
  {
    value: "Debercsény",
    label: "Debercsény",
  },
  {
    value: "Debrecen",
    label: "Debrecen",
  },
  {
    value: "Debréte",
    label: "Debréte",
  },
  {
    value: "Decs",
    label: "Decs",
  },
  {
    value: "Décsi-lapos",
    label: "Décsi-lapos",
  },
  {
    value: "Dedei-dűlő",
    label: "Dedei-dűlő",
  },
  {
    value: "Dédestapolcsány",
    label: "Dédestapolcsány",
  },
  {
    value: "Dég",
    label: "Dég",
  },
  {
    value: "Dégenfeld-tag",
    label: "Dégenfeld-tag",
  },
  {
    value: "Deje",
    label: "Deje",
  },
  {
    value: "Dejtár",
    label: "Dejtár",
  },
  {
    value: "Dél-dűlő",
    label: "Dél-dűlő",
  },
  {
    value: "Délegyháza",
    label: "Délegyháza",
  },
  {
    value: "Demecser",
    label: "Demecser",
  },
  {
    value: "Demeteres",
    label: "Demeteres",
  },
  {
    value: "Demjén",
    label: "Demjén",
  },
  {
    value: "Dencsháza",
    label: "Dencsháza",
  },
  {
    value: "Dénesfa",
    label: "Dénesfa",
  },
  {
    value: "Derecske",
    label: "Derecske",
  },
  {
    value: "Derekegyház",
    label: "Derekegyház",
  },
  {
    value: "Derzstanya",
    label: "Derzstanya",
  },
  {
    value: "Deszk",
    label: "Deszk",
  },
  {
    value: "Detek",
    label: "Detek",
  },
  {
    value: "Detk",
    label: "Detk",
  },
  {
    value: "Dévaványa",
    label: "Dévaványa",
  },
  {
    value: "Devecser",
    label: "Devecser",
  },
  {
    value: "Dinnyeberki",
    label: "Dinnyeberki",
  },
  {
    value: "Dinnyeföldi-szőlő",
    label: "Dinnyeföldi-szőlő",
  },
  {
    value: "Dinnyés-halom Melléke",
    label: "Dinnyés-halom Melléke",
  },
  {
    value: "Dinnyéshát",
    label: "Dinnyéshát",
  },
  {
    value: "Dió-halom",
    label: "Dió-halom",
  },
  {
    value: "Diófél",
    label: "Diófél",
  },
  {
    value: "Diósberény",
    label: "Diósberény",
  },
  {
    value: "Diósd",
    label: "Diósd",
  },
  {
    value: "Diósgyőr",
    label: "Diósgyőr",
  },
  {
    value: "Diósjenő",
    label: "Diósjenő",
  },
  {
    value: "Dióskál",
    label: "Dióskál",
  },
  {
    value: "Diósviszló",
    label: "Diósviszló",
  },
  {
    value: "Disznó-kút",
    label: "Disznó-kút",
  },
  {
    value: "Doba",
    label: "Doba",
  },
  {
    value: "Dobó-tag",
    label: "Dobó-tag",
  },
  {
    value: "Döbörhegy",
    label: "Döbörhegy",
  },
  {
    value: "Doboz",
    label: "Doboz",
  },
  {
    value: "Dobri",
    label: "Dobri",
  },
  {
    value: "Döbröce",
    label: "Döbröce",
  },
  {
    value: "Döbrököz",
    label: "Döbrököz",
  },
  {
    value: "Dobronhegy",
    label: "Dobronhegy",
  },
  {
    value: "Döbrönte",
    label: "Döbrönte",
  },
  {
    value: "Dóc",
    label: "Dóc",
  },
  {
    value: "Dóci-tó",
    label: "Dóci-tó",
  },
  {
    value: "Dódaitanyák",
    label: "Dódaitanyák",
  },
  {
    value: "Döge",
    label: "Döge",
  },
  {
    value: "Dögös",
    label: "Dögös",
  },
  {
    value: "Domaháza",
    label: "Domaháza",
  },
  {
    value: "Domaszék",
    label: "Domaszék",
  },
  {
    value: "Dombegyház",
    label: "Dombegyház",
  },
  {
    value: "Dombiratos",
    label: "Dombiratos",
  },
  {
    value: "Dombóvár",
    label: "Dombóvár",
  },
  {
    value: "Dombrád",
    label: "Dombrád",
  },
  {
    value: "Domony",
    label: "Domony",
  },
  {
    value: "Dömös",
    label: "Dömös",
  },
  {
    value: "Domoszló",
    label: "Domoszló",
  },
  {
    value: "Dömsöd",
    label: "Dömsöd",
  },
  {
    value: "Dongér-tó",
    label: "Dongér-tó",
  },
  {
    value: "Dör",
    label: "Dör",
  },
  {
    value: "Dörgicse",
    label: "Dörgicse",
  },
  {
    value: "Dormánd",
    label: "Dormánd",
  },
  {
    value: "Dorocka",
    label: "Dorocka",
  },
  {
    value: "Dorog",
    label: "Dorog",
  },
  {
    value: "Dorogháza",
    label: "Dorogháza",
  },
  {
    value: "Döröske",
    label: "Döröske",
  },
  {
    value: "Dósa-halmi-dűlő",
    label: "Dósa-halmi-dűlő",
  },
  {
    value: "Dötk",
    label: "Dötk",
  },
  {
    value: "Dövény",
    label: "Dövény",
  },
  {
    value: "Dozmat",
    label: "Dozmat",
  },
  {
    value: "Dózsa-puszta",
    label: "Dózsa-puszta",
  },
  {
    value: "Drágszél",
    label: "Drágszél",
  },
  {
    value: "Dráva-mellék",
    label: "Dráva-mellék",
  },
  {
    value: "Drávacsehi",
    label: "Drávacsehi",
  },
  {
    value: "Drávacsepely",
    label: "Drávacsepely",
  },
  {
    value: "Drávafok",
    label: "Drávafok",
  },
  {
    value: "Drávagárdony",
    label: "Drávagárdony",
  },
  {
    value: "Drávaiványi",
    label: "Drávaiványi",
  },
  {
    value: "Drávakeresztúr",
    label: "Drávakeresztúr",
  },
  {
    value: "Drávapalkonya",
    label: "Drávapalkonya",
  },
  {
    value: "Drávapiski",
    label: "Drávapiski",
  },
  {
    value: "Drávaszabolcs",
    label: "Drávaszabolcs",
  },
  {
    value: "Drávaszerdahely",
    label: "Drávaszerdahely",
  },
  {
    value: "Drávasztára",
    label: "Drávasztára",
  },
  {
    value: "Drávatamási",
    label: "Drávatamási",
  },
  {
    value: "Drégelypalánk",
    label: "Drégelypalánk",
  },
  {
    value: "Dubicsány",
    label: "Dubicsány",
  },
  {
    value: "Duchmovszki",
    label: "Duchmovszki",
  },
  {
    value: "Dudar",
    label: "Dudar",
  },
  {
    value: "Duka",
    label: "Duka",
  },
  {
    value: "Dűlőhát",
    label: "Dűlőhát",
  },
  {
    value: "Dűlőzug",
    label: "Dűlőzug",
  },
  {
    value: "Duna-Tisza Köze",
    label: "Duna-Tisza Köze",
  },
  {
    value: "Dunaalmás",
    label: "Dunaalmás",
  },
  {
    value: "Dunabogdány",
    label: "Dunabogdány",
  },
  {
    value: "Dunaegyháza",
    label: "Dunaegyháza",
  },
  {
    value: "Dunafalva",
    label: "Dunafalva",
  },
  {
    value: "Dunaföldvár",
    label: "Dunaföldvár",
  },
  {
    value: "Dunaharaszti",
    label: "Dunaharaszti",
  },
  {
    value: "Dunakanyar",
    label: "Dunakanyar",
  },
  {
    value: "Dunakeszi",
    label: "Dunakeszi",
  },
  {
    value: "Dunakiliti",
    label: "Dunakiliti",
  },
  {
    value: "Dunántúl",
    label: "Dunántúl",
  },
  {
    value: "Dunapataj",
    label: "Dunapataj",
  },
  {
    value: "Dunaremete",
    label: "Dunaremete",
  },
  {
    value: "Dunaszeg",
    label: "Dunaszeg",
  },
  {
    value: "Dunaszekcső",
    label: "Dunaszekcső",
  },
  {
    value: "Dunaszentbenedek",
    label: "Dunaszentbenedek",
  },
  {
    value: "Dunaszentgyörgy",
    label: "Dunaszentgyörgy",
  },
  {
    value: "Dunaszentmiklós",
    label: "Dunaszentmiklós",
  },
  {
    value: "Dunaszentpál",
    label: "Dunaszentpál",
  },
  {
    value: "Dunasziget",
    label: "Dunasziget",
  },
  {
    value: "Dunatetétlen",
    label: "Dunatetétlen",
  },
  {
    value: "Dunaújváros",
    label: "Dunaújváros",
  },
  {
    value: "dunaújváros",
    label: "dunaújváros",
  },
  {
    value: "Dunavarsány",
    label: "Dunavarsány",
  },
  {
    value: "Dunavecse",
    label: "Dunavecse",
  },
  {
    value: "Dusnok",
    label: "Dusnok",
  },
  {
    value: "Dúzs",
    label: "Dúzs",
  },
  {
    value: "Ebergőc",
    label: "Ebergőc",
  },
  {
    value: "Ebes",
    label: "Ebes",
  },
  {
    value: "Ebes-tó",
    label: "Ebes-tó",
  },
  {
    value: "Ebestanya",
    label: "Ebestanya",
  },
  {
    value: "Écs",
    label: "Écs",
  },
  {
    value: "Ecse-zug",
    label: "Ecse-zug",
  },
  {
    value: "Ecséd",
    label: "Ecséd",
  },
  {
    value: "Ecsedi-láp",
    label: "Ecsedi-láp",
  },
  {
    value: "Ecseg",
    label: "Ecseg",
  },
  {
    value: "Ecsegfalva",
    label: "Ecsegfalva",
  },
  {
    value: "Ecsegipuszta",
    label: "Ecsegipuszta",
  },
  {
    value: "Ecseny",
    label: "Ecseny",
  },
  {
    value: "Ecser",
    label: "Ecser",
  },
  {
    value: "Edde",
    label: "Edde",
  },
  {
    value: "Edelény",
    label: "Edelény",
  },
  {
    value: "Edve",
    label: "Edve",
  },
  {
    value: "Eger",
    label: "Eger",
  },
  {
    value: "Egerág",
    label: "Egerág",
  },
  {
    value: "Egeralja",
    label: "Egeralja",
  },
  {
    value: "Egeraracsa",
    label: "Egeraracsa",
  },
  {
    value: "Egerlövő",
    label: "Egerlövő",
  },
  {
    value: "Egerszalók",
    label: "Egerszalók",
  },
  {
    value: "Égerszög",
    label: "Égerszög",
  },
  {
    value: "Egerszólát",
    label: "Egerszólát",
  },
  {
    value: "Egervár",
    label: "Egervár",
  },
  {
    value: "Egervölgy",
    label: "Egervölgy",
  },
  {
    value: "Égett-akoli-tábla",
    label: "Égett-akoli-tábla",
  },
  {
    value: "Égres",
    label: "Égres",
  },
  {
    value: "Egyed",
    label: "Egyed",
  },
  {
    value: "Egyek",
    label: "Egyek",
  },
  {
    value: "Egyes-tag",
    label: "Egyes-tag",
  },
  {
    value: "Egyes-zug",
    label: "Egyes-zug",
  },
  {
    value: "Egyház-halom",
    label: "Egyház-halom",
  },
  {
    value: "Egyház-sziget",
    label: "Egyház-sziget",
  },
  {
    value: "Egyház-tanya",
    label: "Egyház-tanya",
  },
  {
    value: "Egyházasdengeleg",
    label: "Egyházasdengeleg",
  },
  {
    value: "Egyházasfalu",
    label: "Egyházasfalu",
  },
  {
    value: "Egyházasgerge",
    label: "Egyházasgerge",
  },
  {
    value: "Egyházasharaszti",
    label: "Egyházasharaszti",
  },
  {
    value: "Egyházashetye",
    label: "Egyházashetye",
  },
  {
    value: "Egyházashollós",
    label: "Egyházashollós",
  },
  {
    value: "Egyházaskesző",
    label: "Egyházaskesző",
  },
  {
    value: "Egyházaskozár",
    label: "Egyházaskozár",
  },
  {
    value: "Egyházasrádóc",
    label: "Egyházasrádóc",
  },
  {
    value: "Elek",
    label: "Elek",
  },
  {
    value: "Elektanya",
    label: "Elektanya",
  },
  {
    value: "Elep",
    label: "Elep",
  },
  {
    value: "Eligály",
    label: "Eligály",
  },
  {
    value: "Ellend",
    label: "Ellend",
  },
  {
    value: "Ellés-part",
    label: "Ellés-part",
  },
  {
    value: "Elő-fűz",
    label: "Elő-fűz",
  },
  {
    value: "Előszállás",
    label: "Előszállás",
  },
  {
    value: "Elsővízdűlő",
    label: "Elsővízdűlő",
  },
  {
    value: "Emőd",
    label: "Emőd",
  },
  {
    value: "Encs",
    label: "Encs",
  },
  {
    value: "Encsencs",
    label: "Encsencs",
  },
  {
    value: "Endrefalva",
    label: "Endrefalva",
  },
  {
    value: "Endrőc",
    label: "Endrőc",
  },
  {
    value: "Enese",
    label: "Enese",
  },
  {
    value: "Enying",
    label: "Enying",
  },
  {
    value: "Eőrymajor",
    label: "Eőrymajor",
  },
  {
    value: "Eperjes",
    label: "Eperjes",
  },
  {
    value: "Eperjes-lapos",
    label: "Eperjes-lapos",
  },
  {
    value: "Eperjes-szög",
    label: "Eperjes-szög",
  },
  {
    value: "Eperjeske",
    label: "Eperjeske",
  },
  {
    value: "Eperjeskei-legelő",
    label: "Eperjeskei-legelő",
  },
  {
    value: "Eplény",
    label: "Eplény",
  },
  {
    value: "Epöl",
    label: "Epöl",
  },
  {
    value: "Epres-dűlő",
    label: "Epres-dűlő",
  },
  {
    value: "Ér-dűlő",
    label: "Ér-dűlő",
  },
  {
    value: "Ér-halom",
    label: "Ér-halom",
  },
  {
    value: "Ercsi",
    label: "Ercsi",
  },
  {
    value: "Érd",
    label: "Érd",
  },
  {
    value: "Erdő-dűlő",
    label: "Erdő-dűlő",
  },
  {
    value: "Erdő-hegyi-szőlők",
    label: "Erdő-hegyi-szőlők",
  },
  {
    value: "Erdő-mező",
    label: "Erdő-mező",
  },
  {
    value: "Erdő-szög",
    label: "Erdő-szög",
  },
  {
    value: "Erdő-Tagyos",
    label: "Erdő-Tagyos",
  },
  {
    value: "Erdőbénye",
    label: "Erdőbénye",
  },
  {
    value: "Erdődy-tag",
    label: "Erdődy-tag",
  },
  {
    value: "Erdődytanya",
    label: "Erdődytanya",
  },
  {
    value: "Erdőföld",
    label: "Erdőföld",
  },
  {
    value: "Erdőhát",
    label: "Erdőhát",
  },
  {
    value: "Erdőhorváti",
    label: "Erdőhorváti",
  },
  {
    value: "Erdőkertes",
    label: "Erdőkertes",
  },
  {
    value: "Erdőkürt",
    label: "Erdőkürt",
  },
  {
    value: "Erdősmárok",
    label: "Erdősmárok",
  },
  {
    value: "Erdősmecske",
    label: "Erdősmecske",
  },
  {
    value: "Erdőtarcsa",
    label: "Erdőtarcsa",
  },
  {
    value: "Erdőtelek",
    label: "Erdőtelek",
  },
  {
    value: "Erk",
    label: "Erk",
  },
  {
    value: "Érmellék",
    label: "Érmellék",
  },
  {
    value: "Érparti-szőlők",
    label: "Érparti-szőlők",
  },
  {
    value: "Érpatak",
    label: "Érpatak",
  },
  {
    value: "Érsekcsanád",
    label: "Érsekcsanád",
  },
  {
    value: "Érsekhalma",
    label: "Érsekhalma",
  },
  {
    value: "Érsekvadkert",
    label: "Érsekvadkert",
  },
  {
    value: "Értény",
    label: "Értény",
  },
  {
    value: "Erzsébet",
    label: "Erzsébet",
  },
  {
    value: "Erzsébetváros",
    label: "Erzsébetváros",
  },
  {
    value: "Esi-telek",
    label: "Esi-telek",
  },
  {
    value: "Északi-legelő",
    label: "Északi-legelő",
  },
  {
    value: "Esztár",
    label: "Esztár",
  },
  {
    value: "Eszteregnye",
    label: "Eszteregnye",
  },
  {
    value: "Esztergályhorváti",
    label: "Esztergályhorváti",
  },
  {
    value: "Esztergom",
    label: "Esztergom",
  },
  {
    value: "Ete",
    label: "Ete",
  },
  {
    value: "Etes",
    label: "Etes",
  },
  {
    value: "Etyek",
    label: "Etyek",
  },
  {
    value: "Fábiánháza",
    label: "Fábiánháza",
  },
  {
    value: "Fábiánsebestyén",
    label: "Fábiánsebestyén",
  },
  {
    value: "Fácánkert",
    label: "Fácánkert",
  },
  {
    value: "Fadd",
    label: "Fadd",
  },
  {
    value: "Fáj",
    label: "Fáj",
  },
  {
    value: "Fajdos",
    label: "Fajdos",
  },
  {
    value: "Fajsz",
    label: "Fajsz",
  },
  {
    value: "Fancsal",
    label: "Fancsal",
  },
  {
    value: "Farád",
    label: "Farád",
  },
  {
    value: "Farcsa",
    label: "Farcsa",
  },
  {
    value: "Farkas-domb",
    label: "Farkas-domb",
  },
  {
    value: "Farkas-ér-köz",
    label: "Farkas-ér-köz",
  },
  {
    value: "Farkas-hát",
    label: "Farkas-hát",
  },
  {
    value: "Farkas-kút",
    label: "Farkas-kút",
  },
  {
    value: "Farkas-sziget",
    label: "Farkas-sziget",
  },
  {
    value: "Farkasgyepű",
    label: "Farkasgyepű",
  },
  {
    value: "Farkaslyuk",
    label: "Farkaslyuk",
  },
  {
    value: "Farmos",
    label: "Farmos",
  },
  {
    value: "Fástanya",
    label: "Fástanya",
  },
  {
    value: "Fáy-dűlő",
    label: "Fáy-dűlő",
  },
  {
    value: "Fazekas-tag",
    label: "Fazekas-tag",
  },
  {
    value: "Fazekasboda",
    label: "Fazekasboda",
  },
  {
    value: "Fecske-dűlő",
    label: "Fecske-dűlő",
  },
  {
    value: "Fecske-part-dűlő",
    label: "Fecske-part-dűlő",
  },
  {
    value: "Fecskés",
    label: "Fecskés",
  },
  {
    value: "Fegyvernek",
    label: "Fegyvernek",
  },
  {
    value: "Fehér Szik",
    label: "Fehér Szik",
  },
  {
    value: "Fehér-nád",
    label: "Fehér-nád",
  },
  {
    value: "Fehér-szik",
    label: "Fehér-szik",
  },
  {
    value: "Fehér-tó",
    label: "Fehér-tó",
  },
  {
    value: "Fehérgyarmat",
    label: "Fehérgyarmat",
  },
  {
    value: "Fehérházi-dűlő",
    label: "Fehérházi-dűlő",
  },
  {
    value: "Fehértelep",
    label: "Fehértelep",
  },
  {
    value: "Fehértó",
    label: "Fehértó",
  },
  {
    value: "Fehérvárcsurgó",
    label: "Fehérvárcsurgó",
  },
  {
    value: "Fejér",
    label: "Fejér",
  },
  {
    value: "Feked",
    label: "Feked",
  },
  {
    value: "Fekete-bokor",
    label: "Fekete-bokor",
  },
  {
    value: "Fekete-erdei-szőlő",
    label: "Fekete-erdei-szőlő",
  },
  {
    value: "Fekete-szék",
    label: "Fekete-szék",
  },
  {
    value: "Feketeerdő",
    label: "Feketeerdő",
  },
  {
    value: "Feketeház",
    label: "Feketeház",
  },
  {
    value: "Feketeháztanya",
    label: "Feketeháztanya",
  },
  {
    value: "Felcsút",
    label: "Felcsút",
  },
  {
    value: "Feldebrő",
    label: "Feldebrő",
  },
  {
    value: "Felgyő",
    label: "Felgyő",
  },
  {
    value: "Felpéc",
    label: "Felpéc",
  },
  {
    value: "Felső Malom",
    label: "Felső Malom",
  },
  {
    value: "Felső-földek",
    label: "Felső-földek",
  },
  {
    value: "Felső-Szalmavár",
    label: "Felső-Szalmavár",
  },
  {
    value: "Felső-szúnyogi-határ",
    label: "Felső-szúnyogi-határ",
  },
  {
    value: "Felső-Új-hegy",
    label: "Felső-Új-hegy",
  },
  {
    value: "Felsőberecki",
    label: "Felsőberecki",
  },
  {
    value: "Felsőcsatár",
    label: "Felsőcsatár",
  },
  {
    value: "Felsődobsza",
    label: "Felsődobsza",
  },
  {
    value: "Felsőegerszeg",
    label: "Felsőegerszeg",
  },
  {
    value: "Felsőgagy",
    label: "Felsőgagy",
  },
  {
    value: "Felsőjánosfa",
    label: "Felsőjánosfa",
  },
  {
    value: "Felsőkelecsény",
    label: "Felsőkelecsény",
  },
  {
    value: "Felsőlajos",
    label: "Felsőlajos",
  },
  {
    value: "Felsőmarác",
    label: "Felsőmarác",
  },
  {
    value: "Felsőmocsolád",
    label: "Felsőmocsolád",
  },
  {
    value: "Felsőnána",
    label: "Felsőnána",
  },
  {
    value: "Felsőnyárád",
    label: "Felsőnyárád",
  },
  {
    value: "Felsőnyék",
    label: "Felsőnyék",
  },
  {
    value: "Felsőörs",
    label: "Felsőörs",
  },
  {
    value: "Felsőpáhok",
    label: "Felsőpáhok",
  },
  {
    value: "Felsőpakony",
    label: "Felsőpakony",
  },
  {
    value: "Felsőpetény",
    label: "Felsőpetény",
  },
  {
    value: "Felsőrajk",
    label: "Felsőrajk",
  },
  {
    value: "Felsőregmec",
    label: "Felsőregmec",
  },
  {
    value: "Felsőszenterzsébet",
    label: "Felsőszenterzsébet",
  },
  {
    value: "Felsőszentiván",
    label: "Felsőszentiván",
  },
  {
    value: "Felsőszentmárton",
    label: "Felsőszentmárton",
  },
  {
    value: "Felsőszölnök",
    label: "Felsőszölnök",
  },
  {
    value: "Felsőtárkány",
    label: "Felsőtárkány",
  },
  {
    value: "Felsőtelekes",
    label: "Felsőtelekes",
  },
  {
    value: "Felsőtold",
    label: "Felsőtold",
  },
  {
    value: "Felsővadász",
    label: "Felsővadász",
  },
  {
    value: "Felsőzsolca",
    label: "Felsőzsolca",
  },
  {
    value: "Fenéktanya",
    label: "Fenéktanya",
  },
  {
    value: "Fényes Tó",
    label: "Fényes Tó",
  },
  {
    value: "Fényeslitke",
    label: "Fényeslitke",
  },
  {
    value: "Fenyőfő",
    label: "Fenyőfő",
  },
  {
    value: "Ferenci-hát",
    label: "Ferenci-hát",
  },
  {
    value: "Ferencszállás",
    label: "Ferencszállás",
  },
  {
    value: "Ferencváros",
    label: "Ferencváros",
  },
  {
    value: "Fertő",
    label: "Fertő",
  },
  {
    value: "Fertő-dűlő",
    label: "Fertő-dűlő",
  },
  {
    value: "Fertőboz",
    label: "Fertőboz",
  },
  {
    value: "Fertőd",
    label: "Fertőd",
  },
  {
    value: "Fertőendréd",
    label: "Fertőendréd",
  },
  {
    value: "Fertőhomok",
    label: "Fertőhomok",
  },
  {
    value: "Fertőrákos",
    label: "Fertőrákos",
  },
  {
    value: "Fertőszentmiklós",
    label: "Fertőszentmiklós",
  },
  {
    value: "Fertőszéplak",
    label: "Fertőszéplak",
  },
  {
    value: "Fiad",
    label: "Fiad",
  },
  {
    value: "Ficsúr-halom",
    label: "Ficsúr-halom",
  },
  {
    value: "Ficzfástanya",
    label: "Ficzfástanya",
  },
  {
    value: "Figulatanya",
    label: "Figulatanya",
  },
  {
    value: "Filkeháza",
    label: "Filkeháza",
  },
  {
    value: "Fiter",
    label: "Fiter",
  },
  {
    value: "Fityeház",
    label: "Fityeház",
  },
  {
    value: "Fogoly-dűlő",
    label: "Fogoly-dűlő",
  },
  {
    value: "Fok-köz",
    label: "Fok-köz",
  },
  {
    value: "Foktő",
    label: "Foktő",
  },
  {
    value: "Földeák",
    label: "Földeák",
  },
  {
    value: "Földeák-szél",
    label: "Földeák-szél",
  },
  {
    value: "Földes",
    label: "Földes",
  },
  {
    value: "Földház-zug",
    label: "Földház-zug",
  },
  {
    value: "Földvár",
    label: "Földvár",
  },
  {
    value: "Földvár-hegy",
    label: "Földvár-hegy",
  },
  {
    value: "Folyás",
    label: "Folyás",
  },
  {
    value: "Fonó",
    label: "Fonó",
  },
  {
    value: "Fony",
    label: "Fony",
  },
  {
    value: "Főnyed",
    label: "Főnyed",
  },
  {
    value: "Fonyód",
    label: "Fonyód",
  },
  {
    value: "Forgács-hát",
    label: "Forgács-hát",
  },
  {
    value: "Forrás-part",
    label: "Forrás-part",
  },
  {
    value: "Forráskút",
    label: "Forráskút",
  },
  {
    value: "Forró",
    label: "Forró",
  },
  {
    value: "Forró-puszta",
    label: "Forró-puszta",
  },
  {
    value: "Fót",
    label: "Fót",
  },
  {
    value: "Fövenyes-hát",
    label: "Fövenyes-hát",
  },
  {
    value: "Füle",
    label: "Füle",
  },
  {
    value: "Fülesd",
    label: "Fülesd",
  },
  {
    value: "Fulókércs",
    label: "Fulókércs",
  },
  {
    value: "Fülöp",
    label: "Fülöp",
  },
  {
    value: "Fülöp-tiszta",
    label: "Fülöp-tiszta",
  },
  {
    value: "Fülöpháza",
    label: "Fülöpháza",
  },
  {
    value: "Fülöpjakab",
    label: "Fülöpjakab",
  },
  {
    value: "Fülöpszállás",
    label: "Fülöpszállás",
  },
  {
    value: "Fülpösdaróc",
    label: "Fülpösdaróc",
  },
  {
    value: "Fürged",
    label: "Fürged",
  },
  {
    value: "Fürj-ér-hát",
    label: "Fürj-ér-hát",
  },
  {
    value: "Furta",
    label: "Furta",
  },
  {
    value: "Furugy-zug",
    label: "Furugy-zug",
  },
  {
    value: "Füzér",
    label: "Füzér",
  },
  {
    value: "Füzérkajata",
    label: "Füzérkajata",
  },
  {
    value: "Füzérkomlós",
    label: "Füzérkomlós",
  },
  {
    value: "Füzérradvány",
    label: "Füzérradvány",
  },
  {
    value: "Füzes",
    label: "Füzes",
  },
  {
    value: "Füzesabony",
    label: "Füzesabony",
  },
  {
    value: "Füzesgyarmat",
    label: "Füzesgyarmat",
  },
  {
    value: "Fűzfás",
    label: "Fűzfás",
  },
  {
    value: "Fűzfás-dűlő",
    label: "Fűzfás-dűlő",
  },
  {
    value: "Fűzfás-zug",
    label: "Fűzfás-zug",
  },
  {
    value: "Fűzvölgy",
    label: "Fűzvölgy",
  },
  {
    value: "Gabonás",
    label: "Gabonás",
  },
  {
    value: "Gáborján",
    label: "Gáborján",
  },
  {
    value: "Gáborjánháza",
    label: "Gáborjánháza",
  },
  {
    value: "Gábris",
    label: "Gábris",
  },
  {
    value: "Gacsály",
    label: "Gacsály",
  },
  {
    value: "Gacsályi-tag",
    label: "Gacsályi-tag",
  },
  {
    value: "Gadács",
    label: "Gadács",
  },
  {
    value: "Gadány",
    label: "Gadány",
  },
  {
    value: "Gadna",
    label: "Gadna",
  },
  {
    value: "Gádoros",
    label: "Gádoros",
  },
  {
    value: "Gagyapáti",
    label: "Gagyapáti",
  },
  {
    value: "Gagybátor",
    label: "Gagybátor",
  },
  {
    value: "Gagyvendégi",
    label: "Gagyvendégi",
  },
  {
    value: "Gál-dűlő",
    label: "Gál-dűlő",
  },
  {
    value: "Galambok",
    label: "Galambok",
  },
  {
    value: "Galambos",
    label: "Galambos",
  },
  {
    value: "Galgaguta",
    label: "Galgaguta",
  },
  {
    value: "Galgagyörk",
    label: "Galgagyörk",
  },
  {
    value: "Galgahévíz",
    label: "Galgahévíz",
  },
  {
    value: "Galgamácsa",
    label: "Galgamácsa",
  },
  {
    value: "Galóhalmi-dűlő",
    label: "Galóhalmi-dűlő",
  },
  {
    value: "Gálosfa",
    label: "Gálosfa",
  },
  {
    value: "Galvács",
    label: "Galvács",
  },
  {
    value: "Galya-tető",
    label: "Galya-tető",
  },
  {
    value: "Gamás",
    label: "Gamás",
  },
  {
    value: "Gánás",
    label: "Gánás",
  },
  {
    value: "Ganna",
    label: "Ganna",
  },
  {
    value: "Gánt",
    label: "Gánt",
  },
  {
    value: "Gara",
    label: "Gara",
  },
  {
    value: "Garáb",
    label: "Garáb",
  },
  {
    value: "Garabonc",
    label: "Garabonc",
  },
  {
    value: "Garábos",
    label: "Garábos",
  },
  {
    value: "Garadna",
    label: "Garadna",
  },
  {
    value: "Garbolc",
    label: "Garbolc",
  },
  {
    value: "Gárdony",
    label: "Gárdony",
  },
  {
    value: "Garé",
    label: "Garé",
  },
  {
    value: "Gasztony",
    label: "Gasztony",
  },
  {
    value: "Gát-zug",
    label: "Gát-zug",
  },
  {
    value: "Gáti-kert",
    label: "Gáti-kert",
  },
  {
    value: "Gávavencsellő",
    label: "Gávavencsellő",
  },
  {
    value: "Géberjén",
    label: "Géberjén",
  },
  {
    value: "Gecse",
    label: "Gecse",
  },
  {
    value: "Géderlak",
    label: "Géderlak",
  },
  {
    value: "Gégény",
    label: "Gégény",
  },
  {
    value: "Gelej",
    label: "Gelej",
  },
  {
    value: "Gelénes",
    label: "Gelénes",
  },
  {
    value: "Gellénháza",
    label: "Gellénháza",
  },
  {
    value: "Gellért Hill",
    label: "Gellért Hill",
  },
  {
    value: "Gellért-szik",
    label: "Gellért-szik",
  },
  {
    value: "Gelse",
    label: "Gelse",
  },
  {
    value: "Gelsesziget",
    label: "Gelsesziget",
  },
  {
    value: "Gelvács",
    label: "Gelvács",
  },
  {
    value: "Gém-dűlő",
    label: "Gém-dűlő",
  },
  {
    value: "Gemenc",
    label: "Gemenc",
  },
  {
    value: "Gemzse",
    label: "Gemzse",
  },
  {
    value: "Gencsapáti",
    label: "Gencsapáti",
  },
  {
    value: "Gencsi-tag",
    label: "Gencsi-tag",
  },
  {
    value: "Gérce",
    label: "Gérce",
  },
  {
    value: "Gerde",
    label: "Gerde",
  },
  {
    value: "Gerecse",
    label: "Gerecse",
  },
  {
    value: "Gerecse-dűlő",
    label: "Gerecse-dűlő",
  },
  {
    value: "Gerenda-hát",
    label: "Gerenda-hát",
  },
  {
    value: "Gerendás",
    label: "Gerendás",
  },
  {
    value: "Gerényes",
    label: "Gerényes",
  },
  {
    value: "Geresdlak",
    label: "Geresdlak",
  },
  {
    value: "Gerjen",
    label: "Gerjen",
  },
  {
    value: "Gersa",
    label: "Gersa",
  },
  {
    value: "Gersekarát",
    label: "Gersekarát",
  },
  {
    value: "Geszt",
    label: "Geszt",
  },
  {
    value: "Gesztely",
    label: "Gesztely",
  },
  {
    value: "Geszteréd",
    label: "Geszteréd",
  },
  {
    value: "Gétye",
    label: "Gétye",
  },
  {
    value: "Gic",
    label: "Gic",
  },
  {
    value: "Gige",
    label: "Gige",
  },
  {
    value: "Gilicei-szőlőhegy",
    label: "Gilicei-szőlőhegy",
  },
  {
    value: "Gilvánfa",
    label: "Gilvánfa",
  },
  {
    value: "Girincs",
    label: "Girincs",
  },
  {
    value: "Gíród-dűlő",
    label: "Gíród-dűlő",
  },
  {
    value: "Gőbölyjárás",
    label: "Gőbölyjárás",
  },
  {
    value: "Göd",
    label: "Göd",
  },
  {
    value: "Gödény-lapos",
    label: "Gödény-lapos",
  },
  {
    value: "Gödény-lapos-vég",
    label: "Gödény-lapos-vég",
  },
  {
    value: "Gödény-oldal",
    label: "Gödény-oldal",
  },
  {
    value: "Gödényalja",
    label: "Gödényalja",
  },
  {
    value: "Gödöllő",
    label: "Gödöllő",
  },
  {
    value: "Gödöllői-dombság",
    label: "Gödöllői-dombság",
  },
  {
    value: "Gödre",
    label: "Gödre",
  },
  {
    value: "Gógánfa",
    label: "Gógánfa",
  },
  {
    value: "Gölle",
    label: "Gölle",
  },
  {
    value: "Golop",
    label: "Golop",
  },
  {
    value: "Gomba",
    label: "Gomba",
  },
  {
    value: "Gombosszeg",
    label: "Gombosszeg",
  },
  {
    value: "Gömörszőlős",
    label: "Gömörszőlős",
  },
  {
    value: "Gönc",
    label: "Gönc",
  },
  {
    value: "Göncruszka",
    label: "Göncruszka",
  },
  {
    value: "Gönyű",
    label: "Gönyű",
  },
  {
    value: "Gór",
    label: "Gór",
  },
  {
    value: "Görbe Fertő",
    label: "Görbe Fertő",
  },
  {
    value: "Görbeháza",
    label: "Görbeháza",
  },
  {
    value: "Görcsöny",
    label: "Görcsöny",
  },
  {
    value: "Görcsönydoboka",
    label: "Görcsönydoboka",
  },
  {
    value: "Görcsös",
    label: "Görcsös",
  },
  {
    value: "Gordisa",
    label: "Gordisa",
  },
  {
    value: "Górés",
    label: "Górés",
  },
  {
    value: "Görgeteg",
    label: "Görgeteg",
  },
  {
    value: "Görömböly",
    label: "Görömböly",
  },
  {
    value: "Göröngyös",
    label: "Göröngyös",
  },
  {
    value: "Gorva",
    label: "Gorva",
  },
  {
    value: "Gősfa",
    label: "Gősfa",
  },
  {
    value: "Grábóc",
    label: "Grábóc",
  },
  {
    value: "Gubacs",
    label: "Gubacs",
  },
  {
    value: "Gubás-telek",
    label: "Gubás-telek",
  },
  {
    value: "Gulács",
    label: "Gulács",
  },
  {
    value: "Gulyajárás",
    label: "Gulyajárás",
  },
  {
    value: "Gurdon",
    label: "Gurdon",
  },
  {
    value: "Gurjál",
    label: "Gurjál",
  },
  {
    value: "Guszti-rét",
    label: "Guszti-rét",
  },
  {
    value: "Gút-kút",
    label: "Gút-kút",
  },
  {
    value: "Gutorfölde",
    label: "Gutorfölde",
  },
  {
    value: "Gyál",
    label: "Gyál",
  },
  {
    value: "Gyalóka",
    label: "Gyalóka",
  },
  {
    value: "Gyalupuszta",
    label: "Gyalupuszta",
  },
  {
    value: "Gyanógeregye",
    label: "Gyanógeregye",
  },
  {
    value: "Gyarmat",
    label: "Gyarmat",
  },
  {
    value: "Gyárosmajor",
    label: "Gyárosmajor",
  },
  {
    value: "Gyékényes",
    label: "Gyékényes",
  },
  {
    value: "Gyenesdiás",
    label: "Gyenesdiás",
  },
  {
    value: "Gyep-ugar",
    label: "Gyep-ugar",
  },
  {
    value: "Gyepföld",
    label: "Gyepföld",
  },
  {
    value: "Gyepükaján",
    label: "Gyepükaján",
  },
  {
    value: "Gyermely",
    label: "Gyermely",
  },
  {
    value: "Gyertyános",
    label: "Gyertyános",
  },
  {
    value: "Gyilkos",
    label: "Gyilkos",
  },
  {
    value: "Gyilkos-dűlő",
    label: "Gyilkos-dűlő",
  },
  {
    value: "Gyód",
    label: "Gyód",
  },
  {
    value: "Gyökeres",
    label: "Gyökeres",
  },
  {
    value: "Gyolcsinges",
    label: "Gyolcsinges",
  },
  {
    value: "Gyomaendrőd",
    label: "Gyomaendrőd",
  },
  {
    value: "Gyömöre",
    label: "Gyömöre",
  },
  {
    value: "Gyömrő",
    label: "Gyömrő",
  },
  {
    value: "Gyöngy-sziget",
    label: "Gyöngy-sziget",
  },
  {
    value: "Gyöngyfa",
    label: "Gyöngyfa",
  },
  {
    value: "Gyöngyös",
    label: "Gyöngyös",
  },
  {
    value: "Gyöngyösfalu",
    label: "Gyöngyösfalu",
  },
  {
    value: "Gyöngyöshalász",
    label: "Gyöngyöshalász",
  },
  {
    value: "Gyöngyösmellék",
    label: "Gyöngyösmellék",
  },
  {
    value: "Gyöngyösoroszi",
    label: "Gyöngyösoroszi",
  },
  {
    value: "Gyöngyöspata",
    label: "Gyöngyöspata",
  },
  {
    value: "Gyönk",
    label: "Gyönk",
  },
  {
    value: "Gyopáros-tó",
    label: "Gyopáros-tó",
  },
  {
    value: "Győr",
    label: "Győr",
  },
  {
    value: "Győrasszonyfa",
    label: "Győrasszonyfa",
  },
  {
    value: "Györe",
    label: "Györe",
  },
  {
    value: "Györgyös",
    label: "Györgyös",
  },
  {
    value: "Györgytarló",
    label: "Györgytarló",
  },
  {
    value: "Győri Szék",
    label: "Győri Szék",
  },
  {
    value: "Győrkitanya",
    label: "Győrkitanya",
  },
  {
    value: "Györköny",
    label: "Györköny",
  },
  {
    value: "Győrladamér",
    label: "Győrladamér",
  },
  {
    value: "Gyóró",
    label: "Gyóró",
  },
  {
    value: "Győröcske",
    label: "Győröcske",
  },
  {
    value: "Győrság",
    label: "Győrság",
  },
  {
    value: "Győrsövényház",
    label: "Győrsövényház",
  },
  {
    value: "Győrszemere",
    label: "Győrszemere",
  },
  {
    value: "Győrtelek",
    label: "Győrtelek",
  },
  {
    value: "Győrújbarát",
    label: "Győrújbarát",
  },
  {
    value: "Győrújfalu",
    label: "Győrújfalu",
  },
  {
    value: "Győrvár",
    label: "Győrvár",
  },
  {
    value: "Győrzámoly",
    label: "Győrzámoly",
  },
  {
    value: "Gyóta",
    label: "Gyóta",
  },
  {
    value: "Gyótai-mező",
    label: "Gyótai-mező",
  },
  {
    value: "Gyügér",
    label: "Gyügér",
  },
  {
    value: "Gyugy",
    label: "Gyugy",
  },
  {
    value: "Gyügye",
    label: "Gyügye",
  },
  {
    value: "Gyula",
    label: "Gyula",
  },
  {
    value: "Gyulaháza",
    label: "Gyulaháza",
  },
  {
    value: "Gyulaj",
    label: "Gyulaj",
  },
  {
    value: "Gyulakeszi",
    label: "Gyulakeszi",
  },
  {
    value: "Gyüre",
    label: "Gyüre",
  },
  {
    value: "Gyúró",
    label: "Gyúró",
  },
  {
    value: "Gyűrűs",
    label: "Gyűrűs",
  },
  {
    value: "Hács",
    label: "Hács",
  },
  {
    value: "Hadházytanya",
    label: "Hadházytanya",
  },
  {
    value: "Hagyárosbörönd",
    label: "Hagyárosbörönd",
  },
  {
    value: "Hahót",
    label: "Hahót",
  },
  {
    value: "Hajda",
    label: "Hajda",
  },
  {
    value: "Hajdú-Bihar",
    label: "Hajdú-Bihar",
  },
  {
    value: "Hajdú-völgy",
    label: "Hajdú-völgy",
  },
  {
    value: "Hajdúbagos",
    label: "Hajdúbagos",
  },
  {
    value: "Hajdúböszörmény",
    label: "Hajdúböszörmény",
  },
  {
    value: "Hajdúdorog",
    label: "Hajdúdorog",
  },
  {
    value: "Hajdúhadház",
    label: "Hajdúhadház",
  },
  {
    value: "Hajdúnánás",
    label: "Hajdúnánás",
  },
  {
    value: "Hajdúság",
    label: "Hajdúság",
  },
  {
    value: "Hajdúsámson",
    label: "Hajdúsámson",
  },
  {
    value: "Hajdúszoboszló",
    label: "Hajdúszoboszló",
  },
  {
    value: "Hajdúszovát",
    label: "Hajdúszovát",
  },
  {
    value: "Hajmás",
    label: "Hajmás",
  },
  {
    value: "Hajmáskér",
    label: "Hajmáskér",
  },
  {
    value: "Hajós",
    label: "Hajós",
  },
  {
    value: "Halábori-szeg",
    label: "Halábori-szeg",
  },
  {
    value: "Halasi-tó",
    label: "Halasi-tó",
  },
  {
    value: "Halastó",
    label: "Halastó",
  },
  {
    value: "Halászi",
    label: "Halászi",
  },
  {
    value: "Halásztelek",
    label: "Halásztelek",
  },
  {
    value: "Halesz",
    label: "Halesz",
  },
  {
    value: "Halimba",
    label: "Halimba",
  },
  {
    value: "Halmaj",
    label: "Halmaj",
  },
  {
    value: "Halmajugra",
    label: "Halmajugra",
  },
  {
    value: "Halogy",
    label: "Halogy",
  },
  {
    value: "Halom",
    label: "Halom",
  },
  {
    value: "Halom-dűlő",
    label: "Halom-dűlő",
  },
  {
    value: "Halom-zug",
    label: "Halom-zug",
  },
  {
    value: "Halompuszta",
    label: "Halompuszta",
  },
  {
    value: "Hammer-dűlő",
    label: "Hammer-dűlő",
  },
  {
    value: "Hámori-tó",
    label: "Hámori-tó",
  },
  {
    value: "Hamuházi-rét",
    label: "Hamuházi-rét",
  },
  {
    value: "Hamvas",
    label: "Hamvas",
  },
  {
    value: "Hangács",
    label: "Hangács",
  },
  {
    value: "Hangás",
    label: "Hangás",
  },
  {
    value: "Hangony",
    label: "Hangony",
  },
  {
    value: "Hangospuszta",
    label: "Hangospuszta",
  },
  {
    value: "Hangyálos",
    label: "Hangyálos",
  },
  {
    value: "Hantos",
    label: "Hantos",
  },
  {
    value: "Harangod",
    label: "Harangod",
  },
  {
    value: "Haraszt Alja",
    label: "Haraszt Alja",
  },
  {
    value: "Harasztal Alja",
    label: "Harasztal Alja",
  },
  {
    value: "Harasztifalu",
    label: "Harasztifalu",
  },
  {
    value: "Harc",
    label: "Harc",
  },
  {
    value: "Harka",
    label: "Harka",
  },
  {
    value: "Harkai-tó",
    label: "Harkai-tó",
  },
  {
    value: "Harkakötöny",
    label: "Harkakötöny",
  },
  {
    value: "Harkány",
    label: "Harkány",
  },
  {
    value: "Harkányi-dűlő",
    label: "Harkányi-dűlő",
  },
  {
    value: "Hármas",
    label: "Hármas",
  },
  {
    value: "Hármas-hegy",
    label: "Hármas-hegy",
  },
  {
    value: "Hármas-rét",
    label: "Hármas-rét",
  },
  {
    value: "Hármashatár-hegy",
    label: "Hármashatár-hegy",
  },
  {
    value: "Harmath-tag",
    label: "Harmath-tag",
  },
  {
    value: "Háromfa",
    label: "Háromfa",
  },
  {
    value: "Háromhuta",
    label: "Háromhuta",
  },
  {
    value: "Harsány",
    label: "Harsány",
  },
  {
    value: "Hársas",
    label: "Hársas",
  },
  {
    value: "Hársas Hegy",
    label: "Hársas Hegy",
  },
  {
    value: "Hárskút",
    label: "Hárskút",
  },
  {
    value: "Harta",
    label: "Harta",
  },
  {
    value: "Harta-Mikla",
    label: "Harta-Mikla",
  },
  {
    value: "Hártyás",
    label: "Hártyás",
  },
  {
    value: "Hásságy",
    label: "Hásságy",
  },
  {
    value: "Hatablak",
    label: "Hatablak",
  },
  {
    value: "Hattyus",
    label: "Hattyus",
  },
  {
    value: "Hatvan",
    label: "Hatvan",
  },
  {
    value: "Havas-dűlő",
    label: "Havas-dűlő",
  },
  {
    value: "Hédervár",
    label: "Hédervár",
  },
  {
    value: "Hedrehely",
    label: "Hedrehely",
  },
  {
    value: "Hegedűs-hát",
    label: "Hegedűs-hát",
  },
  {
    value: "Hegyalja",
    label: "Hegyalja",
  },
  {
    value: "Hegyes-dűlő",
    label: "Hegyes-dűlő",
  },
  {
    value: "Hegyes-határ",
    label: "Hegyes-határ",
  },
  {
    value: "Hegyes-homok",
    label: "Hegyes-homok",
  },
  {
    value: "Hegyes-zug",
    label: "Hegyes-zug",
  },
  {
    value: "Hegyesd",
    label: "Hegyesd",
  },
  {
    value: "Hegyeshalom",
    label: "Hegyeshalom",
  },
  {
    value: "Hegyfalu",
    label: "Hegyfalu",
  },
  {
    value: "Hegyháthodász",
    label: "Hegyháthodász",
  },
  {
    value: "Hegyhátmaróc",
    label: "Hegyhátmaróc",
  },
  {
    value: "Hegyhátsál",
    label: "Hegyhátsál",
  },
  {
    value: "Hegyhátszentjakab",
    label: "Hegyhátszentjakab",
  },
  {
    value: "Hegyhátszentmárton",
    label: "Hegyhátszentmárton",
  },
  {
    value: "Hegyhátszentpéter",
    label: "Hegyhátszentpéter",
  },
  {
    value: "Hegykő",
    label: "Hegykő",
  },
  {
    value: "Hegyköz",
    label: "Hegyköz",
  },
  {
    value: "Hegymagas",
    label: "Hegymagas",
  },
  {
    value: "Hegymeg",
    label: "Hegymeg",
  },
  {
    value: "Hegyszentmárton",
    label: "Hegyszentmárton",
  },
  {
    value: "Héhalom",
    label: "Héhalom",
  },
  {
    value: "Hejce",
    label: "Hejce",
  },
  {
    value: "Hejőbába",
    label: "Hejőbába",
  },
  {
    value: "Hejőkeresztúr",
    label: "Hejőkeresztúr",
  },
  {
    value: "Hejőkürt",
    label: "Hejőkürt",
  },
  {
    value: "Hejőpapi",
    label: "Hejőpapi",
  },
  {
    value: "Hejőszalonta",
    label: "Hejőszalonta",
  },
  {
    value: "Helesfa",
    label: "Helesfa",
  },
  {
    value: "Helvécia",
    label: "Helvécia",
  },
  {
    value: "Hencida",
    label: "Hencida",
  },
  {
    value: "Hencse",
    label: "Hencse",
  },
  {
    value: "Herceghalom",
    label: "Herceghalom",
  },
  {
    value: "Hercegkút",
    label: "Hercegkút",
  },
  {
    value: "Hercegszántó",
    label: "Hercegszántó",
  },
  {
    value: "Hercegtag",
    label: "Hercegtag",
  },
  {
    value: "Hereföldek",
    label: "Hereföldek",
  },
  {
    value: "Héreg",
    label: "Héreg",
  },
  {
    value: "Herencsény",
    label: "Herencsény",
  },
  {
    value: "Herend",
    label: "Herend",
  },
  {
    value: "Heresznye",
    label: "Heresznye",
  },
  {
    value: "Hermánszeg",
    label: "Hermánszeg",
  },
  {
    value: "Hernád",
    label: "Hernád",
  },
  {
    value: "Hernádbűd",
    label: "Hernádbűd",
  },
  {
    value: "Hernádcéce",
    label: "Hernádcéce",
  },
  {
    value: "Hernádkak",
    label: "Hernádkak",
  },
  {
    value: "Hernádkércs",
    label: "Hernádkércs",
  },
  {
    value: "Hernádnémeti",
    label: "Hernádnémeti",
  },
  {
    value: "Hernádpetri",
    label: "Hernádpetri",
  },
  {
    value: "Hernádszentandrás",
    label: "Hernádszentandrás",
  },
  {
    value: "Hernádszurdok",
    label: "Hernádszurdok",
  },
  {
    value: "Hernádvécse",
    label: "Hernádvécse",
  },
  {
    value: "Hernyék",
    label: "Hernyék",
  },
  {
    value: "Herpa",
    label: "Herpa",
  },
  {
    value: "Hét",
    label: "Hét",
  },
  {
    value: "Hetefejércse",
    label: "Hetefejércse",
  },
  {
    value: "Hetei-tag",
    label: "Hetei-tag",
  },
  {
    value: "Hetés",
    label: "Hetés",
  },
  {
    value: "Hetes",
    label: "Hetes",
  },
  {
    value: "Hetey-tag",
    label: "Hetey-tag",
  },
  {
    value: "Hetvehely",
    label: "Hetvehely",
  },
  {
    value: "Hetyefő",
    label: "Hetyefő",
  },
  {
    value: "Heves",
    label: "Heves",
  },
  {
    value: "Hevesvezekény",
    label: "Hevesvezekény",
  },
  {
    value: "Hévíz",
    label: "Hévíz",
  },
  {
    value: "Hévízgyörk",
    label: "Hévízgyörk",
  },
  {
    value: "Hidas",
    label: "Hidas",
  },
  {
    value: "Hidas-bérc",
    label: "Hidas-bérc",
  },
  {
    value: "Hidasnémeti",
    label: "Hidasnémeti",
  },
  {
    value: "Hideg-ér",
    label: "Hideg-ér",
  },
  {
    value: "Hidegkút",
    label: "Hidegkút",
  },
  {
    value: "Hidegség",
    label: "Hidegség",
  },
  {
    value: "Hídvég-puszta",
    label: "Hídvég-puszta",
  },
  {
    value: "Hidvégardó",
    label: "Hidvégardó",
  },
  {
    value: "Hímesdi-lapos",
    label: "Hímesdi-lapos",
  },
  {
    value: "Himesháza",
    label: "Himesháza",
  },
  {
    value: "Himod",
    label: "Himod",
  },
  {
    value: "Hintó-farok",
    label: "Hintó-farok",
  },
  {
    value: "Hirics",
    label: "Hirics",
  },
  {
    value: "Hízlaldai-tábla",
    label: "Hízlaldai-tábla",
  },
  {
    value: "Hobogy",
    label: "Hobogy",
  },
  {
    value: "Hobol",
    label: "Hobol",
  },
  {
    value: "Hodály",
    label: "Hodály",
  },
  {
    value: "Hodász",
    label: "Hodász",
  },
  {
    value: "Hódmezővásárhely",
    label: "Hódmezővásárhely",
  },
  {
    value: "Hódos Köze",
    label: "Hódos Köze",
  },
  {
    value: "Hőgyész",
    label: "Hőgyész",
  },
  {
    value: "Hóka",
    label: "Hóka",
  },
  {
    value: "Hollád",
    label: "Hollád",
  },
  {
    value: "Hollóháza",
    label: "Hollóháza",
  },
  {
    value: "Hollókő",
    label: "Hollókő",
  },
  {
    value: "Hollós",
    label: "Hollós",
  },
  {
    value: "Holt-Szamos",
    label: "Holt-Szamos",
  },
  {
    value: "Holt-Tarna-dűlő",
    label: "Holt-Tarna-dűlő",
  },
  {
    value: "Homok",
    label: "Homok",
  },
  {
    value: "Homok-rét",
    label: "Homok-rét",
  },
  {
    value: "Homokbödöge",
    label: "Homokbödöge",
  },
  {
    value: "Homokkert",
    label: "Homokkert",
  },
  {
    value: "Homokkomárom",
    label: "Homokkomárom",
  },
  {
    value: "Homokmégy",
    label: "Homokmégy",
  },
  {
    value: "Homokszentgyörgy",
    label: "Homokszentgyörgy",
  },
  {
    value: "Homoktag",
    label: "Homoktag",
  },
  {
    value: "Homor-szög",
    label: "Homor-szög",
  },
  {
    value: "Homoród",
    label: "Homoród",
  },
  {
    value: "Homorúd",
    label: "Homorúd",
  },
  {
    value: "Homrogd",
    label: "Homrogd",
  },
  {
    value: "Hont",
    label: "Hont",
  },
  {
    value: "Hoportyó",
    label: "Hoportyó",
  },
  {
    value: "Hordós-kút-dűlő",
    label: "Hordós-kút-dűlő",
  },
  {
    value: "Horga",
    label: "Horga",
  },
  {
    value: "Horgas",
    label: "Horgas",
  },
  {
    value: "Horgas Tó",
    label: "Horgas Tó",
  },
  {
    value: "Horgas-dűlő",
    label: "Horgas-dűlő",
  },
  {
    value: "Horgas-tó",
    label: "Horgas-tó",
  },
  {
    value: "Horgoló",
    label: "Horgoló",
  },
  {
    value: "Horpács",
    label: "Horpács",
  },
  {
    value: "Hort",
    label: "Hort",
  },
  {
    value: "Hortobágy",
    label: "Hortobágy",
  },
  {
    value: "Hortobágyi-halastó",
    label: "Hortobágyi-halastó",
  },
  {
    value: "Horváth-tag",
    label: "Horváth-tag",
  },
  {
    value: "Horváthertelend",
    label: "Horváthertelend",
  },
  {
    value: "Horvátlövő",
    label: "Horvátlövő",
  },
  {
    value: "Horvátzsidány",
    label: "Horvátzsidány",
  },
  {
    value: "Hosszú Tó",
    label: "Hosszú Tó",
  },
  {
    value: "Hosszú-dűlő",
    label: "Hosszú-dűlő",
  },
  {
    value: "Hosszú-erdő",
    label: "Hosszú-erdő",
  },
  {
    value: "Hosszú-máj",
    label: "Hosszú-máj",
  },
  {
    value: "Hosszú-ráta-dűlő",
    label: "Hosszú-ráta-dűlő",
  },
  {
    value: "Hosszú-sziget",
    label: "Hosszú-sziget",
  },
  {
    value: "Hosszúhetény",
    label: "Hosszúhetény",
  },
  {
    value: "Hosszúpályi",
    label: "Hosszúpályi",
  },
  {
    value: "Hosszúpereszteg",
    label: "Hosszúpereszteg",
  },
  {
    value: "Hosszúrétek",
    label: "Hosszúrétek",
  },
  {
    value: "Hosszúvíz",
    label: "Hosszúvíz",
  },
  {
    value: "Hosszúvölgy",
    label: "Hosszúvölgy",
  },
  {
    value: "Hosztót",
    label: "Hosztót",
  },
  {
    value: "Hottó",
    label: "Hottó",
  },
  {
    value: "Hövej",
    label: "Hövej",
  },
  {
    value: "Hugyag",
    label: "Hugyag",
  },
  {
    value: "Hugyó-hegy",
    label: "Hugyó-hegy",
  },
  {
    value: "Hungary",
    label: "Hungary",
  },
  {
    value: "Hunya",
    label: "Hunya",
  },
  {
    value: "Hunyadfalva",
    label: "Hunyadfalva",
  },
  {
    value: "Hurkás-Hegyes-dűlő",
    label: "Hurkás-Hegyes-dűlő",
  },
  {
    value: "Husztót",
    label: "Husztót",
  },
  {
    value: "Ibafa",
    label: "Ibafa",
  },
  {
    value: "Iborfia",
    label: "Iborfia",
  },
  {
    value: "Ibrány",
    label: "Ibrány",
  },
  {
    value: "Ibrikó",
    label: "Ibrikó",
  },
  {
    value: "Igal",
    label: "Igal",
  },
  {
    value: "Igar",
    label: "Igar",
  },
  {
    value: "Igej",
    label: "Igej",
  },
  {
    value: "Igrice",
    label: "Igrice",
  },
  {
    value: "Igrici",
    label: "Igrici",
  },
  {
    value: "Iharos",
    label: "Iharos",
  },
  {
    value: "Iharosberény",
    label: "Iharosberény",
  },
  {
    value: "Ikervár",
    label: "Ikervár",
  },
  {
    value: "Iklad",
    label: "Iklad",
  },
  {
    value: "Iklanberény",
    label: "Iklanberény",
  },
  {
    value: "Iklódbördőce",
    label: "Iklódbördőce",
  },
  {
    value: "Ikrény",
    label: "Ikrény",
  },
  {
    value: "Iliny",
    label: "Iliny",
  },
  {
    value: "Ilk",
    label: "Ilk",
  },
  {
    value: "Illocska",
    label: "Illocska",
  },
  {
    value: "Ilonamajor",
    label: "Ilonamajor",
  },
  {
    value: "Ilonatanya",
    label: "Ilonatanya",
  },
  {
    value: "Ilosvai-tag",
    label: "Ilosvai-tag",
  },
  {
    value: "Imola",
    label: "Imola",
  },
  {
    value: "Imrehegy",
    label: "Imrehegy",
  },
  {
    value: "Imremajori Út",
    label: "Imremajori Út",
  },
  {
    value: "Inacs",
    label: "Inacs",
  },
  {
    value: "Ináncs",
    label: "Ináncs",
  },
  {
    value: "Inárcs",
    label: "Inárcs",
  },
  {
    value: "Inke",
    label: "Inke",
  },
  {
    value: "Inkei-Káka",
    label: "Inkei-Káka",
  },
  {
    value: "Ipacsfa",
    label: "Ipacsfa",
  },
  {
    value: "Ipolydamásd",
    label: "Ipolydamásd",
  },
  {
    value: "Ipolytarnóc",
    label: "Ipolytarnóc",
  },
  {
    value: "Ipolytölgyes",
    label: "Ipolytölgyes",
  },
  {
    value: "Ipolyvece",
    label: "Ipolyvece",
  },
  {
    value: "Iregszemcse",
    label: "Iregszemcse",
  },
  {
    value: "Irota",
    label: "Irota",
  },
  {
    value: "Irtás",
    label: "Irtás",
  },
  {
    value: "Isaszeg",
    label: "Isaszeg",
  },
  {
    value: "Iskola-dűlő",
    label: "Iskola-dűlő",
  },
  {
    value: "Ispánk",
    label: "Ispánk",
  },
  {
    value: "Istállós-kő",
    label: "Istállós-kő",
  },
  {
    value: "Isten Kiskertje-dűlő",
    label: "Isten Kiskertje-dűlő",
  },
  {
    value: "István-hegyes",
    label: "István-hegyes",
  },
  {
    value: "Istvándi",
    label: "Istvándi",
  },
  {
    value: "Iszkaszentgyörgy",
    label: "Iszkaszentgyörgy",
  },
  {
    value: "Iszkáz",
    label: "Iszkáz",
  },
  {
    value: "Isztimér",
    label: "Isztimér",
  },
  {
    value: "Iván",
    label: "Iván",
  },
  {
    value: "Ivánbattyán",
    label: "Ivánbattyán",
  },
  {
    value: "Ivánc",
    label: "Ivánc",
  },
  {
    value: "Iváncsa",
    label: "Iváncsa",
  },
  {
    value: "Iváncsó",
    label: "Iváncsó",
  },
  {
    value: "Ivándárda",
    label: "Ivándárda",
  },
  {
    value: "Ivánka",
    label: "Ivánka",
  },
  {
    value: "Iza",
    label: "Iza",
  },
  {
    value: "Izmény",
    label: "Izmény",
  },
  {
    value: "Izsák",
    label: "Izsák",
  },
  {
    value: "Izsófalva",
    label: "Izsófalva",
  },
  {
    value: "Jágónak",
    label: "Jágónak",
  },
  {
    value: "Jajka",
    label: "Jajka",
  },
  {
    value: "Ják",
    label: "Ják",
  },
  {
    value: "Jakab-hegy",
    label: "Jakab-hegy",
  },
  {
    value: "Jakabszállás",
    label: "Jakabszállás",
  },
  {
    value: "Jákfa",
    label: "Jákfa",
  },
  {
    value: "Jákfalva",
    label: "Jákfalva",
  },
  {
    value: "Jákó",
    label: "Jákó",
  },
  {
    value: "Jákvarcsó",
    label: "Jákvarcsó",
  },
  {
    value: "Jalapár",
    label: "Jalapár",
  },
  {
    value: "Jánd",
    label: "Jánd",
  },
  {
    value: "Jánkmajtis",
    label: "Jánkmajtis",
  },
  {
    value: "János-állás",
    label: "János-állás",
  },
  {
    value: "János-hegy",
    label: "János-hegy",
  },
  {
    value: "Jánoshalma",
    label: "Jánoshalma",
  },
  {
    value: "Jánosháza",
    label: "Jánosháza",
  },
  {
    value: "Jánoshida",
    label: "Jánoshida",
  },
  {
    value: "Jánosmajori-dűlő",
    label: "Jánosmajori-dűlő",
  },
  {
    value: "Jánossomorja",
    label: "Jánossomorja",
  },
  {
    value: "Járdánháza",
    label: "Járdánháza",
  },
  {
    value: "Jármi",
    label: "Jármi",
  },
  {
    value: "Jásd",
    label: "Jásd",
  },
  {
    value: "Jászágó",
    label: "Jászágó",
  },
  {
    value: "Jászalsószentgyörgy",
    label: "Jászalsószentgyörgy",
  },
  {
    value: "Jászapáti",
    label: "Jászapáti",
  },
  {
    value: "Jászapáti-határdűlő",
    label: "Jászapáti-határdűlő",
  },
  {
    value: "Jászárokszállás",
    label: "Jászárokszállás",
  },
  {
    value: "Jászberény",
    label: "Jászberény",
  },
  {
    value: "Jászboldogháza",
    label: "Jászboldogháza",
  },
  {
    value: "Jászdózsa",
    label: "Jászdózsa",
  },
  {
    value: "Jászfelsőszentgyörgy",
    label: "Jászfelsőszentgyörgy",
  },
  {
    value: "Jászfényszaru",
    label: "Jászfényszaru",
  },
  {
    value: "Jászivány",
    label: "Jászivány",
  },
  {
    value: "Jászjákóhalma",
    label: "Jászjákóhalma",
  },
  {
    value: "Jászkarajenő",
    label: "Jászkarajenő",
  },
  {
    value: "Jászkisér",
    label: "Jászkisér",
  },
  {
    value: "Jászladány",
    label: "Jászladány",
  },
  {
    value: "Jászság",
    label: "Jászság",
  },
  {
    value: "Jászszentandrás",
    label: "Jászszentandrás",
  },
  {
    value: "Jászszentlászló",
    label: "Jászszentlászló",
  },
  {
    value: "Jásztelek",
    label: "Jásztelek",
  },
  {
    value: "Jegyző-tag",
    label: "Jegyző-tag",
  },
  {
    value: "Jéke",
    label: "Jéke",
  },
  {
    value: "Jencsik-dűlő",
    label: "Jencsik-dűlő",
  },
  {
    value: "Jenő",
    label: "Jenő",
  },
  {
    value: "Jenőháza",
    label: "Jenőháza",
  },
  {
    value: "Jobaháza",
    label: "Jobaháza",
  },
  {
    value: "Jobbágyi",
    label: "Jobbágyi",
  },
  {
    value: "Jósvafő",
    label: "Jósvafő",
  },
  {
    value: "Jótanya",
    label: "Jótanya",
  },
  {
    value: "Józsefszállás",
    label: "Józsefszállás",
  },
  {
    value: "Józsefváros",
    label: "Józsefváros",
  },
  {
    value: "Júlia-liget",
    label: "Júlia-liget",
  },
  {
    value: "Juta",
    label: "Juta",
  },
  {
    value: "Kaba",
    label: "Kaba",
  },
  {
    value: "Kacorlak",
    label: "Kacorlak",
  },
  {
    value: "Kács",
    label: "Kács",
  },
  {
    value: "Kacsavár",
    label: "Kacsavár",
  },
  {
    value: "Kácsikpuszta",
    label: "Kácsikpuszta",
  },
  {
    value: "Kacskovicspuszta",
    label: "Kacskovicspuszta",
  },
  {
    value: "Kacsóta",
    label: "Kacsóta",
  },
  {
    value: "Kadarkút",
    label: "Kadarkút",
  },
  {
    value: "Kaján-szik",
    label: "Kaján-szik",
  },
  {
    value: "Kajárpéc",
    label: "Kajárpéc",
  },
  {
    value: "Kajászó",
    label: "Kajászó",
  },
  {
    value: "Kajdacs",
    label: "Kajdacs",
  },
  {
    value: "Kajmát-dűlő",
    label: "Kajmát-dűlő",
  },
  {
    value: "Kakasd",
    label: "Kakasd",
  },
  {
    value: "Kakaska",
    label: "Kakaska",
  },
  {
    value: "Kakasszéki-tó",
    label: "Kakasszéki-tó",
  },
  {
    value: "Kakat",
    label: "Kakat",
  },
  {
    value: "Kákics",
    label: "Kákics",
  },
  {
    value: "Kakucs",
    label: "Kakucs",
  },
  {
    value: "Kál",
    label: "Kál",
  },
  {
    value: "Kalapos-dűlő",
    label: "Kalapos-dűlő",
  },
  {
    value: "Kalaznó",
    label: "Kalaznó",
  },
  {
    value: "Káld",
    label: "Káld",
  },
  {
    value: "Kálló",
    label: "Kálló",
  },
  {
    value: "Kálló-köze",
    label: "Kálló-köze",
  },
  {
    value: "Kallósd",
    label: "Kallósd",
  },
  {
    value: "Kállósemjén",
    label: "Kállósemjén",
  },
  {
    value: "Kálmáncsa",
    label: "Kálmáncsa",
  },
  {
    value: "Kálmánháza",
    label: "Kálmánháza",
  },
  {
    value: "Kálócfa",
    label: "Kálócfa",
  },
  {
    value: "Kalocsa",
    label: "Kalocsa",
  },
  {
    value: "Káloz",
    label: "Káloz",
  },
  {
    value: "Kálvinháza",
    label: "Kálvinháza",
  },
  {
    value: "Kám",
    label: "Kám",
  },
  {
    value: "Kamut",
    label: "Kamut",
  },
  {
    value: "Kánó",
    label: "Kánó",
  },
  {
    value: "Kantaköz",
    label: "Kantaköz",
  },
  {
    value: "Kántorjánosi",
    label: "Kántorjánosi",
  },
  {
    value: "Kány",
    label: "Kány",
  },
  {
    value: "Kánya",
    label: "Kánya",
  },
  {
    value: "Kányavár",
    label: "Kányavár",
  },
  {
    value: "Kanyór-tag",
    label: "Kanyór-tag",
  },
  {
    value: "Kaparás-zug",
    label: "Kaparás-zug",
  },
  {
    value: "Kapás-kert",
    label: "Kapás-kert",
  },
  {
    value: "Kapitány-dűlő",
    label: "Kapitány-dűlő",
  },
  {
    value: "Kapitány-tó",
    label: "Kapitány-tó",
  },
  {
    value: "Kapolcs",
    label: "Kapolcs",
  },
  {
    value: "Kápolna",
    label: "Kápolna",
  },
  {
    value: "Kápolnásnyék",
    label: "Kápolnásnyék",
  },
  {
    value: "Kapoly",
    label: "Kapoly",
  },
  {
    value: "Kaposfő",
    label: "Kaposfő",
  },
  {
    value: "Kaposgyarmat",
    label: "Kaposgyarmat",
  },
  {
    value: "Kaposhomok",
    label: "Kaposhomok",
  },
  {
    value: "Kaposkeresztúr",
    label: "Kaposkeresztúr",
  },
  {
    value: "Kaposmérő",
    label: "Kaposmérő",
  },
  {
    value: "Kapospula",
    label: "Kapospula",
  },
  {
    value: "Kaposszekcső",
    label: "Kaposszekcső",
  },
  {
    value: "Kaposszerdahely",
    label: "Kaposszerdahely",
  },
  {
    value: "Kaposújlak",
    label: "Kaposújlak",
  },
  {
    value: "Kaposvár",
    label: "Kaposvár",
  },
  {
    value: "Káptalanfa",
    label: "Káptalanfa",
  },
  {
    value: "Káptalantóti",
    label: "Káptalantóti",
  },
  {
    value: "Kapuvár",
    label: "Kapuvár",
  },
  {
    value: "Kára",
    label: "Kára",
  },
  {
    value: "Kara-hát",
    label: "Kara-hát",
  },
  {
    value: "Karád",
    label: "Karád",
  },
  {
    value: "Karakó",
    label: "Karakó",
  },
  {
    value: "Karakószörcsök",
    label: "Karakószörcsök",
  },
  {
    value: "Karalyostanya",
    label: "Karalyostanya",
  },
  {
    value: "Karancsalja",
    label: "Karancsalja",
  },
  {
    value: "Karancsberény",
    label: "Karancsberény",
  },
  {
    value: "Karancskeszi",
    label: "Karancskeszi",
  },
  {
    value: "Karancslapujtő",
    label: "Karancslapujtő",
  },
  {
    value: "Karancsság",
    label: "Karancsság",
  },
  {
    value: "Kárász",
    label: "Kárász",
  },
  {
    value: "Karcag",
    label: "Karcag",
  },
  {
    value: "Karcsa",
    label: "Karcsa",
  },
  {
    value: "Kardos",
    label: "Kardos",
  },
  {
    value: "Kardoskút",
    label: "Kardoskút",
  },
  {
    value: "Karmacs",
    label: "Karmacs",
  },
  {
    value: "Karola",
    label: "Karola",
  },
  {
    value: "Karolin",
    label: "Karolin",
  },
  {
    value: "Károlyhalmapuszta",
    label: "Károlyhalmapuszta",
  },
  {
    value: "Karos",
    label: "Karos",
  },
  {
    value: "Kartal",
    label: "Kartal",
  },
  {
    value: "Kásád",
    label: "Kásád",
  },
  {
    value: "Kaskantyú",
    label: "Kaskantyú",
  },
  {
    value: "Kastélyosdombó",
    label: "Kastélyosdombó",
  },
  {
    value: "Kaszáló",
    label: "Kaszáló",
  },
  {
    value: "Kaszaper",
    label: "Kaszaper",
  },
  {
    value: "Kaszó",
    label: "Kaszó",
  },
  {
    value: "Kata Halma",
    label: "Kata Halma",
  },
  {
    value: "Katádfa",
    label: "Katádfa",
  },
  {
    value: "Katafa",
    label: "Katafa",
  },
  {
    value: "Kátó",
    label: "Kátó",
  },
  {
    value: "Kató-szőlő",
    label: "Kató-szőlő",
  },
  {
    value: "Kátoly",
    label: "Kátoly",
  },
  {
    value: "Katymár",
    label: "Katymár",
  },
  {
    value: "Káva",
    label: "Káva",
  },
  {
    value: "Kávás",
    label: "Kávás",
  },
  {
    value: "Kazár",
    label: "Kazár",
  },
  {
    value: "Kazincbarcika",
    label: "Kazincbarcika",
  },
  {
    value: "Kázsmárk",
    label: "Kázsmárk",
  },
  {
    value: "Kazsok",
    label: "Kazsok",
  },
  {
    value: "Kecel",
    label: "Kecel",
  },
  {
    value: "Kecsegés-zug",
    label: "Kecsegés-zug",
  },
  {
    value: "Kecske-pad",
    label: "Kecske-pad",
  },
  {
    value: "Kecskéd",
    label: "Kecskéd",
  },
  {
    value: "Kecskemét",
    label: "Kecskemét",
  },
  {
    value: "Kecskés-dűlő",
    label: "Kecskés-dűlő",
  },
  {
    value: "Kehidakustány",
    label: "Kehidakustány",
  },
  {
    value: "Kék",
    label: "Kék",
  },
  {
    value: "Kékcse",
    label: "Kékcse",
  },
  {
    value: "Kéked",
    label: "Kéked",
  },
  {
    value: "Kékes",
    label: "Kékes",
  },
  {
    value: "Kékesd",
    label: "Kékesd",
  },
  {
    value: "Kékkút",
    label: "Kékkút",
  },
  {
    value: "Kelebia",
    label: "Kelebia",
  },
  {
    value: "Keléd",
    label: "Keléd",
  },
  {
    value: "Kelem",
    label: "Kelem",
  },
  {
    value: "Kelemen-fertő",
    label: "Kelemen-fertő",
  },
  {
    value: "Kelemér",
    label: "Kelemér",
  },
  {
    value: "Kéleshalom",
    label: "Kéleshalom",
  },
  {
    value: "Kelevíz",
    label: "Kelevíz",
  },
  {
    value: "Kellő",
    label: "Kellő",
  },
  {
    value: "Kemecse",
    label: "Kemecse",
  },
  {
    value: "Kemelypuszta",
    label: "Kemelypuszta",
  },
  {
    value: "Kemence",
    label: "Kemence",
  },
  {
    value: "Kemendollár",
    label: "Kemendollár",
  },
  {
    value: "Kemeneshőgyész",
    label: "Kemeneshőgyész",
  },
  {
    value: "Kemeneskápolna",
    label: "Kemeneskápolna",
  },
  {
    value: "Kemenesmagasi",
    label: "Kemenesmagasi",
  },
  {
    value: "Kemenesmihályfa",
    label: "Kemenesmihályfa",
  },
  {
    value: "Kemenespálfa",
    label: "Kemenespálfa",
  },
  {
    value: "Kemenessömjén",
    label: "Kemenessömjén",
  },
  {
    value: "Kemenesszentmárton",
    label: "Kemenesszentmárton",
  },
  {
    value: "Kemenesszentpéter",
    label: "Kemenesszentpéter",
  },
  {
    value: "Keménfa",
    label: "Keménfa",
  },
  {
    value: "Kemény",
    label: "Kemény",
  },
  {
    value: "Kemes",
    label: "Kemes",
  },
  {
    value: "Kémes",
    label: "Kémes",
  },
  {
    value: "Kemestaródfa",
    label: "Kemestaródfa",
  },
  {
    value: "Kémlőd",
    label: "Kémlőd",
  },
  {
    value: "Kemse",
    label: "Kemse",
  },
  {
    value: "Kender-háti-szőlő",
    label: "Kender-háti-szőlő",
  },
  {
    value: "Kenderes",
    label: "Kenderes",
  },
  {
    value: "Kenderföldek",
    label: "Kenderföldek",
  },
  {
    value: "Kenderhely",
    label: "Kenderhely",
  },
  {
    value: "Kenéz",
    label: "Kenéz",
  },
  {
    value: "Kenézlő",
    label: "Kenézlő",
  },
  {
    value: "Kengyel",
    label: "Kengyel",
  },
  {
    value: "Kenyeres-domb",
    label: "Kenyeres-domb",
  },
  {
    value: "Kenyeri",
    label: "Kenyeri",
  },
  {
    value: "Kenyiz-tó",
    label: "Kenyiz-tó",
  },
  {
    value: "Kepecs-tag",
    label: "Kepecs-tag",
  },
  {
    value: "Kercaszomor",
    label: "Kercaszomor",
  },
  {
    value: "Kercseliget",
    label: "Kercseliget",
  },
  {
    value: "Kerecseny",
    label: "Kerecseny",
  },
  {
    value: "Kerek-erdő",
    label: "Kerek-erdő",
  },
  {
    value: "Kerek-rét",
    label: "Kerek-rét",
  },
  {
    value: "Kerek-szik-tó",
    label: "Kerek-szik-tó",
  },
  {
    value: "Kerek-tó",
    label: "Kerek-tó",
  },
  {
    value: "Kerék-tó",
    label: "Kerék-tó",
  },
  {
    value: "Kerekaljapuszta",
    label: "Kerekaljapuszta",
  },
  {
    value: "Kerekegyháza",
    label: "Kerekegyháza",
  },
  {
    value: "Kereki",
    label: "Kereki",
  },
  {
    value: "Kerékteleki",
    label: "Kerékteleki",
  },
  {
    value: "Kerepes",
    label: "Kerepes",
  },
  {
    value: "Keresztesmajor",
    label: "Keresztesmajor",
  },
  {
    value: "Keresztéte",
    label: "Keresztéte",
  },
  {
    value: "Kerkabarabás",
    label: "Kerkabarabás",
  },
  {
    value: "Kerkafalva",
    label: "Kerkafalva",
  },
  {
    value: "Kerkakutas",
    label: "Kerkakutas",
  },
  {
    value: "Kerkáskápolna",
    label: "Kerkáskápolna",
  },
  {
    value: "Kerkaszentkirály",
    label: "Kerkaszentkirály",
  },
  {
    value: "Kerkateskánd",
    label: "Kerkateskánd",
  },
  {
    value: "Kérsemjén",
    label: "Kérsemjén",
  },
  {
    value: "Kerta",
    label: "Kerta",
  },
  {
    value: "Kertalja",
    label: "Kertalja",
  },
  {
    value: "Kertészsziget",
    label: "Kertészsziget",
  },
  {
    value: "Kesely",
    label: "Kesely",
  },
  {
    value: "Keselyű-hegy",
    label: "Keselyű-hegy",
  },
  {
    value: "Kesnyék",
    label: "Kesnyék",
  },
  {
    value: "Keszeg",
    label: "Keszeg",
  },
  {
    value: "Keszlerosztás",
    label: "Keszlerosztás",
  },
  {
    value: "Kesznyéten",
    label: "Kesznyéten",
  },
  {
    value: "Keszőhidegkút",
    label: "Keszőhidegkút",
  },
  {
    value: "Keszthely",
    label: "Keszthely",
  },
  {
    value: "Kesztölc",
    label: "Kesztölc",
  },
  {
    value: "Keszü",
    label: "Keszü",
  },
  {
    value: "Két-árok Köze",
    label: "Két-árok Köze",
  },
  {
    value: "Két-berek-közi",
    label: "Két-berek-közi",
  },
  {
    value: "Két-kúti-járás",
    label: "Két-kúti-járás",
  },
  {
    value: "Két-víz-köz",
    label: "Két-víz-köz",
  },
  {
    value: "Kétbodony",
    label: "Kétbodony",
  },
  {
    value: "Kétegyháza",
    label: "Kétegyháza",
  },
  {
    value: "Kéthely",
    label: "Kéthely",
  },
  {
    value: "Kétpó",
    label: "Kétpó",
  },
  {
    value: "Kétsoprony",
    label: "Kétsoprony",
  },
  {
    value: "Kettős-ér-sziget",
    label: "Kettős-ér-sziget",
  },
  {
    value: "Kétújfalu",
    label: "Kétújfalu",
  },
  {
    value: "Kétvölgy",
    label: "Kétvölgy",
  },
  {
    value: "Kéty",
    label: "Kéty",
  },
  {
    value: "Kevermes",
    label: "Kevermes",
  },
  {
    value: "Kígyós-dűlő",
    label: "Kígyós-dűlő",
  },
  {
    value: "Kígyóspuszta",
    label: "Kígyóspuszta",
  },
  {
    value: "Kihi-kert",
    label: "Kihi-kert",
  },
  {
    value: "Kilimán",
    label: "Kilimán",
  },
  {
    value: "Kimle",
    label: "Kimle",
  },
  {
    value: "Kincsem-szőlőtelep",
    label: "Kincsem-szőlőtelep",
  },
  {
    value: "Kincsesbánya",
    label: "Kincsesbánya",
  },
  {
    value: "Kincsestanya",
    label: "Kincsestanya",
  },
  {
    value: "Királd",
    label: "Királd",
  },
  {
    value: "Királyegyháza",
    label: "Királyegyháza",
  },
  {
    value: "Királyhegyes",
    label: "Királyhegyes",
  },
  {
    value: "Királyszentistván",
    label: "Királyszentistván",
  },
  {
    value: "Királytelki Tó",
    label: "Királytelki Tó",
  },
  {
    value: "Kiritó",
    label: "Kiritó",
  },
  {
    value: "Kis Bágy Halma",
    label: "Kis Bágy Halma",
  },
  {
    value: "Kis Mihály-tó",
    label: "Kis Mihály-tó",
  },
  {
    value: "Kis-Bánháza",
    label: "Kis-Bánháza",
  },
  {
    value: "Kis-Bashalom",
    label: "Kis-Bashalom",
  },
  {
    value: "Kis-Bócs",
    label: "Kis-Bócs",
  },
  {
    value: "Kis-Bodzás",
    label: "Kis-Bodzás",
  },
  {
    value: "Kis-Bölcsi-dűlő",
    label: "Kis-Bölcsi-dűlő",
  },
  {
    value: "Kis-Csópány",
    label: "Kis-Csópány",
  },
  {
    value: "Kis-Csorvás",
    label: "Kis-Csorvás",
  },
  {
    value: "Kis-Derenyő",
    label: "Kis-Derenyő",
  },
  {
    value: "Kis-fertő",
    label: "Kis-fertő",
  },
  {
    value: "Kis-galagonyás",
    label: "Kis-galagonyás",
  },
  {
    value: "Kis-hagymás",
    label: "Kis-hagymás",
  },
  {
    value: "Kis-homok",
    label: "Kis-homok",
  },
  {
    value: "Kis-járandó",
    label: "Kis-járandó",
  },
  {
    value: "Kis-Kaba",
    label: "Kis-Kaba",
  },
  {
    value: "Kis-Kerecse",
    label: "Kis-Kerecse",
  },
  {
    value: "Kis-Kun-lapos",
    label: "Kis-Kun-lapos",
  },
  {
    value: "Kis-laposi-szőlők",
    label: "Kis-laposi-szőlők",
  },
  {
    value: "Kis-liget",
    label: "Kis-liget",
  },
  {
    value: "Kis-Megyer",
    label: "Kis-Megyer",
  },
  {
    value: "Kis-Mérges",
    label: "Kis-Mérges",
  },
  {
    value: "Kis-Montaj",
    label: "Kis-Montaj",
  },
  {
    value: "Kis-morotva",
    label: "Kis-morotva",
  },
  {
    value: "Kis-morotvaköz",
    label: "Kis-morotvaköz",
  },
  {
    value: "Kis-Nádas-oldal",
    label: "Kis-Nádas-oldal",
  },
  {
    value: "Kis-Oros",
    label: "Kis-Oros",
  },
  {
    value: "Kis-Póhamara",
    label: "Kis-Póhamara",
  },
  {
    value: "Kis-rét",
    label: "Kis-rét",
  },
  {
    value: "Kis-rózsás",
    label: "Kis-rózsás",
  },
  {
    value: "Kis-Sallér",
    label: "Kis-Sallér",
  },
  {
    value: "Kis-Sárrét",
    label: "Kis-Sárrét",
  },
  {
    value: "Kis-Sőre-föld",
    label: "Kis-Sőre-föld",
  },
  {
    value: "Kis-Sóstó",
    label: "Kis-Sóstó",
  },
  {
    value: "Kis-sulymos",
    label: "Kis-sulymos",
  },
  {
    value: "Kis-szeg",
    label: "Kis-szeg",
  },
  {
    value: "Kis-sziget",
    label: "Kis-sziget",
  },
  {
    value: "Kis-szőlő",
    label: "Kis-szőlő",
  },
  {
    value: "Kis-telek",
    label: "Kis-telek",
  },
  {
    value: "Kis-Tompa",
    label: "Kis-Tompa",
  },
  {
    value: "Kis-Ugaj",
    label: "Kis-Ugaj",
  },
  {
    value: "Kis-Vadas-dűlő",
    label: "Kis-Vadas-dűlő",
  },
  {
    value: "Kis-Zelemér",
    label: "Kis-Zelemér",
  },
  {
    value: "Kisapáti",
    label: "Kisapáti",
  },
  {
    value: "Kisapostag",
    label: "Kisapostag",
  },
  {
    value: "Kisasszond",
    label: "Kisasszond",
  },
  {
    value: "Kisasszonyfa",
    label: "Kisasszonyfa",
  },
  {
    value: "Kisbabot",
    label: "Kisbabot",
  },
  {
    value: "Kisbágyon",
    label: "Kisbágyon",
  },
  {
    value: "Kisbajcs",
    label: "Kisbajcs",
  },
  {
    value: "Kisbajom",
    label: "Kisbajom",
  },
  {
    value: "Kisbárapáti",
    label: "Kisbárapáti",
  },
  {
    value: "Kisbárkány",
    label: "Kisbárkány",
  },
  {
    value: "Kisbér",
    label: "Kisbér",
  },
  {
    value: "Kisberény",
    label: "Kisberény",
  },
  {
    value: "Kisberzseny",
    label: "Kisberzseny",
  },
  {
    value: "Kisbeszterce",
    label: "Kisbeszterce",
  },
  {
    value: "Kisbodak",
    label: "Kisbodak",
  },
  {
    value: "Kisbucsa",
    label: "Kisbucsa",
  },
  {
    value: "Kisbudmér",
    label: "Kisbudmér",
  },
  {
    value: "Kisbűstanya",
    label: "Kisbűstanya",
  },
  {
    value: "Kiscsécs",
    label: "Kiscsécs",
  },
  {
    value: "Kiscsehi",
    label: "Kiscsehi",
  },
  {
    value: "Kiscsősz",
    label: "Kiscsősz",
  },
  {
    value: "Kisdér",
    label: "Kisdér",
  },
  {
    value: "Kisdobsza",
    label: "Kisdobsza",
  },
  {
    value: "Kisdombegyház",
    label: "Kisdombegyház",
  },
  {
    value: "Kisdorog",
    label: "Kisdorog",
  },
  {
    value: "Kisecset",
    label: "Kisecset",
  },
  {
    value: "Kisfertő",
    label: "Kisfertő",
  },
  {
    value: "Kisgörbő",
    label: "Kisgörbő",
  },
  {
    value: "Kisgyalán",
    label: "Kisgyalán",
  },
  {
    value: "Kisgyőr",
    label: "Kisgyőr",
  },
  {
    value: "Kishajmás",
    label: "Kishajmás",
  },
  {
    value: "Kisharsány",
    label: "Kisharsány",
  },
  {
    value: "Kishartyán",
    label: "Kishartyán",
  },
  {
    value: "Kisherend",
    label: "Kisherend",
  },
  {
    value: "Kishódos",
    label: "Kishódos",
  },
  {
    value: "Kishuta",
    label: "Kishuta",
  },
  {
    value: "Kisigmánd",
    label: "Kisigmánd",
  },
  {
    value: "Kisjakabfalva",
    label: "Kisjakabfalva",
  },
  {
    value: "Kiskassa",
    label: "Kiskassa",
  },
  {
    value: "Kiskinizs",
    label: "Kiskinizs",
  },
  {
    value: "Kiskondai-halastavak",
    label: "Kiskondai-halastavak",
  },
  {
    value: "Kisköre",
    label: "Kisköre",
  },
  {
    value: "Kiskőrös",
    label: "Kiskőrös",
  },
  {
    value: "Kiskorpád",
    label: "Kiskorpád",
  },
  {
    value: "Kiskunfélegyháza",
    label: "Kiskunfélegyháza",
  },
  {
    value: "Kiskunhalas",
    label: "Kiskunhalas",
  },
  {
    value: "Kiskunlacháza",
    label: "Kiskunlacháza",
  },
  {
    value: "Kiskunmajsa",
    label: "Kiskunmajsa",
  },
  {
    value: "Kiskunság",
    label: "Kiskunság",
  },
  {
    value: "Kiskutas",
    label: "Kiskutas",
  },
  {
    value: "Kisláng",
    label: "Kisláng",
  },
  {
    value: "Kisléta",
    label: "Kisléta",
  },
  {
    value: "Kislippó",
    label: "Kislippó",
  },
  {
    value: "Kislőd",
    label: "Kislőd",
  },
  {
    value: "Kismányok",
    label: "Kismányok",
  },
  {
    value: "Kismarja",
    label: "Kismarja",
  },
  {
    value: "Kismaros",
    label: "Kismaros",
  },
  {
    value: "Kisnamény",
    label: "Kisnamény",
  },
  {
    value: "Kisnána",
    label: "Kisnána",
  },
  {
    value: "Kisnémedi",
    label: "Kisnémedi",
  },
  {
    value: "Kisnyárád",
    label: "Kisnyárád",
  },
  {
    value: "Kisoroszi",
    label: "Kisoroszi",
  },
  {
    value: "Kispalád",
    label: "Kispalád",
  },
  {
    value: "Kispáli",
    label: "Kispáli",
  },
  {
    value: "Kispest",
    label: "Kispest",
  },
  {
    value: "Kispirit",
    label: "Kispirit",
  },
  {
    value: "Kispópuszta",
    label: "Kispópuszta",
  },
  {
    value: "Kisrákos",
    label: "Kisrákos",
  },
  {
    value: "Kisrécse",
    label: "Kisrécse",
  },
  {
    value: "Kisrozvágy",
    label: "Kisrozvágy",
  },
  {
    value: "Kissikátor",
    label: "Kissikátor",
  },
  {
    value: "Kissomlyó",
    label: "Kissomlyó",
  },
  {
    value: "Kisszállás",
    label: "Kisszállás",
  },
  {
    value: "Kisszékely",
    label: "Kisszékely",
  },
  {
    value: "Kisszekeres",
    label: "Kisszekeres",
  },
  {
    value: "Kisszentgyörgy",
    label: "Kisszentgyörgy",
  },
  {
    value: "Kisszentmárton",
    label: "Kisszentmárton",
  },
  {
    value: "Kissziget",
    label: "Kissziget",
  },
  {
    value: "Kisszőlős",
    label: "Kisszőlős",
  },
  {
    value: "Kistamási",
    label: "Kistamási",
  },
  {
    value: "Kistanya",
    label: "Kistanya",
  },
  {
    value: "Kistapolca",
    label: "Kistapolca",
  },
  {
    value: "Kistarcsa",
    label: "Kistarcsa",
  },
  {
    value: "Kistelek",
    label: "Kistelek",
  },
  {
    value: "Kistokaj",
    label: "Kistokaj",
  },
  {
    value: "Kistolmács",
    label: "Kistolmács",
  },
  {
    value: "Kistormás",
    label: "Kistormás",
  },
  {
    value: "Kistótfalu",
    label: "Kistótfalu",
  },
  {
    value: "Kisújszállás",
    label: "Kisújszállás",
  },
  {
    value: "Kisunyom",
    label: "Kisunyom",
  },
  {
    value: "Kisvárda",
    label: "Kisvárda",
  },
  {
    value: "Kisvarsány",
    label: "Kisvarsány",
  },
  {
    value: "Kisvásárhely",
    label: "Kisvásárhely",
  },
  {
    value: "Kisvaszar",
    label: "Kisvaszar",
  },
  {
    value: "Kisvejke",
    label: "Kisvejke",
  },
  {
    value: "Kiszombor",
    label: "Kiszombor",
  },
  {
    value: "Kiszsidány",
    label: "Kiszsidány",
  },
  {
    value: "Klárafalva",
    label: "Klárafalva",
  },
  {
    value: "Kő-haraszt-szőlő",
    label: "Kő-haraszt-szőlő",
  },
  {
    value: "Kő-kert",
    label: "Kő-kert",
  },
  {
    value: "Kőbánya",
    label: "Kőbánya",
  },
  {
    value: "Köblény",
    label: "Köblény",
  },
  {
    value: "Kocs",
    label: "Kocs",
  },
  {
    value: "Kocsér",
    label: "Kocsér",
  },
  {
    value: "Köcsk",
    label: "Köcsk",
  },
  {
    value: "Kocsola",
    label: "Kocsola",
  },
  {
    value: "Kocsord",
    label: "Kocsord",
  },
  {
    value: "Kocsordos",
    label: "Kocsordos",
  },
  {
    value: "Kohány",
    label: "Kohány",
  },
  {
    value: "Kohári-kút-dűlő",
    label: "Kohári-kút-dűlő",
  },
  {
    value: "Kóka",
    label: "Kóka",
  },
  {
    value: "Kokad",
    label: "Kokad",
  },
  {
    value: "Kökény",
    label: "Kökény",
  },
  {
    value: "Kőkút",
    label: "Kőkút",
  },
  {
    value: "Kőkút-hát-dűlő",
    label: "Kőkút-hát-dűlő",
  },
  {
    value: "Kölcse",
    label: "Kölcse",
  },
  {
    value: "Kölcsey-tag",
    label: "Kölcsey-tag",
  },
  {
    value: "Kölcseytanya",
    label: "Kölcseytanya",
  },
  {
    value: "Köles-hát",
    label: "Köles-hát",
  },
  {
    value: "Kölesd",
    label: "Kölesd",
  },
  {
    value: "Kölked",
    label: "Kölked",
  },
  {
    value: "Kolon",
    label: "Kolon",
  },
  {
    value: "Kolon-tó",
    label: "Kolon-tó",
  },
  {
    value: "Kolontár",
    label: "Kolontár",
  },
  {
    value: "Kolontár Alja",
    label: "Kolontár Alja",
  },
  {
    value: "Komádi",
    label: "Komádi",
  },
  {
    value: "Komárom",
    label: "Komárom",
  },
  {
    value: "Komisz-kert",
    label: "Komisz-kert",
  },
  {
    value: "Komjáthy-tag",
    label: "Komjáthy-tag",
  },
  {
    value: "Komjáti",
    label: "Komjáti",
  },
  {
    value: "Komló",
    label: "Komló",
  },
  {
    value: "Kömlő",
    label: "Kömlő",
  },
  {
    value: "Kömlőd",
    label: "Kömlőd",
  },
  {
    value: "Komlódtótfalu",
    label: "Komlódtótfalu",
  },
  {
    value: "Komlós",
    label: "Komlós",
  },
  {
    value: "Komlósd",
    label: "Komlósd",
  },
  {
    value: "Komlóska",
    label: "Komlóska",
  },
  {
    value: "Komoró",
    label: "Komoró",
  },
  {
    value: "Kömörő",
    label: "Kömörő",
  },
  {
    value: "Komoróci-tag",
    label: "Komoróci-tag",
  },
  {
    value: "Kömpöc",
    label: "Kömpöc",
  },
  {
    value: "Kompolt",
    label: "Kompolt",
  },
  {
    value: "Koncsorgó",
    label: "Koncsorgó",
  },
  {
    value: "Kondó",
    label: "Kondó",
  },
  {
    value: "Kondor",
    label: "Kondor",
  },
  {
    value: "Kondor-tag",
    label: "Kondor-tag",
  },
  {
    value: "Kondor-tó",
    label: "Kondor-tó",
  },
  {
    value: "Kondorfa",
    label: "Kondorfa",
  },
  {
    value: "Kondoros",
    label: "Kondoros",
  },
  {
    value: "Kongó",
    label: "Kongó",
  },
  {
    value: "Kóny",
    label: "Kóny",
  },
  {
    value: "Kónya-hegy",
    label: "Kónya-hegy",
  },
  {
    value: "Konyár",
    label: "Konyár",
  },
  {
    value: "Konyári-tag",
    label: "Konyári-tag",
  },
  {
    value: "Kopasz-halom",
    label: "Kopasz-halom",
  },
  {
    value: "Kopec",
    label: "Kopec",
  },
  {
    value: "Kópháza",
    label: "Kópháza",
  },
  {
    value: "Koplaló",
    label: "Koplaló",
  },
  {
    value: "Kopolya-dűlő",
    label: "Kopolya-dűlő",
  },
  {
    value: "Koppányszántó",
    label: "Koppányszántó",
  },
  {
    value: "Korcsó",
    label: "Korcsó",
  },
  {
    value: "Korda-oldal",
    label: "Korda-oldal",
  },
  {
    value: "Korda-sziget",
    label: "Korda-sziget",
  },
  {
    value: "Korhán",
    label: "Korhán",
  },
  {
    value: "Korhány",
    label: "Korhány",
  },
  {
    value: "Kőris",
    label: "Kőris",
  },
  {
    value: "Korlát",
    label: "Korlát",
  },
  {
    value: "Körmend",
    label: "Körmend",
  },
  {
    value: "Kormó Tó",
    label: "Kormó Tó",
  },
  {
    value: "Környe",
    label: "Környe",
  },
  {
    value: "Kornyó",
    label: "Kornyó",
  },
  {
    value: "Köröm",
    label: "Köröm",
  },
  {
    value: "Koronás",
    label: "Koronás",
  },
  {
    value: "Koroncó",
    label: "Koroncó",
  },
  {
    value: "Korongi-tag",
    label: "Korongi-tag",
  },
  {
    value: "Korongimajor",
    label: "Korongimajor",
  },
  {
    value: "Kórós",
    label: "Kórós",
  },
  {
    value: "Körös-mellék",
    label: "Körös-mellék",
  },
  {
    value: "Kőröshegy",
    label: "Kőröshegy",
  },
  {
    value: "Körösladány",
    label: "Körösladány",
  },
  {
    value: "Körösnagyharsány",
    label: "Körösnagyharsány",
  },
  {
    value: "Körösszakál",
    label: "Körösszakál",
  },
  {
    value: "Körösszegapáti",
    label: "Körösszegapáti",
  },
  {
    value: "Köröstarcsa",
    label: "Köröstarcsa",
  },
  {
    value: "Kőröstetétlen",
    label: "Kőröstetétlen",
  },
  {
    value: "Körösújfalu",
    label: "Körösújfalu",
  },
  {
    value: "Körtés",
    label: "Körtés",
  },
  {
    value: "Körtés-dűlő",
    label: "Körtés-dűlő",
  },
  {
    value: "Kósatanya",
    label: "Kósatanya",
  },
  {
    value: "Kosd",
    label: "Kosd",
  },
  {
    value: "Kóspallag",
    label: "Kóspallag",
  },
  {
    value: "Kőszárhegy",
    label: "Kőszárhegy",
  },
  {
    value: "Kőszeg",
    label: "Kőszeg",
  },
  {
    value: "Kőszegdoroszló",
    label: "Kőszegdoroszló",
  },
  {
    value: "Kőszegpaty",
    label: "Kőszegpaty",
  },
  {
    value: "Kőszegszerdahely",
    label: "Kőszegszerdahely",
  },
  {
    value: "Kótaj",
    label: "Kótaj",
  },
  {
    value: "Kötcse",
    label: "Kötcse",
  },
  {
    value: "Kötegyán",
    label: "Kötegyán",
  },
  {
    value: "Kőtelek",
    label: "Kőtelek",
  },
  {
    value: "Kotló",
    label: "Kotló",
  },
  {
    value: "Kőtörés",
    label: "Kőtörés",
  },
  {
    value: "Kőudvar",
    label: "Kőudvar",
  },
  {
    value: "Kovács-tag",
    label: "Kovács-tag",
  },
  {
    value: "Kovácsházi-kerület",
    label: "Kovácsházi-kerület",
  },
  {
    value: "Kovácshida",
    label: "Kovácshida",
  },
  {
    value: "Kovácsszénája",
    label: "Kovácsszénája",
  },
  {
    value: "Kovácsvágás",
    label: "Kovácsvágás",
  },
  {
    value: "Kővágó",
    label: "Kővágó",
  },
  {
    value: "Kővágó-dűlő",
    label: "Kővágó-dűlő",
  },
  {
    value: "Kővágóörs",
    label: "Kővágóörs",
  },
  {
    value: "Kővágószőlős",
    label: "Kővágószőlős",
  },
  {
    value: "Kövegy",
    label: "Kövegy",
  },
  {
    value: "Kövesdi-tag",
    label: "Kövesdi-tag",
  },
  {
    value: "Köveskál",
    label: "Köveskál",
  },
  {
    value: "Kozárd",
    label: "Kozárd",
  },
  {
    value: "Kozármisleny",
    label: "Kozármisleny",
  },
  {
    value: "Közép-bérc",
    label: "Közép-bérc",
  },
  {
    value: "Közép-ér",
    label: "Közép-ér",
  },
  {
    value: "Közép-hát",
    label: "Közép-hát",
  },
  {
    value: "Közép-Kovács-gyep",
    label: "Közép-Kovács-gyep",
  },
  {
    value: "Közép-mező",
    label: "Közép-mező",
  },
  {
    value: "Középszentivánpuszta",
    label: "Középszentivánpuszta",
  },
  {
    value: "Kozma",
    label: "Kozma",
  },
  {
    value: "Kozma-dűlő",
    label: "Kozma-dűlő",
  },
  {
    value: "Kozmadombja",
    label: "Kozmadombja",
  },
  {
    value: "Krasznokvajda",
    label: "Krasznokvajda",
  },
  {
    value: "Kristóf-dűlő",
    label: "Kristóf-dűlő",
  },
  {
    value: "Kristófkert",
    label: "Kristófkert",
  },
  {
    value: "Kübekháza",
    label: "Kübekháza",
  },
  {
    value: "Kukulló",
    label: "Kukulló",
  },
  {
    value: "Kulcs",
    label: "Kulcs",
  },
  {
    value: "Külfürgedi-rész",
    label: "Külfürgedi-rész",
  },
  {
    value: "Kulintanya",
    label: "Kulintanya",
  },
  {
    value: "Külső-gyep",
    label: "Külső-gyep",
  },
  {
    value: "Külső-Somogy",
    label: "Külső-Somogy",
  },
  {
    value: "Külsősárd",
    label: "Külsősárd",
  },
  {
    value: "Külsővat",
    label: "Külsővat",
  },
  {
    value: "Kun György-tó",
    label: "Kun György-tó",
  },
  {
    value: "Kun-Fehér-tó",
    label: "Kun-Fehér-tó",
  },
  {
    value: "Kun-tag",
    label: "Kun-tag",
  },
  {
    value: "Kunadacs",
    label: "Kunadacs",
  },
  {
    value: "Kunágota",
    label: "Kunágota",
  },
  {
    value: "Kunbaja",
    label: "Kunbaja",
  },
  {
    value: "Kunbaracs",
    label: "Kunbaracs",
  },
  {
    value: "Kuncsorba",
    label: "Kuncsorba",
  },
  {
    value: "Kunfehértó",
    label: "Kunfehértó",
  },
  {
    value: "Küngös",
    label: "Küngös",
  },
  {
    value: "Kunhegyes",
    label: "Kunhegyes",
  },
  {
    value: "Kunkápolnás",
    label: "Kunkápolnás",
  },
  {
    value: "Kunmadaras",
    label: "Kunmadaras",
  },
  {
    value: "Kunpeszér",
    label: "Kunpeszér",
  },
  {
    value: "Kunszállás",
    label: "Kunszállás",
  },
  {
    value: "Kunszentmárton",
    label: "Kunszentmárton",
  },
  {
    value: "Kunszentmiklós",
    label: "Kunszentmiklós",
  },
  {
    value: "Kunsziget",
    label: "Kunsziget",
  },
  {
    value: "Kup",
    label: "Kup",
  },
  {
    value: "Kupa",
    label: "Kupa",
  },
  {
    value: "Kuranó",
    label: "Kuranó",
  },
  {
    value: "Kurca-dűlő",
    label: "Kurca-dűlő",
  },
  {
    value: "Kurca-oldal",
    label: "Kurca-oldal",
  },
  {
    value: "Kurca-rét",
    label: "Kurca-rét",
  },
  {
    value: "Kurd",
    label: "Kurd",
  },
  {
    value: "Kurityán",
    label: "Kurityán",
  },
  {
    value: "Kurta",
    label: "Kurta",
  },
  {
    value: "Kurta-tó",
    label: "Kurta-tó",
  },
  {
    value: "Kuruczmajor",
    label: "Kuruczmajor",
  },
  {
    value: "Kuruttyoló",
    label: "Kuruttyoló",
  },
  {
    value: "Kustánszeg",
    label: "Kustánszeg",
  },
  {
    value: "Küszler",
    label: "Küszler",
  },
  {
    value: "Kút-völgyi-dűlő",
    label: "Kút-völgyi-dűlő",
  },
  {
    value: "Kutas",
    label: "Kutas",
  },
  {
    value: "Kutasó",
    label: "Kutasó",
  },
  {
    value: "Kútfő-oldal",
    label: "Kútfő-oldal",
  },
  {
    value: "Kútvölgyi Szekérdűlő",
    label: "Kútvölgyi Szekérdűlő",
  },
  {
    value: "Lábatlan",
    label: "Lábatlan",
  },
  {
    value: "Lábod",
    label: "Lábod",
  },
  {
    value: "Lácacséke",
    label: "Lácacséke",
  },
  {
    value: "Lacipuszta",
    label: "Lacipuszta",
  },
  {
    value: "Lad",
    label: "Lad",
  },
  {
    value: "Ladánybene",
    label: "Ladánybene",
  },
  {
    value: "Ládbesenyő",
    label: "Ládbesenyő",
  },
  {
    value: "Lajmér",
    label: "Lajmér",
  },
  {
    value: "Lajos-tó",
    label: "Lajos-tó",
  },
  {
    value: "Lajoskomárom",
    label: "Lajoskomárom",
  },
  {
    value: "Lajosmajor",
    label: "Lajosmajor",
  },
  {
    value: "Lajosmizse",
    label: "Lajosmizse",
  },
  {
    value: "Lak",
    label: "Lak",
  },
  {
    value: "Lake Garancsi",
    label: "Lake Garancsi",
  },
  {
    value: "Lake Neusiedl",
    label: "Lake Neusiedl",
  },
  {
    value: "Lake Velence",
    label: "Lake Velence",
  },
  {
    value: "Lakhegy",
    label: "Lakhegy",
  },
  {
    value: "Lakihegy",
    label: "Lakihegy",
  },
  {
    value: "Lakitelek",
    label: "Lakitelek",
  },
  {
    value: "Lakócsa",
    label: "Lakócsa",
  },
  {
    value: "Lamos",
    label: "Lamos",
  },
  {
    value: "Lánycsók",
    label: "Lánycsók",
  },
  {
    value: "Láp-oldal",
    label: "Láp-oldal",
  },
  {
    value: "Lápafő",
    label: "Lápafő",
  },
  {
    value: "Lapáncsa",
    label: "Lapáncsa",
  },
  {
    value: "Lapány",
    label: "Lapány",
  },
  {
    value: "Lapocka",
    label: "Lapocka",
  },
  {
    value: "Lapos",
    label: "Lapos",
  },
  {
    value: "Lápos",
    label: "Lápos",
  },
  {
    value: "Lapos-dűlő",
    label: "Lapos-dűlő",
  },
  {
    value: "Lapos-szeg",
    label: "Lapos-szeg",
  },
  {
    value: "Lapos-tó",
    label: "Lapos-tó",
  },
  {
    value: "Laposok",
    label: "Laposok",
  },
  {
    value: "Lapostanya",
    label: "Lapostanya",
  },
  {
    value: "Laskod",
    label: "Laskod",
  },
  {
    value: "Lászlóháza",
    label: "Lászlóháza",
  },
  {
    value: "Lászlómajor",
    label: "Lászlómajor",
  },
  {
    value: "Lászlótanya",
    label: "Lászlótanya",
  },
  {
    value: "Lasztonya",
    label: "Lasztonya",
  },
  {
    value: "Látrány",
    label: "Látrány",
  },
  {
    value: "Lázi",
    label: "Lázi",
  },
  {
    value: "Leányfalu",
    label: "Leányfalu",
  },
  {
    value: "Leányvár",
    label: "Leányvár",
  },
  {
    value: "Lébény",
    label: "Lébény",
  },
  {
    value: "Lebuj",
    label: "Lebuj",
  },
  {
    value: "Lebujtanya",
    label: "Lebujtanya",
  },
  {
    value: "Legelő-dűlő",
    label: "Legelő-dűlő",
  },
  {
    value: "Legénd",
    label: "Legénd",
  },
  {
    value: "Legyesbénye",
    label: "Legyesbénye",
  },
  {
    value: "Léh",
    label: "Léh",
  },
  {
    value: "Lejtő",
    label: "Lejtő",
  },
  {
    value: "Lejtősi-dűlő",
    label: "Lejtősi-dűlő",
  },
  {
    value: "Lénárddaróc",
    label: "Lénárddaróc",
  },
  {
    value: "Lendvadedes",
    label: "Lendvadedes",
  },
  {
    value: "Lendvajakabfa",
    label: "Lendvajakabfa",
  },
  {
    value: "Lengyel",
    label: "Lengyel",
  },
  {
    value: "Lengyeltanya",
    label: "Lengyeltanya",
  },
  {
    value: "Lengyeltóti",
    label: "Lengyeltóti",
  },
  {
    value: "Lenti",
    label: "Lenti",
  },
  {
    value: "Lepsény",
    label: "Lepsény",
  },
  {
    value: "Lesálló",
    label: "Lesálló",
  },
  {
    value: "Lesencefalu",
    label: "Lesencefalu",
  },
  {
    value: "Lesenceistvánd",
    label: "Lesenceistvánd",
  },
  {
    value: "Lesencetomaj",
    label: "Lesencetomaj",
  },
  {
    value: "Létavértes",
    label: "Létavértes",
  },
  {
    value: "Letenye",
    label: "Letenye",
  },
  {
    value: "Letkés",
    label: "Letkés",
  },
  {
    value: "Levél",
    label: "Levél",
  },
  {
    value: "Levelek",
    label: "Levelek",
  },
  {
    value: "Libickozma",
    label: "Libickozma",
  },
  {
    value: "Lickóvadamos",
    label: "Lickóvadamos",
  },
  {
    value: "Liget",
    label: "Liget",
  },
  {
    value: "Ligetfalva",
    label: "Ligetfalva",
  },
  {
    value: "Likócs",
    label: "Likócs",
  },
  {
    value: "Lillafüred",
    label: "Lillafüred",
  },
  {
    value: "Lipót",
    label: "Lipót",
  },
  {
    value: "Lipót-hát",
    label: "Lipót-hát",
  },
  {
    value: "Lippó",
    label: "Lippó",
  },
  {
    value: "Liptód",
    label: "Liptód",
  },
  {
    value: "Lispeszentadorján",
    label: "Lispeszentadorján",
  },
  {
    value: "Liszkópuszta",
    label: "Liszkópuszta",
  },
  {
    value: "Liszó",
    label: "Liszó",
  },
  {
    value: "Litér",
    label: "Litér",
  },
  {
    value: "Litka",
    label: "Litka",
  },
  {
    value: "Litke",
    label: "Litke",
  },
  {
    value: "Líviai-halastavak",
    label: "Líviai-halastavak",
  },
  {
    value: "Lőbör-szeg",
    label: "Lőbör-szeg",
  },
  {
    value: "Lócs",
    label: "Lócs",
  },
  {
    value: "Locsod",
    label: "Locsod",
  },
  {
    value: "Lógó-kert",
    label: "Lógó-kert",
  },
  {
    value: "Lőkösháza",
    label: "Lőkösháza",
  },
  {
    value: "Lókút",
    label: "Lókút",
  },
  {
    value: "Lomos",
    label: "Lomos",
  },
  {
    value: "Lónya",
    label: "Lónya",
  },
  {
    value: "Lórév",
    label: "Lórév",
  },
  {
    value: "Lőrinci",
    label: "Lőrinci",
  },
  {
    value: "Lőrincke-alja",
    label: "Lőrincke-alja",
  },
  {
    value: "Lőrincmajor",
    label: "Lőrincmajor",
  },
  {
    value: "Lothárd",
    label: "Lothárd",
  },
  {
    value: "Lovas",
    label: "Lovas",
  },
  {
    value: "Lovasberény",
    label: "Lovasberény",
  },
  {
    value: "Lovász",
    label: "Lovász",
  },
  {
    value: "Lovászhetény",
    label: "Lovászhetény",
  },
  {
    value: "Lovászi",
    label: "Lovászi",
  },
  {
    value: "Lovászpatona",
    label: "Lovászpatona",
  },
  {
    value: "Lövő",
    label: "Lövő",
  },
  {
    value: "Lövőpetri",
    label: "Lövőpetri",
  },
  {
    value: "Lózertanya",
    label: "Lózertanya",
  },
  {
    value: "Lucfalva",
    label: "Lucfalva",
  },
  {
    value: "Lucska-szeg",
    label: "Lucska-szeg",
  },
  {
    value: "Ludányhalászi",
    label: "Ludányhalászi",
  },
  {
    value: "Ludas",
    label: "Ludas",
  },
  {
    value: "Ludas Tó",
    label: "Ludas Tó",
  },
  {
    value: "Ludas-tó",
    label: "Ludas-tó",
  },
  {
    value: "Lugas",
    label: "Lugas",
  },
  {
    value: "Lukáca",
    label: "Lukáca",
  },
  {
    value: "Lukácsháza",
    label: "Lukácsháza",
  },
  {
    value: "Lulla",
    label: "Lulla",
  },
  {
    value: "Lúzsok",
    label: "Lúzsok",
  },
  {
    value: "Lyukas Szik",
    label: "Lyukas Szik",
  },
  {
    value: "Macskás",
    label: "Macskás",
  },
  {
    value: "Maczó-lapos",
    label: "Maczó-lapos",
  },
  {
    value: "Maczó-zug",
    label: "Maczó-zug",
  },
  {
    value: "Mád",
    label: "Mád",
  },
  {
    value: "Madaras",
    label: "Madaras",
  },
  {
    value: "Madarász-tó",
    label: "Madarász-tó",
  },
  {
    value: "Madocsa",
    label: "Madocsa",
  },
  {
    value: "Magas-domb",
    label: "Magas-domb",
  },
  {
    value: "Magas-határ",
    label: "Magas-határ",
  },
  {
    value: "Magas-hegy",
    label: "Magas-hegy",
  },
  {
    value: "Magasdpuszta",
    label: "Magasdpuszta",
  },
  {
    value: "Maglóca",
    label: "Maglóca",
  },
  {
    value: "Maglód",
    label: "Maglód",
  },
  {
    value: "Mágocs",
    label: "Mágocs",
  },
  {
    value: "Magosliget",
    label: "Magosliget",
  },
  {
    value: "Magy",
    label: "Magy",
  },
  {
    value: "Magyaralmás",
    label: "Magyaralmás",
  },
  {
    value: "Magyaratád",
    label: "Magyaratád",
  },
  {
    value: "Magyarbánhegyes",
    label: "Magyarbánhegyes",
  },
  {
    value: "Magyarbóly",
    label: "Magyarbóly",
  },
  {
    value: "Magyarcsanád",
    label: "Magyarcsanád",
  },
  {
    value: "Magyardombegyház",
    label: "Magyardombegyház",
  },
  {
    value: "Magyaregregy",
    label: "Magyaregregy",
  },
  {
    value: "Magyaregres",
    label: "Magyaregres",
  },
  {
    value: "Magyarföld",
    label: "Magyarföld",
  },
  {
    value: "Magyargéc",
    label: "Magyargéc",
  },
  {
    value: "Magyargencs",
    label: "Magyargencs",
  },
  {
    value: "Magyarhertelend",
    label: "Magyarhertelend",
  },
  {
    value: "Magyarhomorog",
    label: "Magyarhomorog",
  },
  {
    value: "Magyarkeresztúr",
    label: "Magyarkeresztúr",
  },
  {
    value: "Magyarkeszi",
    label: "Magyarkeszi",
  },
  {
    value: "Magyarlak",
    label: "Magyarlak",
  },
  {
    value: "Magyarlukafa",
    label: "Magyarlukafa",
  },
  {
    value: "Magyarmecske",
    label: "Magyarmecske",
  },
  {
    value: "Magyarnádalja",
    label: "Magyarnádalja",
  },
  {
    value: "Magyarnándor",
    label: "Magyarnándor",
  },
  {
    value: "Magyarpolány",
    label: "Magyarpolány",
  },
  {
    value: "Magyarsarlós",
    label: "Magyarsarlós",
  },
  {
    value: "Magyarszecsőd",
    label: "Magyarszecsőd",
  },
  {
    value: "Magyarszék",
    label: "Magyarszék",
  },
  {
    value: "Magyarszentmiklós",
    label: "Magyarszentmiklós",
  },
  {
    value: "Magyarszerdahely",
    label: "Magyarszerdahely",
  },
  {
    value: "Magyarszombatfa",
    label: "Magyarszombatfa",
  },
  {
    value: "Magyartelek",
    label: "Magyartelek",
  },
  {
    value: "Majkász",
    label: "Majkász",
  },
  {
    value: "Majosháza",
    label: "Majosháza",
  },
  {
    value: "Majs",
    label: "Majs",
  },
  {
    value: "Majtás-csere",
    label: "Majtás-csere",
  },
  {
    value: "Mák-halom",
    label: "Mák-halom",
  },
  {
    value: "Makád",
    label: "Makád",
  },
  {
    value: "Makár",
    label: "Makár",
  },
  {
    value: "Mákföld",
    label: "Mákföld",
  },
  {
    value: "Makkod",
    label: "Makkod",
  },
  {
    value: "Makkos",
    label: "Makkos",
  },
  {
    value: "Makkoshotyka",
    label: "Makkoshotyka",
  },
  {
    value: "Maklár",
    label: "Maklár",
  },
  {
    value: "Makó",
    label: "Makó",
  },
  {
    value: "Malajdok",
    label: "Malajdok",
  },
  {
    value: "Malátom-dűlő",
    label: "Malátom-dűlő",
  },
  {
    value: "Malmos",
    label: "Malmos",
  },
  {
    value: "Malmos-dűlő",
    label: "Malmos-dűlő",
  },
  {
    value: "Malom-dűlő",
    label: "Malom-dűlő",
  },
  {
    value: "Malom-köz",
    label: "Malom-köz",
  },
  {
    value: "Malom-zug",
    label: "Malom-zug",
  },
  {
    value: "Malomsok",
    label: "Malomsok",
  },
  {
    value: "Mályi",
    label: "Mályi",
  },
  {
    value: "Mályinka",
    label: "Mályinka",
  },
  {
    value: "Mánd",
    label: "Mánd",
  },
  {
    value: "Mándok",
    label: "Mándok",
  },
  {
    value: "Mánfa",
    label: "Mánfa",
  },
  {
    value: "Manó",
    label: "Manó",
  },
  {
    value: "Mány",
    label: "Mány",
  },
  {
    value: "Maráza",
    label: "Maráza",
  },
  {
    value: "Márcadópuszta",
    label: "Márcadópuszta",
  },
  {
    value: "Marcal-medence",
    label: "Marcal-medence",
  },
  {
    value: "Marcalgergelyi",
    label: "Marcalgergelyi",
  },
  {
    value: "Marcali",
    label: "Marcali",
  },
  {
    value: "Marcaltő",
    label: "Marcaltő",
  },
  {
    value: "Márfa",
    label: "Márfa",
  },
  {
    value: "Margit-sziget",
    label: "Margit-sziget",
  },
  {
    value: "Mária-halom",
    label: "Mária-halom",
  },
  {
    value: "Máriahalom",
    label: "Máriahalom",
  },
  {
    value: "Máriakálnok",
    label: "Máriakálnok",
  },
  {
    value: "Máriakéménd",
    label: "Máriakéménd",
  },
  {
    value: "Marianna-dűlő",
    label: "Marianna-dűlő",
  },
  {
    value: "Márianosztra",
    label: "Márianosztra",
  },
  {
    value: "Máriapócs",
    label: "Máriapócs",
  },
  {
    value: "Markaz",
    label: "Markaz",
  },
  {
    value: "Márkháza",
    label: "Márkháza",
  },
  {
    value: "Márkó",
    label: "Márkó",
  },
  {
    value: "Markóc",
    label: "Markóc",
  },
  {
    value: "Markotabödöge",
    label: "Markotabödöge",
  },
  {
    value: "Maróc",
    label: "Maróc",
  },
  {
    value: "Marócsa",
    label: "Marócsa",
  },
  {
    value: "Márok",
    label: "Márok",
  },
  {
    value: "Márokföld",
    label: "Márokföld",
  },
  {
    value: "Márokipuszta",
    label: "Márokipuszta",
  },
  {
    value: "Márokpapi",
    label: "Márokpapi",
  },
  {
    value: "Maros-dűlő",
    label: "Maros-dűlő",
  },
  {
    value: "Maros-Körös Köze",
    label: "Maros-Körös Köze",
  },
  {
    value: "Maroslele",
    label: "Maroslele",
  },
  {
    value: "Marót-zug",
    label: "Marót-zug",
  },
  {
    value: "Mártatanya",
    label: "Mártatanya",
  },
  {
    value: "Mártély",
    label: "Mártély",
  },
  {
    value: "Martfű",
    label: "Martfű",
  },
  {
    value: "Marton-földek",
    label: "Marton-földek",
  },
  {
    value: "Martonfa",
    label: "Martonfa",
  },
  {
    value: "Martonvásár",
    label: "Martonvásár",
  },
  {
    value: "Martonyi",
    label: "Martonyi",
  },
  {
    value: "Maszling",
    label: "Maszling",
  },
  {
    value: "Masznyik Úti-dűlő",
    label: "Masznyik Úti-dűlő",
  },
  {
    value: "Máté-hegy",
    label: "Máté-hegy",
  },
  {
    value: "Mátészalka",
    label: "Mátészalka",
  },
  {
    value: "Mátételke",
    label: "Mátételke",
  },
  {
    value: "Mátra",
    label: "Mátra",
  },
  {
    value: "Mátraderecske",
    label: "Mátraderecske",
  },
  {
    value: "Mátramindszent",
    label: "Mátramindszent",
  },
  {
    value: "Mátranovák",
    label: "Mátranovák",
  },
  {
    value: "Mátraszele",
    label: "Mátraszele",
  },
  {
    value: "Mátraszentimre",
    label: "Mátraszentimre",
  },
  {
    value: "Mátraszőlős",
    label: "Mátraszőlős",
  },
  {
    value: "Mátraterenye",
    label: "Mátraterenye",
  },
  {
    value: "Mátraverebély",
    label: "Mátraverebély",
  },
  {
    value: "Matty",
    label: "Matty",
  },
  {
    value: "Mátyás hill",
    label: "Mátyás hill",
  },
  {
    value: "Mátyásdomb",
    label: "Mátyásdomb",
  },
  {
    value: "Matyóföld",
    label: "Matyóföld",
  },
  {
    value: "Mátyus",
    label: "Mátyus",
  },
  {
    value: "Mayer-tag",
    label: "Mayer-tag",
  },
  {
    value: "Máza",
    label: "Máza",
  },
  {
    value: "Mazsúr",
    label: "Mazsúr",
  },
  {
    value: "Mecsek",
    label: "Mecsek",
  },
  {
    value: "Mecseknádasd",
    label: "Mecseknádasd",
  },
  {
    value: "Mecsekpölöske",
    label: "Mecsekpölöske",
  },
  {
    value: "Mecsér",
    label: "Mecsér",
  },
  {
    value: "Medgyesbodzás",
    label: "Medgyesbodzás",
  },
  {
    value: "Medgyesegyháza",
    label: "Medgyesegyháza",
  },
  {
    value: "Medina",
    label: "Medina",
  },
  {
    value: "Medvetanya",
    label: "Medvetanya",
  },
  {
    value: "Meggyeskovácsi",
    label: "Meggyeskovácsi",
  },
  {
    value: "Megyágó",
    label: "Megyágó",
  },
  {
    value: "Megyaszó",
    label: "Megyaszó",
  },
  {
    value: "Megyer",
    label: "Megyer",
  },
  {
    value: "Méhes",
    label: "Méhes",
  },
  {
    value: "Méhkerék",
    label: "Méhkerék",
  },
  {
    value: "Méhtelek",
    label: "Méhtelek",
  },
  {
    value: "Mekényes",
    label: "Mekényes",
  },
  {
    value: "Mély-kút",
    label: "Mély-kút",
  },
  {
    value: "Mély-sár",
    label: "Mély-sár",
  },
  {
    value: "Mélykút",
    label: "Mélykút",
  },
  {
    value: "Mencshely",
    label: "Mencshely",
  },
  {
    value: "Mende",
    label: "Mende",
  },
  {
    value: "Ménes-lapos",
    label: "Ménes-lapos",
  },
  {
    value: "Méra",
    label: "Méra",
  },
  {
    value: "Merenye",
    label: "Merenye",
  },
  {
    value: "Mérges",
    label: "Mérges",
  },
  {
    value: "Mérges-ér-hát",
    label: "Mérges-ér-hát",
  },
  {
    value: "Merikó",
    label: "Merikó",
  },
  {
    value: "Mérk",
    label: "Mérk",
  },
  {
    value: "Mernye",
    label: "Mernye",
  },
  {
    value: "Mersevát",
    label: "Mersevát",
  },
  {
    value: "Mesterháza",
    label: "Mesterháza",
  },
  {
    value: "Mesteri",
    label: "Mesteri",
  },
  {
    value: "Mesterszállás",
    label: "Mesterszállás",
  },
  {
    value: "Meszes",
    label: "Meszes",
  },
  {
    value: "Meszlen",
    label: "Meszlen",
  },
  {
    value: "Mészöly-rész",
    label: "Mészöly-rész",
  },
  {
    value: "Mesztegnyő",
    label: "Mesztegnyő",
  },
  {
    value: "Mexikó",
    label: "Mexikó",
  },
  {
    value: "Mező-dűlő",
    label: "Mező-dűlő",
  },
  {
    value: "Mezőberény",
    label: "Mezőberény",
  },
  {
    value: "Mezőcsát",
    label: "Mezőcsát",
  },
  {
    value: "Mezőcsokonya",
    label: "Mezőcsokonya",
  },
  {
    value: "Meződ",
    label: "Meződ",
  },
  {
    value: "Mezőfalva",
    label: "Mezőfalva",
  },
  {
    value: "Mezőföld",
    label: "Mezőföld",
  },
  {
    value: "Mezőgyán",
    label: "Mezőgyán",
  },
  {
    value: "Mezőhegyes",
    label: "Mezőhegyes",
  },
  {
    value: "Mezőhék",
    label: "Mezőhék",
  },
  {
    value: "Mezőkeresztes",
    label: "Mezőkeresztes",
  },
  {
    value: "Mezőkomárom",
    label: "Mezőkomárom",
  },
  {
    value: "Mezőkovácsháza",
    label: "Mezőkovácsháza",
  },
  {
    value: "Mezőkövesd",
    label: "Mezőkövesd",
  },
  {
    value: "Mezőladány",
    label: "Mezőladány",
  },
  {
    value: "Mezőlak",
    label: "Mezőlak",
  },
  {
    value: "Mezőnagymihály",
    label: "Mezőnagymihály",
  },
  {
    value: "Mezőnyárád",
    label: "Mezőnyárád",
  },
  {
    value: "Mezőörs",
    label: "Mezőörs",
  },
  {
    value: "Mezőpeterd",
    label: "Mezőpeterd",
  },
  {
    value: "Mezősas",
    label: "Mezősas",
  },
  {
    value: "Mezőszentgyörgy",
    label: "Mezőszentgyörgy",
  },
  {
    value: "Mezőszilas",
    label: "Mezőszilas",
  },
  {
    value: "Mezőtúr",
    label: "Mezőtúr",
  },
  {
    value: "Mezőzombor",
    label: "Mezőzombor",
  },
  {
    value: "Miháld",
    label: "Miháld",
  },
  {
    value: "Mihályfa",
    label: "Mihályfa",
  },
  {
    value: "Mihálygerge",
    label: "Mihálygerge",
  },
  {
    value: "Mihályháza",
    label: "Mihályháza",
  },
  {
    value: "Mihályi",
    label: "Mihályi",
  },
  {
    value: "Mihálykurta-Mérges-zug",
    label: "Mihálykurta-Mérges-zug",
  },
  {
    value: "Mike",
    label: "Mike",
  },
  {
    value: "Mikebuda",
    label: "Mikebuda",
  },
  {
    value: "Mikekarácsonyfa",
    label: "Mikekarácsonyfa",
  },
  {
    value: "Mikepércs",
    label: "Mikepércs",
  },
  {
    value: "Mikesz-tag",
    label: "Mikesz-tag",
  },
  {
    value: "Miklósi",
    label: "Miklósi",
  },
  {
    value: "Mikó-tag",
    label: "Mikó-tag",
  },
  {
    value: "Mikóháza",
    label: "Mikóháza",
  },
  {
    value: "Mikosszéplak",
    label: "Mikosszéplak",
  },
  {
    value: "Milejszeg",
    label: "Milejszeg",
  },
  {
    value: "Milota",
    label: "Milota",
  },
  {
    value: "Mindszent",
    label: "Mindszent",
  },
  {
    value: "Mindszentgodisa",
    label: "Mindszentgodisa",
  },
  {
    value: "Mindszentkálla",
    label: "Mindszentkálla",
  },
  {
    value: "Misefa",
    label: "Misefa",
  },
  {
    value: "Misina",
    label: "Misina",
  },
  {
    value: "Miske",
    label: "Miske",
  },
  {
    value: "Miskitanya",
    label: "Miskitanya",
  },
  {
    value: "Miskolc",
    label: "Miskolc",
  },
  {
    value: "Miskolctapolca",
    label: "Miskolctapolca",
  },
  {
    value: "Miszla",
    label: "Miszla",
  },
  {
    value: "Mocsa",
    label: "Mocsa",
  },
  {
    value: "Mocsár",
    label: "Mocsár",
  },
  {
    value: "Mőcsény",
    label: "Mőcsény",
  },
  {
    value: "Mocsolya",
    label: "Mocsolya",
  },
  {
    value: "Moczártanya",
    label: "Moczártanya",
  },
  {
    value: "Mogyoró-szeg",
    label: "Mogyoró-szeg",
  },
  {
    value: "Mogyoró-sziget",
    label: "Mogyoró-sziget",
  },
  {
    value: "Mogyoród",
    label: "Mogyoród",
  },
  {
    value: "Mogyorós",
    label: "Mogyorós",
  },
  {
    value: "Mogyorós-kert",
    label: "Mogyorós-kert",
  },
  {
    value: "Mogyorósbánya",
    label: "Mogyorósbánya",
  },
  {
    value: "Mogyoróska",
    label: "Mogyoróska",
  },
  {
    value: "Moha",
    label: "Moha",
  },
  {
    value: "Mohács",
    label: "Mohács",
  },
  {
    value: "Mohora",
    label: "Mohora",
  },
  {
    value: "Mohos",
    label: "Mohos",
  },
  {
    value: "Mohos-tó",
    label: "Mohos-tó",
  },
  {
    value: "Mokcsa-rét",
    label: "Mokcsa-rét",
  },
  {
    value: "Molnár-dűlő",
    label: "Molnár-dűlő",
  },
  {
    value: "Molnár-föld-dűlő",
    label: "Molnár-föld-dűlő",
  },
  {
    value: "Molnár-tag",
    label: "Molnár-tag",
  },
  {
    value: "Molnári",
    label: "Molnári",
  },
  {
    value: "Molnaszecsőd",
    label: "Molnaszecsőd",
  },
  {
    value: "Molvány",
    label: "Molvány",
  },
  {
    value: "Monaj",
    label: "Monaj",
  },
  {
    value: "Mondor-zug",
    label: "Mondor-zug",
  },
  {
    value: "Monok",
    label: "Monok",
  },
  {
    value: "Monor",
    label: "Monor",
  },
  {
    value: "Monorierdő",
    label: "Monorierdő",
  },
  {
    value: "Monoritanyák",
    label: "Monoritanyák",
  },
  {
    value: "Mónosbél",
    label: "Mónosbél",
  },
  {
    value: "Monostorapáti",
    label: "Monostorapáti",
  },
  {
    value: "Monostorpályi",
    label: "Monostorpályi",
  },
  {
    value: "Monoszló",
    label: "Monoszló",
  },
  {
    value: "Montaji-Pap-tag",
    label: "Montaji-Pap-tag",
  },
  {
    value: "Monyóka",
    label: "Monyóka",
  },
  {
    value: "Monyoród",
    label: "Monyoród",
  },
  {
    value: "Mór",
    label: "Mór",
  },
  {
    value: "Mórágy",
    label: "Mórágy",
  },
  {
    value: "Mórahalom",
    label: "Mórahalom",
  },
  {
    value: "Móri-árok",
    label: "Móri-árok",
  },
  {
    value: "Móricgát",
    label: "Móricgát",
  },
  {
    value: "Mórichida",
    label: "Mórichida",
  },
  {
    value: "Móricz",
    label: "Móricz",
  },
  {
    value: "Morotva",
    label: "Morotva",
  },
  {
    value: "Mosdós",
    label: "Mosdós",
  },
  {
    value: "Moslékos",
    label: "Moslékos",
  },
  {
    value: "Mosonmagyaróvár",
    label: "Mosonmagyaróvár",
  },
  {
    value: "Mosonszentmiklós",
    label: "Mosonszentmiklós",
  },
  {
    value: "Mosonszolnok",
    label: "Mosonszolnok",
  },
  {
    value: "Mosonudvar",
    label: "Mosonudvar",
  },
  {
    value: "Mozsgó",
    label: "Mozsgó",
  },
  {
    value: "Mű-rét",
    label: "Mű-rét",
  },
  {
    value: "Mucsfa",
    label: "Mucsfa",
  },
  {
    value: "Mucsi",
    label: "Mucsi",
  },
  {
    value: "Múcsony",
    label: "Múcsony",
  },
  {
    value: "Muhi",
    label: "Muhi",
  },
  {
    value: "Müller-szék",
    label: "Müller-szék",
  },
  {
    value: "Müller-tag",
    label: "Müller-tag",
  },
  {
    value: "Murakeresztúr",
    label: "Murakeresztúr",
  },
  {
    value: "Murarátka",
    label: "Murarátka",
  },
  {
    value: "Muraszemenye",
    label: "Muraszemenye",
  },
  {
    value: "Műrét",
    label: "Műrét",
  },
  {
    value: "Murga",
    label: "Murga",
  },
  {
    value: "Murony",
    label: "Murony",
  },
  {
    value: "Mustó",
    label: "Mustó",
  },
  {
    value: "Nábrád",
    label: "Nábrád",
  },
  {
    value: "Nadalos",
    label: "Nadalos",
  },
  {
    value: "Nadap",
    label: "Nadap",
  },
  {
    value: "Nádas Fertő",
    label: "Nádas Fertő",
  },
  {
    value: "Nádas Szék",
    label: "Nádas Szék",
  },
  {
    value: "Nádas-dűlő",
    label: "Nádas-dűlő",
  },
  {
    value: "Nádas-szeg",
    label: "Nádas-szeg",
  },
  {
    value: "Nádas-tó",
    label: "Nádas-tó",
  },
  {
    value: "Nádasd",
    label: "Nádasd",
  },
  {
    value: "Nádasdladány",
    label: "Nádasdladány",
  },
  {
    value: "Nádiga",
    label: "Nádiga",
  },
  {
    value: "Nadka",
    label: "Nadka",
  },
  {
    value: "Nadrágos-kert",
    label: "Nadrágos-kert",
  },
  {
    value: "Nádudvar",
    label: "Nádudvar",
  },
  {
    value: "Nágocs",
    label: "Nágocs",
  },
  {
    value: "Nagy Szék Tó",
    label: "Nagy Szék Tó",
  },
  {
    value: "Nagy Szik-tó",
    label: "Nagy Szik-tó",
  },
  {
    value: "Nagy-állás",
    label: "Nagy-állás",
  },
  {
    value: "Nagy-állás-dűlő",
    label: "Nagy-állás-dűlő",
  },
  {
    value: "Nagy-almás",
    label: "Nagy-almás",
  },
  {
    value: "Nagy-Bagota",
    label: "Nagy-Bagota",
  },
  {
    value: "Nagy-Barátin",
    label: "Nagy-Barátin",
  },
  {
    value: "Nagy-berek",
    label: "Nagy-berek",
  },
  {
    value: "Nagy-Bócs",
    label: "Nagy-Bócs",
  },
  {
    value: "Nagy-Bucsa",
    label: "Nagy-Bucsa",
  },
  {
    value: "Nagy-Cserepes-kert",
    label: "Nagy-Cserepes-kert",
  },
  {
    value: "Nagy-Csókás-hát",
    label: "Nagy-Csókás-hát",
  },
  {
    value: "Nagy-Derenyő",
    label: "Nagy-Derenyő",
  },
  {
    value: "Nagy-Eged",
    label: "Nagy-Eged",
  },
  {
    value: "Nagy-fa",
    label: "Nagy-fa",
  },
  {
    value: "Nagy-Fehér-tó",
    label: "Nagy-Fehér-tó",
  },
  {
    value: "Nagy-fenék",
    label: "Nagy-fenék",
  },
  {
    value: "Nagy-fertő",
    label: "Nagy-fertő",
  },
  {
    value: "Nagy-fertő-dűlő",
    label: "Nagy-fertő-dűlő",
  },
  {
    value: "Nagy-galagonyás",
    label: "Nagy-galagonyás",
  },
  {
    value: "Nagy-gát",
    label: "Nagy-gát",
  },
  {
    value: "Nagy-göbölyjárás",
    label: "Nagy-göbölyjárás",
  },
  {
    value: "Nagy-gyócs",
    label: "Nagy-gyócs",
  },
  {
    value: "Nagy-hagymás",
    label: "Nagy-hagymás",
  },
  {
    value: "Nagy-hát",
    label: "Nagy-hát",
  },
  {
    value: "Nagy-hegy-Hangács",
    label: "Nagy-hegy-Hangács",
  },
  {
    value: "Nagy-Hídköz",
    label: "Nagy-Hídköz",
  },
  {
    value: "Nagy-homok",
    label: "Nagy-homok",
  },
  {
    value: "Nagy-járandó",
    label: "Nagy-járandó",
  },
  {
    value: "Nagy-kapros",
    label: "Nagy-kapros",
  },
  {
    value: "Nagy-Kéményes-dűlő",
    label: "Nagy-Kéményes-dűlő",
  },
  {
    value: "Nagy-kert",
    label: "Nagy-kert",
  },
  {
    value: "Nagy-Kettős",
    label: "Nagy-Kettős",
  },
  {
    value: "Nagy-Kőrös-hegy",
    label: "Nagy-Kőrös-hegy",
  },
  {
    value: "Nagy-körtvélyes",
    label: "Nagy-körtvélyes",
  },
  {
    value: "Nagy-lapos",
    label: "Nagy-lapos",
  },
  {
    value: "Nagy-legelő",
    label: "Nagy-legelő",
  },
  {
    value: "Nagy-meggyes",
    label: "Nagy-meggyes",
  },
  {
    value: "Nagy-mező",
    label: "Nagy-mező",
  },
  {
    value: "Nagy-mező-dűlő",
    label: "Nagy-mező-dűlő",
  },
  {
    value: "Nagy-Micske",
    label: "Nagy-Micske",
  },
  {
    value: "Nagy-Milic",
    label: "Nagy-Milic",
  },
  {
    value: "Nagy-Montaj",
    label: "Nagy-Montaj",
  },
  {
    value: "Nagy-morotva",
    label: "Nagy-morotva",
  },
  {
    value: "Nagy-Nádas-oldal",
    label: "Nagy-Nádas-oldal",
  },
  {
    value: "Nagy-Nádas-tó",
    label: "Nagy-Nádas-tó",
  },
  {
    value: "Nagy-Nyerges",
    label: "Nagy-Nyerges",
  },
  {
    value: "Nagy-nyomás",
    label: "Nagy-nyomás",
  },
  {
    value: "Nagy-parlag",
    label: "Nagy-parlag",
  },
  {
    value: "Nagy-Podár",
    label: "Nagy-Podár",
  },
  {
    value: "Nagy-rét",
    label: "Nagy-rét",
  },
  {
    value: "Nagy-rózsás",
    label: "Nagy-rózsás",
  },
  {
    value: "Nagy-sárrét",
    label: "Nagy-sárrét",
  },
  {
    value: "Nagy-sóstó",
    label: "Nagy-sóstó",
  },
  {
    value: "Nagy-sulymos",
    label: "Nagy-sulymos",
  },
  {
    value: "Nagy-Szegegyháza",
    label: "Nagy-Szegegyháza",
  },
  {
    value: "Nagy-szék",
    label: "Nagy-szék",
  },
  {
    value: "Nagy-szék-dűlő",
    label: "Nagy-szék-dűlő",
  },
  {
    value: "Nagy-szék-lapos",
    label: "Nagy-szék-lapos",
  },
  {
    value: "Nagy-sziget",
    label: "Nagy-sziget",
  },
  {
    value: "Nagy-sziki-tó",
    label: "Nagy-sziki-tó",
  },
  {
    value: "Nagy-szőlő",
    label: "Nagy-szőlő",
  },
  {
    value: "Nagy-tó",
    label: "Nagy-tó",
  },
  {
    value: "Nagy-Tullus",
    label: "Nagy-Tullus",
  },
  {
    value: "Nagy-Vadas-tó",
    label: "Nagy-Vadas-tó",
  },
  {
    value: "Nagy-Vajas",
    label: "Nagy-Vajas",
  },
  {
    value: "Nagy-völgy-dűlő",
    label: "Nagy-völgy-dűlő",
  },
  {
    value: "Nagyacsád",
    label: "Nagyacsád",
  },
  {
    value: "Nagyalásony",
    label: "Nagyalásony",
  },
  {
    value: "Nagyar",
    label: "Nagyar",
  },
  {
    value: "Nagyatád",
    label: "Nagyatád",
  },
  {
    value: "Nagybajcs",
    label: "Nagybajcs",
  },
  {
    value: "Nagybajom",
    label: "Nagybajom",
  },
  {
    value: "Nagybakónak",
    label: "Nagybakónak",
  },
  {
    value: "Nagybánhegyes",
    label: "Nagybánhegyes",
  },
  {
    value: "Nagybaracska",
    label: "Nagybaracska",
  },
  {
    value: "Nagybarca",
    label: "Nagybarca",
  },
  {
    value: "Nagybárkány",
    label: "Nagybárkány",
  },
  {
    value: "Nagyberény",
    label: "Nagyberény",
  },
  {
    value: "Nagyberki",
    label: "Nagyberki",
  },
  {
    value: "Nagybörzsöny",
    label: "Nagybörzsöny",
  },
  {
    value: "Nagybudmér",
    label: "Nagybudmér",
  },
  {
    value: "Nagycenk",
    label: "Nagycenk",
  },
  {
    value: "Nagycsány",
    label: "Nagycsány",
  },
  {
    value: "Nagycsécs",
    label: "Nagycsécs",
  },
  {
    value: "Nagycsepely",
    label: "Nagycsepely",
  },
  {
    value: "Nagycserkesz",
    label: "Nagycserkesz",
  },
  {
    value: "Nagydém",
    label: "Nagydém",
  },
  {
    value: "Nagydobos",
    label: "Nagydobos",
  },
  {
    value: "Nagydobsza",
    label: "Nagydobsza",
  },
  {
    value: "Nagydorog",
    label: "Nagydorog",
  },
  {
    value: "Nagyecsed",
    label: "Nagyecsed",
  },
  {
    value: "Nagyér",
    label: "Nagyér",
  },
  {
    value: "Nagyesztergár",
    label: "Nagyesztergár",
  },
  {
    value: "Nagyfertő",
    label: "Nagyfertő",
  },
  {
    value: "Nagyfok-tó",
    label: "Nagyfok-tó",
  },
  {
    value: "Nagyfüged",
    label: "Nagyfüged",
  },
  {
    value: "Nagygeresd",
    label: "Nagygeresd",
  },
  {
    value: "Nagygörbő",
    label: "Nagygörbő",
  },
  {
    value: "Nagygyimót",
    label: "Nagygyimót",
  },
  {
    value: "Nagyhajmás",
    label: "Nagyhajmás",
  },
  {
    value: "Nagyhalász",
    label: "Nagyhalász",
  },
  {
    value: "Nagyharsány",
    label: "Nagyharsány",
  },
  {
    value: "Nagyhegyes",
    label: "Nagyhegyes",
  },
  {
    value: "Nagyhódos",
    label: "Nagyhódos",
  },
  {
    value: "Nagyhuta",
    label: "Nagyhuta",
  },
  {
    value: "Nagyigmánd",
    label: "Nagyigmánd",
  },
  {
    value: "Nagyigmándi-tó",
    label: "Nagyigmándi-tó",
  },
  {
    value: "Nagyiván",
    label: "Nagyiván",
  },
  {
    value: "Nagykálló",
    label: "Nagykálló",
  },
  {
    value: "Nagykamarás",
    label: "Nagykamarás",
  },
  {
    value: "Nagykanizsa",
    label: "Nagykanizsa",
  },
  {
    value: "Nagykapornak",
    label: "Nagykapornak",
  },
  {
    value: "Nagykarácsony",
    label: "Nagykarácsony",
  },
  {
    value: "Nagykáta",
    label: "Nagykáta",
  },
  {
    value: "Nagykecskeritó",
    label: "Nagykecskeritó",
  },
  {
    value: "Nagykereki",
    label: "Nagykereki",
  },
  {
    value: "Nagykeresztúr",
    label: "Nagykeresztúr",
  },
  {
    value: "Nagykinizs",
    label: "Nagykinizs",
  },
  {
    value: "Nagykölked",
    label: "Nagykölked",
  },
  {
    value: "Nagykónyi",
    label: "Nagykónyi",
  },
  {
    value: "Nagykőrös",
    label: "Nagykőrös",
  },
  {
    value: "Nagykorpád",
    label: "Nagykorpád",
  },
  {
    value: "Nagykörű",
    label: "Nagykörű",
  },
  {
    value: "Nagykovácsi",
    label: "Nagykovácsi",
  },
  {
    value: "Nagykozár",
    label: "Nagykozár",
  },
  {
    value: "Nagykunság",
    label: "Nagykunság",
  },
  {
    value: "Nagykutas",
    label: "Nagykutas",
  },
  {
    value: "Nagylak",
    label: "Nagylak",
  },
  {
    value: "Nagylapos",
    label: "Nagylapos",
  },
  {
    value: "Nagylapospuszta",
    label: "Nagylapospuszta",
  },
  {
    value: "Nagylengyel",
    label: "Nagylengyel",
  },
  {
    value: "Nagylóc",
    label: "Nagylóc",
  },
  {
    value: "Nagylók",
    label: "Nagylók",
  },
  {
    value: "Nagylózs",
    label: "Nagylózs",
  },
  {
    value: "Nagymágocs",
    label: "Nagymágocs",
  },
  {
    value: "Nagymajor",
    label: "Nagymajor",
  },
  {
    value: "Nagymányok",
    label: "Nagymányok",
  },
  {
    value: "Nagymaros",
    label: "Nagymaros",
  },
  {
    value: "Nagymizdó",
    label: "Nagymizdó",
  },
  {
    value: "Nagynyárád",
    label: "Nagynyárád",
  },
  {
    value: "Nagyoroszi",
    label: "Nagyoroszi",
  },
  {
    value: "Nagypáli",
    label: "Nagypáli",
  },
  {
    value: "Nagypall",
    label: "Nagypall",
  },
  {
    value: "Nagypeterd",
    label: "Nagypeterd",
  },
  {
    value: "Nagypirit",
    label: "Nagypirit",
  },
  {
    value: "Nagyrábé",
    label: "Nagyrábé",
  },
  {
    value: "Nagyrada",
    label: "Nagyrada",
  },
  {
    value: "Nagyrákos",
    label: "Nagyrákos",
  },
  {
    value: "Nagyrakottyás",
    label: "Nagyrakottyás",
  },
  {
    value: "Nagyrécse",
    label: "Nagyrécse",
  },
  {
    value: "Nagyrév",
    label: "Nagyrév",
  },
  {
    value: "Nagyrozvágy",
    label: "Nagyrozvágy",
  },
  {
    value: "Nagysáp",
    label: "Nagysáp",
  },
  {
    value: "Nagysimonyi",
    label: "Nagysimonyi",
  },
  {
    value: "Nagyszakácsi",
    label: "Nagyszakácsi",
  },
  {
    value: "Nagyszeg",
    label: "Nagyszeg",
  },
  {
    value: "Nagyszékely",
    label: "Nagyszékely",
  },
  {
    value: "Nagyszekeres",
    label: "Nagyszekeres",
  },
  {
    value: "Nagyszénás",
    label: "Nagyszénás",
  },
  {
    value: "Nagyszentjános",
    label: "Nagyszentjános",
  },
  {
    value: "Nagyszokoly",
    label: "Nagyszokoly",
  },
  {
    value: "Nagytanya",
    label: "Nagytanya",
  },
  {
    value: "Nagytarcsa",
    label: "Nagytarcsa",
  },
  {
    value: "Nagytevel",
    label: "Nagytevel",
  },
  {
    value: "Nagytilaj",
    label: "Nagytilaj",
  },
  {
    value: "Nagytó",
    label: "Nagytó",
  },
  {
    value: "Nagytőke",
    label: "Nagytőke",
  },
  {
    value: "Nagytótfalu",
    label: "Nagytótfalu",
  },
  {
    value: "Nagyvarsány",
    label: "Nagyvarsány",
  },
  {
    value: "Nagyváty",
    label: "Nagyváty",
  },
  {
    value: "Nagyvázsony",
    label: "Nagyvázsony",
  },
  {
    value: "Nagyvejke",
    label: "Nagyvejke",
  },
  {
    value: "Nagyveleg",
    label: "Nagyveleg",
  },
  {
    value: "Nagyvenyim",
    label: "Nagyvenyim",
  },
  {
    value: "Nagyvisnyó",
    label: "Nagyvisnyó",
  },
  {
    value: "Nak",
    label: "Nak",
  },
  {
    value: "Namény Alja",
    label: "Namény Alja",
  },
  {
    value: "Napkor",
    label: "Napkor",
  },
  {
    value: "Naplás-dűlő",
    label: "Naplás-dűlő",
  },
  {
    value: "Napos-dűlő",
    label: "Napos-dűlő",
  },
  {
    value: "Nárai",
    label: "Nárai",
  },
  {
    value: "Narda",
    label: "Narda",
  },
  {
    value: "Naszály",
    label: "Naszály",
  },
  {
    value: "Négyes",
    label: "Négyes",
  },
  {
    value: "Négyes-telep",
    label: "Négyes-telep",
  },
  {
    value: "Negyvenhold",
    label: "Negyvenhold",
  },
  {
    value: "Nekézseny",
    label: "Nekézseny",
  },
  {
    value: "Nemesapáti",
    label: "Nemesapáti",
  },
  {
    value: "Nemesbikk",
    label: "Nemesbikk",
  },
  {
    value: "Nemesbőd",
    label: "Nemesbőd",
  },
  {
    value: "Nemesborzova",
    label: "Nemesborzova",
  },
  {
    value: "Nemesbük",
    label: "Nemesbük",
  },
  {
    value: "Nemescsó",
    label: "Nemescsó",
  },
  {
    value: "Nemesdéd",
    label: "Nemesdéd",
  },
  {
    value: "Nemesgörzsöny",
    label: "Nemesgörzsöny",
  },
  {
    value: "Nemesgulács",
    label: "Nemesgulács",
  },
  {
    value: "Nemeshany",
    label: "Nemeshany",
  },
  {
    value: "Nemeshetés",
    label: "Nemeshetés",
  },
  {
    value: "Nemesi-tagbirtok",
    label: "Nemesi-tagbirtok",
  },
  {
    value: "Nemeske",
    label: "Nemeske",
  },
  {
    value: "Nemeskér",
    label: "Nemeskér",
  },
  {
    value: "Nemeskeresztúr",
    label: "Nemeskeresztúr",
  },
  {
    value: "Nemeskisfalud",
    label: "Nemeskisfalud",
  },
  {
    value: "Nemeskocs",
    label: "Nemeskocs",
  },
  {
    value: "Nemeskolta",
    label: "Nemeskolta",
  },
  {
    value: "Nemesládony",
    label: "Nemesládony",
  },
  {
    value: "Nemesmedves",
    label: "Nemesmedves",
  },
  {
    value: "Nemesnádudvar",
    label: "Nemesnádudvar",
  },
  {
    value: "Nemesnép",
    label: "Nemesnép",
  },
  {
    value: "Nemespátró",
    label: "Nemespátró",
  },
  {
    value: "Nemesrádó",
    label: "Nemesrádó",
  },
  {
    value: "Nemesrempehollós",
    label: "Nemesrempehollós",
  },
  {
    value: "Nemessándorháza",
    label: "Nemessándorháza",
  },
  {
    value: "Nemesszalók",
    label: "Nemesszalók",
  },
  {
    value: "Nemesszentandrás",
    label: "Nemesszentandrás",
  },
  {
    value: "Nemesvámos",
    label: "Nemesvámos",
  },
  {
    value: "Nemesvid",
    label: "Nemesvid",
  },
  {
    value: "Nemesvita",
    label: "Nemesvita",
  },
  {
    value: "Német-föld",
    label: "Német-föld",
  },
  {
    value: "Német-sziget",
    label: "Német-sziget",
  },
  {
    value: "Német-telek",
    label: "Német-telek",
  },
  {
    value: "Németbánya",
    label: "Németbánya",
  },
  {
    value: "Németfalu",
    label: "Németfalu",
  },
  {
    value: "Németkér",
    label: "Németkér",
  },
  {
    value: "Németszállás",
    label: "Németszállás",
  },
  {
    value: "Nemti",
    label: "Nemti",
  },
  {
    value: "Neszmély",
    label: "Neszmély",
  },
  {
    value: "Nézsa",
    label: "Nézsa",
  },
  {
    value: "Nick",
    label: "Nick",
  },
  {
    value: "Niczki Dűlő",
    label: "Niczki Dűlő",
  },
  {
    value: "Nikla",
    label: "Nikla",
  },
  {
    value: "Nógrád",
    label: "Nógrád",
  },
  {
    value: "Nógrádi-medence",
    label: "Nógrádi-medence",
  },
  {
    value: "Nógrádkövesd",
    label: "Nógrádkövesd",
  },
  {
    value: "Nógrádmarcal",
    label: "Nógrádmarcal",
  },
  {
    value: "Nógrádmegyer",
    label: "Nógrádmegyer",
  },
  {
    value: "Nógrádsáp",
    label: "Nógrádsáp",
  },
  {
    value: "Nógrádsipek",
    label: "Nógrádsipek",
  },
  {
    value: "Nógrádszakál",
    label: "Nógrádszakál",
  },
  {
    value: "Nóráp",
    label: "Nóráp",
  },
  {
    value: "Noszlop",
    label: "Noszlop",
  },
  {
    value: "Noszvaj",
    label: "Noszvaj",
  },
  {
    value: "Nőtincs",
    label: "Nőtincs",
  },
  {
    value: "Nova",
    label: "Nova",
  },
  {
    value: "Novaj",
    label: "Novaj",
  },
  {
    value: "Novajidrány",
    label: "Novajidrány",
  },
  {
    value: "Nyalakodó",
    label: "Nyalakodó",
  },
  {
    value: "Nyalka",
    label: "Nyalka",
  },
  {
    value: "Nyárád",
    label: "Nyárád",
  },
  {
    value: "Nyáras",
    label: "Nyáras",
  },
  {
    value: "Nyárasd",
    label: "Nyárasd",
  },
  {
    value: "Nyáregyháza",
    label: "Nyáregyháza",
  },
  {
    value: "Nyárfás",
    label: "Nyárfás",
  },
  {
    value: "Nyárfás-lapos",
    label: "Nyárfás-lapos",
  },
  {
    value: "Nyárjas",
    label: "Nyárjas",
  },
  {
    value: "Nyárlőrinc",
    label: "Nyárlőrinc",
  },
  {
    value: "Nyársapát",
    label: "Nyársapát",
  },
  {
    value: "Nyékládháza",
    label: "Nyékládháza",
  },
  {
    value: "Nyergesújfalu",
    label: "Nyergesújfalu",
  },
  {
    value: "Nyésta",
    label: "Nyésta",
  },
  {
    value: "Nyilak-dűlő",
    label: "Nyilak-dűlő",
  },
  {
    value: "Nyim",
    label: "Nyim",
  },
  {
    value: "Nyírábrány",
    label: "Nyírábrány",
  },
  {
    value: "Nyíracsád",
    label: "Nyíracsád",
  },
  {
    value: "Nyirád",
    label: "Nyirád",
  },
  {
    value: "Nyíradony",
    label: "Nyíradony",
  },
  {
    value: "Nyírbátor",
    label: "Nyírbátor",
  },
  {
    value: "Nyírbéltek",
    label: "Nyírbéltek",
  },
  {
    value: "Nyírbogát",
    label: "Nyírbogát",
  },
  {
    value: "Nyírbogdány",
    label: "Nyírbogdány",
  },
  {
    value: "Nyírcsaholy",
    label: "Nyírcsaholy",
  },
  {
    value: "Nyírcsászári",
    label: "Nyírcsászári",
  },
  {
    value: "Nyírderzs",
    label: "Nyírderzs",
  },
  {
    value: "Nyíregyháza",
    label: "Nyíregyháza",
  },
  {
    value: "Nyíres",
    label: "Nyíres",
  },
  {
    value: "Nyíresipuszta",
    label: "Nyíresipuszta",
  },
  {
    value: "Nyírgelse",
    label: "Nyírgelse",
  },
  {
    value: "Nyírgyulaj",
    label: "Nyírgyulaj",
  },
  {
    value: "Nyíri",
    label: "Nyíri",
  },
  {
    value: "Nyíribrony",
    label: "Nyíribrony",
  },
  {
    value: "Nyírjákó",
    label: "Nyírjákó",
  },
  {
    value: "Nyírkarász",
    label: "Nyírkarász",
  },
  {
    value: "Nyírkáta",
    label: "Nyírkáta",
  },
  {
    value: "Nyírkércs",
    label: "Nyírkércs",
  },
  {
    value: "Nyírlövő",
    label: "Nyírlövő",
  },
  {
    value: "Nyírlugos",
    label: "Nyírlugos",
  },
  {
    value: "Nyírmada",
    label: "Nyírmada",
  },
  {
    value: "Nyírmártonfalva",
    label: "Nyírmártonfalva",
  },
  {
    value: "Nyírmeggyes",
    label: "Nyírmeggyes",
  },
  {
    value: "Nyírmihálydi",
    label: "Nyírmihálydi",
  },
  {
    value: "Nyírő",
    label: "Nyírő",
  },
  {
    value: "Nyírparasznya",
    label: "Nyírparasznya",
  },
  {
    value: "Nyírpazony",
    label: "Nyírpazony",
  },
  {
    value: "Nyírpilis",
    label: "Nyírpilis",
  },
  {
    value: "Nyírség",
    label: "Nyírség",
  },
  {
    value: "Nyírtass",
    label: "Nyírtass",
  },
  {
    value: "Nyírtelek",
    label: "Nyírtelek",
  },
  {
    value: "Nyírtét",
    label: "Nyírtét",
  },
  {
    value: "Nyírtura",
    label: "Nyírtura",
  },
  {
    value: "Nyírvasvári",
    label: "Nyírvasvári",
  },
  {
    value: "Nyistek-dűlő",
    label: "Nyistek-dűlő",
  },
  {
    value: "Nyőgér",
    label: "Nyőgér",
  },
  {
    value: "Nyomár",
    label: "Nyomár",
  },
  {
    value: "Nyugotszenterzsébet",
    label: "Nyugotszenterzsébet",
  },
  {
    value: "Nyúl",
    label: "Nyúl",
  },
  {
    value: "Nyúl-zug",
    label: "Nyúl-zug",
  },
  {
    value: "Nyúlvár",
    label: "Nyúlvár",
  },
  {
    value: "Ó-Kenéz",
    label: "Ó-Kenéz",
  },
  {
    value: "Ó-szőlők",
    label: "Ó-szőlők",
  },
  {
    value: "Ó-szőlőkert",
    label: "Ó-szőlőkert",
  },
  {
    value: "Óbánya",
    label: "Óbánya",
  },
  {
    value: "Óbarok",
    label: "Óbarok",
  },
  {
    value: "Óbuda",
    label: "Óbuda",
  },
  {
    value: "Óbudai-sziget",
    label: "Óbudai-sziget",
  },
  {
    value: "Óbudavár",
    label: "Óbudavár",
  },
  {
    value: "Öcs",
    label: "Öcs",
  },
  {
    value: "Ócsa",
    label: "Ócsa",
  },
  {
    value: "Ócsárd",
    label: "Ócsárd",
  },
  {
    value: "Őcsény",
    label: "Őcsény",
  },
  {
    value: "Öcsöd",
    label: "Öcsöd",
  },
  {
    value: "Ófalu",
    label: "Ófalu",
  },
  {
    value: "Ófehértó",
    label: "Ófehértó",
  },
  {
    value: "Óföldeák",
    label: "Óföldeák",
  },
  {
    value: "Óhíd",
    label: "Óhíd",
  },
  {
    value: "Okány",
    label: "Okány",
  },
  {
    value: "Okorág",
    label: "Okorág",
  },
  {
    value: "Ököri-tó",
    label: "Ököri-tó",
  },
  {
    value: "Ököritófülpös",
    label: "Ököritófülpös",
  },
  {
    value: "Ökörjárás",
    label: "Ökörjárás",
  },
  {
    value: "Okorvölgy",
    label: "Okorvölgy",
  },
  {
    value: "Olasz",
    label: "Olasz",
  },
  {
    value: "Olaszfa",
    label: "Olaszfa",
  },
  {
    value: "Olaszfalu",
    label: "Olaszfalu",
  },
  {
    value: "Olaszliszka",
    label: "Olaszliszka",
  },
  {
    value: "Ölbő",
    label: "Ölbő",
  },
  {
    value: "Olcsva",
    label: "Olcsva",
  },
  {
    value: "Olcsvaapáti",
    label: "Olcsvaapáti",
  },
  {
    value: "Old",
    label: "Old",
  },
  {
    value: "Ólmod",
    label: "Ólmod",
  },
  {
    value: "Oltárc",
    label: "Oltárc",
  },
  {
    value: "Ölyvös",
    label: "Ölyvös",
  },
  {
    value: "Ömböly",
    label: "Ömböly",
  },
  {
    value: "Omsós",
    label: "Omsós",
  },
  {
    value: "Onga",
    label: "Onga",
  },
  {
    value: "Ónod",
    label: "Ónod",
  },
  {
    value: "Ópályi",
    label: "Ópályi",
  },
  {
    value: "Ópusztaszer",
    label: "Ópusztaszer",
  },
  {
    value: "Őr",
    label: "Őr",
  },
  {
    value: "Őr-halom-zug",
    label: "Őr-halom-zug",
  },
  {
    value: "Orbányosfa",
    label: "Orbányosfa",
  },
  {
    value: "Őrbottyán",
    label: "Őrbottyán",
  },
  {
    value: "Orci",
    label: "Orci",
  },
  {
    value: "Ordacsehi",
    label: "Ordacsehi",
  },
  {
    value: "Ordas",
    label: "Ordas",
  },
  {
    value: "Ordító",
    label: "Ordító",
  },
  {
    value: "Ördög-hát",
    label: "Ördög-hát",
  },
  {
    value: "Ördögoszlás",
    label: "Ördögoszlás",
  },
  {
    value: "Öreg-Borotai-szőlők",
    label: "Öreg-Borotai-szőlők",
  },
  {
    value: "Öreg-Cselőte",
    label: "Öreg-Cselőte",
  },
  {
    value: "Öreg-hangyás",
    label: "Öreg-hangyás",
  },
  {
    value: "Öreg-szőlők",
    label: "Öreg-szőlők",
  },
  {
    value: "Öregcsertő",
    label: "Öregcsertő",
  },
  {
    value: "Öreglak",
    label: "Öreglak",
  },
  {
    value: "Orfalu",
    label: "Orfalu",
  },
  {
    value: "Orfű",
    label: "Orfű",
  },
  {
    value: "Orgovány",
    label: "Orgovány",
  },
  {
    value: "Orgoványi-rét",
    label: "Orgoványi-rét",
  },
  {
    value: "Orgyális",
    label: "Orgyális",
  },
  {
    value: "Őrhalom",
    label: "Őrhalom",
  },
  {
    value: "Őrimagyarósd",
    label: "Őrimagyarósd",
  },
  {
    value: "Őriszentpéter",
    label: "Őriszentpéter",
  },
  {
    value: "Őrjeg",
    label: "Őrjeg",
  },
  {
    value: "Örkény",
    label: "Örkény",
  },
  {
    value: "Ormándlak",
    label: "Ormándlak",
  },
  {
    value: "Ormánság",
    label: "Ormánság",
  },
  {
    value: "Örmény-zug",
    label: "Örmény-zug",
  },
  {
    value: "Örménykút",
    label: "Örménykút",
  },
  {
    value: "Ormosbánya",
    label: "Ormosbánya",
  },
  {
    value: "Örök-földek",
    label: "Örök-földek",
  },
  {
    value: "Orosháza",
    label: "Orosháza",
  },
  {
    value: "Oroszi",
    label: "Oroszi",
  },
  {
    value: "Oroszlány",
    label: "Oroszlány",
  },
  {
    value: "Oroszló",
    label: "Oroszló",
  },
  {
    value: "Orosztony",
    label: "Orosztony",
  },
  {
    value: "Orozd-dűlő",
    label: "Orozd-dűlő",
  },
  {
    value: "Orozd-tó",
    label: "Orozd-tó",
  },
  {
    value: "Őrség",
    label: "Őrség",
  },
  {
    value: "Őrszem",
    label: "Őrszem",
  },
  {
    value: "Ortaháza",
    label: "Ortaháza",
  },
  {
    value: "Őrtilos",
    label: "Őrtilos",
  },
  {
    value: "Örvényes",
    label: "Örvényes",
  },
  {
    value: "Ősagárd",
    label: "Ősagárd",
  },
  {
    value: "Ősi",
    label: "Ősi",
  },
  {
    value: "Öskü",
    label: "Öskü",
  },
  {
    value: "Osli",
    label: "Osli",
  },
  {
    value: "Ostffyasszonyfa",
    label: "Ostffyasszonyfa",
  },
  {
    value: "Ostoros",
    label: "Ostoros",
  },
  {
    value: "Ősz-erdő",
    label: "Ősz-erdő",
  },
  {
    value: "Ősze-szék",
    label: "Ősze-szék",
  },
  {
    value: "Oszkó",
    label: "Oszkó",
  },
  {
    value: "Oszlár",
    label: "Oszlár",
  },
  {
    value: "Osztopán",
    label: "Osztopán",
  },
  {
    value: "Osztott-rét",
    label: "Osztott-rét",
  },
  {
    value: "Ótanya",
    label: "Ótanya",
  },
  {
    value: "Ótokod",
    label: "Ótokod",
  },
  {
    value: "Öttevény",
    label: "Öttevény",
  },
  {
    value: "Öttömös",
    label: "Öttömös",
  },
  {
    value: "Ötvöskónyi",
    label: "Ötvöskónyi",
  },
  {
    value: "Óvarsány",
    label: "Óvarsány",
  },
  {
    value: "Ózd",
    label: "Ózd",
  },
  {
    value: "Ózdfalu",
    label: "Ózdfalu",
  },
  {
    value: "Ozmánbük",
    label: "Ozmánbük",
  },
  {
    value: "Ozora",
    label: "Ozora",
  },
  {
    value: "Őzpár",
    label: "Őzpár",
  },
  {
    value: "Pácin",
    label: "Pácin",
  },
  {
    value: "Pacsa",
    label: "Pacsa",
  },
  {
    value: "Pacsirta-dűlő",
    label: "Pacsirta-dűlő",
  },
  {
    value: "Pácsony",
    label: "Pácsony",
  },
  {
    value: "Padár",
    label: "Padár",
  },
  {
    value: "Páhi",
    label: "Páhi",
  },
  {
    value: "Pajorok",
    label: "Pajorok",
  },
  {
    value: "Páka",
    label: "Páka",
  },
  {
    value: "Pakac",
    label: "Pakac",
  },
  {
    value: "Pakod",
    label: "Pakod",
  },
  {
    value: "Pákozd",
    label: "Pákozd",
  },
  {
    value: "Pákra Tó",
    label: "Pákra Tó",
  },
  {
    value: "Paks",
    label: "Paks",
  },
  {
    value: "Pál-föld",
    label: "Pál-föld",
  },
  {
    value: "Pál-kúti-dűlő",
    label: "Pál-kúti-dűlő",
  },
  {
    value: "Pál-liget",
    label: "Pál-liget",
  },
  {
    value: "Paládicspuszta",
    label: "Paládicspuszta",
  },
  {
    value: "Palda",
    label: "Palda",
  },
  {
    value: "Palé",
    label: "Palé",
  },
  {
    value: "Pálfa",
    label: "Pálfa",
  },
  {
    value: "Pálfi-sziget",
    label: "Pálfi-sziget",
  },
  {
    value: "Pálfiszeg",
    label: "Pálfiszeg",
  },
  {
    value: "Pálháza",
    label: "Pálháza",
  },
  {
    value: "Páli",
    label: "Páli",
  },
  {
    value: "Pálinkaház Felett",
    label: "Pálinkaház Felett",
  },
  {
    value: "Palkonya",
    label: "Palkonya",
  },
  {
    value: "Pallag",
    label: "Pallag",
  },
  {
    value: "Pallag-ráta",
    label: "Pallag-ráta",
  },
  {
    value: "Pallagok",
    label: "Pallagok",
  },
  {
    value: "Pálmajor",
    label: "Pálmajor",
  },
  {
    value: "Pálmonostora",
    label: "Pálmonostora",
  },
  {
    value: "Palocsa",
    label: "Palocsa",
  },
  {
    value: "Palotabozsok",
    label: "Palotabozsok",
  },
  {
    value: "Palotás",
    label: "Palotás",
  },
  {
    value: "Paloznak",
    label: "Paloznak",
  },
  {
    value: "Pamlény",
    label: "Pamlény",
  },
  {
    value: "Pamuk",
    label: "Pamuk",
  },
  {
    value: "Pánd",
    label: "Pánd",
  },
  {
    value: "Pankasz",
    label: "Pankasz",
  },
  {
    value: "Pannonhalma",
    label: "Pannonhalma",
  },
  {
    value: "Pányi-zug",
    label: "Pányi-zug",
  },
  {
    value: "Pányok",
    label: "Pányok",
  },
  {
    value: "Panyola",
    label: "Panyola",
  },
  {
    value: "Pap",
    label: "Pap",
  },
  {
    value: "Pap Tava",
    label: "Pap Tava",
  },
  {
    value: "Pap-dűlő",
    label: "Pap-dűlő",
  },
  {
    value: "Pap-fertő-dűlő",
    label: "Pap-fertő-dűlő",
  },
  {
    value: "Pap-halmi-dűlő",
    label: "Pap-halmi-dűlő",
  },
  {
    value: "Pap-lyukas",
    label: "Pap-lyukas",
  },
  {
    value: "Pap-rét",
    label: "Pap-rét",
  },
  {
    value: "Pap-rév-zug",
    label: "Pap-rév-zug",
  },
  {
    value: "Pap-sziget",
    label: "Pap-sziget",
  },
  {
    value: "Pap-tag",
    label: "Pap-tag",
  },
  {
    value: "Pap-telek",
    label: "Pap-telek",
  },
  {
    value: "Pap-tó",
    label: "Pap-tó",
  },
  {
    value: "Pápa",
    label: "Pápa",
  },
  {
    value: "Pápadereske",
    label: "Pápadereske",
  },
  {
    value: "Pápakovácsi",
    label: "Pápakovácsi",
  },
  {
    value: "Pápasalamon",
    label: "Pápasalamon",
  },
  {
    value: "Pápateszér",
    label: "Pápateszér",
  },
  {
    value: "Papkeszi",
    label: "Papkeszi",
  },
  {
    value: "Pápoc",
    label: "Pápoc",
  },
  {
    value: "Papos",
    label: "Papos",
  },
  {
    value: "Papp-dűlő",
    label: "Papp-dűlő",
  },
  {
    value: "Páprád",
    label: "Páprád",
  },
  {
    value: "Paprika-ürbő",
    label: "Paprika-ürbő",
  },
  {
    value: "Parád",
    label: "Parád",
  },
  {
    value: "Paradsasvar",
    label: "Paradsasvar",
  },
  {
    value: "Parasznya",
    label: "Parasznya",
  },
  {
    value: "Párgás",
    label: "Párgás",
  },
  {
    value: "Parlag",
    label: "Parlag",
  },
  {
    value: "Páskom",
    label: "Páskom",
  },
  {
    value: "Páskomföld",
    label: "Páskomföld",
  },
  {
    value: "Paszab",
    label: "Paszab",
  },
  {
    value: "Pásztó",
    label: "Pásztó",
  },
  {
    value: "Pásztó-zug",
    label: "Pásztó-zug",
  },
  {
    value: "Pásztor-ormágy",
    label: "Pásztor-ormágy",
  },
  {
    value: "Pásztori",
    label: "Pásztori",
  },
  {
    value: "Pat",
    label: "Pat",
  },
  {
    value: "Patak",
    label: "Patak",
  },
  {
    value: "Patalom",
    label: "Patalom",
  },
  {
    value: "Patapoklosi",
    label: "Patapoklosi",
  },
  {
    value: "Patca",
    label: "Patca",
  },
  {
    value: "Pátka",
    label: "Pátka",
  },
  {
    value: "Patkó-zug",
    label: "Patkó-zug",
  },
  {
    value: "Patosfa",
    label: "Patosfa",
  },
  {
    value: "Pátroha",
    label: "Pátroha",
  },
  {
    value: "Patvarc",
    label: "Patvarc",
  },
  {
    value: "Páty",
    label: "Páty",
  },
  {
    value: "Pátyod",
    label: "Pátyod",
  },
  {
    value: "Pázmán",
    label: "Pázmán",
  },
  {
    value: "Pázmánd",
    label: "Pázmánd",
  },
  {
    value: "Pázmándfalu",
    label: "Pázmándfalu",
  },
  {
    value: "Pécel",
    label: "Pécel",
  },
  {
    value: "Péceli-tag",
    label: "Péceli-tag",
  },
  {
    value: "Péchy-dűlő",
    label: "Péchy-dűlő",
  },
  {
    value: "Peckés",
    label: "Peckés",
  },
  {
    value: "Pecöl",
    label: "Pecöl",
  },
  {
    value: "Pécs",
    label: "Pécs",
  },
  {
    value: "Pécsbagota",
    label: "Pécsbagota",
  },
  {
    value: "Pécsdevecser",
    label: "Pécsdevecser",
  },
  {
    value: "Pécsely",
    label: "Pécsely",
  },
  {
    value: "Pécsi-tag",
    label: "Pécsi-tag",
  },
  {
    value: "Pécsudvard",
    label: "Pécsudvard",
  },
  {
    value: "Pécsvárad",
    label: "Pécsvárad",
  },
  {
    value: "Pellei-rész",
    label: "Pellei-rész",
  },
  {
    value: "Pellérd",
    label: "Pellérd",
  },
  {
    value: "Pellérdi-halastavak",
    label: "Pellérdi-halastavak",
  },
  {
    value: "Pellet-tag",
    label: "Pellet-tag",
  },
  {
    value: "Pély",
    label: "Pély",
  },
  {
    value: "Penc",
    label: "Penc",
  },
  {
    value: "Penészlek",
    label: "Penészlek",
  },
  {
    value: "Péntek-halom",
    label: "Péntek-halom",
  },
  {
    value: "Péntek-hegy",
    label: "Péntek-hegy",
  },
  {
    value: "Penyige",
    label: "Penyige",
  },
  {
    value: "Pénzesgyőr",
    label: "Pénzesgyőr",
  },
  {
    value: "Pepi-kert",
    label: "Pepi-kert",
  },
  {
    value: "Pér",
    label: "Pér",
  },
  {
    value: "Perbál",
    label: "Perbál",
  },
  {
    value: "Perde",
    label: "Perde",
  },
  {
    value: "Pere",
    label: "Pere",
  },
  {
    value: "Perecse",
    label: "Perecse",
  },
  {
    value: "Pereked",
    label: "Pereked",
  },
  {
    value: "Perenye",
    label: "Perenye",
  },
  {
    value: "Peres",
    label: "Peres",
  },
  {
    value: "Peres-dűlő",
    label: "Peres-dűlő",
  },
  {
    value: "Peres-oldal",
    label: "Peres-oldal",
  },
  {
    value: "Perespuszta",
    label: "Perespuszta",
  },
  {
    value: "Peresznye",
    label: "Peresznye",
  },
  {
    value: "Pereszteg",
    label: "Pereszteg",
  },
  {
    value: "Pergenyő",
    label: "Pergenyő",
  },
  {
    value: "Perkáta",
    label: "Perkáta",
  },
  {
    value: "Perkupa",
    label: "Perkupa",
  },
  {
    value: "Perőcsény",
    label: "Perőcsény",
  },
  {
    value: "Péter Deák Dűlő",
    label: "Péter Deák Dűlő",
  },
  {
    value: "Péter Földje",
    label: "Péter Földje",
  },
  {
    value: "Peterd",
    label: "Peterd",
  },
  {
    value: "Péterhida",
    label: "Péterhida",
  },
  {
    value: "Péteri",
    label: "Péteri",
  },
  {
    value: "Péteri-tó",
    label: "Péteri-tó",
  },
  {
    value: "Pétervására",
    label: "Pétervására",
  },
  {
    value: "Pétfürdő",
    label: "Pétfürdő",
  },
  {
    value: "Pethőhenye",
    label: "Pethőhenye",
  },
  {
    value: "Petlend",
    label: "Petlend",
  },
  {
    value: "Petneháza",
    label: "Petneháza",
  },
  {
    value: "Petőfibánya",
    label: "Petőfibánya",
  },
  {
    value: "Petőfiszállás",
    label: "Petőfiszállás",
  },
  {
    value: "Petőháza",
    label: "Petőháza",
  },
  {
    value: "Petőmihályfa",
    label: "Petőmihályfa",
  },
  {
    value: "Petrács",
    label: "Petrács",
  },
  {
    value: "Petrikeresztúr",
    label: "Petrikeresztúr",
  },
  {
    value: "Petrivente",
    label: "Petrivente",
  },
  {
    value: "Pettend",
    label: "Pettend",
  },
  {
    value: "Piac-dűlő",
    label: "Piac-dűlő",
  },
  {
    value: "Picsor",
    label: "Picsor",
  },
  {
    value: "Piliny",
    label: "Piliny",
  },
  {
    value: "Pilis",
    label: "Pilis",
  },
  {
    value: "Pilisborosjenő",
    label: "Pilisborosjenő",
  },
  {
    value: "Piliscsaba",
    label: "Piliscsaba",
  },
  {
    value: "Piliscsév",
    label: "Piliscsév",
  },
  {
    value: "Pilisi-tag",
    label: "Pilisi-tag",
  },
  {
    value: "Pilisjászfalu",
    label: "Pilisjászfalu",
  },
  {
    value: "Pilismarót",
    label: "Pilismarót",
  },
  {
    value: "Pilisszántó",
    label: "Pilisszántó",
  },
  {
    value: "Pilisszentiván",
    label: "Pilisszentiván",
  },
  {
    value: "Pilisszentkereszt",
    label: "Pilisszentkereszt",
  },
  {
    value: "Pilisszentlászló",
    label: "Pilisszentlászló",
  },
  {
    value: "Pilisvörösvár",
    label: "Pilisvörösvár",
  },
  {
    value: "Pincehely",
    label: "Pincehely",
  },
  {
    value: "Pincés-hegy",
    label: "Pincés-hegy",
  },
  {
    value: "Pincés-kút-dűlő",
    label: "Pincés-kút-dűlő",
  },
  {
    value: "Pinkamindszent",
    label: "Pinkamindszent",
  },
  {
    value: "Pinke-kút",
    label: "Pinke-kút",
  },
  {
    value: "Pinkóc",
    label: "Pinkóc",
  },
  {
    value: "Pinnye",
    label: "Pinnye",
  },
  {
    value: "Piricse",
    label: "Piricse",
  },
  {
    value: "Piripócs",
    label: "Piripócs",
  },
  {
    value: "Piros-hegy",
    label: "Piros-hegy",
  },
  {
    value: "Pirtó",
    label: "Pirtó",
  },
  {
    value: "Piskó",
    label: "Piskó",
  },
  {
    value: "Pitvaros",
    label: "Pitvaros",
  },
  {
    value: "Pityer",
    label: "Pityer",
  },
  {
    value: "Pocos-zug",
    label: "Pocos-zug",
  },
  {
    value: "Pócsa",
    label: "Pócsa",
  },
  {
    value: "Pocsaj",
    label: "Pocsaj",
  },
  {
    value: "Pócsmegyer",
    label: "Pócsmegyer",
  },
  {
    value: "Pócspetri",
    label: "Pócspetri",
  },
  {
    value: "Pogány",
    label: "Pogány",
  },
  {
    value: "Pogány-sziget",
    label: "Pogány-sziget",
  },
  {
    value: "Pogányszentpéter",
    label: "Pogányszentpéter",
  },
  {
    value: "Pókaszepetk",
    label: "Pókaszepetk",
  },
  {
    value: "Polány",
    label: "Polány",
  },
  {
    value: "Polgár",
    label: "Polgár",
  },
  {
    value: "Polgárdi",
    label: "Polgárdi",
  },
  {
    value: "Pölöske",
    label: "Pölöske",
  },
  {
    value: "Pölöskefő",
    label: "Pölöskefő",
  },
  {
    value: "Pomáz",
    label: "Pomáz",
  },
  {
    value: "Pongrác-tag",
    label: "Pongrác-tag",
  },
  {
    value: "Pörböly",
    label: "Pörböly",
  },
  {
    value: "Porcsákos-dűlő",
    label: "Porcsákos-dűlő",
  },
  {
    value: "Porcsalma",
    label: "Porcsalma",
  },
  {
    value: "Pördefölde",
    label: "Pördefölde",
  },
  {
    value: "Porkoláb-gyep",
    label: "Porkoláb-gyep",
  },
  {
    value: "Pornóapáti",
    label: "Pornóapáti",
  },
  {
    value: "Pörös",
    label: "Pörös",
  },
  {
    value: "Pörösök",
    label: "Pörösök",
  },
  {
    value: "Poroszló",
    label: "Poroszló",
  },
  {
    value: "Porpác",
    label: "Porpác",
  },
  {
    value: "Porrog",
    label: "Porrog",
  },
  {
    value: "Porrogszentkirály",
    label: "Porrogszentkirály",
  },
  {
    value: "Porrogszentpál",
    label: "Porrogszentpál",
  },
  {
    value: "Pórszombat",
    label: "Pórszombat",
  },
  {
    value: "Porva",
    label: "Porva",
  },
  {
    value: "Pósfa",
    label: "Pósfa",
  },
  {
    value: "Pössze",
    label: "Pössze",
  },
  {
    value: "Posta-kert",
    label: "Posta-kert",
  },
  {
    value: "Posta-tag",
    label: "Posta-tag",
  },
  {
    value: "Pósvárpuszta",
    label: "Pósvárpuszta",
  },
  {
    value: "Potoly-földek",
    label: "Potoly-földek",
  },
  {
    value: "Potony",
    label: "Potony",
  },
  {
    value: "Pötréte",
    label: "Pötréte",
  },
  {
    value: "Potyond",
    label: "Potyond",
  },
  {
    value: "Prügy",
    label: "Prügy",
  },
  {
    value: "Pula",
    label: "Pula",
  },
  {
    value: "Pünkösd-hát",
    label: "Pünkösd-hát",
  },
  {
    value: "Purglytag",
    label: "Purglytag",
  },
  {
    value: "Purglytanyák",
    label: "Purglytanyák",
  },
  {
    value: "Puskaporos",
    label: "Puskaporos",
  },
  {
    value: "Püski",
    label: "Püski",
  },
  {
    value: "Püspök-dűlő",
    label: "Püspök-dűlő",
  },
  {
    value: "Püspökhatvan",
    label: "Püspökhatvan",
  },
  {
    value: "Püspökladány",
    label: "Püspökladány",
  },
  {
    value: "Püspökmolnári",
    label: "Püspökmolnári",
  },
  {
    value: "Püspökszilágy",
    label: "Püspökszilágy",
  },
  {
    value: "Puszta-kert",
    label: "Puszta-kert",
  },
  {
    value: "Pusztaapáti",
    label: "Pusztaapáti",
  },
  {
    value: "Pusztaberki",
    label: "Pusztaberki",
  },
  {
    value: "Pusztacsalád",
    label: "Pusztacsalád",
  },
  {
    value: "Pusztacsó",
    label: "Pusztacsó",
  },
  {
    value: "Pusztadobos",
    label: "Pusztadobos",
  },
  {
    value: "Pusztaederics",
    label: "Pusztaederics",
  },
  {
    value: "Pusztafalu",
    label: "Pusztafalu",
  },
  {
    value: "Pusztafoeldvar",
    label: "Pusztafoeldvar",
  },
  {
    value: "Pusztaföldvár",
    label: "Pusztaföldvár",
  },
  {
    value: "Pusztahencse",
    label: "Pusztahencse",
  },
  {
    value: "Pusztakatymárd",
    label: "Pusztakatymárd",
  },
  {
    value: "Pusztakilences",
    label: "Pusztakilences",
  },
  {
    value: "Pusztakócs",
    label: "Pusztakócs",
  },
  {
    value: "Pusztakovácsi",
    label: "Pusztakovácsi",
  },
  {
    value: "Pusztakürt",
    label: "Pusztakürt",
  },
  {
    value: "Pusztamagyaród",
    label: "Pusztamagyaród",
  },
  {
    value: "Pusztamérges",
    label: "Pusztamérges",
  },
  {
    value: "Pusztamiske",
    label: "Pusztamiske",
  },
  {
    value: "Pusztamonostor",
    label: "Pusztamonostor",
  },
  {
    value: "Pusztaottlaka",
    label: "Pusztaottlaka",
  },
  {
    value: "Pusztaradvány",
    label: "Pusztaradvány",
  },
  {
    value: "Pusztaszabolcs",
    label: "Pusztaszabolcs",
  },
  {
    value: "Pusztaszemes",
    label: "Pusztaszemes",
  },
  {
    value: "Pusztaszentiván",
    label: "Pusztaszentiván",
  },
  {
    value: "Pusztaszentlászló",
    label: "Pusztaszentlászló",
  },
  {
    value: "Pusztaszer",
    label: "Pusztaszer",
  },
  {
    value: "Pusztatúrpásztó",
    label: "Pusztatúrpásztó",
  },
  {
    value: "Pusztavacs",
    label: "Pusztavacs",
  },
  {
    value: "Pusztavám",
    label: "Pusztavám",
  },
  {
    value: "Pusztazámor",
    label: "Pusztazámor",
  },
  {
    value: "Putnok",
    label: "Putnok",
  },
  {
    value: "Putridűlő",
    label: "Putridűlő",
  },
  {
    value: "Rába",
    label: "Rába",
  },
  {
    value: "Rábacsanak",
    label: "Rábacsanak",
  },
  {
    value: "Rábacsécsény",
    label: "Rábacsécsény",
  },
  {
    value: "Rábagyarmat",
    label: "Rábagyarmat",
  },
  {
    value: "Rábahídvég",
    label: "Rábahídvég",
  },
  {
    value: "Rábakecöl",
    label: "Rábakecöl",
  },
  {
    value: "Rábaköz",
    label: "Rábaköz",
  },
  {
    value: "Rábapatona",
    label: "Rábapatona",
  },
  {
    value: "Rábapaty",
    label: "Rábapaty",
  },
  {
    value: "Rábapordány",
    label: "Rábapordány",
  },
  {
    value: "Rábasebes",
    label: "Rábasebes",
  },
  {
    value: "Rábaszentandrás",
    label: "Rábaszentandrás",
  },
  {
    value: "Rábaszentmihály",
    label: "Rábaszentmihály",
  },
  {
    value: "Rábaszentmiklós",
    label: "Rábaszentmiklós",
  },
  {
    value: "Rábatamási",
    label: "Rábatamási",
  },
  {
    value: "Rábatöttös",
    label: "Rábatöttös",
  },
  {
    value: "Rábcakapi",
    label: "Rábcakapi",
  },
  {
    value: "Rabina-erdő",
    label: "Rabina-erdő",
  },
  {
    value: "Rác-egres",
    label: "Rác-egres",
  },
  {
    value: "Rácalmás",
    label: "Rácalmás",
  },
  {
    value: "Ráckeresztúr",
    label: "Ráckeresztúr",
  },
  {
    value: "Ráckeve",
    label: "Ráckeve",
  },
  {
    value: "Rád",
    label: "Rád",
  },
  {
    value: "Rádfalva",
    label: "Rádfalva",
  },
  {
    value: "Rádi-tó",
    label: "Rádi-tó",
  },
  {
    value: "Rádóckölked",
    label: "Rádóckölked",
  },
  {
    value: "Radostyán",
    label: "Radostyán",
  },
  {
    value: "Ragály",
    label: "Ragály",
  },
  {
    value: "Ragályi-tag",
    label: "Ragályi-tag",
  },
  {
    value: "Ragyvás-fő",
    label: "Ragyvás-fő",
  },
  {
    value: "Rajka",
    label: "Rajka",
  },
  {
    value: "Rajki-tó",
    label: "Rajki-tó",
  },
  {
    value: "Rakaca",
    label: "Rakaca",
  },
  {
    value: "Rakacaszend",
    label: "Rakacaszend",
  },
  {
    value: "Rakamaz",
    label: "Rakamaz",
  },
  {
    value: "Rákóczi-kert",
    label: "Rákóczi-kert",
  },
  {
    value: "Rákóczifalva",
    label: "Rákóczifalva",
  },
  {
    value: "Rákócziújfalu",
    label: "Rákócziújfalu",
  },
  {
    value: "Rakoncás",
    label: "Rakoncás",
  },
  {
    value: "Rákos-Urmös-hát",
    label: "Rákos-Urmös-hát",
  },
  {
    value: "Rakottyás-dűlő",
    label: "Rakottyás-dűlő",
  },
  {
    value: "Ráksi",
    label: "Ráksi",
  },
  {
    value: "Ramocsa",
    label: "Ramocsa",
  },
  {
    value: "Ramocsaháza",
    label: "Ramocsaháza",
  },
  {
    value: "Rápolt",
    label: "Rápolt",
  },
  {
    value: "Raposka",
    label: "Raposka",
  },
  {
    value: "Rásonysápberencs",
    label: "Rásonysápberencs",
  },
  {
    value: "Rassang-hát",
    label: "Rassang-hát",
  },
  {
    value: "Rátka",
    label: "Rátka",
  },
  {
    value: "Ratkóca",
    label: "Ratkóca",
  },
  {
    value: "Rátót",
    label: "Rátót",
  },
  {
    value: "Ravasz",
    label: "Ravasz",
  },
  {
    value: "Ravazd",
    label: "Ravazd",
  },
  {
    value: "Recsk",
    label: "Recsk",
  },
  {
    value: "Réde",
    label: "Réde",
  },
  {
    value: "Rédics",
    label: "Rédics",
  },
  {
    value: "Regéc",
    label: "Regéc",
  },
  {
    value: "Regenye",
    label: "Regenye",
  },
  {
    value: "Régi Temető Dűlő",
    label: "Régi Temető Dűlő",
  },
  {
    value: "Régi-szőlőskert",
    label: "Régi-szőlőskert",
  },
  {
    value: "Regöly",
    label: "Regöly",
  },
  {
    value: "Reizman-tag",
    label: "Reizman-tag",
  },
  {
    value: "Reke-homoka",
    label: "Reke-homoka",
  },
  {
    value: "Rekettyés-sor",
    label: "Rekettyés-sor",
  },
  {
    value: "Rém",
    label: "Rém",
  },
  {
    value: "Remenyik-tag",
    label: "Remenyik-tag",
  },
  {
    value: "Remete",
    label: "Remete",
  },
  {
    value: "Remeteszőlős",
    label: "Remeteszőlős",
  },
  {
    value: "Répás",
    label: "Répás",
  },
  {
    value: "Répás-hát",
    label: "Répás-hát",
  },
  {
    value: "Répáshuta",
    label: "Répáshuta",
  },
  {
    value: "Répce Mellék",
    label: "Répce Mellék",
  },
  {
    value: "Répcelak",
    label: "Répcelak",
  },
  {
    value: "Repcés Tó",
    label: "Repcés Tó",
  },
  {
    value: "Répceszemere",
    label: "Répceszemere",
  },
  {
    value: "Répceszentgyörgy",
    label: "Répceszentgyörgy",
  },
  {
    value: "Répcevis",
    label: "Répcevis",
  },
  {
    value: "Resznek",
    label: "Resznek",
  },
  {
    value: "Rét",
    label: "Rét",
  },
  {
    value: "Rét-part",
    label: "Rét-part",
  },
  {
    value: "Rétalap",
    label: "Rétalap",
  },
  {
    value: "Réti-dűlő",
    label: "Réti-dűlő",
  },
  {
    value: "Rétköz",
    label: "Rétköz",
  },
  {
    value: "Rétközberencs",
    label: "Rétközberencs",
  },
  {
    value: "Rétság",
    label: "Rétság",
  },
  {
    value: "Rév-zug",
    label: "Rév-zug",
  },
  {
    value: "Révfülöp",
    label: "Révfülöp",
  },
  {
    value: "Reviczky-rész",
    label: "Reviczky-rész",
  },
  {
    value: "Révleányvár",
    label: "Révleányvár",
  },
  {
    value: "Rezes",
    label: "Rezes",
  },
  {
    value: "Rezi",
    label: "Rezi",
  },
  {
    value: "Ricse",
    label: "Ricse",
  },
  {
    value: "Rigács",
    label: "Rigács",
  },
  {
    value: "Rigyác",
    label: "Rigyác",
  },
  {
    value: "Rimóc",
    label: "Rimóc",
  },
  {
    value: "Rinyabesenyő",
    label: "Rinyabesenyő",
  },
  {
    value: "Rinyakovácsi",
    label: "Rinyakovácsi",
  },
  {
    value: "Rinyaszentkirály",
    label: "Rinyaszentkirály",
  },
  {
    value: "Rinyaújlak",
    label: "Rinyaújlak",
  },
  {
    value: "Rinyaújnép",
    label: "Rinyaújnép",
  },
  {
    value: "Rohod",
    label: "Rohod",
  },
  {
    value: "Röjtökmuzsaj",
    label: "Röjtökmuzsaj",
  },
  {
    value: "Rókalyukak",
    label: "Rókalyukak",
  },
  {
    value: "Rókászi",
    label: "Rókászi",
  },
  {
    value: "Rokkant-földek",
    label: "Rokkant-földek",
  },
  {
    value: "Rollaháza",
    label: "Rollaháza",
  },
  {
    value: "Románd",
    label: "Románd",
  },
  {
    value: "Romhány",
    label: "Romhány",
  },
  {
    value: "Romogyi-dűlő",
    label: "Romogyi-dűlő",
  },
  {
    value: "Romonya",
    label: "Romonya",
  },
  {
    value: "Róna-hát",
    label: "Róna-hát",
  },
  {
    value: "Rönök",
    label: "Rönök",
  },
  {
    value: "Rossz-homok",
    label: "Rossz-homok",
  },
  {
    value: "Röszke",
    label: "Röszke",
  },
  {
    value: "Rott-kút-dűlő",
    label: "Rott-kút-dűlő",
  },
  {
    value: "Rózner-tag",
    label: "Rózner-tag",
  },
  {
    value: "Rózsa-dűlő",
    label: "Rózsa-dűlő",
  },
  {
    value: "Rózsa-szék",
    label: "Rózsa-szék",
  },
  {
    value: "Rózsa-tag",
    label: "Rózsa-tag",
  },
  {
    value: "Rózsadomb",
    label: "Rózsadomb",
  },
  {
    value: "Rózsafa",
    label: "Rózsafa",
  },
  {
    value: "Rózsaligettanya",
    label: "Rózsaligettanya",
  },
  {
    value: "Rozsály",
    label: "Rozsály",
  },
  {
    value: "Rózsás",
    label: "Rózsás",
  },
  {
    value: "Rudabánya",
    label: "Rudabánya",
  },
  {
    value: "Rudolftelep",
    label: "Rudolftelep",
  },
  {
    value: "Rúgós-hegy",
    label: "Rúgós-hegy",
  },
  {
    value: "Rum",
    label: "Rum",
  },
  {
    value: "Ruszka-dűlő",
    label: "Ruszka-dűlő",
  },
  {
    value: "Ruzsa",
    label: "Ruzsa",
  },
  {
    value: "Sáfáryszőllő",
    label: "Sáfáryszőllő",
  },
  {
    value: "Ság",
    label: "Ság",
  },
  {
    value: "Ságújfalu",
    label: "Ságújfalu",
  },
  {
    value: "Ságvár",
    label: "Ságvár",
  },
  {
    value: "Sajc",
    label: "Sajc",
  },
  {
    value: "Sajó",
    label: "Sajó",
  },
  {
    value: "Sajó-szög",
    label: "Sajó-szög",
  },
  {
    value: "Sajó-völgy",
    label: "Sajó-völgy",
  },
  {
    value: "Sajóbábony",
    label: "Sajóbábony",
  },
  {
    value: "Sajóecseg",
    label: "Sajóecseg",
  },
  {
    value: "Sajógalgóc",
    label: "Sajógalgóc",
  },
  {
    value: "Sajóhídvég",
    label: "Sajóhídvég",
  },
  {
    value: "Sajóivánka",
    label: "Sajóivánka",
  },
  {
    value: "Sajókápolna",
    label: "Sajókápolna",
  },
  {
    value: "Sajókaza",
    label: "Sajókaza",
  },
  {
    value: "Sajókeresztúr",
    label: "Sajókeresztúr",
  },
  {
    value: "Sajólád",
    label: "Sajólád",
  },
  {
    value: "Sajólászlófalva",
    label: "Sajólászlófalva",
  },
  {
    value: "Sajómercse",
    label: "Sajómercse",
  },
  {
    value: "Sajónémeti",
    label: "Sajónémeti",
  },
  {
    value: "Sajóörös",
    label: "Sajóörös",
  },
  {
    value: "Sajópálfala",
    label: "Sajópálfala",
  },
  {
    value: "Sajópetri",
    label: "Sajópetri",
  },
  {
    value: "Sajópüspöki",
    label: "Sajópüspöki",
  },
  {
    value: "Sajósenye",
    label: "Sajósenye",
  },
  {
    value: "Sajószentpéter",
    label: "Sajószentpéter",
  },
  {
    value: "Sajószöged",
    label: "Sajószöged",
  },
  {
    value: "Sajóvámos",
    label: "Sajóvámos",
  },
  {
    value: "Sajóvelezd",
    label: "Sajóvelezd",
  },
  {
    value: "Sajtár-szék-dűlő",
    label: "Sajtár-szék-dűlő",
  },
  {
    value: "Sajtoskál",
    label: "Sajtoskál",
  },
  {
    value: "Salföld",
    label: "Salföld",
  },
  {
    value: "Salgó",
    label: "Salgó",
  },
  {
    value: "Salgótarján",
    label: "Salgótarján",
  },
  {
    value: "Salköveskút",
    label: "Salköveskút",
  },
  {
    value: "Salomvár",
    label: "Salomvár",
  },
  {
    value: "Sály",
    label: "Sály",
  },
  {
    value: "Sámágy",
    label: "Sámágy",
  },
  {
    value: "Sámod",
    label: "Sámod",
  },
  {
    value: "Sámsonháza",
    label: "Sámsonháza",
  },
  {
    value: "Sánc",
    label: "Sánc",
  },
  {
    value: "Sand",
    label: "Sand",
  },
  {
    value: "Sándli-tag",
    label: "Sándli-tag",
  },
  {
    value: "Sándorfalva",
    label: "Sándorfalva",
  },
  {
    value: "Sándorháza-dűlő",
    label: "Sándorháza-dűlő",
  },
  {
    value: "Sándormajori-földek",
    label: "Sándormajori-földek",
  },
  {
    value: "Sándorok",
    label: "Sándorok",
  },
  {
    value: "Sántos",
    label: "Sántos",
  },
  {
    value: "Sáp",
    label: "Sáp",
  },
  {
    value: "Sápa",
    label: "Sápa",
  },
  {
    value: "Sápi-dűlő",
    label: "Sápi-dűlő",
  },
  {
    value: "Sár-sziget",
    label: "Sár-sziget",
  },
  {
    value: "Sár-szög",
    label: "Sár-szög",
  },
  {
    value: "Sáránd",
    label: "Sáránd",
  },
  {
    value: "Sárazsadány",
    label: "Sárazsadány",
  },
  {
    value: "Sárbogárd",
    label: "Sárbogárd",
  },
  {
    value: "Sáregres",
    label: "Sáregres",
  },
  {
    value: "Sárfimizdó",
    label: "Sárfimizdó",
  },
  {
    value: "Sárhida",
    label: "Sárhida",
  },
  {
    value: "Sári",
    label: "Sári",
  },
  {
    value: "Sári-szőlők",
    label: "Sári-szőlők",
  },
  {
    value: "Sárisáp",
    label: "Sárisáp",
  },
  {
    value: "Sarkad",
    label: "Sarkad",
  },
  {
    value: "Sarkadkeresztúr",
    label: "Sarkadkeresztúr",
  },
  {
    value: "Sarkadtanya",
    label: "Sarkadtanya",
  },
  {
    value: "Sárkeresztes",
    label: "Sárkeresztes",
  },
  {
    value: "Sárkeresztúr",
    label: "Sárkeresztúr",
  },
  {
    value: "Sárkeszi",
    label: "Sárkeszi",
  },
  {
    value: "Sárköz",
    label: "Sárköz",
  },
  {
    value: "Sármás-ér",
    label: "Sármás-ér",
  },
  {
    value: "Sármellék",
    label: "Sármellék",
  },
  {
    value: "Sárok",
    label: "Sárok",
  },
  {
    value: "Sáros-ér-hát",
    label: "Sáros-ér-hát",
  },
  {
    value: "Sárosd",
    label: "Sárosd",
  },
  {
    value: "Sárospatak",
    label: "Sárospatak",
  },
  {
    value: "Sárpilis",
    label: "Sárpilis",
  },
  {
    value: "Sárrét",
    label: "Sárrét",
  },
  {
    value: "Sárrétudvari",
    label: "Sárrétudvari",
  },
  {
    value: "Sarród",
    label: "Sarród",
  },
  {
    value: "Sárszentágota",
    label: "Sárszentágota",
  },
  {
    value: "Sárszentlőrinc",
    label: "Sárszentlőrinc",
  },
  {
    value: "Sárszentmihály",
    label: "Sárszentmihály",
  },
  {
    value: "Sarud",
    label: "Sarud",
  },
  {
    value: "Sárvár",
    label: "Sárvár",
  },
  {
    value: "Sas-hegy",
    label: "Sas-hegy",
  },
  {
    value: "Sás-tó",
    label: "Sás-tó",
  },
  {
    value: "Sásd",
    label: "Sásd",
  },
  {
    value: "Sáska",
    label: "Sáska",
  },
  {
    value: "Sástópuszta",
    label: "Sástópuszta",
  },
  {
    value: "Sáta",
    label: "Sáta",
  },
  {
    value: "Sátoraljaújhely",
    label: "Sátoraljaújhely",
  },
  {
    value: "Sátorhely",
    label: "Sátorhely",
  },
  {
    value: "Sátoros",
    label: "Sátoros",
  },
  {
    value: "Sávoly",
    label: "Sávoly",
  },
  {
    value: "Schengen Area",
    label: "Schengen Area",
  },
  {
    value: "Sé",
    label: "Sé",
  },
  {
    value: "Sebes-ér",
    label: "Sebes-ér",
  },
  {
    value: "Sebes-éri-dűlő",
    label: "Sebes-éri-dűlő",
  },
  {
    value: "Segesd",
    label: "Segesd",
  },
  {
    value: "Sellye",
    label: "Sellye",
  },
  {
    value: "Selyeb",
    label: "Selyeb",
  },
  {
    value: "Selyem-tag",
    label: "Selyem-tag",
  },
  {
    value: "Semjén",
    label: "Semjén",
  },
  {
    value: "Semjénháza",
    label: "Semjénháza",
  },
  {
    value: "Semlyék",
    label: "Semlyék",
  },
  {
    value: "Sénye",
    label: "Sénye",
  },
  {
    value: "Sényő",
    label: "Sényő",
  },
  {
    value: "Seregélyes",
    label: "Seregélyes",
  },
  {
    value: "Serényfalva",
    label: "Serényfalva",
  },
  {
    value: "Seres Tó",
    label: "Seres Tó",
  },
  {
    value: "Sérsekszőlős",
    label: "Sérsekszőlős",
  },
  {
    value: "Sertés-ér",
    label: "Sertés-ér",
  },
  {
    value: "Sigepuszta",
    label: "Sigepuszta",
  },
  {
    value: "Sigéri-dűlő",
    label: "Sigéri-dűlő",
  },
  {
    value: "Sikátor",
    label: "Sikátor",
  },
  {
    value: "Siklós",
    label: "Siklós",
  },
  {
    value: "Siklósbodony",
    label: "Siklósbodony",
  },
  {
    value: "Siklósnagyfalu",
    label: "Siklósnagyfalu",
  },
  {
    value: "Sima",
    label: "Sima",
  },
  {
    value: "Síma Tó",
    label: "Síma Tó",
  },
  {
    value: "Sima-hát",
    label: "Sima-hát",
  },
  {
    value: "Simai-zug",
    label: "Simai-zug",
  },
  {
    value: "Simaság",
    label: "Simaság",
  },
  {
    value: "Simonfa",
    label: "Simonfa",
  },
  {
    value: "Simontornya",
    label: "Simontornya",
  },
  {
    value: "Sióagárd",
    label: "Sióagárd",
  },
  {
    value: "Siófok",
    label: "Siófok",
  },
  {
    value: "Siójut",
    label: "Siójut",
  },
  {
    value: "Sipák",
    label: "Sipák",
  },
  {
    value: "Sipsai-dűlő",
    label: "Sipsai-dűlő",
  },
  {
    value: "Sirály-dűlő",
    label: "Sirály-dűlő",
  },
  {
    value: "Sirató",
    label: "Sirató",
  },
  {
    value: "Sirató-zug",
    label: "Sirató-zug",
  },
  {
    value: "Siratói-szőlők",
    label: "Siratói-szőlők",
  },
  {
    value: "Sirok",
    label: "Sirok",
  },
  {
    value: "Sisáripuszta",
    label: "Sisáripuszta",
  },
  {
    value: "Siter",
    label: "Siter",
  },
  {
    value: "Sitke",
    label: "Sitke",
  },
  {
    value: "Sobor",
    label: "Sobor",
  },
  {
    value: "Söjtör",
    label: "Söjtör",
  },
  {
    value: "Sokoróalja",
    label: "Sokoróalja",
  },
  {
    value: "Sokorópátka",
    label: "Sokorópátka",
  },
  {
    value: "Solt",
    label: "Solt",
  },
  {
    value: "Solti-síkság",
    label: "Solti-síkság",
  },
  {
    value: "Soltszentimre",
    label: "Soltszentimre",
  },
  {
    value: "Soltvadkert",
    label: "Soltvadkert",
  },
  {
    value: "Sóly",
    label: "Sóly",
  },
  {
    value: "Solymár",
    label: "Solymár",
  },
  {
    value: "Solymos-tó",
    label: "Solymos-tó",
  },
  {
    value: "Sólyom-dűlő",
    label: "Sólyom-dűlő",
  },
  {
    value: "Som",
    label: "Som",
  },
  {
    value: "Som-hát",
    label: "Som-hát",
  },
  {
    value: "Somberek",
    label: "Somberek",
  },
  {
    value: "Somló",
    label: "Somló",
  },
  {
    value: "Somlójenő",
    label: "Somlójenő",
  },
  {
    value: "Somlószőlős",
    label: "Somlószőlős",
  },
  {
    value: "Somlóvásárhely",
    label: "Somlóvásárhely",
  },
  {
    value: "Somlóvecse",
    label: "Somlóvecse",
  },
  {
    value: "Sömlyék",
    label: "Sömlyék",
  },
  {
    value: "Somodor",
    label: "Somodor",
  },
  {
    value: "Somogyacsa",
    label: "Somogyacsa",
  },
  {
    value: "Somogyapáti",
    label: "Somogyapáti",
  },
  {
    value: "Somogyaracs",
    label: "Somogyaracs",
  },
  {
    value: "Somogyaszaló",
    label: "Somogyaszaló",
  },
  {
    value: "Somogybabod",
    label: "Somogybabod",
  },
  {
    value: "Somogybükkösd",
    label: "Somogybükkösd",
  },
  {
    value: "Somogycsicsó",
    label: "Somogycsicsó",
  },
  {
    value: "Somogydöröcske",
    label: "Somogydöröcske",
  },
  {
    value: "Somogyegres",
    label: "Somogyegres",
  },
  {
    value: "Somogyfajsz",
    label: "Somogyfajsz",
  },
  {
    value: "Somogygeszti",
    label: "Somogygeszti",
  },
  {
    value: "Somogyhárságy",
    label: "Somogyhárságy",
  },
  {
    value: "Somogyhatvan",
    label: "Somogyhatvan",
  },
  {
    value: "Somogyi-dombság",
    label: "Somogyi-dombság",
  },
  {
    value: "Somogyjád",
    label: "Somogyjád",
  },
  {
    value: "Somogymeggyes",
    label: "Somogymeggyes",
  },
  {
    value: "Somogysámson",
    label: "Somogysámson",
  },
  {
    value: "Somogysárd",
    label: "Somogysárd",
  },
  {
    value: "Somogysimonyi",
    label: "Somogysimonyi",
  },
  {
    value: "Somogyszentpál",
    label: "Somogyszentpál",
  },
  {
    value: "Somogyszil",
    label: "Somogyszil",
  },
  {
    value: "Somogyszob",
    label: "Somogyszob",
  },
  {
    value: "Somogytúr",
    label: "Somogytúr",
  },
  {
    value: "Somogyudvarhely",
    label: "Somogyudvarhely",
  },
  {
    value: "Somogyvámos",
    label: "Somogyvámos",
  },
  {
    value: "Somogyvár",
    label: "Somogyvár",
  },
  {
    value: "Somogyviszló",
    label: "Somogyviszló",
  },
  {
    value: "Somogyzsitfa",
    label: "Somogyzsitfa",
  },
  {
    value: "Somos",
    label: "Somos",
  },
  {
    value: "Somoskőújfalu",
    label: "Somoskőújfalu",
  },
  {
    value: "Sonkád",
    label: "Sonkád",
  },
  {
    value: "Soponya",
    label: "Soponya",
  },
  {
    value: "Sopron",
    label: "Sopron",
  },
  {
    value: "Sopronhorpács",
    label: "Sopronhorpács",
  },
  {
    value: "Soproni-medence",
    label: "Soproni-medence",
  },
  {
    value: "Sopronkövesd",
    label: "Sopronkövesd",
  },
  {
    value: "Sopronnémeti",
    label: "Sopronnémeti",
  },
  {
    value: "Söpte",
    label: "Söpte",
  },
  {
    value: "Söréd",
    label: "Söréd",
  },
  {
    value: "Sorkifalud",
    label: "Sorkifalud",
  },
  {
    value: "Sorkikápolna",
    label: "Sorkikápolna",
  },
  {
    value: "Sormás",
    label: "Sormás",
  },
  {
    value: "Sorokpolány",
    label: "Sorokpolány",
  },
  {
    value: "Sós Úti Dűlő",
    label: "Sós Úti Dűlő",
  },
  {
    value: "Sós Víz",
    label: "Sós Víz",
  },
  {
    value: "Sós-tó",
    label: "Sós-tó",
  },
  {
    value: "Sóshartyán",
    label: "Sóshartyán",
  },
  {
    value: "Sóskút",
    label: "Sóskút",
  },
  {
    value: "Sóskút-telek",
    label: "Sóskút-telek",
  },
  {
    value: "Sóskúti-halastó",
    label: "Sóskúti-halastó",
  },
  {
    value: "Sóstó",
    label: "Sóstó",
  },
  {
    value: "Sóstófalva",
    label: "Sóstófalva",
  },
  {
    value: "Sóstóhegy",
    label: "Sóstóhegy",
  },
  {
    value: "Sóstói-part",
    label: "Sóstói-part",
  },
  {
    value: "Sóstóparti-halom-dűlő",
    label: "Sóstóparti-halom-dűlő",
  },
  {
    value: "Sósvertike",
    label: "Sósvertike",
  },
  {
    value: "Sötét-kerék",
    label: "Sötét-kerék",
  },
  {
    value: "Sótony",
    label: "Sótony",
  },
  {
    value: "Spinc",
    label: "Spinc",
  },
  {
    value: "Suggó",
    label: "Suggó",
  },
  {
    value: "Sugoró",
    label: "Sugoró",
  },
  {
    value: "Suhatag",
    label: "Suhatag",
  },
  {
    value: "Sukoró",
    label: "Sukoró",
  },
  {
    value: "Sükösd",
    label: "Sükösd",
  },
  {
    value: "Sulymos",
    label: "Sulymos",
  },
  {
    value: "Sulymos-tó",
    label: "Sulymos-tó",
  },
  {
    value: "Sülysáp",
    label: "Sülysáp",
  },
  {
    value: "Sumár",
    label: "Sumár",
  },
  {
    value: "Sümeg",
    label: "Sümeg",
  },
  {
    value: "Sümegcsehi",
    label: "Sümegcsehi",
  },
  {
    value: "Sümegprága",
    label: "Sümegprága",
  },
  {
    value: "Sumony",
    label: "Sumony",
  },
  {
    value: "Súr",
    label: "Súr",
  },
  {
    value: "Surd",
    label: "Surd",
  },
  {
    value: "Surgót-tag",
    label: "Surgót-tag",
  },
  {
    value: "Surjan",
    label: "Surjan",
  },
  {
    value: "Sűrűtanya",
    label: "Sűrűtanya",
  },
  {
    value: "Susány",
    label: "Susány",
  },
  {
    value: "Süttő",
    label: "Süttő",
  },
  {
    value: "Szabadbattyán",
    label: "Szabadbattyán",
  },
  {
    value: "Szabadegyháza",
    label: "Szabadegyháza",
  },
  {
    value: "Szabadhídvég",
    label: "Szabadhídvég",
  },
  {
    value: "Szabadi",
    label: "Szabadi",
  },
  {
    value: "Szabadkai-szőlők",
    label: "Szabadkai-szőlők",
  },
  {
    value: "Szabadkígyós",
    label: "Szabadkígyós",
  },
  {
    value: "Szabadszállás",
    label: "Szabadszállás",
  },
  {
    value: "Szabadszentkirály",
    label: "Szabadszentkirály",
  },
  {
    value: "Szabás",
    label: "Szabás",
  },
  {
    value: "Szabó-tag",
    label: "Szabó-tag",
  },
  {
    value: "Szabóhomoka",
    label: "Szabóhomoka",
  },
  {
    value: "Szabolcs",
    label: "Szabolcs",
  },
  {
    value: "Szabolcsbáka",
    label: "Szabolcsbáka",
  },
  {
    value: "Szabolcsveresmart",
    label: "Szabolcsveresmart",
  },
  {
    value: "Szada",
    label: "Szada",
  },
  {
    value: "Szágy",
    label: "Szágy",
  },
  {
    value: "Szaján-szög",
    label: "Szaján-szög",
  },
  {
    value: "Szajk",
    label: "Szajk",
  },
  {
    value: "Szajkó-halom",
    label: "Szajkó-halom",
  },
  {
    value: "Szajol",
    label: "Szajol",
  },
  {
    value: "Szakácsi",
    label: "Szakácsi",
  },
  {
    value: "Szakadát",
    label: "Szakadát",
  },
  {
    value: "Szakáld",
    label: "Szakáld",
  },
  {
    value: "Szakály",
    label: "Szakály",
  },
  {
    value: "Szakcs",
    label: "Szakcs",
  },
  {
    value: "Szakmár",
    label: "Szakmár",
  },
  {
    value: "Szaknyér",
    label: "Szaknyér",
  },
  {
    value: "Szakoly",
    label: "Szakoly",
  },
  {
    value: "Szakony",
    label: "Szakony",
  },
  {
    value: "Szakonyfalu",
    label: "Szakonyfalu",
  },
  {
    value: "Szákszend",
    label: "Szákszend",
  },
  {
    value: "Szalafő",
    label: "Szalafő",
  },
  {
    value: "Szalánta",
    label: "Szalánta",
  },
  {
    value: "Szalapa",
    label: "Szalapa",
  },
  {
    value: "Szalaszend",
    label: "Szalaszend",
  },
  {
    value: "Szalatnak",
    label: "Szalatnak",
  },
  {
    value: "Szálka",
    label: "Szálka",
  },
  {
    value: "Szalkszentmárton",
    label: "Szalkszentmárton",
  },
  {
    value: "Szalmatercs",
    label: "Szalmatercs",
  },
  {
    value: "Szalóki-rét",
    label: "Szalóki-rét",
  },
  {
    value: "Szalonna",
    label: "Szalonna",
  },
  {
    value: "Szamóc",
    label: "Szamóc",
  },
  {
    value: "Szamosangyalos",
    label: "Szamosangyalos",
  },
  {
    value: "Szamosbecs",
    label: "Szamosbecs",
  },
  {
    value: "Szamoskér",
    label: "Szamoskér",
  },
  {
    value: "Szamosköz",
    label: "Szamosköz",
  },
  {
    value: "Szamossályi",
    label: "Szamossályi",
  },
  {
    value: "Szamosszeg",
    label: "Szamosszeg",
  },
  {
    value: "Szamostatárfalva",
    label: "Szamostatárfalva",
  },
  {
    value: "Szamosújlak",
    label: "Szamosújlak",
  },
  {
    value: "Szána-bérc",
    label: "Szána-bérc",
  },
  {
    value: "Szanda",
    label: "Szanda",
  },
  {
    value: "Szank",
    label: "Szank",
  },
  {
    value: "Szanticska",
    label: "Szanticska",
  },
  {
    value: "Szántó",
    label: "Szántó",
  },
  {
    value: "Szántód",
    label: "Szántód",
  },
  {
    value: "Szany",
    label: "Szany",
  },
  {
    value: "Szápár",
    label: "Szápár",
  },
  {
    value: "Szaporca",
    label: "Szaporca",
  },
  {
    value: "Szappanos-zug",
    label: "Szappanos-zug",
  },
  {
    value: "Szappanosi-szőlők",
    label: "Szappanosi-szőlők",
  },
  {
    value: "Szár",
    label: "Szár",
  },
  {
    value: "Szár-hegy-dűlő",
    label: "Szár-hegy-dűlő",
  },
  {
    value: "Szárász",
    label: "Szárász",
  },
  {
    value: "Száraz-Bő",
    label: "Száraz-Bő",
  },
  {
    value: "Száraz-rét",
    label: "Száraz-rét",
  },
  {
    value: "Szárazd",
    label: "Szárazd",
  },
  {
    value: "Szárföld",
    label: "Szárföld",
  },
  {
    value: "Szarkás",
    label: "Szarkás",
  },
  {
    value: "Szárliget",
    label: "Szárliget",
  },
  {
    value: "Szartos",
    label: "Szartos",
  },
  {
    value: "Szarvas",
    label: "Szarvas",
  },
  {
    value: "Szarvasgede",
    label: "Szarvasgede",
  },
  {
    value: "Szarvaskend",
    label: "Szarvaskend",
  },
  {
    value: "Szászberek",
    label: "Szászberek",
  },
  {
    value: "Szászfa",
    label: "Szászfa",
  },
  {
    value: "Szászvár",
    label: "Szászvár",
  },
  {
    value: "Szatmárcseke",
    label: "Szatmárcseke",
  },
  {
    value: "Szatmári-Tiszahát",
    label: "Szatmári-Tiszahát",
  },
  {
    value: "Szátok",
    label: "Szátok",
  },
  {
    value: "Szatta",
    label: "Szatta",
  },
  {
    value: "Szatymaz",
    label: "Szatymaz",
  },
  {
    value: "Szava",
    label: "Szava",
  },
  {
    value: "Százhalombatta",
    label: "Százhalombatta",
  },
  {
    value: "Szazhold-parlag",
    label: "Szazhold-parlag",
  },
  {
    value: "Százölkútipuszta",
    label: "Százölkútipuszta",
  },
  {
    value: "Szebény",
    label: "Szebény",
  },
  {
    value: "Szécsénke",
    label: "Szécsénke",
  },
  {
    value: "Szécsény",
    label: "Szécsény",
  },
  {
    value: "Szécsényfelfalu",
    label: "Szécsényfelfalu",
  },
  {
    value: "Szécsisziget",
    label: "Szécsisziget",
  },
  {
    value: "Szederjes",
    label: "Szederjes",
  },
  {
    value: "Szederkény",
    label: "Szederkény",
  },
  {
    value: "Szedres",
    label: "Szedres",
  },
  {
    value: "Szeg-határ",
    label: "Szeg-határ",
  },
  {
    value: "Szeged",
    label: "Szeged",
  },
  {
    value: "Szegerdő",
    label: "Szegerdő",
  },
  {
    value: "Szeghalom",
    label: "Szeghalom",
  },
  {
    value: "Szegi",
    label: "Szegi",
  },
  {
    value: "Szegilong",
    label: "Szegilong",
  },
  {
    value: "Szegvár",
    label: "Szegvár",
  },
  {
    value: "Szeikő",
    label: "Szeikő",
  },
  {
    value: "Szék-folyás-dűlő",
    label: "Szék-folyás-dűlő",
  },
  {
    value: "Szék-halmi-dűlő",
    label: "Szék-halmi-dűlő",
  },
  {
    value: "Székely",
    label: "Székely",
  },
  {
    value: "Székelyszabar",
    label: "Székelyszabar",
  },
  {
    value: "Szekeres-tag",
    label: "Szekeres-tag",
  },
  {
    value: "Székes",
    label: "Székes",
  },
  {
    value: "Székesfehérvár",
    label: "Székesfehérvár",
  },
  {
    value: "Székkutas",
    label: "Székkutas",
  },
  {
    value: "Szekszárd",
    label: "Szekszárd",
  },
  {
    value: "Szél-lyuk",
    label: "Szél-lyuk",
  },
  {
    value: "Szél-rét Alja",
    label: "Szél-rét Alja",
  },
  {
    value: "Szelencés",
    label: "Szelencés",
  },
  {
    value: "Szelep",
    label: "Szelep",
  },
  {
    value: "Szeles",
    label: "Szeles",
  },
  {
    value: "Szeles-hát",
    label: "Szeles-hát",
  },
  {
    value: "Szélesdűlő",
    label: "Szélesdűlő",
  },
  {
    value: "Szeleste",
    label: "Szeleste",
  },
  {
    value: "Szelevény",
    label: "Szelevény",
  },
  {
    value: "Szélföld",
    label: "Szélföld",
  },
  {
    value: "Szelidi-tó",
    label: "Szelidi-tó",
  },
  {
    value: "Szelidpuszta",
    label: "Szelidpuszta",
  },
  {
    value: "Szellő",
    label: "Szellő",
  },
  {
    value: "Szellő-hát",
    label: "Szellő-hát",
  },
  {
    value: "Szemely",
    label: "Szemely",
  },
  {
    value: "Szemenye",
    label: "Szemenye",
  },
  {
    value: "Szemere",
    label: "Szemere",
  },
  {
    value: "Szemeri-tag",
    label: "Szemeri-tag",
  },
  {
    value: "Szemőt-halom",
    label: "Szemőt-halom",
  },
  {
    value: "Széna-háti-dűlő",
    label: "Széna-háti-dűlő",
  },
  {
    value: "Szendehely",
    label: "Szendehely",
  },
  {
    value: "Szendrő",
    label: "Szendrő",
  },
  {
    value: "Szendrőlád",
    label: "Szendrőlád",
  },
  {
    value: "Szenna",
    label: "Szenna",
  },
  {
    value: "Szenta",
    label: "Szenta",
  },
  {
    value: "Szentantalfa",
    label: "Szentantalfa",
  },
  {
    value: "Szentbalázs",
    label: "Szentbalázs",
  },
  {
    value: "Szentbékkálla",
    label: "Szentbékkálla",
  },
  {
    value: "Szentborbás",
    label: "Szentborbás",
  },
  {
    value: "Szentdénes",
    label: "Szentdénes",
  },
  {
    value: "Szente",
    label: "Szente",
  },
  {
    value: "Szentes",
    label: "Szentes",
  },
  {
    value: "Szentegát",
    label: "Szentegát",
  },
  {
    value: "Szentendre",
    label: "Szentendre",
  },
  {
    value: "Szentendrei-sziget",
    label: "Szentendrei-sziget",
  },
  {
    value: "Szentgál",
    label: "Szentgál",
  },
  {
    value: "Szentgáloskér",
    label: "Szentgáloskér",
  },
  {
    value: "Szentgotthárd",
    label: "Szentgotthárd",
  },
  {
    value: "Szentgyörgyvár",
    label: "Szentgyörgyvár",
  },
  {
    value: "Szentgyörgyvölgy",
    label: "Szentgyörgyvölgy",
  },
  {
    value: "Szentimre",
    label: "Szentimre",
  },
  {
    value: "Szentimrefalva",
    label: "Szentimrefalva",
  },
  {
    value: "Szentistván",
    label: "Szentistván",
  },
  {
    value: "Szentistvánbaksa",
    label: "Szentistvánbaksa",
  },
  {
    value: "Szentjakab",
    label: "Szentjakab",
  },
  {
    value: "Szentjakabfa",
    label: "Szentjakabfa",
  },
  {
    value: "Szentkatalin",
    label: "Szentkatalin",
  },
  {
    value: "Szentkirály",
    label: "Szentkirály",
  },
  {
    value: "Szentkirályszabadja",
    label: "Szentkirályszabadja",
  },
  {
    value: "Szentkozmadombja",
    label: "Szentkozmadombja",
  },
  {
    value: "Szentlászló",
    label: "Szentlászló",
  },
  {
    value: "Szentliszló",
    label: "Szentliszló",
  },
  {
    value: "Szentlőrinc",
    label: "Szentlőrinc",
  },
  {
    value: "Szentlőrinckáta",
    label: "Szentlőrinckáta",
  },
  {
    value: "Szentmargitfalva",
    label: "Szentmargitfalva",
  },
  {
    value: "Szentmártonkáta",
    label: "Szentmártonkáta",
  },
  {
    value: "Szentpéterfa",
    label: "Szentpéterfa",
  },
  {
    value: "Szentpéterfölde",
    label: "Szentpéterfölde",
  },
  {
    value: "Szentpéterszeg",
    label: "Szentpéterszeg",
  },
  {
    value: "Szentpéterúr",
    label: "Szentpéterúr",
  },
  {
    value: "Szenyér",
    label: "Szenyér",
  },
  {
    value: "Szép-fa",
    label: "Szép-fa",
  },
  {
    value: "Szepetnek",
    label: "Szepetnek",
  },
  {
    value: "Szerdahely",
    label: "Szerdahely",
  },
  {
    value: "Szerecseni Újtelep",
    label: "Szerecseni Újtelep",
  },
  {
    value: "Szerecseny",
    label: "Szerecseny",
  },
  {
    value: "Szeredvény",
    label: "Szeredvény",
  },
  {
    value: "Szeremle",
    label: "Szeremle",
  },
  {
    value: "Szerencs",
    label: "Szerencs",
  },
  {
    value: "Szerep",
    label: "Szerep",
  },
  {
    value: "Szergény",
    label: "Szergény",
  },
  {
    value: "Sziget",
    label: "Sziget",
  },
  {
    value: "Szigetbecse",
    label: "Szigetbecse",
  },
  {
    value: "Szigetcsép",
    label: "Szigetcsép",
  },
  {
    value: "Szigethalom",
    label: "Szigethalom",
  },
  {
    value: "Szigetköz",
    label: "Szigetköz",
  },
  {
    value: "Szigetmonostor",
    label: "Szigetmonostor",
  },
  {
    value: "Szigetorri-dűlő",
    label: "Szigetorri-dűlő",
  },
  {
    value: "Szigetszentmárton",
    label: "Szigetszentmárton",
  },
  {
    value: "Szigetszentmiklós",
    label: "Szigetszentmiklós",
  },
  {
    value: "Szigetújfalu",
    label: "Szigetújfalu",
  },
  {
    value: "Szigetvár",
    label: "Szigetvár",
  },
  {
    value: "Szigliget",
    label: "Szigliget",
  },
  {
    value: "Szijártóháza",
    label: "Szijártóháza",
  },
  {
    value: "Szik-ér-hát",
    label: "Szik-ér-hát",
  },
  {
    value: "Szikszó",
    label: "Szikszó",
  },
  {
    value: "Szil",
    label: "Szil",
  },
  {
    value: "Szil Alja",
    label: "Szil Alja",
  },
  {
    value: "Szil-aszó",
    label: "Szil-aszó",
  },
  {
    value: "Szilágy",
    label: "Szilágy",
  },
  {
    value: "Szilágyi-tag",
    label: "Szilágyi-tag",
  },
  {
    value: "Szilas",
    label: "Szilas",
  },
  {
    value: "Szilaspogony",
    label: "Szilaspogony",
  },
  {
    value: "Szilfás",
    label: "Szilfás",
  },
  {
    value: "Szilos",
    label: "Szilos",
  },
  {
    value: "Szilsárkány",
    label: "Szilsárkány",
  },
  {
    value: "Szilvácsku",
    label: "Szilvácsku",
  },
  {
    value: "Szilvágy",
    label: "Szilvágy",
  },
  {
    value: "Szilvás",
    label: "Szilvás",
  },
  {
    value: "Szilvási-kő",
    label: "Szilvási-kő",
  },
  {
    value: "Szilvásszentmárton",
    label: "Szilvásszentmárton",
  },
  {
    value: "Szilvásvárad",
    label: "Szilvásvárad",
  },
  {
    value: "Szin",
    label: "Szin",
  },
  {
    value: "Szinpetri",
    label: "Szinpetri",
  },
  {
    value: "Szionda I.",
    label: "Szionda I.",
  },
  {
    value: "Szirák",
    label: "Szirák",
  },
  {
    value: "Szirmabesenyő",
    label: "Szirmabesenyő",
  },
  {
    value: "Szivác",
    label: "Szivác",
  },
  {
    value: "Szob",
    label: "Szob",
  },
  {
    value: "Szoboszlai-tag",
    label: "Szoboszlai-tag",
  },
  {
    value: "Szőc",
    label: "Szőc",
  },
  {
    value: "Szőce",
    label: "Szőce",
  },
  {
    value: "Szöcsködipuszta",
    label: "Szöcsködipuszta",
  },
  {
    value: "Sződ",
    label: "Sződ",
  },
  {
    value: "Sződliget",
    label: "Sződliget",
  },
  {
    value: "Szög-határ-dűlő",
    label: "Szög-határ-dűlő",
  },
  {
    value: "Szögliget",
    label: "Szögliget",
  },
  {
    value: "Szőke",
    label: "Szőke",
  },
  {
    value: "Szőke-hát",
    label: "Szőke-hát",
  },
  {
    value: "Szőke-sziget",
    label: "Szőke-sziget",
  },
  {
    value: "Szőkéd",
    label: "Szőkéd",
  },
  {
    value: "Szőkedencs",
    label: "Szőkedencs",
  },
  {
    value: "Szokolya",
    label: "Szokolya",
  },
  {
    value: "Szólád",
    label: "Szólád",
  },
  {
    value: "Szolnok",
    label: "Szolnok",
  },
  {
    value: "Szolnok-tó",
    label: "Szolnok-tó",
  },
  {
    value: "Szőlő Alja",
    label: "Szőlő Alja",
  },
  {
    value: "Szőlő Megi-hegy",
    label: "Szőlő Megi-hegy",
  },
  {
    value: "Szőlő-lapos",
    label: "Szőlő-lapos",
  },
  {
    value: "Szőlő-máj-hát",
    label: "Szőlő-máj-hát",
  },
  {
    value: "Szőlősardó",
    label: "Szőlősardó",
  },
  {
    value: "Szőlősgyörök",
    label: "Szőlősgyörök",
  },
  {
    value: "Szőlősitanya",
    label: "Szőlősitanya",
  },
  {
    value: "Szőlőske",
    label: "Szőlőske",
  },
  {
    value: "Szőlőskert",
    label: "Szőlőskert",
  },
  {
    value: "Szombat-kereki",
    label: "Szombat-kereki",
  },
  {
    value: "Szombathely",
    label: "Szombathely",
  },
  {
    value: "Szomjú-hát",
    label: "Szomjú-hát",
  },
  {
    value: "Szomód",
    label: "Szomód",
  },
  {
    value: "Szomolló",
    label: "Szomolló",
  },
  {
    value: "Szomolya",
    label: "Szomolya",
  },
  {
    value: "Szomor",
    label: "Szomor",
  },
  {
    value: "Szőny",
    label: "Szőny",
  },
  {
    value: "Szőr-hát",
    label: "Szőr-hát",
  },
  {
    value: "Szőr-hát-dűlő",
    label: "Szőr-hát-dűlő",
  },
  {
    value: "Szörény",
    label: "Szörény",
  },
  {
    value: "Szorgalmatos",
    label: "Szorgalmatos",
  },
  {
    value: "Szőrös-halom",
    label: "Szőrös-halom",
  },
  {
    value: "Szorosad",
    label: "Szorosad",
  },
  {
    value: "Szováti-útfél",
    label: "Szováti-útfél",
  },
  {
    value: "Szúcs",
    label: "Szúcs",
  },
  {
    value: "Szügy",
    label: "Szügy",
  },
  {
    value: "Szuha",
    label: "Szuha",
  },
  {
    value: "Szuhafő",
    label: "Szuhafő",
  },
  {
    value: "Szuhakálló",
    label: "Szuhakálló",
  },
  {
    value: "Szuhányi-tag",
    label: "Szuhányi-tag",
  },
  {
    value: "Szuhatanya",
    label: "Szuhatanya",
  },
  {
    value: "Szuhogy",
    label: "Szuhogy",
  },
  {
    value: "Szulimán",
    label: "Szulimán",
  },
  {
    value: "Szulok",
    label: "Szulok",
  },
  {
    value: "Szúnyogos",
    label: "Szúnyogos",
  },
  {
    value: "Szűr",
    label: "Szűr",
  },
  {
    value: "Szurdokpüspöki",
    label: "Szurdokpüspöki",
  },
  {
    value: "Szurkos",
    label: "Szurkos",
  },
  {
    value: "Tab",
    label: "Tab",
  },
  {
    value: "Tabajd",
    label: "Tabajd",
  },
  {
    value: "Tabdi",
    label: "Tabdi",
  },
  {
    value: "Tábér",
    label: "Tábér",
  },
  {
    value: "Táborfalva",
    label: "Táborfalva",
  },
  {
    value: "Tác",
    label: "Tác",
  },
  {
    value: "Tagi-nyilas",
    label: "Tagi-nyilas",
  },
  {
    value: "Tagyon",
    label: "Tagyon",
  },
  {
    value: "Tahitótfalu",
    label: "Tahitótfalu",
  },
  {
    value: "Takácsi",
    label: "Takácsi",
  },
  {
    value: "Takácstanya",
    label: "Takácstanya",
  },
  {
    value: "Takaros",
    label: "Takaros",
  },
  {
    value: "Tákos",
    label: "Tákos",
  },
  {
    value: "Taksony",
    label: "Taksony",
  },
  {
    value: "Taktabáj",
    label: "Taktabáj",
  },
  {
    value: "Taktaharkány",
    label: "Taktaharkány",
  },
  {
    value: "Taktakenéz",
    label: "Taktakenéz",
  },
  {
    value: "Taktaköz",
    label: "Taktaköz",
  },
  {
    value: "Taktaszada",
    label: "Taktaszada",
  },
  {
    value: "Taliándörögd",
    label: "Taliándörögd",
  },
  {
    value: "Tállya",
    label: "Tállya",
  },
  {
    value: "Tamás-hát",
    label: "Tamás-hát",
  },
  {
    value: "Tamási",
    label: "Tamási",
  },
  {
    value: "Tanakajd",
    label: "Tanakajd",
  },
  {
    value: "Táp",
    label: "Táp",
  },
  {
    value: "Tápió-vidék",
    label: "Tápió-vidék",
  },
  {
    value: "Tápióbicske",
    label: "Tápióbicske",
  },
  {
    value: "Tápiógyörgye",
    label: "Tápiógyörgye",
  },
  {
    value: "Tápióság",
    label: "Tápióság",
  },
  {
    value: "Tápiószecső",
    label: "Tápiószecső",
  },
  {
    value: "Tápiószele",
    label: "Tápiószele",
  },
  {
    value: "Tápiószentmárton",
    label: "Tápiószentmárton",
  },
  {
    value: "Tápiószőlős",
    label: "Tápiószőlős",
  },
  {
    value: "Táplánszentkereszt",
    label: "Táplánszentkereszt",
  },
  {
    value: "Tapolca",
    label: "Tapolca",
  },
  {
    value: "Tapsony",
    label: "Tapsony",
  },
  {
    value: "Tápszentmiklós",
    label: "Tápszentmiklós",
  },
  {
    value: "Tar",
    label: "Tar",
  },
  {
    value: "Tarafű",
    label: "Tarafű",
  },
  {
    value: "Tarany",
    label: "Tarany",
  },
  {
    value: "Tarcal",
    label: "Tarcal",
  },
  {
    value: "Tarcsa",
    label: "Tarcsa",
  },
  {
    value: "Tard",
    label: "Tard",
  },
  {
    value: "Tardona",
    label: "Tardona",
  },
  {
    value: "Tardos",
    label: "Tardos",
  },
  {
    value: "Tarhos",
    label: "Tarhos",
  },
  {
    value: "Tarján",
    label: "Tarján",
  },
  {
    value: "Tarjánkai-dűlő",
    label: "Tarjánkai-dűlő",
  },
  {
    value: "Tarjánpuszta",
    label: "Tarjánpuszta",
  },
  {
    value: "Tárkány",
    label: "Tárkány",
  },
  {
    value: "Tárkányi-tag",
    label: "Tárkányi-tag",
  },
  {
    value: "Tarnabod",
    label: "Tarnabod",
  },
  {
    value: "Tarnalelesz",
    label: "Tarnalelesz",
  },
  {
    value: "Tarnaméra",
    label: "Tarnaméra",
  },
  {
    value: "Tarnaörs",
    label: "Tarnaörs",
  },
  {
    value: "Tarnaszentmária",
    label: "Tarnaszentmária",
  },
  {
    value: "Tarnaszentmiklós",
    label: "Tarnaszentmiklós",
  },
  {
    value: "Tarnócapuszta",
    label: "Tarnócapuszta",
  },
  {
    value: "Tárnok",
    label: "Tárnok",
  },
  {
    value: "Tárnokréti",
    label: "Tárnokréti",
  },
  {
    value: "Tarpa",
    label: "Tarpa",
  },
  {
    value: "Tarpai-hegy",
    label: "Tarpai-hegy",
  },
  {
    value: "Tarrós",
    label: "Tarrós",
  },
  {
    value: "Táska",
    label: "Táska",
  },
  {
    value: "Tass",
    label: "Tass",
  },
  {
    value: "Taszár",
    label: "Taszár",
  },
  {
    value: "Tát",
    label: "Tát",
  },
  {
    value: "Tata",
    label: "Tata",
  },
  {
    value: "Tatabánya",
    label: "Tatabánya",
  },
  {
    value: "Tataháza",
    label: "Tataháza",
  },
  {
    value: "Tatai-tó",
    label: "Tatai-tó",
  },
  {
    value: "Tatárszentgyörgy",
    label: "Tatárszentgyörgy",
  },
  {
    value: "Tázlár",
    label: "Tázlár",
  },
  {
    value: "Téglás",
    label: "Téglás",
  },
  {
    value: "Téglás-kút",
    label: "Téglás-kút",
  },
  {
    value: "Tekenye",
    label: "Tekenye",
  },
  {
    value: "Tékes",
    label: "Tékes",
  },
  {
    value: "Teklafalu",
    label: "Teklafalu",
  },
  {
    value: "Telbisz-dűlő",
    label: "Telbisz-dűlő",
  },
  {
    value: "Telekes",
    label: "Telekes",
  },
  {
    value: "Telekgerendás",
    label: "Telekgerendás",
  },
  {
    value: "Telekhalmi-halastavak",
    label: "Telekhalmi-halastavak",
  },
  {
    value: "Teleki",
    label: "Teleki",
  },
  {
    value: "Telekút-dűlő",
    label: "Telekút-dűlő",
  },
  {
    value: "Telelői-földek",
    label: "Telelői-földek",
  },
  {
    value: "Telki",
    label: "Telki",
  },
  {
    value: "Telkibánya",
    label: "Telkibánya",
  },
  {
    value: "Tengelic",
    label: "Tengelic",
  },
  {
    value: "Tengeri",
    label: "Tengeri",
  },
  {
    value: "Tengeri-zug",
    label: "Tengeri-zug",
  },
  {
    value: "Tengőd",
    label: "Tengőd",
  },
  {
    value: "Tenk",
    label: "Tenk",
  },
  {
    value: "Tenke",
    label: "Tenke",
  },
  {
    value: "Tényő",
    label: "Tényő",
  },
  {
    value: "Tépe",
    label: "Tépe",
  },
  {
    value: "Tepélypuszta",
    label: "Tepélypuszta",
  },
  {
    value: "Térdes",
    label: "Térdes",
  },
  {
    value: "Terem",
    label: "Terem",
  },
  {
    value: "Terem-szeg",
    label: "Terem-szeg",
  },
  {
    value: "Terény",
    label: "Terény",
  },
  {
    value: "Tereske",
    label: "Tereske",
  },
  {
    value: "Teresztenye",
    label: "Teresztenye",
  },
  {
    value: "Tés",
    label: "Tés",
  },
  {
    value: "Tésa",
    label: "Tésa",
  },
  {
    value: "Tésenfa",
    label: "Tésenfa",
  },
  {
    value: "Téseny",
    label: "Téseny",
  },
  {
    value: "Teskánd",
    label: "Teskánd",
  },
  {
    value: "Tessedik-zug",
    label: "Tessedik-zug",
  },
  {
    value: "Tét",
    label: "Tét",
  },
  {
    value: "Tétel-hát",
    label: "Tétel-hát",
  },
  {
    value: "Tetétlen",
    label: "Tetétlen",
  },
  {
    value: "Tevel",
    label: "Tevel",
  },
  {
    value: "Tibolddaróc",
    label: "Tibolddaróc",
  },
  {
    value: "Tiborszállás",
    label: "Tiborszállás",
  },
  {
    value: "Tihany",
    label: "Tihany",
  },
  {
    value: "Tikos",
    label: "Tikos",
  },
  {
    value: "Tilaj",
    label: "Tilaj",
  },
  {
    value: "Tilajpuszta",
    label: "Tilajpuszta",
  },
  {
    value: "Tilalmas",
    label: "Tilalmas",
  },
  {
    value: "Timár",
    label: "Timár",
  },
  {
    value: "Tinnye",
    label: "Tinnye",
  },
  {
    value: "Tisza Köze",
    label: "Tisza Köze",
  },
  {
    value: "Tisza-hát",
    label: "Tisza-hát",
  },
  {
    value: "Tiszaadony",
    label: "Tiszaadony",
  },
  {
    value: "Tiszaalpár",
    label: "Tiszaalpár",
  },
  {
    value: "Tiszabábolna",
    label: "Tiszabábolna",
  },
  {
    value: "Tiszabecs",
    label: "Tiszabecs",
  },
  {
    value: "Tiszabercel",
    label: "Tiszabercel",
  },
  {
    value: "Tiszabezdéd",
    label: "Tiszabezdéd",
  },
  {
    value: "Tiszabő",
    label: "Tiszabő",
  },
  {
    value: "Tiszabura",
    label: "Tiszabura",
  },
  {
    value: "Tiszacsécse",
    label: "Tiszacsécse",
  },
  {
    value: "Tiszacsege",
    label: "Tiszacsege",
  },
  {
    value: "Tiszacsermely",
    label: "Tiszacsermely",
  },
  {
    value: "Tiszadada",
    label: "Tiszadada",
  },
  {
    value: "Tiszaderzs",
    label: "Tiszaderzs",
  },
  {
    value: "Tiszadob",
    label: "Tiszadob",
  },
  {
    value: "Tiszadorogma",
    label: "Tiszadorogma",
  },
  {
    value: "Tiszaeszlár",
    label: "Tiszaeszlár",
  },
  {
    value: "Tiszaföldvár",
    label: "Tiszaföldvár",
  },
  {
    value: "Tiszafüred",
    label: "Tiszafüred",
  },
  {
    value: "Tiszagyenda",
    label: "Tiszagyenda",
  },
  {
    value: "Tiszagyulaháza",
    label: "Tiszagyulaháza",
  },
  {
    value: "Tiszaigar",
    label: "Tiszaigar",
  },
  {
    value: "Tiszainoka",
    label: "Tiszainoka",
  },
  {
    value: "Tiszajenő",
    label: "Tiszajenő",
  },
  {
    value: "Tiszakanyár",
    label: "Tiszakanyár",
  },
  {
    value: "Tiszakarád",
    label: "Tiszakarád",
  },
  {
    value: "Tiszakécske",
    label: "Tiszakécske",
  },
  {
    value: "Tiszakerecseny",
    label: "Tiszakerecseny",
  },
  {
    value: "Tiszakeszi",
    label: "Tiszakeszi",
  },
  {
    value: "Tiszakóród",
    label: "Tiszakóród",
  },
  {
    value: "Tiszakürt",
    label: "Tiszakürt",
  },
  {
    value: "Tiszaladány",
    label: "Tiszaladány",
  },
  {
    value: "Tiszalök",
    label: "Tiszalök",
  },
  {
    value: "Tiszalúc",
    label: "Tiszalúc",
  },
  {
    value: "Tiszamogyorós",
    label: "Tiszamogyorós",
  },
  {
    value: "Tiszanagyfalu",
    label: "Tiszanagyfalu",
  },
  {
    value: "Tiszántúl",
    label: "Tiszántúl",
  },
  {
    value: "Tiszaörs",
    label: "Tiszaörs",
  },
  {
    value: "Tiszapalkonya",
    label: "Tiszapalkonya",
  },
  {
    value: "Tiszapüspöki",
    label: "Tiszapüspöki",
  },
  {
    value: "Tiszarád",
    label: "Tiszarád",
  },
  {
    value: "Tiszaroff",
    label: "Tiszaroff",
  },
  {
    value: "Tiszasas",
    label: "Tiszasas",
  },
  {
    value: "Tiszaszalka",
    label: "Tiszaszalka",
  },
  {
    value: "Tiszaszentimre",
    label: "Tiszaszentimre",
  },
  {
    value: "Tiszaszentmárton",
    label: "Tiszaszentmárton",
  },
  {
    value: "Tiszasziget",
    label: "Tiszasziget",
  },
  {
    value: "Tiszatanya",
    label: "Tiszatanya",
  },
  {
    value: "Tiszatardos",
    label: "Tiszatardos",
  },
  {
    value: "Tiszatarján",
    label: "Tiszatarján",
  },
  {
    value: "Tiszatelek",
    label: "Tiszatelek",
  },
  {
    value: "Tiszatenyő",
    label: "Tiszatenyő",
  },
  {
    value: "Tiszaug",
    label: "Tiszaug",
  },
  {
    value: "Tiszaújváros",
    label: "Tiszaújváros",
  },
  {
    value: "Tiszavalk",
    label: "Tiszavalk",
  },
  {
    value: "Tiszavárkony",
    label: "Tiszavárkony",
  },
  {
    value: "Tiszavasvári",
    label: "Tiszavasvári",
  },
  {
    value: "Tiszavid",
    label: "Tiszavid",
  },
  {
    value: "Tiszazug",
    label: "Tiszazug",
  },
  {
    value: "Tisztaberek",
    label: "Tisztaberek",
  },
  {
    value: "Tivadar",
    label: "Tivadar",
  },
  {
    value: "Tó-hát",
    label: "Tó-hát",
  },
  {
    value: "Tó-hegy",
    label: "Tó-hegy",
  },
  {
    value: "Tó-lapos",
    label: "Tó-lapos",
  },
  {
    value: "Tó-lapos-dűlő",
    label: "Tó-lapos-dűlő",
  },
  {
    value: "Tóalmás",
    label: "Tóalmás",
  },
  {
    value: "Tobány",
    label: "Tobány",
  },
  {
    value: "Tófej",
    label: "Tófej",
  },
  {
    value: "Tófű",
    label: "Tófű",
  },
  {
    value: "Tógát",
    label: "Tógát",
  },
  {
    value: "Tök",
    label: "Tök",
  },
  {
    value: "Tokaj",
    label: "Tokaj",
  },
  {
    value: "Tókaj",
    label: "Tókaj",
  },
  {
    value: "Tokaj-dűlő",
    label: "Tokaj-dűlő",
  },
  {
    value: "Tokaji-hegy",
    label: "Tokaji-hegy",
  },
  {
    value: "Tokod",
    label: "Tokod",
  },
  {
    value: "Tokodaltáró",
    label: "Tokodaltáró",
  },
  {
    value: "Tököl",
    label: "Tököl",
  },
  {
    value: "Tokorcs",
    label: "Tokorcs",
  },
  {
    value: "Tóköz",
    label: "Tóköz",
  },
  {
    value: "Tólága",
    label: "Tólága",
  },
  {
    value: "Tolcsva",
    label: "Tolcsva",
  },
  {
    value: "Told",
    label: "Told",
  },
  {
    value: "Tolmács",
    label: "Tolmács",
  },
  {
    value: "Tolna",
    label: "Tolna",
  },
  {
    value: "Tolnanémedi",
    label: "Tolnanémedi",
  },
  {
    value: "Töltéstava",
    label: "Töltéstava",
  },
  {
    value: "Tölyvös-dűlő",
    label: "Tölyvös-dűlő",
  },
  {
    value: "Tomaj",
    label: "Tomaj",
  },
  {
    value: "Tomajmonostora",
    label: "Tomajmonostora",
  },
  {
    value: "Tomor",
    label: "Tomor",
  },
  {
    value: "Tömörd",
    label: "Tömörd",
  },
  {
    value: "Tomori-tag",
    label: "Tomori-tag",
  },
  {
    value: "Tömörke",
    label: "Tömörke",
  },
  {
    value: "Tömörkény",
    label: "Tömörkény",
  },
  {
    value: "Tompa",
    label: "Tompa",
  },
  {
    value: "Tompa-dűlő",
    label: "Tompa-dűlő",
  },
  {
    value: "Tompaládony",
    label: "Tompaládony",
  },
  {
    value: "Tömpös",
    label: "Tömpös",
  },
  {
    value: "Tópástyapuszta",
    label: "Tópástyapuszta",
  },
  {
    value: "Topolya",
    label: "Topolya",
  },
  {
    value: "Tordas",
    label: "Tordas",
  },
  {
    value: "Tormafölde",
    label: "Tormafölde",
  },
  {
    value: "Tormás",
    label: "Tormás",
  },
  {
    value: "Tormási-földek",
    label: "Tormási-földek",
  },
  {
    value: "Tormásliget",
    label: "Tormásliget",
  },
  {
    value: "Tornabarakony",
    label: "Tornabarakony",
  },
  {
    value: "Tornakápolna",
    label: "Tornakápolna",
  },
  {
    value: "Tornanádaska",
    label: "Tornanádaska",
  },
  {
    value: "Tornaszentandrás",
    label: "Tornaszentandrás",
  },
  {
    value: "Tornaszentjakab",
    label: "Tornaszentjakab",
  },
  {
    value: "Tornyiszentmiklós",
    label: "Tornyiszentmiklós",
  },
  {
    value: "Tornyosnémeti",
    label: "Tornyosnémeti",
  },
  {
    value: "Tornyospálca",
    label: "Tornyospálca",
  },
  {
    value: "Török-csapás",
    label: "Török-csapás",
  },
  {
    value: "Török-dűlő",
    label: "Török-dűlő",
  },
  {
    value: "Török-sziget",
    label: "Török-sziget",
  },
  {
    value: "Török-tag",
    label: "Török-tag",
  },
  {
    value: "Török-tanya",
    label: "Török-tanya",
  },
  {
    value: "Törökbálint",
    label: "Törökbálint",
  },
  {
    value: "Törökkoppány",
    label: "Törökkoppány",
  },
  {
    value: "Törökszentmiklós",
    label: "Törökszentmiklós",
  },
  {
    value: "Torony",
    label: "Torony",
  },
  {
    value: "Törtel",
    label: "Törtel",
  },
  {
    value: "Torvaj",
    label: "Torvaj",
  },
  {
    value: "Tószeg",
    label: "Tószeg",
  },
  {
    value: "Tót-ér-hát",
    label: "Tót-ér-hát",
  },
  {
    value: "Tót-sziget",
    label: "Tót-sziget",
  },
  {
    value: "Tóth László Dűlő",
    label: "Tóth László Dűlő",
  },
  {
    value: "Tóth-mező",
    label: "Tóth-mező",
  },
  {
    value: "Tótkomlós",
    label: "Tótkomlós",
  },
  {
    value: "Tótszentgyörgy",
    label: "Tótszentgyörgy",
  },
  {
    value: "Tótszentmárton",
    label: "Tótszentmárton",
  },
  {
    value: "Tótszerdahely",
    label: "Tótszerdahely",
  },
  {
    value: "Töttös",
    label: "Töttös",
  },
  {
    value: "Tótújfalu",
    label: "Tótújfalu",
  },
  {
    value: "Tótvázsony",
    label: "Tótvázsony",
  },
  {
    value: "Töviskestanya",
    label: "Töviskestanya",
  },
  {
    value: "Trizs",
    label: "Trizs",
  },
  {
    value: "Tubes",
    label: "Tubes",
  },
  {
    value: "Tukaszilágy",
    label: "Tukaszilágy",
  },
  {
    value: "Tukótanya",
    label: "Tukótanya",
  },
  {
    value: "Tullusi-dűlő",
    label: "Tullusi-dűlő",
  },
  {
    value: "Tungli-malom",
    label: "Tungli-malom",
  },
  {
    value: "Tunyogmatolcs",
    label: "Tunyogmatolcs",
  },
  {
    value: "Túr-tő",
    label: "Túr-tő",
  },
  {
    value: "Tura",
    label: "Tura",
  },
  {
    value: "Turbék",
    label: "Turbék",
  },
  {
    value: "Turgony",
    label: "Turgony",
  },
  {
    value: "Túristvándi",
    label: "Túristvándi",
  },
  {
    value: "Türje",
    label: "Türje",
  },
  {
    value: "Túrkeddi-kert",
    label: "Túrkeddi-kert",
  },
  {
    value: "Túrkeve",
    label: "Túrkeve",
  },
  {
    value: "Túrkevei-Csorba",
    label: "Túrkevei-Csorba",
  },
  {
    value: "Túró-mező",
    label: "Túró-mező",
  },
  {
    value: "Túródi",
    label: "Túródi",
  },
  {
    value: "Túrony",
    label: "Túrony",
  },
  {
    value: "Túrricse",
    label: "Túrricse",
  },
  {
    value: "Tüskevár",
    label: "Tüskevár",
  },
  {
    value: "Tuskós",
    label: "Tuskós",
  },
  {
    value: "Túzokmajor",
    label: "Túzokmajor",
  },
  {
    value: "Túzokos",
    label: "Túzokos",
  },
  {
    value: "Tuzsa",
    label: "Tuzsa",
  },
  {
    value: "Tuzsér",
    label: "Tuzsér",
  },
  {
    value: "Tyukod",
    label: "Tyukod",
  },
  {
    value: "Ucekaj",
    label: "Ucekaj",
  },
  {
    value: "Udvar",
    label: "Udvar",
  },
  {
    value: "Udvari",
    label: "Udvari",
  },
  {
    value: "Ugar",
    label: "Ugar",
  },
  {
    value: "Ugod",
    label: "Ugod",
  },
  {
    value: "Ugri-szőlő",
    label: "Ugri-szőlő",
  },
  {
    value: "Ugyeri-szőlők",
    label: "Ugyeri-szőlők",
  },
  {
    value: "Új-kert",
    label: "Új-kert",
  },
  {
    value: "Új-kút-dűlő",
    label: "Új-kút-dűlő",
  },
  {
    value: "Új-Ladány",
    label: "Új-Ladány",
  },
  {
    value: "Új-osztás",
    label: "Új-osztás",
  },
  {
    value: "Új-szőlő",
    label: "Új-szőlő",
  },
  {
    value: "Új-szőlők",
    label: "Új-szőlők",
  },
  {
    value: "Új-tag",
    label: "Új-tag",
  },
  {
    value: "Újbarok",
    label: "Újbarok",
  },
  {
    value: "Újcsanálos",
    label: "Újcsanálos",
  },
  {
    value: "Újdombrád",
    label: "Újdombrád",
  },
  {
    value: "Újfehértó",
    label: "Újfehértó",
  },
  {
    value: "Újhartyán",
    label: "Újhartyán",
  },
  {
    value: "Újiráz",
    label: "Újiráz",
  },
  {
    value: "Újireg",
    label: "Újireg",
  },
  {
    value: "Újkenéz",
    label: "Újkenéz",
  },
  {
    value: "Újkér",
    label: "Újkér",
  },
  {
    value: "Újkígyós",
    label: "Újkígyós",
  },
  {
    value: "Újlengyel",
    label: "Újlengyel",
  },
  {
    value: "Újléta",
    label: "Újléta",
  },
  {
    value: "Újpetre",
    label: "Újpetre",
  },
  {
    value: "Újpuszta",
    label: "Újpuszta",
  },
  {
    value: "Újrónafő",
    label: "Újrónafő",
  },
  {
    value: "Újsolt",
    label: "Újsolt",
  },
  {
    value: "Újszalonta",
    label: "Újszalonta",
  },
  {
    value: "Újszász",
    label: "Újszász",
  },
  {
    value: "Újszentiván",
    label: "Újszentiván",
  },
  {
    value: "Újszentmargita",
    label: "Újszentmargita",
  },
  {
    value: "Újszilvás",
    label: "Újszilvás",
  },
  {
    value: "Újtelek",
    label: "Újtelek",
  },
  {
    value: "Újtikos",
    label: "Újtikos",
  },
  {
    value: "Újudvar",
    label: "Újudvar",
  },
  {
    value: "Újvárfalva",
    label: "Újvárfalva",
  },
  {
    value: "Újvilág",
    label: "Újvilág",
  },
  {
    value: "Ukk",
    label: "Ukk",
  },
  {
    value: "Üllés",
    label: "Üllés",
  },
  {
    value: "Üllő",
    label: "Üllő",
  },
  {
    value: "Und",
    label: "Und",
  },
  {
    value: "Úny",
    label: "Úny",
  },
  {
    value: "Uppony",
    label: "Uppony",
  },
  {
    value: "Úr-hegy",
    label: "Úr-hegy",
  },
  {
    value: "Úr-szeg",
    label: "Úr-szeg",
  },
  {
    value: "Ura",
    label: "Ura",
  },
  {
    value: "Uraiújfalu",
    label: "Uraiújfalu",
  },
  {
    value: "Urbán-dűlő",
    label: "Urbán-dűlő",
  },
  {
    value: "Úrhida",
    label: "Úrhida",
  },
  {
    value: "Úri",
    label: "Úri",
  },
  {
    value: "Urkom",
    label: "Urkom",
  },
  {
    value: "Úrkút",
    label: "Úrkút",
  },
  {
    value: "Üröm",
    label: "Üröm",
  },
  {
    value: "Urszinyi-dűlő",
    label: "Urszinyi-dűlő",
  },
  {
    value: "Uszka",
    label: "Uszka",
  },
  {
    value: "Uszód",
    label: "Uszód",
  },
  {
    value: "Úsztató",
    label: "Úsztató",
  },
  {
    value: "Uzsa",
    label: "Uzsa",
  },
  {
    value: "Vác",
    label: "Vác",
  },
  {
    value: "Vácduka",
    label: "Vácduka",
  },
  {
    value: "Vácegres",
    label: "Vácegres",
  },
  {
    value: "Váchartyán",
    label: "Váchartyán",
  },
  {
    value: "Váckisújfalu",
    label: "Váckisújfalu",
  },
  {
    value: "Vácrátót",
    label: "Vácrátót",
  },
  {
    value: "Vácszentlászló",
    label: "Vácszentlászló",
  },
  {
    value: "Vadas",
    label: "Vadas",
  },
  {
    value: "Vadas Fertő",
    label: "Vadas Fertő",
  },
  {
    value: "Vadasása",
    label: "Vadasása",
  },
  {
    value: "Vadaskert",
    label: "Vadaskert",
  },
  {
    value: "Vadaskerti-mező",
    label: "Vadaskerti-mező",
  },
  {
    value: "Vadkerti-tó",
    label: "Vadkerti-tó",
  },
  {
    value: "Vadmeggyes",
    label: "Vadmeggyes",
  },
  {
    value: "Vadna",
    label: "Vadna",
  },
  {
    value: "Vadosfa",
    label: "Vadosfa",
  },
  {
    value: "Vadvizes",
    label: "Vadvizes",
  },
  {
    value: "Vág",
    label: "Vág",
  },
  {
    value: "Vágáshuta",
    label: "Vágáshuta",
  },
  {
    value: "Vaj-tó",
    label: "Vaj-tó",
  },
  {
    value: "Vaja",
    label: "Vaja",
  },
  {
    value: "Vajai Nagy Rét",
    label: "Vajai Nagy Rét",
  },
  {
    value: "Vajas",
    label: "Vajas",
  },
  {
    value: "Vajdácska",
    label: "Vajdácska",
  },
  {
    value: "Vajó-zug",
    label: "Vajó-zug",
  },
  {
    value: "Vajszló",
    label: "Vajszló",
  },
  {
    value: "Vajta",
    label: "Vajta",
  },
  {
    value: "Vak-rét",
    label: "Vak-rét",
  },
  {
    value: "Vál",
    label: "Vál",
  },
  {
    value: "Valkó",
    label: "Valkó",
  },
  {
    value: "Valkonya",
    label: "Valkonya",
  },
  {
    value: "Vállaj",
    label: "Vállaj",
  },
  {
    value: "Vállus",
    label: "Vállus",
  },
  {
    value: "Változó-dűlő",
    label: "Változó-dűlő",
  },
  {
    value: "Vámosatya",
    label: "Vámosatya",
  },
  {
    value: "Vámoscsalád",
    label: "Vámoscsalád",
  },
  {
    value: "Vámosgyörk",
    label: "Vámosgyörk",
  },
  {
    value: "Vámosmikola",
    label: "Vámosmikola",
  },
  {
    value: "Vámosoroszi",
    label: "Vámosoroszi",
  },
  {
    value: "Vámospércs",
    label: "Vámospércs",
  },
  {
    value: "Vámosszabadi",
    label: "Vámosszabadi",
  },
  {
    value: "Vámosújfalu",
    label: "Vámosújfalu",
  },
  {
    value: "Váncsod",
    label: "Váncsod",
  },
  {
    value: "Vand-hát-dűlő",
    label: "Vand-hát-dűlő",
  },
  {
    value: "Vanda",
    label: "Vanda",
  },
  {
    value: "Vanyarc",
    label: "Vanyarc",
  },
  {
    value: "Vanyola",
    label: "Vanyola",
  },
  {
    value: "Vár-fenék",
    label: "Vár-fenék",
  },
  {
    value: "Várad",
    label: "Várad",
  },
  {
    value: "Váralja",
    label: "Váralja",
  },
  {
    value: "Varászló",
    label: "Varászló",
  },
  {
    value: "Várbalog",
    label: "Várbalog",
  },
  {
    value: "Varbó",
    label: "Varbó",
  },
  {
    value: "Varbóc",
    label: "Varbóc",
  },
  {
    value: "Várda",
    label: "Várda",
  },
  {
    value: "Várdomb",
    label: "Várdomb",
  },
  {
    value: "Várfölde",
    label: "Várfölde",
  },
  {
    value: "Varga",
    label: "Varga",
  },
  {
    value: "Varga Pál",
    label: "Varga Pál",
  },
  {
    value: "Varga-zug",
    label: "Varga-zug",
  },
  {
    value: "Várgesztes",
    label: "Várgesztes",
  },
  {
    value: "Várhely",
    label: "Várhely",
  },
  {
    value: "Varjak",
    label: "Varjak",
  },
  {
    value: "Varjas",
    label: "Varjas",
  },
  {
    value: "Varjas-szeg-dűlő",
    label: "Varjas-szeg-dűlő",
  },
  {
    value: "Várkesző",
    label: "Várkesző",
  },
  {
    value: "Várong",
    label: "Várong",
  },
  {
    value: "Városföld",
    label: "Városföld",
  },
  {
    value: "Városlőd",
    label: "Városlőd",
  },
  {
    value: "Várpalota",
    label: "Várpalota",
  },
  {
    value: "Varró-lapos",
    label: "Varró-lapos",
  },
  {
    value: "Varsád",
    label: "Varsád",
  },
  {
    value: "Varsány",
    label: "Varsány",
  },
  {
    value: "Varsány-hát",
    label: "Varsány-hát",
  },
  {
    value: "Várvölgy",
    label: "Várvölgy",
  },
  {
    value: "Vas",
    label: "Vas",
  },
  {
    value: "Vasalja",
    label: "Vasalja",
  },
  {
    value: "Vásárhelyi-dűlő",
    label: "Vásárhelyi-dűlő",
  },
  {
    value: "Vásárosbéc",
    label: "Vásárosbéc",
  },
  {
    value: "Vásárosdombó",
    label: "Vásárosdombó",
  },
  {
    value: "Vásárosfalu",
    label: "Vásárosfalu",
  },
  {
    value: "Vásárosmiske",
    label: "Vásárosmiske",
  },
  {
    value: "Vásárosnamény",
    label: "Vásárosnamény",
  },
  {
    value: "Vasas",
    label: "Vasas",
  },
  {
    value: "Vasasszonyfa",
    label: "Vasasszonyfa",
  },
  {
    value: "Vasboldogasszony",
    label: "Vasboldogasszony",
  },
  {
    value: "Vasegerszeg",
    label: "Vasegerszeg",
  },
  {
    value: "Vashosszúfalu",
    label: "Vashosszúfalu",
  },
  {
    value: "Vaskapu",
    label: "Vaskapu",
  },
  {
    value: "Vaskeresztes",
    label: "Vaskeresztes",
  },
  {
    value: "Vaskút",
    label: "Vaskút",
  },
  {
    value: "Vasmegyer",
    label: "Vasmegyer",
  },
  {
    value: "Vaspör",
    label: "Vaspör",
  },
  {
    value: "Vassurány",
    label: "Vassurány",
  },
  {
    value: "Vasszécseny",
    label: "Vasszécseny",
  },
  {
    value: "Vasszentmihály",
    label: "Vasszentmihály",
  },
  {
    value: "Vasszilvágy",
    label: "Vasszilvágy",
  },
  {
    value: "Vasvár",
    label: "Vasvár",
  },
  {
    value: "Vaszar",
    label: "Vaszar",
  },
  {
    value: "Vászoly",
    label: "Vászoly",
  },
  {
    value: "Vát",
    label: "Vát",
  },
  {
    value: "Vatta",
    label: "Vatta",
  },
  {
    value: "Vázsnok",
    label: "Vázsnok",
  },
  {
    value: "Vecsés",
    label: "Vecsés",
  },
  {
    value: "Vécsitanya",
    label: "Vécsitanya",
  },
  {
    value: "Vedres-dűlő",
    label: "Vedres-dűlő",
  },
  {
    value: "Vedresháza",
    label: "Vedresháza",
  },
  {
    value: "Végegyháza",
    label: "Végegyháza",
  },
  {
    value: "Vejti",
    label: "Vejti",
  },
  {
    value: "Vékény",
    label: "Vékény",
  },
  {
    value: "Vekerd",
    label: "Vekerd",
  },
  {
    value: "Velem",
    label: "Velem",
  },
  {
    value: "Velemér",
    label: "Velemér",
  },
  {
    value: "Velence",
    label: "Velence",
  },
  {
    value: "Velencei-hegység",
    label: "Velencei-hegység",
  },
  {
    value: "Velény",
    label: "Velény",
  },
  {
    value: "Véménd",
    label: "Véménd",
  },
  {
    value: "Vén-cser",
    label: "Vén-cser",
  },
  {
    value: "Vén-kert",
    label: "Vén-kert",
  },
  {
    value: "Vén-szőlő",
    label: "Vén-szőlő",
  },
  {
    value: "Vének",
    label: "Vének",
  },
  {
    value: "Vép",
    label: "Vép",
  },
  {
    value: "Vercel",
    label: "Vercel",
  },
  {
    value: "Vereb",
    label: "Vereb",
  },
  {
    value: "Verebes",
    label: "Verebes",
  },
  {
    value: "Verecepadja",
    label: "Verecepadja",
  },
  {
    value: "Veres-gyűrűs",
    label: "Veres-gyűrűs",
  },
  {
    value: "Veres-tag",
    label: "Veres-tag",
  },
  {
    value: "Veresegyház",
    label: "Veresegyház",
  },
  {
    value: "Vereshomoki-tó",
    label: "Vereshomoki-tó",
  },
  {
    value: "Veresipuszta",
    label: "Veresipuszta",
  },
  {
    value: "Verestanya",
    label: "Verestanya",
  },
  {
    value: "Verő-máj",
    label: "Verő-máj",
  },
  {
    value: "Verőce",
    label: "Verőce",
  },
  {
    value: "Verpelét",
    label: "Verpelét",
  },
  {
    value: "Verseg",
    label: "Verseg",
  },
  {
    value: "Versend",
    label: "Versend",
  },
  {
    value: "Vértesacsa",
    label: "Vértesacsa",
  },
  {
    value: "Vértesboglár",
    label: "Vértesboglár",
  },
  {
    value: "Vérteskethely",
    label: "Vérteskethely",
  },
  {
    value: "Vértessomló",
    label: "Vértessomló",
  },
  {
    value: "Vértesszőlős",
    label: "Vértesszőlős",
  },
  {
    value: "Vértestolna",
    label: "Vértestolna",
  },
  {
    value: "Vése",
    label: "Vése",
  },
  {
    value: "Vesszős",
    label: "Vesszős",
  },
  {
    value: "Veszkény",
    label: "Veszkény",
  },
  {
    value: "Veszprém",
    label: "Veszprém",
  },
  {
    value: "Veszprémfajsz",
    label: "Veszprémfajsz",
  },
  {
    value: "Veszprémgalsa",
    label: "Veszprémgalsa",
  },
  {
    value: "Veszprémvarsány",
    label: "Veszprémvarsány",
  },
  {
    value: "Veszprémy-dűlő",
    label: "Veszprémy-dűlő",
  },
  {
    value: "Vésztő",
    label: "Vésztő",
  },
  {
    value: "Vezseny",
    label: "Vezseny",
  },
  {
    value: "Vicsori",
    label: "Vicsori",
  },
  {
    value: "Vid",
    label: "Vid",
  },
  {
    value: "Vidámháza",
    label: "Vidámháza",
  },
  {
    value: "Vigántpetend",
    label: "Vigántpetend",
  },
  {
    value: "Viharsarok",
    label: "Viharsarok",
  },
  {
    value: "Villány",
    label: "Villány",
  },
  {
    value: "Villányi-hegység",
    label: "Villányi-hegység",
  },
  {
    value: "Villánykövesd",
    label: "Villánykövesd",
  },
  {
    value: "Vilmány",
    label: "Vilmány",
  },
  {
    value: "Vilonya",
    label: "Vilonya",
  },
  {
    value: "Vilyvitány",
    label: "Vilyvitány",
  },
  {
    value: "Vinár",
    label: "Vinár",
  },
  {
    value: "Vindornyafok",
    label: "Vindornyafok",
  },
  {
    value: "Vindornyalak",
    label: "Vindornyalak",
  },
  {
    value: "Vindornyaszőlős",
    label: "Vindornyaszőlős",
  },
  {
    value: "Virág-lapos",
    label: "Virág-lapos",
  },
  {
    value: "Virágos-zug",
    label: "Virágos-zug",
  },
  {
    value: "Visegrád",
    label: "Visegrád",
  },
  {
    value: "Visnye",
    label: "Visnye",
  },
  {
    value: "Viss",
    label: "Viss",
  },
  {
    value: "Visz",
    label: "Visz",
  },
  {
    value: "Viszák",
    label: "Viszák",
  },
  {
    value: "Viszló",
    label: "Viszló",
  },
  {
    value: "Viszlói-oldal",
    label: "Viszlói-oldal",
  },
  {
    value: "Visznek",
    label: "Visznek",
  },
  {
    value: "Viszneki-tó-dűlő",
    label: "Viszneki-tó-dűlő",
  },
  {
    value: "Vitnyéd",
    label: "Vitnyéd",
  },
  {
    value: "Vitorágpuszta",
    label: "Vitorágpuszta",
  },
  {
    value: "Vízmosás",
    label: "Vízmosás",
  },
  {
    value: "Vizslás",
    label: "Vizslás",
  },
  {
    value: "Vizsoly",
    label: "Vizsoly",
  },
  {
    value: "Vízvár",
    label: "Vízvár",
  },
  {
    value: "Vöckönd",
    label: "Vöckönd",
  },
  {
    value: "Vokány",
    label: "Vokány",
  },
  {
    value: "Völcsej",
    label: "Völcsej",
  },
  {
    value: "Völgység",
    label: "Völgység",
  },
  {
    value: "Vönöck",
    label: "Vönöck",
  },
  {
    value: "Vonyarcvashegy",
    label: "Vonyarcvashegy",
  },
  {
    value: "Vörös",
    label: "Vörös",
  },
  {
    value: "Vörös Csik",
    label: "Vörös Csik",
  },
  {
    value: "Vörös-kutas-dűlő",
    label: "Vörös-kutas-dűlő",
  },
  {
    value: "Vörös-mál",
    label: "Vörös-mál",
  },
  {
    value: "Vöröshalom-dűlő",
    label: "Vöröshalom-dűlő",
  },
  {
    value: "Vöröspuszta",
    label: "Vöröspuszta",
  },
  {
    value: "Vöröstó",
    label: "Vöröstó",
  },
  {
    value: "Vörs",
    label: "Vörs",
  },
  {
    value: "Wágner-rész",
    label: "Wágner-rész",
  },
  {
    value: "Zabar",
    label: "Zabar",
  },
  {
    value: "Zádor",
    label: "Zádor",
  },
  {
    value: "Zádorfalva",
    label: "Zádorfalva",
  },
  {
    value: "Zagyvarékas",
    label: "Zagyvarékas",
  },
  {
    value: "Záhony",
    label: "Záhony",
  },
  {
    value: "Zajgatói-dűlők",
    label: "Zajgatói-dűlők",
  },
  {
    value: "Zajk",
    label: "Zajk",
  },
  {
    value: "Zajta",
    label: "Zajta",
  },
  {
    value: "Zákány",
    label: "Zákány",
  },
  {
    value: "Zákányszék",
    label: "Zákányszék",
  },
  {
    value: "Zala",
    label: "Zala",
  },
  {
    value: "Zalaapáti",
    label: "Zalaapáti",
  },
  {
    value: "Zalabaksa",
    label: "Zalabaksa",
  },
  {
    value: "Zalabér",
    label: "Zalabér",
  },
  {
    value: "Zalaboldogfa",
    label: "Zalaboldogfa",
  },
  {
    value: "Zalacsány",
    label: "Zalacsány",
  },
  {
    value: "Zalacséb",
    label: "Zalacséb",
  },
  {
    value: "Zalaegerszeg",
    label: "Zalaegerszeg",
  },
  {
    value: "Zalaerdőd",
    label: "Zalaerdőd",
  },
  {
    value: "Zalagyömörő",
    label: "Zalagyömörő",
  },
  {
    value: "Zalahaláp",
    label: "Zalahaláp",
  },
  {
    value: "Zalaháshágy",
    label: "Zalaháshágy",
  },
  {
    value: "Zalaigrice",
    label: "Zalaigrice",
  },
  {
    value: "Zalaistvánd",
    label: "Zalaistvánd",
  },
  {
    value: "Zalakaros",
    label: "Zalakaros",
  },
  {
    value: "Zalakomár",
    label: "Zalakomár",
  },
  {
    value: "Zalaköveskút",
    label: "Zalaköveskút",
  },
  {
    value: "Zalalövő",
    label: "Zalalövő",
  },
  {
    value: "Zalameggyes",
    label: "Zalameggyes",
  },
  {
    value: "Zalamerenye",
    label: "Zalamerenye",
  },
  {
    value: "Zalasárszeg",
    label: "Zalasárszeg",
  },
  {
    value: "Zalaszabar",
    label: "Zalaszabar",
  },
  {
    value: "Zalaszántó",
    label: "Zalaszántó",
  },
  {
    value: "Zalaszegvár",
    label: "Zalaszegvár",
  },
  {
    value: "Zalaszentbalázs",
    label: "Zalaszentbalázs",
  },
  {
    value: "Zalaszentgrót",
    label: "Zalaszentgrót",
  },
  {
    value: "Zalaszentgyörgy",
    label: "Zalaszentgyörgy",
  },
  {
    value: "Zalaszentiván",
    label: "Zalaszentiván",
  },
  {
    value: "Zalaszentjakab",
    label: "Zalaszentjakab",
  },
  {
    value: "Zalaszentlászló",
    label: "Zalaszentlászló",
  },
  {
    value: "Zalaszentlőrinc",
    label: "Zalaszentlőrinc",
  },
  {
    value: "Zalaszentmárton",
    label: "Zalaszentmárton",
  },
  {
    value: "Zalaszentmihály",
    label: "Zalaszentmihály",
  },
  {
    value: "Zalaszombatfa",
    label: "Zalaszombatfa",
  },
  {
    value: "Zaláta",
    label: "Zaláta",
  },
  {
    value: "Zalatárnok",
    label: "Zalatárnok",
  },
  {
    value: "Zalaújlak",
    label: "Zalaújlak",
  },
  {
    value: "Zalavár",
    label: "Zalavár",
  },
  {
    value: "Zalavég",
    label: "Zalavég",
  },
  {
    value: "Zalkod",
    label: "Zalkod",
  },
  {
    value: "Zálogos-dűlő",
    label: "Zálogos-dűlő",
  },
  {
    value: "Zamárdi",
    label: "Zamárdi",
  },
  {
    value: "Zámoly",
    label: "Zámoly",
  },
  {
    value: "Zánka",
    label: "Zánka",
  },
  {
    value: "Závod",
    label: "Závod",
  },
  {
    value: "Zebecke",
    label: "Zebecke",
  },
  {
    value: "Zebegény",
    label: "Zebegény",
  },
  {
    value: "Zelenák-lapos",
    label: "Zelenák-lapos",
  },
  {
    value: "Zemplénagárd",
    label: "Zemplénagárd",
  },
  {
    value: "Zengő",
    label: "Zengő",
  },
  {
    value: "Zengővárkony",
    label: "Zengővárkony",
  },
  {
    value: "Zichyújfalu",
    label: "Zichyújfalu",
  },
  {
    value: "Zics",
    label: "Zics",
  },
  {
    value: "Ziliz",
    label: "Ziliz",
  },
  {
    value: "Zimány",
    label: "Zimány",
  },
  {
    value: "Zirc",
    label: "Zirc",
  },
  {
    value: "Zók",
    label: "Zók",
  },
  {
    value: "Zokoga",
    label: "Zokoga",
  },
  {
    value: "Zöldhalom-tó",
    label: "Zöldhalom-tó",
  },
  {
    value: "Zoltán-tag",
    label: "Zoltán-tag",
  },
  {
    value: "Zomba",
    label: "Zomba",
  },
  {
    value: "Zsadány",
    label: "Zsadány",
  },
  {
    value: "Zsáka",
    label: "Zsáka",
  },
  {
    value: "Zsámbék",
    label: "Zsámbék",
  },
  {
    value: "Zsámbok",
    label: "Zsámbok",
  },
  {
    value: "Zsana",
    label: "Zsana",
  },
  {
    value: "Zsarolyán",
    label: "Zsarolyán",
  },
  {
    value: "Zsebeháza",
    label: "Zsebeháza",
  },
  {
    value: "Zsédeny",
    label: "Zsédeny",
  },
  {
    value: "Zselickisfalud",
    label: "Zselickisfalud",
  },
  {
    value: "Zselickislak",
    label: "Zselickislak",
  },
  {
    value: "Zselicszentpál",
    label: "Zselicszentpál",
  },
  {
    value: "Zsellér-föld",
    label: "Zsellér-föld",
  },
  {
    value: "Zsellér-földek",
    label: "Zsellér-földek",
  },
  {
    value: "Zsennye",
    label: "Zsennye",
  },
  {
    value: "Zserc",
    label: "Zserc",
  },
  {
    value: "Zsigerpuszta",
    label: "Zsigerpuszta",
  },
  {
    value: "Zsindelyes",
    label: "Zsindelyes",
  },
  {
    value: "Zsira",
    label: "Zsira",
  },
  {
    value: "Zsombó",
    label: "Zsombó",
  },
  {
    value: "Zsujta",
    label: "Zsujta",
  },
  {
    value: "Zsurk",
    label: "Zsurk",
  },
  {
    value: "Zubogy",
    label: "Zubogy",
  },
  {
    value: "Zug-kert",
    label: "Zug-kert",
  },
  {
    value: "Zugló",
    label: "Zugló",
  },
  {
    value: "Zúgó-dűlő",
    label: "Zúgó-dűlő",
  },
  {
    value: "Zuhogó",
    label: "Zuhogó",
  },
];

export const districtOptions = [
  { value: "I. kerület", label: "I. kerület" },
  { value: "II. kerület", label: "II. kerület" },
  { value: "III. kerület", label: "III. kerület" },
  { value: "IV. kerület", label: "IV. kerület" },
  { value: "V. kerület", label: "V. kerület" },
  { value: "VI. kerület", label: "VI. kerület" },
  { value: "VII. kerület", label: "VII. kerület" },
  { value: "VIII. kerület", label: "VIII. kerület" },
  { value: "IX. kerület", label: "IX. kerület" },
  { value: "X. kerület", label: "X. kerület" },
  { value: "XI. kerület", label: "XI. kerület" },
  { value: "XII. kerület", label: "XII. kerület" },
  { value: "XIII. kerület", label: "XIII. kerület" },
  { value: "XIV. kerület", label: "XIV. kerület" },
  { value: "XV. kerület", label: "XV. kerület" },
  { value: "XVI. kerület", label: "XVI. kerület" },
  { value: "XVII. kerület", label: "XVII. kerület" },
  { value: "XVIII. kerület", label: "XVIII. kerület" },
  { value: "XIX. kerület", label: "XIX. kerület" },
  { value: "XX. kerület", label: "XX. kerület" },
  { value: "XXI. kerület", label: "XXI. kerület" },
  { value: "XXII. kerület", label: "XXII. kerület" },
  { value: "XXIII. kerület", label: "XXIII. kerület" },
];

export const balconyOptions = [
  { value: "Erkély", label: "Erkély" },
  { value: "Terasz", label: "Terasz" },
];
