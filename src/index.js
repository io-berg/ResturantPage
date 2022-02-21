import './styles.css';
import { buildHome } from "./modules/homebuilder";
import { buildMenu } from './modules/menuBuilder';
import background from "./images/background.jpg";
import { buildReviews } from './modules/reviewsBuilder';

function homeView() {
    clearPage();
    buildHome();
}

function menuView() {
    clearPage();
    buildMenu();
}

function reviewsView() {
    clearPage();
    buildReviews();
}

function clearPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

document.querySelector("#homeBtn").addEventListener('click', homeView);
document.querySelector("#menuBtn").addEventListener('click', menuView);
document.querySelector("#reviewsBtn").addEventListener('click', reviewsView);


buildHome(); // TODO: Create this

