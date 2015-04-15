Session.set("rendered", false);

Template.submit.helpers({
	rendered: function(){
		return Session.get("rendered");
	},
    // article: function() {
    //     return Session.get("article") != "\n" ? Session.get("article") : "\nArtikel Text";
    // },
    // title: function() {
    //     return Session.get("title") || "Titel";
    // },
    options: function() {
        return Newspapers.find({})
    },
    // date: function() {
    //     return Session.get("date") || new Date();
    // },
    // submitted: function(){
    // 	return Session.get("submitted");
    // },
    articleObj: function(){
    	return Session.get("articleObj");
    }

});



function articleObject(){
	return {
        article: "\n" + $('#article').val().trim() || "Titel",
        title: $('#title').val().trim() || "\nArtikel Text",
        date: $('#issue option:selected').text().trim() || "Monat Jahr",
        submitted: new Date() || new Date(),
        parentId: $('#issue').val().trim()
    }
}

Template.submit.events({
    'keyup': function() {
        updateSessionVars();
    },
    'mouseup': function() {
        updateSessionVars();
    },
    'click #sub': function() {
        if ($('#article').val().trim() != "" && $('#title').val().trim() != "" && $('#issue').val().trim() != ""){
            Posts.insert(articleObject()) //todo, add user who submitted
            Router.go('/');
        }

    }
});

function updateSessionVars() {
    Session.set("article", "\n" + $('#article').val()); //need to concatenate the newline because of a bug in the markdown package
    Session.set("title", $('#title').val());
    Session.set("date", $('#issue').text().trim());
    Session.set("submitted", new Date());
    Session.set("rendered", true);
    Session.set("articleObj", articleObject());

}

Template.submit.rendered = function() {
    updateSessionVars();
}