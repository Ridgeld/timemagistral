const  route44 = document.getElementById("44");
const  route115 = document.getElementById("115");
const  route159 = document.getElementById("159");
const text = document.getElementById("routeName");

route44.addEventListener("click", function() {
    var image = document.getElementById("timetable");
    image.src = "images/time44.png";
    text.textContent = "Маршрут №44";
});
route115.addEventListener("click", function() {
    var image = document.getElementById("timetable");
    image.src = "images/time115.png";
    text.textContent = "Маршрут №115";
});
route159.addEventListener("click", function() {
    var image = document.getElementById("timetable");
    image.src = "images/time159.png";
    text.textContent = "Маршрут №159";
});
