import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=bc1fb9a95b38490593693e37c593627e&query=' + params.query;

    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});


// congress.api.sunlightfoundation.com/bills?query=firearms&apikey=bc1fb9a95b38490593693e37c593627e
