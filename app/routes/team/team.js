import Route from '@ember/routing/route';

export default class TeamTeamRoute extends Route {
  redirect({ id }) {
    window.location.replace(`https://10002.unmute.nyc/team/${id}`);
  }
}
