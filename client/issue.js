Template.issue.helpers({
    articles: function() {
        return Posts.find({}, {
            sort: {
                submitted: -1
            }
        });
    },
    paperInfo: function(){
    	var thisPaper = Newspapers.findOne();
    	return thisPaper.month + " " + thisPaper.year;
    }
})