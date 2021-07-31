import Route from '@ember/routing/route';

export default class TeamsTeamClipRoute extends Route {
  redirect({ id, clip }) {
    window.location.replace(`https://10002.unmute.nyc/teams/${id}/${clip}`);
  }
}
