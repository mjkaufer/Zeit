Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/submit', function(){
	
	this.wait(Meteor.subscribe('activePapers'));

	if (this.ready()) {
		this.render();
	} else {
		this.render('loading');
	}
})

// Router.route('/items', function () {
//   this.render('Items');
// });

// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });