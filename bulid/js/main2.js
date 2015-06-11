App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
   
  }
});

App.BaiduMapsComponent = Ember.Component.extend({
  insertMap: function() {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(121.462,31.256);
    var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT});  

    map.centerAndZoom(point, 13);
    map.addControl(top_right_navigation);  
    map.enableScrollWheelZoom(true);

    var json_data = [[121.462,31.253],[121.462,31.254],[121.447,31.261],[121.464,31.255],[121.463,31.257],[121.461848,31.25566],[121.46598,31.253407],[121.457932,31.252511],[121.463681,31.249995],[121.468136,31.252187],[121.468136,31.252187],[121.455991,31.254256]];


    var pointArray = new Array();
    var myIcon = new BMap.Icon("img/preloader.gif", new BMap.Size(300,157));
    for(var i=0;i<json_data.length;i++){
      var marker = new BMap.Point(json_data[i][0], json_data[i][1]);                  // 创建点
      var newmarker = new BMap.Marker(marker,{icon:myIcon});                          // 增加logo
      map.addOverlay(newmarker);                                                      // 增加点
      pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
      newmarker.addEventListener("click",attribute);
    }
    //让所有点在视野范围内
    map.setViewport(pointArray);
    //获取覆盖物位置
    function attribute(e){
      var p = e.target;
      console.log(p.getPosition().lng + "," + p.getPosition().lat);
      alert("点击的位置是" + p.getPosition().lng + "," + p.getPosition().lat);    
    }

  //   var options = {
  //   center: new BMap.Point(121.462,31.256),
  //   zoom : 13
  // }
  
  // this.set('map', new BMap.Map("allmap").centerAndZoom(options.center,options.zoom));

  }.on('didInsertElement')
});