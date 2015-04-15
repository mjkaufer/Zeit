Newspapers = new Meteor.Collection("newspapers");
Posts = new Meteor.Collection("posts");

if (Meteor.isServer) {
	Meteor.publish("activePapers", function () {
		return Newspapers.find({active: true});
	});
}