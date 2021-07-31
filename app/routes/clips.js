import Route from '@ember/routing/route';

export default class ClipsRoute extends Route {
  redirect() {
    window.location.replace('https://10002.unmute.nyc/clips');
  }
}
