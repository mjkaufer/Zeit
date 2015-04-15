//because stuff is silly...
var paperId = document.URL.substring(document.URL.lastIndexOf("/")+1, document.URL.length);

Template.issue.helpers({
    articles: function() {
        return Posts.find({}, {
            sort: {
                submitted: -1
            }
        });
    },
    paperInfo: function(){
    	var thisPaper = Newspapers.findOne(new Mongo.ObjectID(paperId));
    	return thisPaper.month + " " + thisPaper.year;
    }
})