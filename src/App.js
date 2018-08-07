import React, { Component } from 'react';

import Form from './components/Form';
import Weather from './components/Weather';
import axios from 'axios';
import './App.css';



const API_KEY = 'b6907d289e10d714a6e88b30761fae22';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      country: null,
      temperature: null,
      humidity: null,
      description: null

    }
    this.getWeather = this.getWeather.bind(this);
  }
  
//   componentDidMount(){
//     axios.get(`https://openweathermap.org/data/2.5/weather?q=Hanoi,vn&appid=${API_KEY}&units=metric`)
//     .then((res) =>{
//       this.setState({
//         city: res.data.name,
//         country: res.data.sys.country,
//         temperature: res.data.main.temp,
//         humidity: res.data.main.humidity,
//         description: res.data.weather[0].description
//       })
//     })
//  }


  // componentDidMount(){
  //   this.getWeather;
  // }




  getWeather = (e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    axios.get (`https://openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    .then((res) => {
      this.setState({
        city: res.data.name,
        country: res.data.sys.country,
        temperature: res.data.main.temp,
        humidity: res.data.main.humidity,
        description: res.data.weather[0].description
      })
    });
      
    
  }



  render() {
    let {city, country, temperature, humidity, description } = this.state;
    return (
    <div>  
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className ="col-xs-5 title-container">
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather ={this.getWeather}/>
                               
                <Weather 
                    city = {city} 
                    country ={country}
                    temperature ={temperature}
                    humidity = {humidity}
                    description ={description}
                                        
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>  
    );
  }
}

export default App;
