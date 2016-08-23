import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    debugger;
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=bc1fb9a95b38490593693e37c593627e&bill_type=' + params.billType;

    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
