<!-- vue项目添加高德地图 -->
<template>
    <div id="map"></div>
</template>
<!-- lang="js" or lang="ts" -->
<script setup>
import AMapLoader from "@amap/amap-jsapi-loader";
import { reactive, ref } from "vue";
const key = ref("389880a06e3f893ea46036f030c94700");
const data = reactive({
    address: "广东省深圳市南山区桃园路89号",
    title: "深圳市南山区人民医院",
});

AMapLoader.load({
    //首次调用 load
    key: key.value, //首次load key为必填
    version: "2.0",
    plugins: [
        "AMap.Scale",
        "AMap.ToolBar",
        "AMap.HawkEye",
        "AMap.MapType",
        "AMap.ElasticMarker",
        "AMap.AdvancedInfoWindow",
        "AMap.PlaceSearch",
        "AMap.InfoWindow",
        "AMap.Geocoder",
        // "AMap.MarkerCluster",
        // "AMap.Geolocation",
    ],
}).then((AMap) => {

    var map = new AMap.Map("map", {
        viewMode: '3D', //开启3D视图,默认为关闭
        // isHotspot: true
    });

    map.addControl(new AMap.ToolBar()); // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件

    map.addControl(new AMap.Scale()); // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺

    map.addControl(new AMap.HawkEye()); // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图

    map.addControl(new AMap.MapType()); // 添加图层切换插件

    //设置一个初始的标注
    var marker = new AMap.Marker();

    // 创建 infoWindow 实例
    var infoWindow = new AMap.InfoWindow({
        // isCustom: true, //使用自定义窗体
        anchor: "bottom-center",
        offset: new AMap.Pixel(0, -35), //信息窗口上面偏移一点
    });

    map.addControl(new AMap.ElasticMarker()); //灵活点标记，可以随着地图级别改变样式和大小的 Marker(没看出来有啥区别,应该还需要配置参数吧)


    // 地址坐标转换,地址-->坐标
    var geocoder = new AMap.Geocoder();

    geocoder.getLocation(data.address, function (status, result) {
        if (status === "complete" && result.geocodes.length) {
            var lnglat = result.geocodes[0].location;

            marker.setPosition(lnglat); //设置点标注位置中心
            // map.setZoom(15); //设置地图缩放层级
            map.add(marker); //添加点标注
            openInfo(); //打开信息窗口

            map.setFitView(marker); //自适应窗口位置(跟下面效果差不多,二选一即可)
            // map.setCenter(lnglat); //最后设置地图中心位置(需最后一步设置,不然在缩放时会产生偏差)
        } else {
            console.error("根据地址查询位置失败");
        }
    });
    // 信息窗口
    function openInfo() {
        var dom = `<div class="map_info">
                <h4 class="map_info_tle">${data.title}</h4>
                <div class="map_info_content">${data.address}</div>
            </div>`;
        infoWindow.setContent(dom);
        infoWindow.open(map, marker.getPosition()); // 打开信息窗体
    }
    marker.on("click", openInfo);

    var placeSearch = new AMap.PlaceSearch();  //构造地点查询类

    var infoWindow2 = new AMap.InfoWindow({
        //  isCustom: true, //使用自定义窗体
        anchor: "bottom-center",
        offset: new AMap.Pixel(0, -18), //信息窗口上面偏移一点
    });
    // 地图热点
    map.on('hotspotclick', function (result) {
        placeSearch.getDetails(result.id, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {

                // //console.log(AMap);    //里面没有advancedInfoWindow这个方法
                // var advancedInfoWindow = new AMap.AdvancedInfoWindow({    
                //     // content: content
                // });

                var pois = result.poiList.pois[0];
                var dom = `<div class="map_info">
                        <h4 class="map_info_tle">${pois.name}</h4>
                        <div class="map_info_content">
                            地址：${pois.address || pois.name}<br>
                            ${pois.tel ? '电话：' + pois.tel + '<br>' : ''}
                            类型：${pois.type}<br>
                        </div>
                    </div>`;
                infoWindow2.setContent(dom);
                infoWindow2.open(map, pois.location);
            }
        });
    });


    //根据经纬度获取地址信息
    function getAddress(lnglat) {      //var lnglat = [116.396574, 39.992706]
        geocoder.getAddress(lnglat, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                return result.regeocode.formattedAddress;
            } else {
                console.error("位置查询失败");
            }
        })
    }


}).catch((e) => {
    console.error(e);
});
</script>
<style lang="scss">
.map_info {
    padding-left: 5px;
    max-width: 250px;
    .map_info_tle {
        padding: 3px 0 5px;
        color: #cc5522;
    }
    .map_info_content {
        font-size: 14px;
        color: #555;
        word-break: break-all;
    }
}
</style>
<style lang="scss" scoped>
#map {
    width: 100%;
    height: 600px;
    z-index: 0;
}
</style>
