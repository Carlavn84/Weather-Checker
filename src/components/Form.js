import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <h1 className="title-container__title">Weather Today</h1> 
                    <form  className ="form-inline" onSubmit = {this.props.getWeather}>
                        <div className ="form-group">
                            <input className="form-control" width=".col-sm-*" type ="text" name="city" placeholder="City" />
                        </div>
                    
                        <div className ="form-group">
                             <input className="form-control" type ="text" name="country" placeholder ="Country"/>
                        </div>
                    <br/> <br/>
                        <button className="btn btn-danger">Get Weather</button>
                    </form>    
            </div>
        );
    }
}

export default Form;
