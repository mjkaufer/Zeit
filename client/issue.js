Template.issue.helpers({
    articles: function() {
        return Posts.find({}, {
            sort: {
                submitted: -1
            }
        });
    }
});
