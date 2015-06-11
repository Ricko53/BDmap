App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return {
      locations: [
        { name: '长宁', latitude: 121.427102, longitude: 31.225449 },
        { name: '黄埔', latitude: 121.481144, longitude: 31.241073 },
        { name: '浦东', latitude: 121.544816, longitude: 31.229834 }
      ]
  };
}
});

App.BaiduMapsComponent = Ember.Component.extend({
  insertMap: function() {

  // var map = new BMap.Map("allmap");
  // map.centerAndZoom(new BMap.Point(this.get("latitude"),this.get("longitude")),13);
  // map.enableDragging();
  console.log(this);

  var baimap = new BMap.Map("allmap");
  baimap.centerAndZoom(new BMap.Point(this.get("latitude"),this.get("longitude")),15);

  this.set('map', baimap);


  // window.setTimeout(function(){
  //   map.setCenter(new BMap.Point(121.544816, 31.229834));
  //   console.log("ok");
  // },2000);

  }.on('didInsertElement'),

  coordinatesChanged: function() {
    console.log(this);
    var map = this.get('map');
    console.log(map);
    if (map) map.setCenter(new BMap.Point(this.get('latitude'), this.get('longitude')));

  }.observes('latitude', 'longitude')
});