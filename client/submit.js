Template.submit.helpers({
    article: function() {
        return Session.get("article") != "\n" ? Session.get("article") : "\nArtikel Text";
    },
    title: function() {
        return Session.get("title") || "Titel";
    },
    options: function() {
        return Newspapers.find({})
    },
    date: function() {
        return Session.get("date");
    },
    submitted: function(){
    	return Session.get("submitted");
    }

});

Template.submit.events({
    'keyup': function() {
        updateSessionVars();
    },
    'mouseup': function() {
        updateSessionVars();
    },
    'click #sub': function() {
        if ($('#article').val().trim() != "" && $('#title').val().trim() != "" && $('#issue').val().trim() != ""){
            Posts.insert({
                article: "\n" + $('#article').val().trim(),
                title: $('#title').val().trim(),
                date: $('#issue').text().trim(),
                submitted: new Date(),
                parentId: new Mongo.ObjectID($('#issue').val().trim())
            }) //todo, add user who submitted
            Router.go('/');
        }

    }
});

function updateSessionVars() {
    Session.set("article", "\n" + $('#article').val()); //need to concatenate the newline because of a bug in the markdown package
    Session.set("title", $('#title').val());
    Session.set("date", $('#issue').text().trim());
    Session.set("submitted", new Date());

}

Template.submit.rendered = function() {
    updateSessionVars();
}