// Функция для отправки запроса и получения координат по IP-адресу
async function getCoordinates() {
    try {
        // Отправляем GET-запрос на API для определения координат по IP-адресу
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json');
        
        // Парсим ответ в формате JSON
        const data = await response.json();
        
        // Извлекаем широту и долготу из полученных данных
        const latitude = data.latitude;
        const longitude = data.longitude;
        
        // Выводим координаты в консоль
        console.log('Широта:', latitude);
        console.log('Долгота:', longitude);
        
        // Выводим координаты на страницу
        const coordinatesContainer = document.getElementById('coordinates');
        coordinatesContainer.textContent = `Ваши координаты: Широта ${latitude}, Долгота ${longitude}`;
    } catch (error) {
        console.error('Произошла ошибка при получении координат:', error);
    }
}

// Вызываем функцию для получения координат при загрузке страницы
getCoordinates();