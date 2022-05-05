class WeatherService {
    //_apiBase = 'https://gateway.marvel.com:443/v1/public/';
    // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
    _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';

    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
   
    
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`https://api.openweathermap.org/data/2.5/weather?lat=39&lon=120&appid=06fedfea606ed7b940e224fe7059c6a6`);
    }

  
}

export default WeatherService;