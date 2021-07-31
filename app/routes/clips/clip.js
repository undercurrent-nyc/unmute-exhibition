import Route from '@ember/routing/route';

export default class ClipsClipRoute extends Route {
  redirect({ id }) {
    window.location.replace(`https://10002.unmute.nyc/clips/${id}`);
  }
}
