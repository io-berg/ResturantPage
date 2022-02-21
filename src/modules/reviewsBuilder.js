const contentDiv = document.querySelector('#content');

export function buildReviews() {
    contentDiv.appendChild(buildHeader());
    contentDiv.appendChild(buildSubHeader());
    contentDiv.appendChild(buildMenuGrid());
}

function buildHeader() {
    const menuHeader = document.createElement('h2');
    menuHeader.innerText = "Reviews";
    menuHeader.style.marginBottom = "0px";
    return menuHeader;
}

function buildSubHeader() {
    const subHeader = document.createElement('h4');
    subHeader.innerText = 'Hear out our loyal customers testimonies.';
    return subHeader;
}

function buildMenuGrid() {
    const gridDiv = document.createElement('div');
    gridDiv.style.display = "grid";

    gridDiv.appendChild(buildReview("Bobby Bill", '"The fish was so good I thought I went to heaven"'));
    gridDiv.appendChild(buildReview("John Smith", '"Always great customer service"'));
    gridDiv.appendChild(buildReview("Dog dogson", '"BARK BARK BARK"'));
    gridDiv.appendChild(buildReview("Health Inspection", '"Cleanest place I ever visited"'));

    gridDiv.style.marginBottom = "10px";

    return gridDiv;
}

function buildReview(name, description) {
    const reviewCard = document.createElement('div');
    const cardName = document.createElement('h3');
    cardName.innerText = name;

    const reviewText = document.createElement('p');
    reviewText.innerText = description;

    reviewCard.appendChild(cardName);
    reviewCard.appendChild(reviewText);

    return reviewCard;
}
