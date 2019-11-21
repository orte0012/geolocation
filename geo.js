let map;
document.addEventListener("DOMContentLoaded", () => {
    let s = document.createElement('script');
    document.head.appendChild(s);
    s.addEventListener('load', () => {
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 45.34,
                lng: -75.75
            },
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        var marker = new google.maps.Marker({
            position: {
                lat: 45.34,
                lng: -75.75
            },
            map: map,
            title: 'You are Here!',
            animation: google.maps.Animation.BOUNCE,
            draggable: false
          });
    });
        s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDGsyRRQi1BoDFRFST0POysIAzrUH_cuq8";
})

if(navigator.geolocation){
    let giveUp = 1000 * 30;
    let tooOld = 1000 * 60 * 60;
    options = {
        enableHighAccuracy: true,
        timeout: giveUp,
        maximumAge: tooOld
    }

    navigator.geolocation.getCurrentPosition(gotPos, posFail, options);
}

function gotPos(position){
    var crd = position.coords
spans = document.querySelectorAll('p span');
spans[0].textContent = crd.latitude;
spans[1].textContent = crd.longitude;
spans[2].textContent = crd.accuracy;


spans[6].textContent = position.timestamp;

}



function posFail(){
let errors = {
    1: 'No permission',
    2: 'Unable to determine',
    3: 'Took too long to load'
}
document.querySelector('h1'.textContent) = errors[err];
}