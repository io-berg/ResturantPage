import './styles.css';
import { buildHome } from "./modules/homebuilder";
import { buildMenu } from './modules/menuBuilder';
import background from "./images/background.jpg";

function homeView() {
    clearPage();
    buildHome();
}

function menuView() {
    clearPage();
    buildMenu();
}

function clearPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

document.querySelector("#homeBtn").addEventListener('click', homeView);
document.querySelector("#menuBtn").addEventListener('click', menuView);


buildHome(); // TODO: Create this

