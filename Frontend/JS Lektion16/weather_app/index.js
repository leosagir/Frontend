function getWeather() {
    let city = document.getElementById("cityInput").value;
    let url = "https://wttr.in/" + city + "?2&m&lang=de";

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("weather-container").innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}
