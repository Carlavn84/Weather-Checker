import React, { Component } from 'react';

class Weather extends Component {
    render() {
        let {city, country, temperature, humidity, description } = this.props;
    
    return city && country ? (
            <div className="weather__info">

                <p className="weather__key">
                    Location: <span className= "weather__value">{city}, {country}</span>
                </p>
                <p className="weather__key">
                    Temperature: <span className= "weather__value">{temperature}</span>
                </p>
                <p className="weather__key">
                    Humidity: <span className= "weather__value">{humidity}</span>
                </p>
                <p className="weather__key">
                    Condition: <span className= "weather__value">{description}</span>
                </p>
      
            </div>
        ) : (
            <h3></h3>
        );
    }
}

export default Weather;


