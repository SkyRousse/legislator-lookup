import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    chamberLookup(params) {
      this.transitionTo('committee', params.chamber);
    },
    subCommitteeLookup(params) {
      this.transitionTo('sub-committees', params);
    },
    billLookup(params) {
      this.transitionTo('bills', params.query);
    },
    billTypeLookup(params) {
      this.transitionTo('recent-bills', params.billType);
    }
  }
});
