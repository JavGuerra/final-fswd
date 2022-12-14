const products = [
    {
        model: "ZX Spectrum 16K",
        code: "001",
        manufacturer: "001",
        info: "16Kb. Sencillo y popular. Variedad de accesorios y software. Teclado incómodo.",
        relevance: false,
        price: 200,
        year: 1982,
        photo: "zx.jpg",
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX_Spectrum",
        buy: "https://www.ebay.es/"
    },
    {
        model: "ZX Spectrum 48K",
        code: "002",
        manufacturer: "001",
        info: "48K. Sencillo y popular. Variedad de accesorios y software. Teclado incómodo.",
        relevance: true,
        price: 300,
        year: 1982,
        photo: "zx.jpg",
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX_Spectrum",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Sinclair ZX80",
        code: "003",
        manufacturer: "001",
        info: "1Kb. Poco sofisticado, pero ampliable. Precio de salida razonable. Teclado pésimo.",
        relevance: false,
        price: 100,
        year: 1980,
        photo: "zx80.jpg",
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX80",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Sinclair ZX81",
        code: "004",
        manufacturer: "001",
        info: "1Kb. Poco sofisticado, pero ampliable. Precio de salida razonable. Teclado pésimo.",
        relevance: false,
        price: 100,
        year: 1981,
        photo: "zx81.jpg",
        link: "https://es.wikipedia.org/wiki/Sinclair_ZX81",
        buy: "https://www.ebay.es/"
    },
    {
        model: "SORD M5",
        code: "005",
        manufacturer: "002",
        info: "4Kb. Ampliable a 36Kb. Bien construido. BASIC limitado.",
        relevance: false,
        price: 150,
        year: 1982,
        photo: "m5.jpg",
        link: "https://es.wikipedia.org/wiki/Sord_M5",
        buy: "https://www.ebay.es/"
    },
    {
        model: "TI 99/4A",
        code: "006",
        manufacturer: "003",
        info: "16Kb. Ampliable a 52Kb. Buen teclado y buen precio. BASIC lento.",
        relevance: true,
        price: 250,
        year: 1984,
        photo: "ti99.jpg",
        link: "https://es.wikipedia.org/wiki/Texas_Instruments_TI-99/4A",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Commodore PET",
        code: "007",
        manufacturer: "004",
        info: "4Kb. Varios modelos. Pantalla y ordenador en una pieza. Aspecto futurista.",
        relevance: true,
        price: 650,
        year: 1977,
        photo: "pet.jpg",
        link: "https://es.wikipedia.org/wiki/Commodore_PET",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Commodore 64",
        code: "008",
        manufacturer: "004",
        info: "64Kb. Buen teclado y precio. Excelentes gráficos y sonido. BASIC limitado.",
        relevance: true,
        price: 250,
        year: 1982,
        photo: "c64.jpg",
        link: "https://es.wikipedia.org/wiki/Commodore_64",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Commodore Vic 20",
        code: "009",
        manufacturer: "004",
        info: "5Kb. Ampliable a 32Kb. Cartuchos ROM. Precio de salida elevado.",
        relevance: false,
        price: 150,
        year: 1980,
        photo: "vic20.jpg",
        link: "https://es.wikipedia.org/wiki/Commodore_VIC-20",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Dragon 64",
        code: "010",
        manufacturer: "005",
        info: "64Kb. Modelo popular con teclado robusto. Compatible con TSR-80 CoCo.",
        relevance: false,
        price: 250,
        year: 1982,
        photo: "dragon.jpg",
        link: "https://es.wikipedia.org/wiki/Dragon_32/64",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Dragon 32",
        code: "011",
        manufacturer: "005",
        info: "32Kb. Modelo popular con teclado robusto. Compatible con TRS-80 CoCo.",
        relevance: false,
        price: 250,
        year: 1982,
        photo: "dragon.jpg",
        link: "https://es.wikipedia.org/wiki/Dragon_32/64",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Epson HX-20",
        code: "012",
        manufacturer: "006",
        info: "16Kb. Ampliable a 32Kb. Portátil. Incluye mini-pantalla e impresora.",
        relevance: false,
        price: 200,
        year: 1982,
        photo: "hx20.jpg",
        link: "https://es.wikipedia.org/wiki/Epson_HX-20",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Atari 400",
        code: "013",
        manufacturer: "007",
        info: "16Kb. Bajo costo. Amplio catálogo de software. Mal teclado. Cartuchos.",
        relevance: false,
        price: 300,
        year: 1979,
        photo: "atari400.jpg",
        link: "https://es.wikipedia.org/wiki/Familia_Atari_de_8_bits",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Atari 800",
        code: "014",
        manufacturer: "007",
        info: "48Kb. Teclado mejorado. Amplio catálogo de software. Programable.",
        relevance: false,
        price: 300,
        year: 1979,
        photo: "atari800.jpg",
        link: "https://es.wikipedia.org/wiki/Familia_Atari_de_8_bits",
        buy: "https://www.ebay.es/"
    },
    {
        model: "BBC Micro",
        code: "015",
        manufacturer: "008",
        info: "16Kb. Popular. BASIC versátil. Buen teclado y bien construido.",
        relevance: false,
        price: 350,
        year: 1981,
        photo: "bbc.jpg",
        link: "https://es.wikipedia.org/wiki/BBC_Micro",
        buy: "https://www.ebay.es/"
    },
    {
        model: "BBC Micro B",
        code: "016",
        manufacturer: "008",
        info: "32Kb. Popular. BASIC versátil. Buen teclado y bien construido.",
        relevance: true,
        price: 350,
        year: 1981,
        photo: "bbc.jpg",
        link: "https://es.wikipedia.org/wiki/BBC_Micro",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Colour Genie",
        code: "017",
        manufacturer: "009",
        info: "32Kb. Barato. Lento. Con buen teclado. Compatible con el TRS-80 CoCo.",
        relevance: false,
        price: 400,
        year: 1982,
        photo: "genie.jpg",
        link: "https://en.wikipedia.org/wiki/Colour_Genie",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Inves Spectrum +",
        code: "018",
        manufacturer: "010",
        info: "48Kb. Rediseño del Spectrum +, con teclado español puerto joystick y mejoras en la ROM.",
        relevance: true,
        price: 400,
        year: 1986,
        photo: "inves.jpg",
        link: "https://es.wikipedia.org/wiki/Investr%C3%B3nica_Inves_Spectrum_%2B",
        buy: "https://www.ebay.es/"
    },
    {
        model: "TRS-80 Color",
        code: "019",
        manufacturer: "011",
        info: "4Kb, ampliables. Muy popular, fue versionado por otras compañías.",
        relevance: true,
        price: 600,
        year: 1981,
        photo: "coco.jpg",
        link: "https://es.wikipedia.org/wiki/TRS-80_Color_Computer",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Apple ][",
        code: "020",
        manufacturer: "012",
        info: "4Kb, ampliables. Expandible. Popular y extendido en el ámbito profesional.",
        relevance: true,
        price: 650,
        year: 1977,
        photo: "apple2.jpg",
        link: "https://es.wikipedia.org/wiki/Apple_II",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Jupiter ACE",
        code: "021",
        manufacturer: "013",
        info: "1Kb ampliable. Lenguaje de programación FORTH. Teclado pobre.",
        relevance: false,
        price: 250,
        year: 1982,
        photo: "ace.jpg",
        link: "https://es.wikipedia.org/wiki/Jupiter_Ace",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Camputers Lynx",
        code: "022",
        manufacturer: "014",
        info: "48Kb. Aspecto elegante. BASIC avanzado. Teclado profesional.",
        relevance: false,
        price: 200,
        year: 1983,
        photo: "lynx.jpg",
        link: "https://es.wikipedia.org/wiki/Camputers_Lynx",
        buy: "https://www.ebay.es/"
    },
    {
        model: "NewBrain",
        code: "023",
        manufacturer: "015",
        info: "32Kb, ampliable a 2Mb. Hay modelo con impresora semi-portátil. Teclado pobre.",
        relevance: false,
        price: 200,
        year: 1982,
        photo: "newbrain.jpg",
        link: "https://es.wikipedia.org/wiki/Grundy_NewBrain",
        buy: "https://www.ebay.es/"
    },
    {
        model: "Oric 1",
        code: "024",
        manufacturer: "016",
        info: "48Kb. Teclas estrechas. Limitada gama de software. Para principiantes.",
        relevance: false,
        price: 250,
        year: 1982,
        photo: "oric1.jpg",
        link: "https://es.wikipedia.org/wiki/Oric_1",
        buy: "https://www.ebay.es/"
    }
];

export default products;
