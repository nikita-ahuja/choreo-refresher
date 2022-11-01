function goToNewPage()
        {
            var url = document.getElementById('list').value;
            if(url != 'none') {
                window.location = url;
            }
        }

        var settings = {
            'cache': false,
            'dataType': "jsonp",
            "async": true,
            "crossDomain": true,
            "url": "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=place_id:"+me.originPlaceId+"&destinations=place_id:"+me.destinationPlaceId+"&region=ng&units=metric&key=mykey",
            "method": "GET",
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin":"*"
            }
        }
  
        $.ajax(settings).done(function (response) {
            console.log(response);
  
        });