import Route from '@ember/routing/route';

export default class TeamsTeamRoute extends Route {
  redirect({ id }) {
    window.location.replace(`https://10002.unmute.nyc/teams/${id}`);
  }
}
