const yachts = [
  { name:"Azzam", owner:"UAE Royal Family", length:"180m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Azzam+yacht" },
  { name:"Eclipse", owner:"Roman Abramovich", length:"162m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Eclipse+yacht" },
  { name:"Dilbar", owner:"Alisher Usmanov", length:"156m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Dilbar+yacht" },
  { name:"Flying Fox", owner:"Reportedly Dmitry Kamenshchik", length:"136m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Flying+Fox+yacht" },
  { name:"Kaos", owner:"Nancy Walton Laurie", length:"110m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Kaos+yacht" },

  { name:"Savannah", owner:"Lundin Family", length:"84m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Savannah+Feadship+yacht" },
  { name:"Aviva", owner:"Joe Lewis", length:"98m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Aviva+yacht" },
  { name:"Kismet", owner:"Shahid Khan", length:"122m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Kismet+yacht" },
  { name:"Seven Seas", owner:"Steven Spielberg", length:"109m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Seven+Seas+Spielberg+yacht" },
  { name:"Lady Moura", owner:"Nasser Al-Rashid", length:"105m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Lady+Moura+yacht" },

  { name:"Carinthia VII", owner:"Private", length:"97m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Carinthia+VII+yacht" },
  { name:"Madsummer", owner:"Private", length:"95m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Madsummer+yacht" },
  { name:"Elements", owner:"Private", length:"80m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Elements+yacht" },
  { name:"Serene", owner:"Saudi Royal-linked", length:"134m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Serene+yacht" },
  { name:"Nord", owner:"Alexey Mordashov", length:"142m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Nord+yacht" },

  { name:"Black Pearl", owner:"Oleg Burlakov Estate", length:"106m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Black+Pearl+yacht" },
  { name:"Sailing Yacht A", owner:"Andrey Melnichenko", length:"143m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Sailing+Yacht+A" },
  { name:"Koru", owner:"Jeff Bezos", length:"127m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Koru+yacht" },
  { name:"Rising Sun", owner:"David Geffen", length:"138m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Rising+Sun+yacht" },
  { name:"Octopus", owner:"Paul Allen Estate", length:"126m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Octopus+yacht" },

  { name:"Faith", owner:"Michael Latifi", length:"97m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Faith+yacht" },
  { name:"Bravo Eugenia", owner:"Jerry Jones", length:"109m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Bravo+Eugenia+yacht" },
  { name:"Al Lusail", owner:"Qatar Royal Family", length:"123m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Al+Lusail+yacht" },
  { name:"Opera", owner:"Abdullah bin Zayed Al Nahyan", length:"146m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Opera+Lurssen+yacht" },
  { name:"Luna", owner:"Farkhad Akhmedov", length:"115m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Luna+yacht" },

  { name:"Solaris", owner:"Roman Abramovich", length:"140m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Solaris+yacht" },
  { name:"Vava II", owner:"Ernesto Bertarelli", length:"96m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Vava+II+yacht" },
  { name:"Ocean Victory", owner:"Viktor Rashnikov-linked", length:"140m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Ocean+Victory+yacht" },
  { name:"Mayan Queen IV", owner:"Alberto Baillères Estate", length:"93m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Mayan+Queen+IV+yacht" },
  { name:"Alfa Nero", owner:"Andrey Guryev-linked", length:"82m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Alfa+Nero+yacht" },

  { name:"Project X", owner:"Private", length:"88m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Project+X+yacht" },
  { name:"Aquijo", owner:"Private", length:"86m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Aquijo+yacht" },
  { name:"Nero", owner:"Private", length:"90m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Nero+yacht" },
  { name:"Cloud 9", owner:"Private", length:"74m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Cloud+9+yacht" },
  { name:"Ulysses", owner:"Graeme Hart-linked", length:"116m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Ulysses+yacht" },

  { name:"Hampshire II", owner:"Jim Ratcliffe-linked", length:"78m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Hampshire+II+yacht" },
  { name:"Lionheart", owner:"Sir Philip Green", length:"90m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Lionheart+yacht" },
  { name:"Lady S", owner:"Dan Snyder-linked", length:"93m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Lady+S+yacht" },
  { name:"Tranquility", owner:"Private / Charter", length:"92m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Tranquility+yacht" },
  { name:"Radiant", owner:"Abdulla Al Futtaim", length:"110m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Radiant+yacht" },

  { name:"Symphony", owner:"Bernard Arnault", length:"101m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Symphony+yacht" },
  { name:"Anna", owner:"Dmitry Rybolovlev-linked", length:"110m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Anna+yacht" },
  { name:"Phoenix 2", owner:"Jan Kulczyk Estate", length:"90m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Phoenix+2+yacht" },
  { name:"Boadicea", owner:"Private", length:"77m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Boadicea+yacht" },
  { name:"Christina O", owner:"Private / Charter", length:"99m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Christina+O+yacht" },

  { name:"Nautilus", owner:"Private", length:"73m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Nautilus+yacht" },
  { name:"Dragon", owner:"Private", length:"80m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Dragon+yacht" },
  { name:"Moonrise", owner:"Jan Koum", length:"100m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Moonrise+yacht" },
  { name:"Amadea", owner:"Reportedly Suleiman Kerimov-linked", length:"106m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Amadea+yacht" },
  { name:"Solandge", owner:"Private / Charter", length:"85m", wiki:"https://en.wikipedia.org/wiki/Special:Search?search=Solandge+yacht" }
];
