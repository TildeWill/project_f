Meteor.methods({
  getEvents: function() {
    this.unblock();
    var response = Meteor.http.get("https://api.askfred.net/v1/event/?_api_key=8551171e3a00b135970699f126b63d35&tournament_id=29122");
    return response.data.events;
  }
});
