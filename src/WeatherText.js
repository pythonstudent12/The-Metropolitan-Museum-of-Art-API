import { Component } from 'react';
import WeatherService from './WeatherService';
import Spinner from './Spinner';
import View from './View'


class WeatherText extends Component {

   state = {
    res: {},
    loading: true
   }
    
   weatherService = new WeatherService();

   componentDidMount () {
    //this.foo.bar=0;
    this.updateInfo();
    console.log(this.state);
  }

  onInfoLoaded = (res) => {
    console.log(res);
    this.setState({res, loading: false})
    //console.log(this.state);
  }

  updateInfo = () => {
    this.weatherService
      .getInfo()
      .then(this.onInfoLoaded) //из-за промиса
     // console.log(this.state); //из-за асинхронности
 }
    
 render() {
   const {res, loading} = this.state;
   return (
     <div>
       {loading ? <Spinner/> : <View res={res}/>}
     </div>
   )
 }
}



export default WeatherText;

