/* =========================================
   SMART EMERGENCY SAFETY ASSISTANT
   JavaScript Functions
   ========================================= */


/* ================= SOS ================= */

function activateSOS() {

    const confirmSOS = confirm(
        "🚨 EMERGENCY SOS\n\n" +
        "Are you currently facing an emergency?\n\n" +
        "Press OK to activate emergency assistance."
    );

    if (confirmSOS) {

        alert(
            "🚨 SOS ACTIVATED\n\n" +
            "Please move to a safe location.\n\n" +
            "Contact appropriate emergency services " +
            "if you are in immediate danger."
        );

    }

}


/* ================= EMERGENCY GUIDANCE ================= */

function showEmergency(type) {

    const guidance = document.getElementById("guidanceText");


    /* FIRE */

    if (type === "fire") {

        guidance.innerHTML = `
            <h3>🔥 Fire Emergency</h3>

            <p>• Move away from the fire.</p>
            <p>• Avoid smoke.</p>
            <p>• Use stairs instead of elevators.</p>
            <p>• Move to a safe location.</p>
            <p>• Contact appropriate emergency services.</p>
        `;

    }


    /* ACCIDENT */

    else if (type === "accident") {

        guidance.innerHTML = `
            <h3>🚗 Accident Emergency</h3>

            <p>• Move away from immediate danger.</p>
            <p>• Call appropriate emergency services.</p>
            <p>• Avoid unnecessary movement of injured people.</p>
            <p>• Provide your location when requesting help.</p>
            <p>• Follow instructions from emergency professionals.</p>
        `;

    }


    /* MEDICAL */

    else if (type === "medical") {

        guidance.innerHTML = `
            <h3>🏥 Medical Emergency</h3>

            <p>• Stay calm.</p>
            <p>• Contact appropriate medical assistance.</p>
            <p>• Keep the person in a safe position.</p>
            <p>• Do not give medication unless appropriate and known to be safe.</p>
            <p>• Follow instructions from medical professionals.</p>
        `;

    }


    /* FLOOD */

    else if (type === "flood") {

        guidance.innerHTML = `
            <h3>🌊 Flood Emergency</h3>

            <p>• Move to higher ground if instructed.</p>
            <p>• Avoid walking or driving through floodwater.</p>
            <p>• Stay away from electrical equipment in wet areas.</p>
            <p>• Follow official emergency instructions.</p>
            <p>• Do not enter dangerous water areas.</p>
        `;

    }

}


/* ================= LOCATION ================= */

function showLocation() {

    if (!navigator.geolocation) {

        alert(
            "❌ Location services are not supported by this browser."
        );

        return;

    }


    alert(
        "📍 Location request\n\n" +
        "Your browser will now ask for location permission."
    );


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            alert(
                "📍 LOCATION DETECTED\n\n" +
                "Latitude: " + latitude +
                "\nLongitude: " + longitude
            );

        },


        function(error) {

            alert(
                "❌ Unable to access your location.\n\n" +
                "Please allow location permission in your browser."
            );

        }

    );

}


/* ================= TRUSTED CONTACTS ================= */

function showContacts() {

    alert(
        "👤 TRUSTED CONTACTS\n\n" +

        "Trusted contact management will be added " +
        "in the next version."
    );

}


/* ================= SAFETY ASSISTANT ================= */

function showAssistant() {

    const message = prompt(
        "🤖 SAFETY ASSISTANT\n\n" +
        "Describe the emergency situation:"
    );


    if (message && message.trim() !== "") {

        alert(
            "🤖 SAFETY ASSISTANT\n\n" +

            "You reported:\n" +
            message +

            "\n\n" +

            "Basic guidance:\n" +
            "• Stay calm.\n" +
            "• Move away from immediate danger.\n" +
            "• Contact appropriate emergency services.\n" +
            "• Follow official emergency instructions."
        );

    }

}
