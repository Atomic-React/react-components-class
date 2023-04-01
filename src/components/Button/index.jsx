import React, { Component } from 'react';

class Button extends Component {

	handleTriggerEvent = (eventEmitter) => (event) => {
		eventEmitter(event.type);
	};

	render() {
		const { children, onTriggerEvent, ...rest } = this.props;
		return (
			<button
				onClick={ this.handleTriggerEvent(onTriggerEvent) }
				onMouseOver={ this.handleTriggerEvent(onTriggerEvent) }
				onMouseLeave={ this.handleTriggerEvent(onTriggerEvent) }
				{ ...rest }
			>
				{ children }
			</button>
		);
	}
}

export default Button;