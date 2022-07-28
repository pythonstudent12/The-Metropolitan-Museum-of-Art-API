class WeatherService {
    
    //_apiKey = '06fedfea606ed7b940e224fe7059c6a6';

    getInfo = async (info=4567) => {
      let url='https://collectionapi.metmuseum.org/public/collection/v1/objects/'+info;
      console.log(url);
      const res =  await fetch(url);
      if (!res.ok) {
         throw new Error(`Could not fetch, status: ${res.status}`);
      }
      const resourse = await res.json();
      return this._transformCharacter(resourse);
    }

    _transformCharacter = (res) => {
       return {
          primaryImageSmall: res.primaryImageSmall,
          artistDisplayName: res.artistDisplayName,
          period: res.period,
          culture: res.culture,
          accessionYear: res.accessionYear
       }
    }
}

export default WeatherService;