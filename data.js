const yachts = [
  {
    name: "Azzam",
    deepPockets: "UAE Royal Family",
    ownerLink: "https://en.wikipedia.org/wiki/House_of_Al_Nahyan",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Azzam+yacht",
    blurb: "One of the largest private yachts in the world."
  },
  {
    name: "Eclipse",
    deepPockets: "Roman Abramovich",
    ownerLink: "https://en.wikipedia.org/wiki/Roman_Abramovich",
    yachtLink: "https://en.wikipedia.org/wiki/Eclipse_(yacht)",
    blurb: "A legendary giga-yacht associated with Mediterranean summers."
  },
  {
    name: "Dilbar",
    deepPockets: "Alisher Usmanov",
    ownerLink: "https://en.wikipedia.org/wiki/Alisher_Usmanov",
    yachtLink: "https://en.wikipedia.org/wiki/Dilbar_(yacht)",
    blurb: "Known for immense volume and ultra-luxury scale."
  },
  {
    name: "Flying Fox",
    deepPockets: "Reportedly Dmitry Kamenshchik",
    ownerLink: "https://en.wikipedia.org/wiki/Dmitry_Kamenshchik",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Flying+Fox+yacht",
    blurb: "A major charter superyacht often seen in the Balearic circuit."
  },
  {
    name: "Kaos",
    deepPockets: "Nancy Walton Laurie",
    ownerLink: "https://en.wikipedia.org/wiki/Nancy_Walton_Laurie",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Kaos+yacht",
    blurb: "Formerly Jubilee, one of the most recognisable Oceanco yachts."
  },
  {
    name: "Savannah",
    deepPockets: "Lundin Family",
    ownerLink: "https://en.wikipedia.org/wiki/Lundin_family",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Savannah+Feadship+yacht",
    blurb: "A hybrid Feadship with a distinctive metallic green hull."
  },
  {
    name: "Aviva",
    deepPockets: "Joe Lewis",
    ownerLink: "https://en.wikipedia.org/wiki/Joe_Lewis_(British_businessman)",
    yachtLink: "https://en.wikipedia.org/wiki/Aviva_(yacht)",
    blurb: "Famous for its indoor padel tennis court."
  },
  {
    name: "Kismet",
    deepPockets: "Shahid Khan",
    ownerLink: "https://en.wikipedia.org/wiki/Shahid_Khan",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Kismet+yacht",
    blurb: "A dramatic Lürssen superyacht linked to NFL billionaire Shahid Khan."
  },
  {
    name: "Seven Seas",
    deepPockets: "Steven Spielberg",
    ownerLink: "https://en.wikipedia.org/wiki/Steven_Spielberg",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Seven+Seas+Spielberg+yacht",
    blurb: "A cinematic Oceanco yacht built for long private cruising."
  },
  {
    name: "Lady Moura",
    deepPockets: "Nasser Al-Rashid",
    ownerLink: "https://en.wikipedia.org/wiki/Nasser_Al-Rashid",
    yachtLink: "https://en.wikipedia.org/wiki/Lady_Moura",
    blurb: "A classic Mediterranean icon with unmistakable gold lettering."
  },
  {
    name: "Carinthia VII",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Carinthia+VII+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Carinthia+VII+yacht",
    blurb: "A famous Lürssen yacht with strong Palma presence."
  },
  {
    name: "Madsummer",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Madsummer+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Madsummer+yacht",
    blurb: "A large modern yacht often associated with Mediterranean seasons."
  },
  {
    name: "Elements",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Elements+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Elements+yacht",
    blurb: "A modern charter-friendly yacht with strong visual presence."
  },
  {
    name: "Serene",
    deepPockets: "Saudi-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Mohammed_bin_Salman",
    yachtLink: "https://en.wikipedia.org/wiki/Serene_(yacht)",
    blurb: "One of the largest yachts ever built in Italy."
  },
  {
    name: "Nord",
    deepPockets: "Alexey Mordashov",
    ownerLink: "https://en.wikipedia.org/wiki/Alexey_Mordashov",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Nord+yacht",
    blurb: "A massive explorer-style yacht with a sharp modern profile."
  },
  {
    name: "Black Pearl",
    deepPockets: "Oleg Burlakov Estate",
    ownerLink: "https://en.wikipedia.org/wiki/Oleg_Burlakov",
    yachtLink: "https://en.wikipedia.org/wiki/Black_Pearl_(yacht)",
    blurb: "One of the most extraordinary sailing yachts ever built."
  },
  {
    name: "Sailing Yacht A",
    deepPockets: "Andrey Melnichenko",
    ownerLink: "https://en.wikipedia.org/wiki/Andrey_Melnichenko",
    yachtLink: "https://en.wikipedia.org/wiki/Sailing_Yacht_A",
    blurb: "A radical futuristic sailing yacht unlike almost anything else afloat."
  },
  {
    name: "Koru",
    deepPockets: "Jeff Bezos",
    ownerLink: "https://en.wikipedia.org/wiki/Jeff_Bezos",
    yachtLink: "https://en.wikipedia.org/wiki/Koru_(yacht)",
    blurb: "A giant sailing yacht often accompanied by a support vessel."
  },
  {
    name: "Rising Sun",
    deepPockets: "David Geffen",
    ownerLink: "https://en.wikipedia.org/wiki/David_Geffen",
    yachtLink: "https://en.wikipedia.org/wiki/Rising_Sun_(yacht)",
    blurb: "A famous entertainment-world superyacht."
  },
  {
    name: "Octopus",
    deepPockets: "Paul Allen Estate",
    ownerLink: "https://en.wikipedia.org/wiki/Paul_Allen",
    yachtLink: "https://en.wikipedia.org/wiki/Octopus_(yacht)",
    blurb: "A legendary explorer yacht with expedition capability."
  },
  {
    name: "Faith",
    deepPockets: "Michael Latifi",
    ownerLink: "https://en.wikipedia.org/wiki/Michael_Latifi",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Faith+yacht",
    blurb: "A resort-like Feadship with refined luxury credentials."
  },
  {
    name: "Bravo Eugenia",
    deepPockets: "Jerry Jones",
    ownerLink: "https://en.wikipedia.org/wiki/Jerry_Jones",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Bravo+Eugenia+yacht",
    blurb: "A sleek Oceanco yacht named after Jerry Jones’s wife."
  },
  {
    name: "Al Lusail",
    deepPockets: "Qatar Royal Family",
    ownerLink: "https://en.wikipedia.org/wiki/House_of_Thani",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Al+Lusail+yacht",
    blurb: "A monumental royal yacht with state-level scale."
  },
  {
    name: "Opera",
    deepPockets: "Abdullah bin Zayed Al Nahyan",
    ownerLink: "https://en.wikipedia.org/wiki/Abdullah_bin_Zayed_Al_Nahyan",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Opera+Lurssen+yacht",
    blurb: "A newer ultra-large Lürssen yacht in the Mediterranean circuit."
  },
  {
    name: "Luna",
    deepPockets: "Farkhad Akhmedov",
    ownerLink: "https://en.wikipedia.org/wiki/Farkhad_Akhmedov",
    yachtLink: "https://en.wikipedia.org/wiki/Luna_(yacht)",
    blurb: "An explorer-style yacht with extensive exterior deck space."
  },
  {
    name: "Solaris",
    deepPockets: "Roman Abramovich",
    ownerLink: "https://en.wikipedia.org/wiki/Roman_Abramovich",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Solaris+yacht",
    blurb: "A modern explorer-style giga-yacht."
  },
  {
    name: "Vava II",
    deepPockets: "Ernesto Bertarelli",
    ownerLink: "https://en.wikipedia.org/wiki/Ernesto_Bertarelli",
    yachtLink: "https://en.wikipedia.org/wiki/Vava_II",
    blurb: "A large private yacht associated with Swiss billionaire wealth."
  },
  {
    name: "Ocean Victory",
    deepPockets: "Viktor Rashnikov-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Viktor_Rashnikov",
    yachtLink: "https://en.wikipedia.org/wiki/Ocean_Victory",
    blurb: "A vast Fincantieri yacht with serious Mediterranean presence."
  },
  {
    name: "Mayan Queen IV",
    deepPockets: "Baillères Estate",
    ownerLink: "https://en.wikipedia.org/wiki/Alberto_Baill%C3%A8res",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Mayan+Queen+IV+yacht",
    blurb: "A distinctive large yacht linked to Mexican industrial wealth."
  },
  {
    name: "Alfa Nero",
    deepPockets: "Andrey Guryev-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Andrey_Guryev_(businessman)",
    yachtLink: "https://en.wikipedia.org/wiki/Alfa_Nero",
    blurb: "Known for its dramatic aft pool and bold exterior styling."
  },
  {
    name: "Project X",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Project+X+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Project+X+yacht",
    blurb: "A sharp modern yacht with strong charter appeal."
  },
  {
    name: "Aquijo",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Aquijo+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Aquijo+yacht",
    blurb: "One of the world’s largest high-performance sailing yachts."
  },
  {
    name: "Nero",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Nero+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Nero+yacht",
    blurb: "A classic-inspired yacht with dramatic black styling."
  },
  {
    name: "Cloud 9",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Cloud+9+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Cloud+9+yacht",
    blurb: "A modern charter yacht often seen around elite Mediterranean destinations."
  },
  {
    name: "Ulysses",
    deepPockets: "Graeme Hart-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Graeme_Hart",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Ulysses+yacht",
    blurb: "A rugged explorer yacht built for long-range cruising."
  },
  {
    name: "Hampshire II",
    deepPockets: "Jim Ratcliffe-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Jim_Ratcliffe",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Hampshire+II+yacht",
    blurb: "A classic-styled yacht associated with British industrial wealth."
  },
  {
    name: "Lionheart",
    deepPockets: "Sir Philip Green",
    ownerLink: "https://en.wikipedia.org/wiki/Philip_Green",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Lionheart+yacht",
    blurb: "A well-known Benetti yacht in the Mediterranean circuit."
  },
  {
    name: "Lady S",
    deepPockets: "Dan Snyder-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Daniel_Snyder",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Lady+S+yacht",
    blurb: "A large yacht with cinema and entertainment-focused luxury."
  },
  {
    name: "Tranquility",
    deepPockets: "Private / Charter",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Tranquility+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Tranquility+yacht",
    blurb: "A charter-friendly yacht with spa-like luxury styling."
  },
  {
    name: "Radiant",
    deepPockets: "Abdulla Al Futtaim",
    ownerLink: "https://en.wikipedia.org/wiki/Abdulla_Al_Futtaim",
    yachtLink: "https://en.wikipedia.org/wiki/Radiant_(yacht)",
    blurb: "A large Lürssen yacht with strong security profile."
  },
  {
    name: "Symphony",
    deepPockets: "Bernard Arnault",
    ownerLink: "https://en.wikipedia.org/wiki/Bernard_Arnault",
    yachtLink: "https://en.wikipedia.org/wiki/Symphony_(yacht)",
    blurb: "A Feadship yacht linked to the LVMH luxury empire."
  },
  {
    name: "Anna",
    deepPockets: "Dmitry Rybolovlev-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Dmitry_Rybolovlev",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Anna+yacht",
    blurb: "A large explorer-style yacht with substantial range."
  },
  {
    name: "Phoenix 2",
    deepPockets: "Jan Kulczyk Estate",
    ownerLink: "https://en.wikipedia.org/wiki/Jan_Kulczyk",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Phoenix+2+yacht",
    blurb: "A Lürssen yacht known for art deco influence."
  },
  {
    name: "Boadicea",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Boadicea+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Boadicea+yacht",
    blurb: "A classic large yacht from the older luxury generation."
  },
  {
    name: "Christina O",
    deepPockets: "Private / Charter",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Christina+O+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Christina_O",
    blurb: "The legendary Aristotle Onassis yacht, still iconic."
  },
  {
    name: "Nautilus",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Nautilus+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Nautilus+yacht",
    blurb: "Explorer-style yacht suited to rugged cruising."
  },
  {
    name: "Dragon",
    deepPockets: "Private",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Dragon+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Dragon+yacht",
    blurb: "A sleek modern yacht often noted in the Med."
  },
  {
    name: "Moonrise",
    deepPockets: "Jan Koum",
    ownerLink: "https://en.wikipedia.org/wiki/Jan_Koum",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Moonrise+yacht",
    blurb: "A large Feadship linked to tech wealth."
  },
  {
    name: "Amadea",
    deepPockets: "Suleiman Kerimov-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Suleyman_Kerimov",
    yachtLink: "https://en.wikipedia.org/wiki/Amadea_(yacht)",
    blurb: "A highly discussed large yacht with legal and ownership controversy."
  },
  {
    name: "Solandge",
    deepPockets: "Private / Charter",
    ownerLink: "https://en.wikipedia.org/wiki/Special:Search?search=Solandge+yacht+owner",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Solandge+yacht",
    blurb: "A well-known charter yacht in the Mediterranean luxury market."
  },
  {
    name: "Lady Lara",
    deepPockets: "Alexander Machkevitch-linked",
    ownerLink: "https://en.wikipedia.org/wiki/Alexander_Machkevitch",
    yachtLink: "https://en.wikipedia.org/wiki/Special:Search?search=Lady+Lara+yacht",
    blurb: "A sleek Lürssen yacht with classic superyacht elegance."
  }
];
