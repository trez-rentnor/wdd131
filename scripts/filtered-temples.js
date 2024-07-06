const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.navigation a');
const albumTitle = document.querySelector('#page-title');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

for (let item of menuItems) {
    item.addEventListener('click', (e) => {
        albumTitle.innerHTML = e.target.innerHTML;
    })
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bountiful Utah",
    location: "Bountiful, Utah",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://www.churchofjesuschrist.org/bc/content/ldsorg/content/images/time-for-temple-480x270-0001681old.jpg"
  },
  {
    templeName: "Bogotá Colombia",
    location: "Bogotá, Colombia",
    dedicated: "1999, April, 24",
    area: 53500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7733-main.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl:
    "https://www.thechurchnews.com/resizer/v2/XHMHQNJY3RF7KREFV22DFUKBXI.jpg?auth=4594c82e48609ac025f89bac0b61f9c300344c92098bbfebc595338dd77e3524&focal=639%2C400&width=400&height=250"
  },
];

const homeButtonLink = document.querySelector("#homeButton");
const oldButtonLink = document.querySelector("#oldButton");
const newButtonLink = document.querySelector("#newButton");
const largeButtonLink = document.querySelector("#largeButton");
const smallButtonLink = document.querySelector("#smallButton");

homeButtonLink.addEventListener("click", () => {
    let filteredTemples = temples;
    showTemples(filteredTemples);
});

oldButtonLink.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) < 1900);
    showTemples(filteredTemples);
});

newButtonLink.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => temple.dedicated.substring(0, 4) > 2000);
    showTemples(filteredTemples);
});

largeButtonLink.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => temple.area > 90000);
    showTemples(filteredTemples);
});

smallButtonLink.addEventListener("click", () => {
    let filteredTemples = temples.filter(temple => temple.area < 10000);
    showTemples(filteredTemples);
});

function showTemples(filteredTemples) {
    newHtml = "";
    filteredTemples.forEach(temple => {
        newHtml += `
        <div class="temple-card">
            <h3>${temple.templeName}</h3>
            <table>
                <tr><td>Location:</td><td>${temple.location}</td></tr>
                <tr><td>Dedicated:</td><td>${temple.dedicated}</td></tr>
                <tr><td>Area:</td><td>${temple.area} sq ft</td></tr>
            </table>
            <img src="${temple.imageUrl}" alt="${temple.location} Temple" loading="lazy">
        </div>`;
    })
    document.querySelector("#gallery").innerHTML = newHtml;
}

showTemples(temples);