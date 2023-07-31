const  route25 = document.getElementById("25");
const  route25a = document.getElementById("25a");
const  route44 = document.getElementById("44");
const  route103 = document.getElementById("103");
const  route115 = document.getElementById("115");
const  route159 = document.getElementById("159");
const image = document.getElementById("timetable");
const imageRoute = document.getElementById("route");
const text = document.getElementById("text");

route25.addEventListener("click", function() {
    imageRoute.src ="images/route25.png"
    text.textContent = "Маршрут №25";
    image.classList.toggle('hidden');

});
route25a.addEventListener("click", function() {
    image.classList.toggle('hidden');
    imageRoute.src ="images/route25a.png"
    text.textContent = "Маршрут №25a";

});

route44.addEventListener("click", function() {
    image.classList.remove('hidden');
    image.src = "images/time44.png";
    imageRoute.src ="images/route44.png"
    text.textContent = "Маршрут №44";

});
route103.addEventListener("click", function() {
    image.classList.toggle('hidden');
    imageRoute.src ="images/route103.png"
    text.textContent = "Маршрут №103";

});

route115.addEventListener("click", function() {
    image.classList.remove('hidden');
    image.src = "images/time115.png";
    text.textContent = "Маршрут №115";
    imageRoute.src ="images/route115.png"
});

route159.addEventListener("click", function() {
    image.classList.remove('hidden');
    image.src = "images/time159.png";
    text.textContent = "Маршрут №159";
    imageRoute.src ="images/route159.png"
    imageRoute.style.width = '485px';
    imageRoute.style.height = '472px';

});
