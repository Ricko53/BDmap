(function(){
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(121.462,31.256);
    map.centerAndZoom(point, 15);
    
    var json_data = [[121.462,31.253],[121.462,31.254],[121.447,31.261],[121.464,31.255],[121.463,31.257],[121.461848,31.25566],[121.46598,31.253407],[121.457932,31.252511],[121.463681,31.249995],[121.468136,31.252187],[121.468136,31.252187],[121.455991,31.254256]];
    var pointArray = new Array();
    for(var i=0;i<json_data.length;i++){
      var marker = new BMap.Marker(new BMap.Point(json_data[i][0], json_data[i][1])); // 创建点
      map.addOverlay(marker);    //增加点
      pointArray[i] = new BMap.Point(json_data[i][0], json_data[i][1]);
      marker.addEventListener("click",attribute);
    }
    //让所有点在视野范围内
    map.setViewport(pointArray);
    //获取覆盖物位置
    function attribute(e){
      var p = e.target;
      alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);    
    } 
})();