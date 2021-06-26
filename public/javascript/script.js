// APIkey=  AIzaSyD3yGy9fQWmrjGT3ha2zwjHwiBUXI09-mE
{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3yGy9fQWmrjGT3ha2zwjHwiBUXI09-mE&callback=initMap"
type="text/javascript"></script> */}
{/* <script async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3yGy9fQWmrjGT3ha2zwjHwiBUXI09-mE&libraries=geometry,places&callback=initMap">
</script> */}

// const btn = document.getElementById("btn");

// btn.onclick =function() => {
  
// }

  function initMap() {
    const city = {
        center: {lat: 32.7157, lng: -117.1611},
        zoom:11
    } 
    map = new google.maps.Map(document.getElementById('map'), city);
   
   

    function addMarker(property) {
     const marker = new google.maps.Marker({
    position: property.location,
    map: map,
    // content: property.content
  });
       }

   //need to do an api call to get bar locations based on day of week

       addMarker({location:{lat:32.7241, lng:-117.1886}});
       addMarker({location:{lat:32.7439, lng:-117.2189}});
       addMarker({location:{lat:32.820960, lng:-117.124794}});
       addMarker( {location:{lat:32.832687, lng:-117.138380}});
       addMarker({location:{lat:32.761870, lng:-117.146016}});
  };
 


  
  
  
 
  





 
  // const mon = [
  //     [ "C Level"<br> "880 Harbor Island Dr, San Diego, CA 92101"<br>
  //     <a href="https://www.yelp.com/biz/c-level-san-diego">Get info</a>]
      
  //     ['Belgian Beer & Waffle'<br> '2820 Historic Decatur Rd San Diego, CA 92106'<br>
  //       <a href= "https://www.yelp.com/biz/belgian-beer-and-waffle-san-diego-2">Get info</a>]

  //     ["Bud’s Louisiana Cafe" <br>"4320 Viewridge Ave Ste A San Diego, CA 92123"<br>
  //       <a href= "https://www.yelp.com/biz/buds-louisiana-cafe-san-diego?osq=Bud%27s+Louisiana+Cafe">Get info</a>]

  //     ["Kogi BBQ"<br>"5447 Kearny Villa Rd Ste A San Diego, CA 92123"<br>
  //       <a href="https://www.yelp.com/biz/kogi-bbq-san-diego?osq=Kogi+BBQ">Get info</a>] 
    
  //     ["Muzita Abyssinian Bistro"<br> "4651 Park Blvd San Diego, CA 92116"<br>
  //       <a href="https://www.yelp.com/biz/muzita-abyssinian-bistro-san-diego?osq=Muzita+Abyssinian+Bistro">Get info</a>]
  // ];