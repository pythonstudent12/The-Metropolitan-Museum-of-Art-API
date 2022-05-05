import logo from './logo.svg';
import './App.css';
import WeatherService from './WeatherService';
import WeatherText from './WeatherText';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <WeatherText text="Погода на сегодня"/>
      </header>
    </div>
  );
}

export default App;
