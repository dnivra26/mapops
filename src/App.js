import React, { Component } from 'react';
import './App.css';
import { MyMapComponent } from './MyMap';
import Textarea from 'react-textarea-autosize';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      coordinates: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const coordinates = value.split("\n").map((value) => {
      const temp = value.split(",");
      return { lat: temp[0], lng: temp[1] };
    });
    this.setState({ value: value, temp_coordinates: coordinates });
  }

  handleSubmit(event) {
    this.setState({coordinates: this.state.temp_coordinates})
    event.preventDefault();
  }

  render() {   
    return (
      <div className="App">
        <div className="MyMap">
        <MyMapComponent coordinates={this.state.coordinates} />
        </div>
        <div className="Controls">
        <form onSubmit={this.handleSubmit}>
          <Textarea value={this.state.value} onChange={this.handleChange} autoFocus style={{maxHeight: 300, minHeight: 300, width: 220, boxSizing: 'border-box'}}/>
          <input type="submit" value="Plot"/>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
