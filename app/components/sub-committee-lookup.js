import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    subCommitteeLookup() {
      var params = {
        parentId: this.get('parentId')
      };
      this.sendAction('subCommitteeLookup', params);
    }
  }
});
