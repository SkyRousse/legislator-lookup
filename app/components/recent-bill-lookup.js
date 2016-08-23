import Ember from 'ember';

export default Ember.Component.extend({
  billTypes: ['hr', 'hres', 'hjres', 'hconres', 's', 'sres', 'sjres', 'sconres'],
  selectedBillType: 'hr',

  actions: {
    chooseBill(billType) {
      this.set('selectedBillType', billType);
    },

    billTypeLookup() {
      var params = {
        billType: this.get('selectedBillType')
      };
      this.sendAction('billTypeLookup', params);
    }
  }
});
