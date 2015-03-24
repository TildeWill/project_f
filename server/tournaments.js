Meteor.methods({
  getTournaments: function() {
    this.unblock();
    var response = Meteor.http.get("https://api.askfred.net/v1/tournament/?_api_key=8551171e3a00b135970699f126b63d35&start_date_gte=2015-03-04&start_date_lte=2015-03-04&_sort=start_date_asc");
    return response.data.tournaments;
  }
});
