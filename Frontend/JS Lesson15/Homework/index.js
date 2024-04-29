

async function getCoordinates(){
    try{
        const response = await fetch('https://get.geojs.io/v1/ip/geo.json')
        const data = await response.json()
        const latitude = data.latitude
        const longitude = data.longitude

        console.log("Широта: ",latitude);
        console.log("Долгота: ", longitude);

        const coordinatesContainer = document.getElementById("coordinates")
        coordinatesContainer.textContent = `"Ваши координаты: Широта ${latitude}, Долгота ${longitude}"`
    }catch (error){
        console.error("Произошла ошибка при получении координат:",error)
    }
}
getCoordinates()

