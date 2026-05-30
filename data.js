const yachts = [
  {
    name: "A",
    deepPockets: "Andrey Melnichenko",
    diagram: "images/a-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/a/",
    ownerLink: "https://en.wikipedia.org/wiki/Andrey_Melnichenko"
  },
  {
    name: "Sailing Yacht A",
    deepPockets: "Andrey Melnichenko",
    diagram: "images/sailing-yacht-a-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/sailing-yacht-a/",
    ownerLink: "https://en.wikipedia.org/wiki/Andrey_Melnichenko"
  },
  {
    name: "Azzam",
    deepPockets: "Al Nahyan family",
    diagram: "images/azzam-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/azzam/",
    ownerLink: "https://en.wikipedia.org/wiki/Al_Nahyan_family"
  },
  {
    name: "Koru",
    deepPockets: "Jeff Bezos",
    diagram: "images/koru-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/koru/",
    ownerLink: "https://en.wikipedia.org/wiki/Jeff_Bezos"
  },
  {
    name: "Abeona",
    deepPockets: "Jeff Bezos",
    diagram: "images/abeona-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/abeona/",
    ownerLink: "https://en.wikipedia.org/wiki/Jeff_Bezos"
  },
  {
    name: "Launchpad",
    deepPockets: "Mark Zuckerberg",
    diagram: "images/launchpad-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/launchpad/",
    ownerLink: "https://en.wikipedia.org/wiki/Mark_Zuckerberg"
  },
  {
    name: "Rising Sun",
    deepPockets: "David Geffen",
    diagram: "images/rising-sun-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/rising-sun/",
    ownerLink: "https://en.wikipedia.org/wiki/David_Geffen"
  },
  {
    name: "Eclipse",
    deepPockets: "Roman Abramovich",
    diagram: "images/eclipse-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/eclipse/",
    ownerLink: "https://en.wikipedia.org/wiki/Roman_Abramovich"
  },
  {
    name: "Dilbar",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/dilbar-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/dilbar/",
    ownerLink: "https://en.wikipedia.org/wiki/Dilbar_(yacht)"
  },
  {
    name: "Nord",
    deepPockets: "Alexei Mordashov",
    diagram: "images/nord-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/nord/",
    ownerLink: "https://en.wikipedia.org/wiki/Alexey_Mordashov"
  },
  {
    name: "Solaris",
    deepPockets: "Roman Abramovich",
    diagram: "images/solaris-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/solaris/",
    ownerLink: "https://en.wikipedia.org/wiki/Roman_Abramovich"
  },
  {
    name: "Scheherazade",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/scheherazade-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/scheherazade/",
    ownerLink: "https://en.wikipedia.org/wiki/Scheherazade_(yacht)"
  },
  {
    name: "Amadea",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/amadea-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/amadea/",
    ownerLink: "https://en.wikipedia.org/wiki/Amadea_(yacht)"
  },
  {
    name: "Flying Fox",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/flying-fox-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/flying-fox/",
    ownerLink: "https://en.wikipedia.org/wiki/Flying_Fox_(yacht)"
  },
  {
    name: "Luna",
    deepPockets: "Roman Abramovich",
    diagram: "images/luna-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/luna/",
    ownerLink: "https://en.wikipedia.org/wiki/Roman_Abramovich"
  },
  {
    name: "Octopus",
    deepPockets: "Paul Allen estate",
    diagram: "images/octopus-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/octopus/",
    ownerLink: "https://en.wikipedia.org/wiki/Paul_Allen"
  },
  {
    name: "Symphony",
    deepPockets: "Bernard Arnault",
    diagram: "images/symphony-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/symphony/",
    ownerLink: "https://en.wikipedia.org/wiki/Bernard_Arnault"
  },
  {
    name: "Faith",
    deepPockets: "Michael Latifi",
    diagram: "images/faith-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/faith/",
    ownerLink: "https://en.wikipedia.org/wiki/Michael_Latifi"
  },
  {
    name: "Lady Moura",
    deepPockets: "Nasser Al-Rashid",
    diagram: "images/lady-moura-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/lady-moura/",
    ownerLink: "https://en.wikipedia.org/wiki/Nasser_Al-Rashid"
  },
  {
    name: "Aviva",
    deepPockets: "Joe Lewis",
    diagram: "images/aviva-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/aviva/",
    ownerLink: "https://en.wikipedia.org/wiki/Joe_Lewis_(British_businessman)"
  },
  {
    name: "Lionheart",
    deepPockets: "Philip Green",
    diagram: "images/lionheart-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/lionheart/",
    ownerLink: "https://en.wikipedia.org/wiki/Philip_Green"
  },
  {
    name: "Hampshire II",
    deepPockets: "Jim Ratcliffe",
    diagram: "images/hampshire-ii-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/hampshire-ii/",
    ownerLink: "https://en.wikipedia.org/wiki/Jim_Ratcliffe"
  },
  {
    name: "Musashi",
    deepPockets: "Larry Ellison",
    diagram: "images/musashi-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/musashi/",
    ownerLink: "https://en.wikipedia.org/wiki/Larry_Ellison"
  },
  {
    name: "Seven Seas",
    deepPockets: "Steven Spielberg",
    diagram: "images/seven-seas-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/seven-seas/",
    ownerLink: "https://en.wikipedia.org/wiki/Steven_Spielberg"
  },
  {
    name: "Kismet",
    deepPockets: "Shahid Khan",
    diagram: "images/kismet-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/kismet/",
    ownerLink: "https://en.wikipedia.org/wiki/Shahid_Khan"
  },
  {
    name: "Moonrise",
    deepPockets: "Jan Koum",
    diagram: "images/moonrise-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/moonrise/",
    ownerLink: "https://en.wikipedia.org/wiki/Jan_Koum"
  },
  {
    name: "IJE",
    deepPockets: "James Packer",
    diagram: "images/ije-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/ije/",
    ownerLink: "https://en.wikipedia.org/wiki/James_Packer"
  },
  {
    name: "Kaos",
    deepPockets: "Nancy Walton Laurie",
    diagram: "images/kaos-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/kaos/",
    ownerLink: "https://en.wikipedia.org/wiki/Nancy_Walton_Laurie"
  },
  {
    name: "Anna",
    deepPockets: "Dmitry Rybolovlev",
    diagram: "images/anna-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/anna/",
    ownerLink: "https://en.wikipedia.org/wiki/Dmitry_Rybolovlev"
  },
  {
    name: "Infinity",
    deepPockets: "Eric Smidt",
    diagram: "images/infinity-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/infinity/",
    ownerLink: "https://en.wikipedia.org/wiki/Eric_Smidt"
  },
  {
    name: "Radiant",
    deepPockets: "Abdulla Al Futtaim",
    diagram: "images/radiant-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/radiant/",
    ownerLink: "https://en.wikipedia.org/wiki/Al-Futtaim_Group"
  },
  {
    name: "Pelorus",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/pelorus-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/pelorus/",
    ownerLink: "https://en.wikipedia.org/wiki/Pelorus_(yacht)"
  },
  {
    name: "Opera",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/opera-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/opera/",
    ownerLink: "https://en.wikipedia.org/wiki/Opera_(yacht)"
  },
  {
    name: "Ahpo",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/ahpo-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/ahpo/",
    ownerLink: "https://en.wikipedia.org/wiki/Ahpo_(yacht)"
  },
  {
    name: "Here Comes The Sun",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/here-comes-the-sun-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/here-comes-the-sun/",
    ownerLink: "https://en.wikipedia.org/wiki/Here_Comes_the_Sun_(yacht)"
  },
  {
    name: "Yas",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/yas-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/yas/",
    ownerLink: "https://en.wikipedia.org/wiki/Yas_(yacht)"
  },
  {
    name: "Maryah",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/maryah-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/maryah/",
    ownerLink: "https://en.wikipedia.org/wiki/Maryah_(yacht)"
  },
  {
    name: "Ulysses",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/ulysses-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/ulysses/",
    ownerLink: "https://en.wikipedia.org/wiki/Ulysses_(yacht)"
  },
  {
    name: "Eos",
    deepPockets: "Barry Diller",
    diagram: "images/eos-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/eos/",
    ownerLink: "https://en.wikipedia.org/wiki/Barry_Diller"
  },
  {
    name: "Athena",
    deepPockets: "Jim Clark",
    diagram: "images/athena-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/athena/",
    ownerLink: "https://en.wikipedia.org/wiki/James_H._Clark"
  },
  {
    name: "Serene",
    deepPockets: "Mohammed bin Salman",
    diagram: "images/serene-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/serene/",
    ownerLink: "https://en.wikipedia.org/wiki/Mohammed_bin_Salman"
  },
  {
    name: "Dubai",
    deepPockets: "Dubai royal family",
    diagram: "images/dubai-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/dubai/",
    ownerLink: "https://en.wikipedia.org/wiki/Mohammed_bin_Rashid_Al_Maktoum"
  },
  {
    name: "Al Said",
    deepPockets: "Omani royal family",
    diagram: "images/al-said-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/al-said/",
    ownerLink: "https://en.wikipedia.org/wiki/House_of_Al_Busaid"
  },
  {
    name: "Prince Abdulaziz",
    deepPockets: "Saudi royal family",
    diagram: "images/prince-abdulaziz-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/prince-abdulaziz/",
    ownerLink: "https://en.wikipedia.org/wiki/House_of_Saud"
  },
  {
    name: "Black Pearl",
    deepPockets: "Oleg Burlakov estate",
    diagram: "images/black-pearl-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/black-pearl/",
    ownerLink: "https://en.wikipedia.org/wiki/Black_Pearl_(yacht)"
  },
  {
    name: "Maltese Falcon",
    deepPockets: "Elena Ambrosiadou",
    diagram: "images/maltese-falcon-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/maltese-falcon/",
    ownerLink: "https://en.wikipedia.org/wiki/Elena_Ambrosiadou"
  },
  {
    name: "Christina O",
    deepPockets: "Historic Onassis yacht",
    diagram: "images/christina-o-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/christina-o/",
    ownerLink: "https://en.wikipedia.org/wiki/Christina_O"
  },
  {
    name: "Sea Cloud",
    deepPockets: "Historic charter vessel",
    diagram: "images/sea-cloud-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/sea-cloud/",
    ownerLink: "https://en.wikipedia.org/wiki/Sea_Cloud"
  },
  {
    name: "Limitless",
    deepPockets: "Les Wexner",
    diagram: "images/limitless-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/limitless/",
    ownerLink: "https://en.wikipedia.org/wiki/Les_Wexner"
  },
  {
    name: "Venus",
    deepPockets: "Laurene Powell Jobs",
    diagram: "images/venus-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/venus/",
    ownerLink: "https://en.wikipedia.org/wiki/Laurene_Powell_Jobs"
  },
  {
    name: "Savannah",
    deepPockets: "Lukas Lundin estate",
    diagram: "images/savannah-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/savannah/",
    ownerLink: "https://en.wikipedia.org/wiki/Lukas_Lundin"
  },
  {
    name: "Viva",
    deepPockets: "Frank Fertitta III",
    diagram: "images/viva-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/viva/",
    ownerLink: "https://en.wikipedia.org/wiki/Frank_Fertitta_III"
  },
  {
    name: "Vava II",
    deepPockets: "Ernesto Bertarelli",
    diagram: "images/vava-ii-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/vava-ii/",
    ownerLink: "https://en.wikipedia.org/wiki/Ernesto_Bertarelli"
  },
  {
    name: "Madame Gu",
    deepPockets: "Andrei Skoch",
    diagram: "images/madame-gu-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/madame-gu/",
    ownerLink: "https://en.wikipedia.org/wiki/Andrei_Skoch"
  },
  {
    name: "Al Lusail",
    deepPockets: "Qatari royal family",
    diagram: "images/al-lusail-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/al-lusail/",
    ownerLink: "https://en.wikipedia.org/wiki/House_of_Thani"
  },
  {
    name: "Al Mirqab",
    deepPockets: "Hamad bin Jassim bin Jaber Al Thani",
    diagram: "images/al-mirqab-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/al-mirqab/",
    ownerLink: "https://en.wikipedia.org/wiki/Hamad_bin_Jassim_bin_Jaber_Al_Thani"
  },
  {
    name: "A+",
    deepPockets: "Sheikh Mansour bin Zayed Al Nahyan",
    diagram: "images/a-plus-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/a-plus/",
    ownerLink: "https://en.wikipedia.org/wiki/Mansour_bin_Zayed_Al_Nahyan"
  },
  {
    name: "Mayan Queen IV",
    deepPockets: "Alberto Bailleres estate",
    diagram: "images/mayan-queen-iv-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/mayan-queen-iv/",
    ownerLink: "https://en.wikipedia.org/wiki/Alberto_Baill%C3%A8res"
  },
  {
    name: "Alfa Nero",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/alfa-nero-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/alfa-nero/",
    ownerLink: "https://en.wikipedia.org/wiki/Alfa_Nero"
  },
  {
    name: "Aquijo",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/aquijo-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/aquijo/",
    ownerLink: "https://en.wikipedia.org/wiki/Aquijo"
  },
  {
    name: "Andromeda",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/andromeda-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/andromeda/",
    ownerLink: "https://en.wikipedia.org/wiki/Andromeda_(yacht)"
  },
  {
    name: "Grand Ocean",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/grand-ocean-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/grand-ocean/",
    ownerLink: "https://www.superyachtfan.com/yacht/grand-ocean/"
  },
  {
    name: "Coral Ocean",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/coral-ocean-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/coral-ocean/",
    ownerLink: "https://www.superyachtfan.com/yacht/coral-ocean/"
  },
  {
    name: "Sherakhan",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/sherakhan-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/sherakhan/",
    ownerLink: "https://www.superyachtfan.com/yacht/sherakhan/"
  },
  {
    name: "Nirvana",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/nirvana-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/nirvana/",
    ownerLink: "https://www.superyachtfan.com/yacht/nirvana/"
  },
  {
    name: "Excellence",
    deepPockets: "Herb Chambers",
    diagram: "images/excellence-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/excellence/",
    ownerLink: "https://en.wikipedia.org/wiki/Herb_Chambers"
  },
  {
    name: "Tango",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/tango-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/tango/",
    ownerLink: "https://en.wikipedia.org/wiki/Tango_(yacht)"
  },
  {
    name: "Blue",
    deepPockets: "Sheikh Mansour bin Zayed Al Nahyan",
    diagram: "images/blue-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/blue/",
    ownerLink: "https://en.wikipedia.org/wiki/Mansour_bin_Zayed_Al_Nahyan"
  },
  {
    name: "Le Grand Bleu",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/le-grand-bleu-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/le-grand-bleu/",
    ownerLink: "https://en.wikipedia.org/wiki/Le_Grand_Bleu_(yacht)"
  },
  {
    name: "Queen Miri",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/queen-miri-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/queen-miri/",
    ownerLink: "https://www.superyachtfan.com/yacht/queen-miri/"
  },
  {
    name: "Bravo Eugenia",
    deepPockets: "Jerry Jones",
    diagram: "images/bravo-eugenia-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/bravo-eugenia/",
    ownerLink: "https://en.wikipedia.org/wiki/Jerry_Jones"
  },
  {
    name: "Madsummer",
    deepPockets: "Jeffrey Soffer",
    diagram: "images/madsummer-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/madsummer/",
    ownerLink: "https://en.wikipedia.org/wiki/Jeffrey_Soffer"
  },
  {
    name: "Cloudbreak",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/cloudbreak-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/cloudbreak/",
    ownerLink: "https://www.superyachtfan.com/yacht/cloudbreak/"
  },
  {
    name: "Artefact",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/artefact-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/artefact/",
    ownerLink: "https://www.superyachtfan.com/yacht/artefact/"
  },
  {
    name: "Samar",
    deepPockets: "Kuwaiti ownership reported",
    diagram: "images/samar-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/samar/",
    ownerLink: "https://www.superyachtfan.com/yacht/samar/"
  },
  {
    name: "Graceful",
    deepPockets: "OWNERSHIP DISPUTED",
    diagram: "images/graceful-profile.svg",
    photo: "",
    yachtLink: "https://www.superyachtfan.com/yacht/graceful/",
    ownerLink: "https://www.superyachtfan.com/yacht/graceful/"
  }
];
