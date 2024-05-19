import { waterStats } from './statistics.js';
const sideMenu = document.querySelector("aside");
const profileBtn = document.querySelector("#profile-btn");
const themeToggler = document.querySelector(".theme-toggler");
const next = document.getElementById('next');
const prev = document.getElementById('prev');

profileBtn.onclick = function() {
    sideMenu.classList.toggle('active');
}
window.onscroll = () => {
    sideMenu.classList.remove('active');
    if(window.scrollY > 0){document.querySelector('header').classList.add('active');}
    else{document.querySelector('header').classList.remove('active');}
}

themeToggler.onclick = function() {
    document.body.classList.toggle('dark-theme');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
}

// Array of content for each .homePage element
const homePageContent = [
    `<h3>What we offer in this website</h3>
     <p>Content for #homePage1 goes here...</p>`,
    `<h3>Why use our website</h3>
     <p>Content for #homePage2 goes here...</p>`,
    `<h3>More resources for you</h3>
     <p>Content for #homePage3 goes here...</p>`
];

// Function to update the content
function updateHomePageContent(index, content) {
    const homePageElement = document.getElementById(`homePage${index + 1}`);
    homePageElement.innerHTML = `<div class="info">${content}</div>`;
}

// Add event listeners to .homePage elements
const homePageElements = document.querySelectorAll('.homePage');
homePageElements.forEach((element, index) => {
    element.addEventListener('mouseenter', () => {
        updateHomePageContent(index, homePageContent[index]);
    });
    element.addEventListener('mouseleave', () => {
        updateHomePageContent(index, `<div class="info"><h3>${element.querySelector('h3').textContent}</h3><small class="text-muted">${element.querySelector('small').textContent}</small></div>`);
    });
});

