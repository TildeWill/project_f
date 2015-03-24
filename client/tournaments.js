Meteor.call("getTournaments", function(error, tournaments) {
  Session.set('tournaments', tournaments);
});


Template.tournaments.helpers({
  tournaments: function() {
    return Session.get("tournaments")
  }
});

Template.tournaments.events({
  'change select': function(e) {
    var tournamentId = e.target.value;
    Router.go("/tournaments/"+ tournamentId +"/eventPicker")
  }
});
