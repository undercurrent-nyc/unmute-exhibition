import Route from '@ember/routing/route';

export default class ArtistsArtistRoute extends Route {
  redirect({ id }) {
    window.location.replace(`https://10002.unmute.nyc/artists/${id}`);
  }
}
