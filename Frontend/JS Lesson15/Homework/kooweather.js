let latitude; // Переменная для хранения широты
let longitude; // Переменная для хранения долготы

// Функция для отправки запроса и получения координат по IP-адресу
async function getCoordinates() {
    try {
        // Отправляем GET-запрос на API для определения координат по IP-адресу
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        
        // Парсим ответ в формате JSON
        const data = await response.json();
        
        // Извлекаем широту и долготу из полученных данных
        latitude = data.latitude;
        longitude = data.longitude;
        
        // Выводим координаты в консоль
        console.log('Широта:', latitude);
        console.log('Долгота:', longitude);
        
        const coordinatesContainer = document.getElementById("coordinates")
        coordinatesContainer.textContent = `"Ваши координаты: Широта ${latitude}, Долгота ${longitude}"`
        
        // Вызываем функцию для получения прогноза погоды
        getWeather(latitude, longitude);
    } catch (error) {
        console.error("Произошла ошибка при получении координат:", error);
    }
}
getCoordinates();

// Функция для отправки запроса и получения прогноза погоды по координатам
async function getWeather(latitude, longitude) {
    try {
        // Отправляем GET-запрос на API для получения прогноза погоды
        const response = await fetch(`https://api.open-meteo.com/weather?latitude=${latitude}&longitude=${longitude}`);
        const data = await response.json();
        
        // Выводим температуру и расшифрованный код погоды
        const temperature = data.current_temperature;
        const weatherCode = data.current_weather_code;
        console.log('Температура:', temperature);
        console.log('Код погоды:', weatherCode);
        
        // Выводим прогноз погоды на страницу
        const weatherContainer = document.getElementById('weather');
        weatherContainer.innerHTML = `
            <p>Температура: ${temperature} градусов Цельсия</p>
            <p>Код погоды: ${weatherCode}</p>
        `;
    } catch (error) {
        console.error('Произошла ошибка при получении прогноза погоды:', error);
    }
}