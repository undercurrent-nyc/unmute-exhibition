import Component from '@glimmer/component';

export default class ExhibitionComponent extends Component {
  details = {
    acfny: {
      slug: "acfny",
      dates: "09.22/21 – 01.07/22",
      place: "Austrian Cultural Forum",
      url: "https://acfny.org",
      addr1: "11 East 52nd Street",
      locality: "New York",
      region: "NY",
      postcode: "10022",
      days: "Open daily",
      hours: "10am – 6pm",
      schemaHours: "Mo,Tu,We,Th,Fr,Sa,Su 10:00-18:00",
      directions: {
        link: "https://g.page/ACFNY?share",
        subway: "E, M train to Fifth Avenue/53rd Street; B, D, F, M to 47-50 Street/Rockefeller Center; E, M, 6 to 51st Street/Lexington Avenue",
        bus: "M 1, 2, 3, 4, 5 to 53rd Street"
      }
    },
    undercurrent: {
      slug: "undercurrent",
      dates: "09.22 – 11.21/21",
      place: "Undercurrent",
      url: "https://undercurrent.nyc",
      addr1: "70 John St.",
      locality: "Brooklyn",
      region: "NY",
      postcode: "11201",
      days: "Thurs – Sun",
      hours: "1pm – 7pm",
      schemaHours: "Th,Fr,Sa,Su 13:00-17:00",
      directions: {
        link: "https://g.page/Undercurrent70?share",
        subway: "F to York Street + walk about 5 min. (0.3mi); A, C to High Street + walk about 13 min. (0.6mi)",
        bus: "B57 to Gold Street/Sands Street + walk about 10 min. (0.5mi)"
      }
    }
  }
}
