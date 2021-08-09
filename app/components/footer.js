import Component from '@glimmer/component';

export default class FooterComponent extends Component {

  get logos() {
    const logos = this.data;
    if(this.args.useHope) {
      logos.push(
        { 
          name: "Hope Recycling Station",
          url: "http://www.h-r-s.cz/",
          slug: "hope",
        },
      );
    }

    return logos;
  }


  data = [
    { 
      name: "Co-funded by the Creative Europe Programme of the European Union",
      url: "https://ec.europa.eu/culture/creative-europe",
      slug: "eu",
    },
    { 
      name: "EU National Institutes for Culture",
      url: "https://eunicglobal.eu",
      slug: "eunic",
    },
    { 
      name: "Polish Cultural Institute",
      url: "https://instytutpolski.pl/newyork/",
      slug: "poland",
    },
    { 
      name: "Republic of Estonia Ministry of Culture",
      url: "https://www.visitestonia.com/en/what-to-see-do/history-and-culture/",
      slug: "estonia",
    },
    { 
      name: "Flanders Delegation to the USA",
      url: "https://www.flandersintheusa.org/",
      slug: "flanders",
    },
    { 
      name: "Czech Center",
      url: "https://new-york.czechcentres.cz/en/",
      slug: "czech",
    },
    { 
      name: "Consulate General of Estonia New York",
      url: "https://newyork.mfa.ee/",
      slug: "estonia-consulate",
    },
    { 
      name: "Arts Council Malta",
      url: "https://www.artscouncilmalta.org/",
      slug: "malta",
    },
    { 
      name: "Jindřich Chalupecký Society",
      url: "https://www.sjch.cz/en/",
      slug: "chalupecky",
    },
    { 
      name: "Romanian Cultural Institute",
      url: "https://www.rciusa.info/",
      slug: "romanian",
    },
    { 
      name: "Wallonie-Bruxelles International.be aux Etats-Unis",
      url: "http://wallonia.us/en",
      slug: "wallonia",
    },
    { 
      name: "Goethe Institute",
      url: "https://www.goethe.de/ins/us/en/sta/ney.html",
      slug: "goethe",
    },
    { 
      name: "Lithuanian Culture Institute",
      url: "https://english.lithuanianculture.lt/",
      slug: "lithuanian",
    },
  ]
}
