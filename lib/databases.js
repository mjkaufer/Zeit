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
    });
    Meteor.publish("issue", function(idString){
    	return Posts.find({parentId: idString});//returns all posts for a certain issue
    });
    Meteor.publish("paper", function(id){//returns the individual newspaper represented by the id
    	return Newspapers.find({_id:id});
    });
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