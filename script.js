(() => {
    const message = document.querySelector('#message');

    // check if the Geolocation API is supported
    if (!navigator.geolocation) {
        message.textContent = `Your browser doesn't support Geolocation`;
        message.classList.add('error');
        return;
    }

    // handle click event
    const btn = document.querySelector('#show');
    btn.addEventListener('click', function () {
        // get the current position
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });


    // handle success case
    function onSuccess(position) {
        const {
            latitude,
            longitude
        } = position.coords;

        message.classList.add('success');
        message.textContent = `VISUAL FRIENDLY LOCATION: (${latitude},${longitude})`;
    }


    // handle error case
    function onError() {
        message.classList.add('error');
        message.textContent = `TARGET SEQUENCE INTERRUPTED`;
    }
})();

function launchHellfire(){
    let h = 0;
    let missileQuantity = document.getElementById("5lineRequest").value;

    if (isNaN(missileQuantity)){
        alert("Invalid Call for fire request. Please select number of missiles to fire.");

    }
    
    while (h < missileQuantity) {
        const agm = '<img src="hellfire.gif" height="100" />'
        h++;
        document.getElementById("missileImpact");
        missileImpact.insertAdjacentHTML("afterend", agm);

    }
}