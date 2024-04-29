async function getAddress(latitude, longitude) {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=ВАШ_API_КЛЮЧ`);
        const data = await response.json();
        
        // Проверяем, получены ли данные
        if (data.status === 'OK') {
            // Извлекаем адрес из первого результата
            const address = data.results[0].formatted_address;
            console.log('Адрес:', address);
            
            // Извлекаем наименование населенного пункта из адреса
            const cityName = data.results[0].address_components.find(component => component.types.includes('locality'));
            console.log('Название населенного пункта:', cityName.long_name);
        } else {
            console.error('Ошибка получения данных:', data.status);
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Пример вызова функции для координат (53.0389, 8.7458)
getAddress(53.0389, 8.7458);
