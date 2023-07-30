const  route44 = document.getElementById("44");
const  route115 = document.getElementById("115");
const  route159 = document.getElementById("159");
const image = document.getElementById("timetable");
const text = document.getElementById("routeName");

route44.addEventListener("click", function() {
    image.src = "images/time44.png";
    text.textContent = "Маршрут №44";
});
route115.addEventListener("click", function() {
    image.src = "images/time115.png";
    text.textContent = "Маршрут №115";
});
