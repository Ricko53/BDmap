App = Ember.Application.create();

App.Router.map(function() {
  this.route('posts.new');
});

App.ApplicationAdapter = DS.FixtureAdapter.extend({});

App.Post = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  createdAt: DS.attr('date')
  
});

App.Post.FIXTURES = [
  {
    id: 1,
    title: 'Emberjs yo',
    description: 'awesome stuff',
    createdAt: new Date(2014, 4, 1)
    },
  {
    id: 2,
    title: 'Omakase Rails! ',
    description: 'cool stuff',
    createdAt: new Date(2014, 5, 1)
  },
  {
    id: 3,
    title: 'yo! omakase emberjs rails',
    description: 'awesome cool stuff',
    createdAt: new Date(2014, 4, 20)
  }
];

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

App.IndexController = Ember.ArrayController.extend({
  results: function(){
    var searchTerm = this.get('searchTerm'),
        posts      = this.get('content');
   if(searchTerm){
     
     return posts.filter(function(post){
       return post.get('title').toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
     });
   }
     else{
     return posts;  
     }
     
  }.property('content', 'searchTerm')
});
