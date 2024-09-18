function initMap() {
  const restaurantLocation = { lat: -34.397, lng: 150.644 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: restaurantLocation,
  });
  const marker = new google.maps.Marker({
    position: restaurantLocation,
    map: map,
  });
}
