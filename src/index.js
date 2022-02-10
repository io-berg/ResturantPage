import './styles.css';
import { BuildHome } from "./modules/homebuilder";
import background from "./images/background.jpg";

function homeView() {
    ClearPage();
    BuildHome();
}

function ClearPage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
}

document.querySelector("#homeBtn").addEventListener('click', homeView);


BuildHome(); // TODO: Create this

