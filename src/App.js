import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import CalculationMethod from './Components/CalculationMethod';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weight: '',
			height: '',
			method: 'metric',
			weightType: 'kg',
			heightType: 'cm'
		}
	}

	setInputType(e) {
		this.setState({ method: e.target.value }, () => {
			if (this.state.method === 'imperial') {
				this.setState({ weightType: 'lbs', heightType: 'inches' });
			} else if (this.state.method === 'metric') {
				this.setState({ weightType: 'kg', heightType: 'cm' });
			}
		})
	}

	render() {
		return (
			<div className="input-div">
			<CalculationMethod
			onChangeValue={this.setInputType.bind(this)}
			/>
			<div className="input-field">
			<label>Weight({this.state.weightType})</label>
			<input name="weight" value={this.state.weight} onChange={(e) => this.setState({ weight: e.target.value })} />
			</div>

			<div className="input-field">
			<label>Height({this.state.heightType})</label>
			<input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
			</div>

			<DisplayResult
			method = {this.state.method}
			weight={this.state.weight}
			height={this.state.height}
			/>
			</div>
			);
		}
	}

	export default App;