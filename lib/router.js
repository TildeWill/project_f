Router.configure({
  // we use the  appBody template to define the layout for the entire app
  //layoutTemplate: 'appBody',

  // the appNotFound template is used for unknown routes and missing lists
  //notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  //loadingTemplate: 'appLoading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  //waitOn: function() {
  //  return [
  //    Meteor.subscribe('tournaments'),
  //  ];
  //}
});

Router.map(function() {
  //this.route('tournaments');
  //this.route('tournaments/:_id/eventPicker');
  //this.route('signin');

  //this.route('listsShow', {
  //  path: '/lists/:_id',
  //  // subscribe to todos before the page is rendered but don't wait on the
  //  // subscription, we'll just render the items as they arrive
  //  onBeforeAction: function() {
  //    this.todosHandle = Meteor.subscribe('todos', this.params._id);
  //
  //    if (this.ready()) {
  //      // Handle for launch screen defined in app-body.js
  //      dataReadyHold.release();
  //    }
  //  },
  //  data: function() {
  //    return Lists.findOne(this.params._id);
  //  },
  //  action: function() {
  //    this.render();
  //  }
  //});
  //
  //this.route('home', {
  //  path: '/',
  //  action: function() {
  //    Router.go('listsShow', Lists.findOne());
  //  }
  //});
  //this.route('tournaments');
  this.route('/', function() {
    this.render('tournaments');
  });

  this.route('/tournaments/:id/eventPicker', function() {
    this.render('eventPicker');
  });
});
