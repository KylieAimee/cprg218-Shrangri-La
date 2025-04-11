/*weather*/
fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=327bcddfebe7b2e3b2f5f4cd270c64a5&units=metric'
)

.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
    weather.textContent = "Cancun, Mexico "+data.main.temp+"\u00B0C";
});

/*Hamburger Menu*/ 
const navToggle = document.getElementById('nav-toggle');
const menuList = document.getElementById('menu');

navToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
});