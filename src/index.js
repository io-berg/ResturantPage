import './styles.css';
import { buildHome } from "./modules/homebuilder";
import { buildMenu } from './modules/menuBuilder';
import { buildReviews } from './modules/reviewsBuilder';
import { buildWorkForUs } from './modules/workForUsBuilder';

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

function workForUsView() {
    clearPage();
    buildWorkForUs();
}

function clearPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

document.querySelector("#homeBtn").addEventListener('click', homeView);
document.querySelector("#menuBtn").addEventListener('click', menuView);
document.querySelector("#reviewsBtn").addEventListener('click', reviewsView);
document.querySelector("#workForUsBtn").addEventListener('click', workForUsView);


buildHome(); // TODO: Create this

