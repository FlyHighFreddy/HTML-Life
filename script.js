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
    btn.addEventListener('click', function (){
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
        message.textContent = `VISUAL - FRIENDLY LOCATION: (${latitude},${longitude})`;
    }


    // handle error case
    function onError() {
        message.classList.add('error');
        message.textContent = `TARGET SEQUENCE INTERRUPTED`;
    }
})();

//5-Line Call for fire
function launchHellfire(){
    let hellfiresLaunced = 0;
    let missileQuantityRequested = document.getElementById("5lineRequest").value;
    
    //If user puts in a non-number
    if (isNaN(missileQuantityRequested)){
        alert("Invalid Call for fire request. Please select number of missiles to fire.");

    } else if(missileQuantityRequested < 1){
        alert("No munitions requested.");

    } else if(missileQuantityRequested > 8){
        alert("Only 8 Hellfires available on board shooter aircraft.");

    } else if(missileQuantityRequested <= 8){
        alert(`Roger, ${missileQuantityRequested} missiles, RIFLE, Time-of-flight 12 seconds`);

    //Time-of-flight remaining timer
    var timeleft = 12;
    var timeOfFlight = setInterval(function(){
        if(timeleft <= 3){
        clearInterval(timeOfFlight);
        document.getElementById("timeOfFlight").innerHTML = `<font size="+7">**SPLASH, OVER**</font>
        `
        hellfireImpact()
        
        } else {
        document.getElementById("timeOfFlight").innerHTML = `<font size="+5">TOF - ${timeleft} seconds</font>`
        }
        
        timeleft -= 1;
    }, 1000);

    //comparing the request# to launch#

    function hellfireImpact (){
        while (hellfiresLaunced < missileQuantityRequested) {
            const agm = `<img src="hellfire/hellfire${hellfiresLaunced}.gif" height="100" />`
            hellfiresLaunced++;
            document.getElementById("missileImpact");
            missileImpact.insertAdjacentHTML("afterend", agm);
            }
        }
    }
}[]
