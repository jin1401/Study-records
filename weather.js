function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// 코드 10줄로 user의 위치를 알 수 있다. 