Newspapers = new Meteor.Collection("newspapers");
Posts = new Meteor.Collection("posts");

if (Meteor.isServer) {
    Meteor.publish("activePapers", function() {
        return Newspapers.find({
            active: true
        });
    });
    Meteor.publish("allPapers", function() {
        return Newspapers.find({});
    });
    Meteor.publish("posts", function() {
        return Posts.find({});
    })
}

/*
Schemas

	Newspapers
	{
		active:true/false,
		month:month
		year:year

	}

*/