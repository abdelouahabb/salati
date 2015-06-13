window.now = new Date()

$(window).ready(function(){
    $("#futur").on("click", function(){
        window.now = new Date($("#dt").val());
        slat();
	 });
    
	 $("#dar").on("click", function(){
            initiate_geolocation();
	 })   
	 });
 
        function initiate_geolocation() {
            navigator.geolocation.getCurrentPosition(latlon, errors,{timeout:10000});
        }

        function errors(error)
        {
            switch(error.code)
            {
            case error.PERMISSION_DENIED: $("#lguit").html('<i class="spy"></i><h1>كيفاش نلـڤـاوك ضرك ؟&lrm;</h1><h1>شوف  <a href="https://support.google.com/chrome/answer/142065?hl=fr" target="_blank">هنا</a> ولا <a href="https://www.mozilla.org/fr/firefox/geolocation/" target="_blank">هنا</a>  ولا <a href="http://help.opera.com/Windows/12.10/fr/geolocation.html" target="_blank">هنا</a> باش تتعرف على هاذي التكنولوجيا</h1>');    
            break;
            
                case error.POSITION_UNAVAILABLE: $("#lguit").html('<i class="spy"></i><h1>يـــاو مقدرناش نلڤاوك , زيد عاود نشوفو</h1><h1>شوف  <a href="https://support.google.com/chrome/answer/142065?hl=fr" target="_blank">هنا</a> ولا <a href="https://www.mozilla.org/fr/firefox/geolocation/" target="_blank">هنا</a>  ولا <a href="http://help.opera.com/Windows/12.10/fr/geolocation.html" target="_blank">هنا</a> باش تتعرف على هاذي التكنولوجيا</h1>');
                break;
                
                case error.TIMEOUT: $("#lguit").html('<i class="spy"></i><h1>العملية دامت كثر من واش لازم  زيد عاود نشوفو</h1><h1>شوف  <a href="https://support.google.com/chrome/answer/142065?hl=fr" target="_blank">هنا</a> ولا <a href="https://www.mozilla.org/fr/firefox/geolocation/" target="_blank">هنا</a>  ولا <a href="http://help.opera.com/Windows/12.10/fr/geolocation.html" target="_blank">هنا</a> باش تتعرف على هاذي التكنولوجيا</h1>');
                break;
                
                default: $("#lguit").html('<i class="spy"></i><h1>حاجة راهي ماشي نورمال زيد عاود نشوفو</h1><h1>شوف  <a href="https://support.google.com/chrome/answer/142065?hl=fr" target="_blank">هنا</a> ولا <a href="https://www.mozilla.org/fr/firefox/geolocation/" target="_blank">هنا</a>  ولا <a href="http://help.opera.com/Windows/12.10/fr/geolocation.html" target="_blank">هنا</a> باش تتعرف على هاذي التكنولوجيا</h1>');
                break;
            }
        }

        function latlon(position){
        	$("#lat").val(position.coords.latitude);
            $("#lon").val(position.coords.longitude);
            $("#dar").remove();
            $("#futur").html('<label for="dt">التاريخ</label><input type="date" id="dt"><div id="f">مواقيت الصلاة ليوم آخر؟</div>');
        	$("#lguit").html('<div id="map" style="height: 200px; width: 600px; position: relative;margin: auto"></div>'+
        '<script>'+
        'var greenIcon = L.icon({iconUrl: "../static/img/minaret.png", iconAnchor: [63, 120]});'+
        'var map = L.map( "map", {center:['+
        position.coords.latitude+
        ','+
        position.coords.longitude+
        '],minZoom: 5,zoom: 10});L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {attribution:"OpenStreetMap"}).addTo(map);'+
        'var marker = L.marker(['+
        position.coords.latitude+
        ','+
        position.coords.longitude+
        '], {icon: greenIcon}).addTo(map).bindPopup("راك هنا ?").openPopup();'+
        'marker.dragging.enable();marker.on("dragend", function(e) {'+
        'var coords = e.target.getLatLng();var lat = coords.lat;var lng = coords.lng;map.panTo(new L.LatLng(coords.lat, coords.lng));'+
        '$("#lat").val(coords.lat);$("#lon").val(coords.lng); slat()});'+
        'slat();'+
        '</script>');
        	
            
        };


function salat()
{
prayTimes.setMethod("MWL");
var lat = $("#lat").val();
var lon = $("#lon").val();
return prayTimes.getTimes(now, [lat, lon]);
}

function slat()
{
$("#kdb").html(salat().fajr);
$("#sdq").html(fajr());
$("#dhr").html(salat().dhuhr);
$("#asr").html(salat().asr);
$("#mgrb").html(salat().maghrib);
$("#icha").html(salat().isha);
$("#st").html(salat().sunrise);
$("#gt").html(salat().sunset);

}


// This algorithm is applying Cheikh Ferkous -hafidhahou Allah- studies http://i.imgur.com/SDUrCEM.jpg
function fajr(h, m)
{
h = salat().sunrise.split(":")[0];
m = salat().sunrise.split(":")[1]
now.setHours(h, m);
    switch (now.getMonth()) {
    case 0:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 85.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 84.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 83.8*60*1000)
        }
        break;
    case 1:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 82*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 80.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 80*60*1000)
        }
        break;
    case 2:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 80*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 80.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 80.8*60*1000)
        }
        break;
    case 3:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 81.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 83.8*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.8*60*1000)
        }
        break;
    case 4:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 88.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 92.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 96.8*60*1000)
        }
        break;
    case 5:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 100*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 101.6*60*1000)
        }
        else
        {
        fjr = new Date(now - 102*60*1000)
        }
        break;
    case 6:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 101*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 97.8*60*1000)
        }
        else
        {
        fjr = new Date(now - 94.8*60*1000)
        }
        break;
    case 7:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 91.6*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 83.2*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.2*60*1000)
        }
        break;
    case 8:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 81.4*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 81.2*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.2*60*1000)
        }
        break;
    case 9:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 79.4*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 79.4*60*1000)
        }
        else
        {
        fjr = new Date(now - 76.4*60*1000)
        }
        break;
    case 10:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 79.4*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 81*60*1000)
        }
        else
        {
        fjr = new Date(now - 81.2*60*1000)
        }
        break;
    case 11:
        if (now.getDate <= 11)
        {
        fjr = new Date(now - 83.8*60*1000)
        }
        else if ((now.getDate >= 12) && (now.getDate <= 21))
        {
        fjr = new Date(now - 84.8*60*1000)
        }
        else
        {
        fjr = new Date(now - 85.4*60*1000)
        }
        break;
}
return ("0"+fjr.getHours()) + ":" + (fjr.getMinutes() < 10 ? "0"+fjr.getMinutes() : fjr.getMinutes())
}





