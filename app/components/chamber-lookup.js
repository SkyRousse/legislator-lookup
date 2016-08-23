import Ember from 'ember';

export default Ember.Component.extend({
  chambers: ['house', 'senate', 'joint'],
  selectedChamber: 'house',

  actions: {
    chooseChamber(chamber) {
      this.set('selectedChamber', chamber);
    },

    chamberLookup() {
      var params = {
        chamber: this.get('selectedChamber')
      };
      this.sendAction('chamberLookup', params);
    }
  }
});
