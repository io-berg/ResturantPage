const contentDiv = document.querySelector('#content');

export function buildMenu() {
    contentDiv.appendChild(buildHeader());
    contentDiv.appendChild(buildSubHeader());
    contentDiv.appendChild(buildMenuGrid());

}

function buildHeader() {
    const menuHeader = document.createElement('h2');
    menuHeader.innerText = "Our Menu";
    menuHeader.style.marginBottom = "0px";
    return menuHeader;
}

function buildSubHeader() {
    const subHeader = document.createElement('h4');
    subHeader.innerText = 'Made with only the freshest ingredients';
    return subHeader;
}

function buildMenuGrid() {
    const gridDiv = document.createElement('div');
    gridDiv.style.display = "grid";

    gridDiv.appendChild(buildMenuItem("Fish", "Fresh fishy dish"));
    gridDiv.appendChild(buildMenuItem("Honeyglazed Ham", "Full ham glazed with delicious honey"));
    gridDiv.appendChild(buildMenuItem("Sample", "The delicious taste of Loriem Ipsum"));
    gridDiv.appendChild(buildMenuItem("Foodstuff", "Very Tasty, Much nutricious"));


    return gridDiv;
}

function buildMenuItem(title, description) {
    const menuCard = document.createElement('div');
    const foodTitle = document.createElement('h3');
    foodTitle.innerText = title;

    const foodDescription = document.createElement('p');
    foodDescription.innerText = description;

    menuCard.appendChild(foodTitle);
    menuCard.appendChild(foodDescription);

    return menuCard;
}

