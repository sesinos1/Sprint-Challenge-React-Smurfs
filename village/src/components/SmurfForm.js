import React, { Component } from 'react';
import axios from 'axios';

const blankFormValues = {
  name: '',
  age: '',
  height: ''
};

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const newSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    };
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(response => {
        this.setState({ smurfs: response.data, smurf: blankFormValues });
      })
      .catch(err => console.log('error', err));
      
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
        <div>
          <input className='AddName'
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          </div>
          <div>
          <input className='AddAge'
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          </div>
          <div>
          <input className='AddHeight'
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          </div>
          <div>
          <button type="submit">Add to the village</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
