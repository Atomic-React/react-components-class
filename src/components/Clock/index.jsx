import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {

	state = {
		date: new Date(),
		count: 0,
	};

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.setState({
				date: new Date(),
			});
		}, 1000);
	}

	componentDidUpdate() {
		// Be carefull updating state inside componentDidUpdate!
		if (this.state.count < 3) {
			this.setState({
				count: this.state.count + 1,
			});
		}
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	render() {
		return <p className="clock">Today: { this.state.date.toLocaleDateString() } { this.state.date.toLocaleTimeString() }</p>;
	}
}

export default Clock;