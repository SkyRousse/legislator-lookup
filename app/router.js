import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committee', {path: '/committee/:chamber'});
  this.route('sub-committees', {path: '/sub-committees/:parentId'});
  this.route('bills', {path: '/bills/:query'});
  this.route('recent-bills', {path: '/recent-bills/:billType'});
  this.route('store');
});

export default Router;
