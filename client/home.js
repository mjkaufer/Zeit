Template.home.helpers({
    articles: function() {
        return Posts.find({}, {
            sort: {
                submitted: -1
            }
        });
    }
})