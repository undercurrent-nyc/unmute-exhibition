import Route from '@ember/routing/route';

export default class TeamsRoute extends Route {
  redirect(model, transition) {
    console.log(model);
    console.log(transition);
    // window.location.replace(`https://10002.unmute.nyc/teams`);
  }
}
