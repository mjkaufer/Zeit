Template.submit.helpers({
	article: function(){
		return Session.get("article");
	},
	title: function(){
		return Session.get("title");
	}
})

Template.submit.events({
	'keyup': function(){
		Session.set("article", "\n" + $('#article').val());
		Session.set("title", $('#title').val());
	}
})