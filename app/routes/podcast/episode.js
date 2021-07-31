import Route from '@ember/routing/route';

export default class PodcastEpisodeRoute extends Route {
  redirect({ id }) {
    window.location.replace(`https://10002.unmute.nyc/podcasts/${id}`);
  }
}
