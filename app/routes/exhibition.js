import Route from '@ember/routing/route';

export default class ExhibitionRoute extends Route {
  model() {
    return {
      acfny: [
        {
          id: "web",
          x: 350,
          y: 100,
          title: "Some title",
          artists: ['Mo Kong', 'Olesja Katšanovskaja-Münd'],
        },
        {
          id: "stream",
          x: 100,
          y: 100,
          title: "Some title",
          artists: ['Marie Lukáčová', 'Emily Shanahan'],
        },
      ],
      undercurrent: [
        {
          id: "cloud",
          x: 350,
          y: 100,
          title: "Some title",
          artists: ['Emmanuel Massillon', 'FOQL'],
        },
        {
          id: "bug",
          x: 100,
          y: 100,
          title: "Some title",
          artists: ['H. Lan Thao Lam', 'Sanne De Wilde'],
        },
      ],
    }
  }
}
