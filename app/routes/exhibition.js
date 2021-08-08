import Route from '@ember/routing/route';

export default class ExhibitionRoute extends Route {
  model() {
    return {
      acfny: [
        {
          x: 100,
          y: 100,
          title: "Some title",
          artists: ['Mo Kong', 'Olesja Katšanovskaja-Münd'],
        },
      ],
      undercurrent: [
        {
          x: 100,
          y: 100,
          title: "Some title",
          artists: ['H. Lan Thao Lam', 'Sanne De Wilde'],
        },
      ],
    }
  }
}
