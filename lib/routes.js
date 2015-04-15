Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function(){
    	return Meteor.subscribe('allPapers');
    }
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
		return [Meteor.subscribe('issue', this.params._id), Meteor.subscribe('allPapers')];
	},
	action: function(){
		var oid = new Mongo.ObjectID(this.params._id);
		this.render('issue', {
			data: function () {
				// console.log(Newspapers.findOne(oid))
				return Newspapers.findOne(oid);
			}
		});
	}
});