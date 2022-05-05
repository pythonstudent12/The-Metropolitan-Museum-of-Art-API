import WeatherService from './WeatherService';

const weatherService = new WeatherService();


console.log(weatherService.getAllCharacters().then(res =>res.coord));
//const {x, y} = weatherService.getAllCharacters().then(res =>res.coord); 


function WeatherText(props) {


  return (
     <h1>
        {props.text}
      </h1>
  );
}

export default WeatherText;