Template.submit.helpers({
	article: function(){
		return Session.get("article") != "\n" ? Session.get("article") : "\nArtikel Text";
	},
	title: function(){
		return Session.get("title") || "Titel";
	},
	options: function(){
		return Newspapers.find({})
	},
	date: function(){
		return Session.get("date");
	}

});

Template.submit.events({
	'keyup': function(){
		updateSessionVars();
	},
	'mouseup': function(){
		updateSessionVars();
	}
});

function updateSessionVars(){
		Session.set("article", "\n" + $('#article').val());//need to concatenate the newline because of a bug in the markdown package
		Session.set("title", $('#title').val());
		Session.set("date", $('#issue').text().trim());

}

Template.submit.rendered = function(){
	updateSessionVars();
}