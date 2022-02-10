const contentDiv = document.querySelector('#content');

export function BuildHome() {
    contentDiv.style.fontFamily = 'Raleway';
    contentDiv.style.display = "flex";
    contentDiv.style.flexDirection = "column";
    contentDiv.style.alignItems = 'center';
    buildHeader();
    buildMotto();
    buildOpenTimes();
    buildLocation();
}

function buildHeader() {
    const header = document.createElement('h1');
    header.innerText = "Welcome to the honeyshop";
    header.style.textAlign = 'center';
    header.style.marginBottom = "2px";

    contentDiv.appendChild(header);
}

function buildMotto() {
    const motto = document.createElement('h3');
    motto.innerText = "Where the secret ingredient is always honey"
    motto.style.textAlign = 'center';
    motto.style.marginTop = 0;


    contentDiv.appendChild(motto);
}

function buildOpenTimes() {
    const openTimesDiv = document.createElement('div');
    openTimesDiv.style.textAlign = 'center';
    const opentimesHeader = document.createElement('h3');
    opentimesHeader.innerText = "Open Hours"
    opentimesHeader.textAlign = 'center';

    var days = ["Monday: " + openHours.monday,
    "Tuesday: " + openHours.tuesday,
    "Wednesday: " + openHours.wednesday,
    "Thursday: " + openHours.thursday,
    "Friday: " + openHours.friday,
    "Saturday: " + openHours.saturday,
    "Sunday: " + openHours.sunday,
    ];
    openTimesDiv.appendChild(opentimesHeader);

    days.forEach((e) => {
        const daypara = document.createElement('p');
        daypara.innerText = e;
        openTimesDiv.appendChild(daypara);
    });

    contentDiv.appendChild(openTimesDiv);
}

function buildLocation() {
    const locationDiv = document.createElement('div');
    const locatioHeader = document.createElement('h3');
    locatioHeader.innerText = 'Location'
    const locationPara = document.createElement('p');
    locationPara.innerText = '123 Street Street, Cityville, Country';
    locationDiv.appendChild(locatioHeader);
    locationDiv.appendChild(locationPara);
    contentDiv.appendChild(locationDiv);
    locationDiv.style.marginBottom = '40px';
}

var openHours = {
    monday: "8am - 8pm",
    tuesday: "6am - 6pm",
    wednesday: "6am - 6pm",
    thursday: "6am - 6pm",
    friday: "10am - 12pm",
    saturday: "10am - 12pm",
    sunday: "10am - 6pm",
}