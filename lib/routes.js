Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading'
});

Router.route('/', {
	name: "home",
	waitOn: function(){
		return [Meteor.subscribe('allPapers'), Meteor.subscribe('posts')];
	},
	action: function(){
		this.render("home");
	}
});

Router.route('/submit', {
	waitOn: function(){
		return Meteor.subscribe('activePapers');
	},
	action: function(){
		this.render('submit');
	}
});

Router.route('/issue/:_id', {
	name: "issue",
	waitOn: function(){
		var oid = new Mongo.ObjectID(this.params._id);
		return [Meteor.subscribe('issue', this.params._id), Meteor.subscribe('paper', oid)];
	},
	action: function(){
		this.render('issue');
	}
});