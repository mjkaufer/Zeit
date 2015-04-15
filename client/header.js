Meteor.subscribe('allPapers');

Template.header.helpers({
    papers: function() {
        var ids = [];

        Newspapers.find({},{sort:{year: -1,monthNum: -1}}).forEach(function(a) {
            ids.push({
                id: a._id._str,
                month: a.month,
                year: a.year
            });
        });

        return ids;
    }
})