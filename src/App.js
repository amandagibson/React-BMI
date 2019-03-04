import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import CalculationMethod from './CalculationMethod.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      methodType: 'Metric'
    }
  }

  // calculateMethod () {
  //   if (this.state.methodType === 'Metric') {
  //     this.setState({methodType: 'Metric'});
  //   } else {
  //     this.setState({ methodType: 'Imperial'})
  //   }
  // }

  render() {
    return (
      <div className="input-div">
        <h1>REACT BMI-calculator</h1>
         <CalculationMethod
         />
        <div className="input-field">
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} />
        </div>

        <div className="input-field">
          <label>Height(cm)</label>
          <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
    );
  }
}

export default App;