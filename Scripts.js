let map, infoWindow;

function initMap(){

    const Pub = {lat: 51.195048 , lng: -3.4656725};

    const map = new google.maps.Map(document.getElementById('map'),{
        zoom: 14,
        center: Pub,
        mapTypeId: 'satellite',
    });

    const marker = new google.maps.Marker({
        position: Pub,
        map: map,
    });

    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Pan to current location";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () =>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (position) =>{
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("Location found.");
                    infoWindow.open(map);
                    map.setCenter(pos);
                },
                () => {
                    handleLocationError(true, infoWindow, map.getCenter());
                }
            );
        } else{
            handleLocationError(false, infoWindow, map.getCenter());
        }
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos){
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}


window.initMap = initMap;












