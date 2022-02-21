const contentDiv = document.querySelector('#content');

export function buildWorkForUs() {
    contentDiv.appendChild(buildHeader());
    contentDiv.appendChild(buildSubHeader());
    contentDiv.appendChild(buildPositionsGrid());
}

function buildHeader() {
    const menuHeader = document.createElement('h2');
    menuHeader.innerText = "Open positions";
    menuHeader.style.marginBottom = "0px";
    return menuHeader;
}

function buildSubHeader() {
    const subHeader = document.createElement('h4');
    subHeader.innerText = 'We are currently seeking honeyloving people for these positions';
    return subHeader;
}

function buildPositionsGrid() {
    const gridDiv = document.createElement('div');
    gridDiv.style.display = "grid";

    gridDiv.appendChild(buildPosition("Head Chef", 'A chef with 5+ year experience cooking Honey-based dishes'));
    gridDiv.appendChild(buildPosition("Dishwasher", 'Minimun 25 year experience with a doctorate in Dishwashing'));
    gridDiv.appendChild(buildPosition("Server", 'Help us serve our customers with a smile'));
    gridDiv.appendChild(buildPosition("Line Cook", 'Cook up out beautiful dishes alongside the head chef'));

    gridDiv.style.marginBottom = "10px";

    return gridDiv;
}

function buildPosition(name, description) {
    const positionCard = document.createElement('div');
    const cardName = document.createElement('h3');
    cardName.innerText = name;

    const positionDescription = document.createElement('p');
    positionDescription.innerText = description;

    positionCard.appendChild(cardName);
    positionCard.appendChild(positionDescription);

    return positionCard;
}