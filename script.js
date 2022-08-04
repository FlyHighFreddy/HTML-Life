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
        var timeLeft = 30;
            var elem = document.getElementById('some_div');
        message.textContent = `YOUR LOCATION: (${latitude},${longitude}) MISSLE INBOUND`;
    }


    // handle error case
    function onError() {
        message.classList.add('error');
        message.textContent = `TARGET SEQUENCE INTERRUPTED`;
    }
})();