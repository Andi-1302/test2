// data.js – Zentrale Datendatei für 1aWG.de
// Alle HTML-Seiten binden diese Datei ein.
// Im Admin-Panel können Änderungen als neue data.js exportiert werden.

const siteData = {
  global: {
    seitenname: "1aWG.de",
    lauftext: "Es werden laufend Zimmer frei – bei Interesse einfach eine kurze E-Mail mit Einzugswunsch, Dauer und Kontaktdaten senden!"
  },
  kontakt: {
    name: "Alexander Goerke",
    strasse: "Hangstr. 14",
    plz: "70327",
    ort: "Stuttgart",
    telefon: "0179-8755863",
    mobil: "0179-8755863",
    fax: "0711-3040402",
    email: "Alex.Goerke@gmx.de"
  },
  startseite: {
    begruessung: "Willkommen auf meiner Webseite.\nSchauen Sie sich unter den Menüpunkten »WG's« und »Apartments« meine Angebote in Stuttgart an.\nBei Interesse schreiben Sie bitte eine kurze E-Mail mit Einzugswunsch, Dauer und Kontaktdaten.",
    slides: [
      { bild: "http://1awg.de/img/baner-slide1.jpg", ueberschrift: "Herzlich Willkommen!" },
      { bild: "http://1awg.de/img/baner-slide2.jpg", ueberschrift: "Apartments in Fellbach" },
      { bild: "http://1awg.de/img/baner-slide3.jpg", ueberschrift: "Zimmer in Fellbach" },
      { bild: "http://1awg.de/img/baner-slide4.jpg", ueberschrift: "Zimmer in Untertürkheim" }
    ]
  },
  objekte: [
    {
      id: "sunshine-wg",
      typ: "wg",
      name: "Sunshine-WG",
      seite: "sunshine-wg.html",
      aktiv: true,
      adresse: "Wilhelm-Stähle-Str. 5, 70736 Fellbach-Schmiden",
      etage: "2. Obergeschoss",
      zimmeranzahl: 4,
      preis_kalt: 0,
      preis_warm: 0,
      verfuegbar_ab: "",
      status: "frei",
      beschreibung: "Große 4er-WG im 2. Obergeschoss mit möblierten Zimmern und Zugang zur riesigen gemeinsamen Flachdachterrasse.",
      lage: "Sehr zentral in Fellbach-Schmiden gelegen, Bäcker, Metzger, Supermarkt etc. fußläufig in wenigen Minuten erreichbar. 70 m zur Bushaltestelle, 1500 m zur S-Bahn. Geeignet für Azubis, Studenten, Praktikanten und Pendler in Fellbach, Stuttgart, Waiblingen, Ludwigsburg und Esslingen sowie Bad Cannstatt.",
      ausstattung: "Möblierte Zimmer, geteilte Küche und Bad, Zugang zur großen Flachdachterrasse.",
      video_url: "",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51.40596007741988!2d9.25911155075582!3d48.82970256796156!2m3!1f6.18750000000002!2f61.076529782251654!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x4799c5875d269363%3A0x94680b666f7370c5!2sWilhelm-St%C3%A4hle-Stra%C3%9Fe+5%2C+70736+Fellbach!5e1!3m2!1sde!2sde!4v1523998180294",
      bilder_allgemein: [],
      zimmer: [
        { id: "z1", name: "Zimmer 1", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z2", name: "Zimmer 2", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z3", name: "Zimmer 3", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z4", name: "Zimmer 4", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] }
      ]
    },
    {
      id: "wss-wg",
      typ: "wg",
      name: "WSS-WG",
      seite: "wss-wg.html",
      aktiv: true,
      adresse: "Wilhelm-Stähle-Str. 5, 70736 Fellbach-Schmiden",
      etage: "1. Obergeschoss",
      zimmeranzahl: 3,
      preis_kalt: 0,
      preis_warm: 0,
      verfuegbar_ab: "",
      status: "frei",
      beschreibung: "Gemütliche 3er-WG im 1. OG mit Wohnzimmer, Balkon und Zugang zur gemeinsamen Flachdachterrasse. Voll möblierte Zimmer.",
      lage: "Sehr zentral in Fellbach-Schmiden gelegen, Bäcker, Metzger, Supermarkt etc. fußläufig in wenigen Minuten erreichbar. 70 m zur Bushaltestelle, 1500 m zur S-Bahn. Geeignet für Azubis, Studenten, Praktikanten und Pendler in Fellbach, Stuttgart, Waiblingen, Ludwigsburg und Esslingen sowie Bad Cannstatt.",
      ausstattung: "Möblierte Zimmer, Wohnzimmer, Balkon, geteilte Küche und Bad, Zugang zur Flachdachterrasse.",
      video_url: "",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51.40596007741988!2d9.25911155075582!3d48.82970256796156!2m3!1f6.18750000000002!2f61.076529782251654!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x4799c5875d269363%3A0x94680b666f7370c5!2sWilhelm-St%C3%A4hle-Stra%C3%9Fe+5%2C+70736+Fellbach!5e1!3m2!1sde!2sde!4v1523998180294",
      bilder_allgemein: [],
      zimmer: [
        { id: "z1", name: "Zimmer 1", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z2", name: "Zimmer 2", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z3", name: "Zimmer 3", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] }
      ]
    },
    {
      id: "kappel-wg",
      typ: "wg",
      name: "Kappel-WG",
      seite: "wg-untertuerkheim.html",
      aktiv: true,
      adresse: "Kappelbergstr. 3, 70327 Stuttgart-Untertürkheim",
      etage: "Dachgeschoss",
      zimmeranzahl: 3,
      preis_kalt: 0,
      preis_warm: 0,
      verfuegbar_ab: "",
      status: "frei",
      beschreibung: "Diese gemütliche Dachgeschosswohnung wurde im Januar 2007 komplett modernisiert und renoviert. Die 3 Zimmer werden von jungen Leuten als WG genutzt. Es gibt zwei kleinere Zimmer (1+3) mit ca. 14 qm und ein größeres Zimmer (2) mit etwa 20 qm. Alle Zimmer sind mit Bett/Lattenrost/Matratze, Kleiderschrank, Schreibtisch, Nachttisch, Regal und Stuhl ausgestattet. Das große Zimmer hat ein Kingsize-Bett, zusätzlich einen Liegesessel und ein Extra-Regal. In allen Zimmern sind Kabel-TV und PC-Anschlüsse vorhanden. Küche und Bad werden gemeinschaftlich genutzt.",
      lage: "Sehr zentral in Untertürkheim gelegen, Bäcker, Metzger, Supermarkt etc. fußläufig in wenigen Minuten erreichbar. 50 m zur Bushaltestelle, 500 m zur S-Bahn. Geeignet für Azubis, Studenten, Praktikanten und Pendler in Fellbach, Stuttgart, Waiblingen, Ludwigsburg und Esslingen sowie Bad Cannstatt.",
      ausstattung: "Die Küche hat einen Herd mit Backofen, einen Mikrowellenherd, Kühlschrank, Geschirrspülmaschine und ausreichend Geschirr. Das Bad ist mit einer Dusche und Waschbecken, Spiegelschrank, Wärmestrahler und Regal zwar sehr klein, aber gut ausgestattet. Das WC ist separat. In der Waschküche im UG steht eine Waschmaschine zur Verfügung. Rauchen nur auf dem Balkon (von der Küche zugänglich). In der Wohnung und in den Zimmern ist Rauchen nicht gestattet. Telefon & Internetflatrate mit W-Lan. Strom, TV-Anschluss, Internet, Heizkosten und sonstige Nebenkosten sind in der Miete enthalten.",
      video_url: "",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d79.0880809854716!2d9.25474575911046!3d48.78319304119181!2m2!1f172.3318496797861!2f45.02444119747933!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x4799c44f2fcc20e9%3A0x2a29984fc44f0da6!2sKappelbergstra%C3%9Fe+3%2C+70327+Stuttgart!5e1!3m2!1sde!2sde!4v1523999154296",
      bilder_allgemein: [
        { url: "http://1awg.de/img/WG_unter/anderes/Flur.jpg", alt: "Flur" },
        { url: "http://1awg.de/img/WG_unter/anderes/Balkon.jpg", alt: "Balkon" },
        { url: "http://1awg.de/img/WG_unter/anderes/Aussicht-Balkon.jpg", alt: "Aussicht vom Balkon" },
        { url: "http://1awg.de/img/WG_unter/anderes/Aussicht-Balkon2.jpg", alt: "Aussicht vom Balkon 2" },
        { url: "http://1awg.de/img/WG_unter/kuche/Kueche1.jpg", alt: "Küche" },
        { url: "http://1awg.de/img/WG_unter/kuche/Kueche2.jpg", alt: "Küche 2" },
        { url: "http://1awg.de/img/WG_unter/kuche/Kueche3.jpg", alt: "Küche 3" },
        { url: "http://1awg.de/img/WG_unter/bad/Bad.jpg", alt: "Bad" },
        { url: "http://1awg.de/img/WG_unter/bad/Dusche2.jpg", alt: "Dusche" },
        { url: "http://1awg.de/img/WG_unter/bad/wc2.jpg", alt: "WC" }
      ],
      zimmer: [
        {
          id: "z1",
          name: "Zimmer 1",
          groesse_qm: 14,
          beschreibung: "Kleines Zimmer, ca. 14 qm, mit Bett/Lattenrost/Matratze, Kleiderschrank, Schreibtisch, Nachttisch, Regal und Stuhl. Kabel-TV und PC-Anschluss vorhanden.",
          bilder: [
            { url: "http://1awg.de/img/WG_unter/zimmer1/1.Zimmer.3.jpg", alt: "Zimmer 1" },
            { url: "http://1awg.de/img/WG_unter/zimmer1/1.Zimmer.jpg", alt: "Zimmer 1" },
            { url: "http://1awg.de/img/WG_unter/zimmer1/1.Zimmer2.jpg", alt: "Zimmer 1" }
          ]
        },
        {
          id: "z2",
          name: "Zimmer 2",
          groesse_qm: 20,
          beschreibung: "Großes Zimmer, ca. 20 qm, mit Kingsize-Bett, Kleiderschrank, Liegesessel, Schreibtisch und Extra-Regal. Kabel-TV und PC-Anschluss vorhanden.",
          bilder: [
            { url: "http://1awg.de/img/WG_unter/zimmer2/2.Zimmer.jpg", alt: "Zimmer 2" },
            { url: "http://1awg.de/img/WG_unter/zimmer2/2.Zimmer2.jpg", alt: "Zimmer 2" },
            { url: "http://1awg.de/img/WG_unter/zimmer2/2.Zimmer3.jpg", alt: "Zimmer 2" },
            { url: "http://1awg.de/img/WG_unter/zimmer2/2.Zimmer4.jpg", alt: "Zimmer 2" },
            { url: "http://1awg.de/img/WG_unter/zimmer2/2.Zimmer5.jpg", alt: "Zimmer 2" }
          ]
        },
        {
          id: "z3",
          name: "Zimmer 3",
          groesse_qm: 14,
          beschreibung: "Kleines Zimmer, ca. 14 qm, mit Bett/Lattenrost/Matratze, Kleiderschrank, Schreibtisch, Nachttisch, Regal und Stuhl. Kabel-TV und PC-Anschluss vorhanden.",
          bilder: [
            { url: "http://1awg.de/img/WG_unter/zimmer3/3.Zimmer.jpg", alt: "Zimmer 3" },
            { url: "http://1awg.de/img/WG_unter/zimmer3/3.Zimmer2.jpg", alt: "Zimmer 3" },
            { url: "http://1awg.de/img/WG_unter/zimmer3/3.Zimmer3.jpg", alt: "Zimmer 3" }
          ]
        }
      ]
    },
    {
      id: "apartments-fellbach",
      typ: "apartment",
      name: "Apartments Fellbach",
      untertitel: "Das ehemalige Hotel »Alte Post«",
      seite: "apartments-fellbach.html",
      aktiv: true,
      adresse: "Remstalstr. 4, 70736 Fellbach-Schmiden",
      zimmeranzahl: null,
      preis_kalt: 0,
      preis_warm: 0,
      verfuegbar_ab: "",
      status: "frei",
      beschreibung: "Das Haus ist das ehemalige Hotel »Alte Post«. Es ist mit neuer Gemeinschaftsküche (Tiefkühl- und Kühlschrank, Geschirrspülmaschine, Herd, Mikrowelle, Wasserkocher, Geschirr usw.), Waschmaschine und Trockner, Kabel-TV-Anschluss, Telefon-Flat, W-Lan und PC mit Internetanschluss für alle Bewohner ausgestattet. Die modernen Zimmer haben alle ein eigenes gefliestes Bad und sind voll möbliert: Telefon, Schrank, Bett, Tisch, Stühle etc. Die Größe der Zimmer liegt zwischen 20 und 22 m².",
      lage: "Sehr zentral in Fellbach-Schmiden gelegen, Bäcker, Metzger, Supermarkt etc. fußläufig in 1 Minute erreichbar. 50 m zur Bushaltestelle, gute Anbindung an die S-Bahn. Geeignet für Azubis, Studenten, Praktikanten und Pendler in Fellbach, Stuttgart, Waiblingen, Ludwigsburg und Bad Cannstatt sowie Stuttgart-Untertürkheim.",
      video_url: "",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d66!2d9.2632767!3d48.8337903!2m2!1f127.97!2f41.62!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x4799cf7ce0828def%3A0xee95d01796962481!2sRemstalstra%C3%9Fe+4%2C+70736+Fellbach!5e1!3m2!1sde!2sde!4v1536245517394",
      bilder_allgemein: [
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 023.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 024.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 041.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 047.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 050.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 052.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 053.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 061.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 062.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/zimmer/Post 2006 067.jpg", alt: "Zimmerbeispiel" },
        { url: "http://1awg.de/img/apartm_fellb/kuche/CIMG1075.jpg", alt: "Küche" },
        { url: "http://1awg.de/img/apartm_fellb/kuche/CIMG1076.jpg", alt: "Küche" },
        { url: "http://1awg.de/img/apartm_fellb/kuche/CIMG1081.jpg", alt: "Küche" },
        { url: "http://1awg.de/img/apartm_fellb/kuche/CIMG1084.jpg", alt: "Küche" },
        { url: "http://1awg.de/img/apartm_fellb/kuche/CIMG1086.jpg", alt: "Küche" },
        { url: "http://1awg.de/img/apartm_fellb/bad/Post 2006 020.jpg", alt: "Bad" },
        { url: "http://1awg.de/img/apartm_fellb/bad/Post 2006 044.jpg", alt: "Bad" },
        { url: "http://1awg.de/img/apartm_fellb/bad/Post 2006 064.jpg", alt: "Bad" },
        { url: "http://1awg.de/img/apartm_fellb/anderes/CIMG1073.jpg", alt: "Esszimmer" },
        { url: "http://1awg.de/img/apartm_fellb/anderes/CIMG1074.jpg", alt: "Esszimmer" },
        { url: "http://1awg.de/img/apartm_fellb/anderes/CIMG1071.jpg", alt: "Waschraum" },
        { url: "http://1awg.de/img/apartm_fellb/anderes/CIMG1072.jpg", alt: "Waschraum" }
      ],
      zimmer: []
    },
    {
      id: "garagen-gmuend",
      typ: "garage",
      name: "Garagen Schwäbisch Gmünd",
      seite: "garagen-gmuend.html",
      aktiv: true,
      adresse: "Jahnstraße 8, 73525 Schwäbisch Gmünd",
      anzahl: 8,
      preis_kalt: 75,
      preis_warm: 85,
      verfuegbar_ab: "",
      status: "frei",
      beschreibung: "8 einzeln abschließbare Garagen in Schwäbisch Gmünd. Kein Stromanschluss vorhanden. Bei Interesse kontaktieren Sie mich bitte per E-Mail mit einer kurzen Beschreibung, wofür Sie die Garage verwenden möchten.",
      masse: {
        laenge: "543–545 cm",
        breite: "320–325 cm",
        hoehe_innen: "245–302 cm",
        torhoehe: "196–199 cm",
        torbreite: "215–218 cm"
      },
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.151496958971!2d9.78604542567512!3d48.79501806327467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799a80db4387d33%3A0x39091171408aedc6!2zSmFobnN0cmHDn2UgOCwgNzM1MjUgU2Nod8OkYmlzY2ggR23DvG5k!5e1!3m2!1sde!2sde!4v1558871154703!5m2!1sde!2sde",
      bilder_allgemein: [
        { url: "http://1awg.de/img/garagen_sg/garage_1.jpg", alt: "Garagen Ansicht 1" },
        { url: "http://1awg.de/img/garagen_sg/garage_2.jpg", alt: "Garagen Ansicht 2" },
        { url: "http://1awg.de/img/garagen_sg/garage_3.jpg", alt: "Garagen Ansicht 3" }
      ],
      zimmer: []
    },
    {
      id: "gnesener-wg",
      typ: "wg",
      name: "Gnesener-WG",
      seite: "gnesener-wg.html",
      aktiv: true,
      adresse: "Gnesener Straße 74, 70374 Stuttgart-Bad Cannstatt",
      etage: "[Etage eintragen]",
      zimmeranzahl: 15,
      preis_kalt: 0,
      preis_warm: 0,
      verfuegbar_ab: "",
      status: "frei",
      beschreibung: "[BESCHREIBUNG der Gnesener-WG eintragen]",
      lage: "Zentral in Stuttgart-Bad Cannstatt gelegen. Gute Anbindung an öffentliche Verkehrsmittel.",
      ausstattung: "[AUSSTATTUNG eintragen – Küche, Bad, Gemeinschaftsräume etc.]",
      video_url: "",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.0!2d9.2200!3d48.8100!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db99a7c24f3b%3A0xa8cd45f3571c5c31!2sGnesener+Stra%C3%9Fe+74%2C+70374+Stuttgart!5e0!3m2!1sde!2sde!4v1700000000000",
      bilder_allgemein: [],
      zimmer: [
        { id: "z1",  name: "Zimmer 1",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z2",  name: "Zimmer 2",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z3",  name: "Zimmer 3",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z4",  name: "Zimmer 4",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z5",  name: "Zimmer 5",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z6",  name: "Zimmer 6",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z7",  name: "Zimmer 7",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z8",  name: "Zimmer 8",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z9",  name: "Zimmer 9",  groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z10", name: "Zimmer 10", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z11", name: "Zimmer 11", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z12", name: "Zimmer 12", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z13", name: "Zimmer 13", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z14", name: "Zimmer 14", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] },
        { id: "z15", name: "Zimmer 15", groesse_qm: 0, beschreibung: "[BESCHREIBUNG]", bilder: [] }
      ]
    }
  ]
};

// Merge with localStorage overrides (admin changes)
(function () {
  try {
    const stored = localStorage.getItem('siteData');
    if (stored) {
      const parsed = JSON.parse(stored);
      Object.keys(parsed).forEach(k => {
        if (k === 'objekte' && Array.isArray(parsed[k])) {
          // Merge by id: apply saved changes to existing objects, keep new objects from data.js
          parsed[k].forEach(storedObj => {
            const existing = siteData.objekte.find(o => o.id === storedObj.id);
            if (existing) Object.assign(existing, storedObj);
          });
        } else if (typeof parsed[k] === 'object' && !Array.isArray(parsed[k])) {
          siteData[k] = Object.assign({}, siteData[k], parsed[k]);
        } else {
          siteData[k] = parsed[k];
        }
      });
    }
  } catch (e) { /* ignore */ }
})();
