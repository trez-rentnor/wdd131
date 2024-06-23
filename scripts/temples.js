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