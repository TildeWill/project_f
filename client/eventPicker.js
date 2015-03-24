Meteor.call("getEvents", function(error, tournaments) {
  Session.set('events', tournaments);
});


Template.eventPicker.helpers({
  events: function() {
    return Session.get("events")
  }
});

Template.events.events({
  'change select': function(e, t) {
    Router.go("rounds")
  }
});
