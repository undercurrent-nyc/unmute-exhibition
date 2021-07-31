import Route from '@ember/routing/route';

export default class TeamTeamClipRoute extends Route {
  redirect({ id, clip }) {
    window.location.replace(`https://10002.unmute.nyc/team/${id}/${clip}`);
  }
}
