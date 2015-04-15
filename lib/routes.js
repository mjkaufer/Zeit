Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
        name: "home"
    },
    function() {
        this.wait(Meteor.subscribe('allPapers'));
        this.wait(Meteor.subscribe('posts'));

        if (this.ready()) {
            this.render("home");
        } else {
            this.render('loading');
        }
    });

Router.route('/submit', function() {

    this.wait(Meteor.subscribe('activePapers'));

    if (this.ready()) {
        this.render();
    } else {
        this.render('loading');
    }
});

Router.route('/issue/:_id', {
        name: "issue"
    },
    function() {
        var oid = new Mongo.ObjectID(this.params._id);

        this.wait(Meteor.subscribe('issue', this.params._id));
        this.wait(Meteor.subscribe('paper', oid));


        if (this.ready()) {
            this.render('issue');
        } else {
            this.render('loading');
        }
    })

// Router.route('/items', function () {
//   this.render('Items');
// });

// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });