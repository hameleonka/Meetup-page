(function () {
    const viewMapButtons = document.querySelectorAll('.contact_us-block .btn-view-map');
    const viewMapButtonsArray = Array.prototype.slice.call(viewMapButtons);
    const contactUsBlock = document.querySelectorAll('.contact_us-block');
    const contactUsBlockArray = Array.prototype.slice.call(contactUsBlock);
    const contactUsMapOverlay = document.querySelector('.contact_us-map-overlay');
    const contactUsMapGoogle = document.querySelector('.contact_us-map-google');
    const showMoreIcon = document.querySelector('.show_more-icon-container');
    let mapLoaded = false;

    function loadMap(){
        if (mapLoaded) return;

        window.initMap = function () {
            mapLoaded = true;
            const prudentialTower = {lat: 42.347404, lng: -71.082540};
            const map = new google.maps.Map(document.querySelector('.contact_us-map-google'), {
                zoom: 16,
                center: prudentialTower
            });

            const marker = new google.maps.Marker({
                position: prudentialTower,
                map: map
            });
        };

        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB4Nux5WtaWLkI13VTmKrLn_NEzulMFAdQ&callback=initMap';
        document.body.appendChild(script);
    }

    viewMapButtonsArray.forEach(function(viewMapButton) {
        viewMapButton.addEventListener('click', function (event) {
            event.preventDefault();
            contactUsBlockArray.forEach(function (contactUsBlock) {
                contactUsBlock.classList.add('hidden');
            });
            contactUsMapOverlay.classList.add('hidden');
            contactUsMapGoogle.classList.remove('hidden');
            showMoreIcon.classList.remove('hidden');
            loadMap();
        });
    });


    showMoreIcon.addEventListener('click', function (event) {
        event.preventDefault();
        contactUsBlockArray.forEach(function (contactUsBlock) {
            contactUsBlock.classList.remove('hidden');
        });
        contactUsMapOverlay.classList.remove('hidden');
        contactUsMapGoogle.classList.add('hidden');
        showMoreIcon.classList.add('hidden');
    });

}());