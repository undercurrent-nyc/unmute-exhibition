import EmberRouter from '@ember/routing/router';
import config from 'unmute/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('clips');
  this.route('clips.clip', { path: '/clips/:id' });
  this.route('teams');
  this.route('teams.team', { path: '/teams/:id' });
  this.route('teams.team.clip', { path: '/teams/:id/:clip' });
  this.route('artists');
  this.route('artists.artist', { path: '/artists/:id' });
  this.route('team');
  this.route('team.team', { path: '/team/:id' });
  this.route('team.team.clip', { path: '/team/:id/:clip' });
  this.route('consultants');
  this.route('podcast');
  this.route('podcast.episode', { path: '/podcast/episode/:id' });
  this.route('staging');
  this.route('exhibition');
});
