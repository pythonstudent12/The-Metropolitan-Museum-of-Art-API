import {Component} from 'react';
import {Table} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap'
import {Image} from 'react-bootstrap'
import WeatherService from './WeatherService';

class View extends Component {

  state = {res: {},
            field: ""
          }

 weatherService = new WeatherService();
  
 
 updateInfo = (info) => {
  console.log(info);
  this.weatherService
    .getInfo(info)
    .then(this.onInfoLoaded) //из-за промиса
    console.log(this.state); //из-за асинхронности
}

onInfoLoaded = (res) => {
  // console.log(res);
   this.setState({res,  field: ""})
   console.log(this.state.res);
 }

   
  handleUserInput = (e) => {
        const name = e.target.value;
        this.setState({field: name});
        console.log(name);
       }

  submitUserInput = () =>{
    console.log(this.state.field);
    this.updateInfo(this.state.field);
  }
    


   render () {
    
    const {primaryImageSmall, artistDisplayName, culture, period, accessionYear} = this.props.res;

      return (
  <>
      <form>  
        <label>Student Name: </label>  
        <input type="text" placeholder="enter student name" onChange={this.handleUserInput}/>  
      </form>  
      <Button variant="primary" type="submit" onClick={this.submitUserInput} >
      Submit
    </Button>
      
  <Image src={primaryImageSmall} alt="Random character" />

  <Table striped bordered hover variant="dark">
  
     <thead>
      <tr>
        <th>Имя:</th>
        <th>Культура:</th>
        <th>Период:</th>
        <th>Год:</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{artistDisplayName}</td>
        <td>{culture}</td>
        <td>{period}</td>
        <td>{accessionYear}</td>
       
      </tr>
    </tbody>
  </Table>
  </>)
   }
}


export default View;