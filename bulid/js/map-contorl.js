var App;

App = Ember.Application.create();

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.A([
      {
        id: 1,
        firstName: 'Bram',
        lastName: 'Moolenaar',
        knownFor: "Vim"
      }, {
        id: 2,
        firstName: 'Richard',
        lastName: 'Stallman',
        knownFor: "GNU"
      }, {
        id: 3,
        firstName: 'Dennis',
        lastName: 'Ritchie',
        knownFor: "C"
      }, {
        id: 4,
        firstName: 'Rich',
        lastName: 'Hickey',
        knownFor: "Clojure"
      }, {
        id: 5,
        firstName: 'Guido',
        lastName: 'Van Rossum',
        knownFor: "Python"
      }, {
        id: 6,
        firstName: 'Linus',
        lastName: 'Torvalds',
        knownFor: "Linux"
      }, {
        id: 7,
        firstName: 'Yehuda',
        lastName: 'Katz',
        knownFor: "Ember"
      }
    ]);
  }
});

App.IndexController = Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortAscending: true,
  theFilter: "",
  checkFilterMatch: function(theObject, str) {
    var field, match;
    match = false;
    for (field in theObject) {
      if (theObject[field].toString().slice(0, str.length) === str) {
        match = true;
      }
    }
    return match;
  },
  filterPeople: (function() {
    return this.get("arrangedContent").filter((function(_this) {
      return function(theObject, index, enumerable) {
        if (_this.get("theFilter")) {
          return _this.checkFilterMatch(theObject, _this.get("theFilter"));
        } else {
          return true;
        }
      };
    })(this));
  }).property("theFilter", "sortProperties", "sortAscending"),
  sortedOnID: (function() {
    return this.get("sortProperties").get("0") === "id";
  }).property("sortProperties"),
  sortedOnFirstName: (function() {
    return this.get("sortProperties").get("0") === "firstName";
  }).property("sortProperties"),
  sortedOnLastName: (function() {
    return this.get("sortProperties").get("0") === "lastName";
  }).property("sortProperties"),
  sortedOnKnownFor: (function() {
    return this.get("sortProperties").get("0") === "knownFor";
  }).property("sortProperties"),
  glyphiconDirection: (function() {
    if (this.get("sortAscending")) {
      return "glyphicon-chevron-down";
    } else {
      return "glyphicon-chevron-up";
    }
  }).property("sortAscending"),
  actions: {
    sortBy: function(property) {
      if (this.get("sortProperties")[0] === property) {
        this.toggleProperty("sortAscending");
      } else {
        this.set("sortAscending", true);
        this.set("sortProperties", [property]);
      }
    }
  }
});