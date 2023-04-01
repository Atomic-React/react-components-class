import React, { Component, Fragment } from 'react';
import SectionTitle from './components/SectionTitle';
import style from './App.module.css';
import Button from './components/Button';
import Clock from './components/Clock';

class App extends Component {

	state = {
		isDateDisplayed: true,
		users: [
			{
				id: 1,
				name: 'John',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 2,
				name: 'Lucy',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 3,
				name: 'Jimmy',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 4,
				name: 'James',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 5,
				name: 'Carrie',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 6,
				name: 'Carl',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
			{
				id: 7,
				name: 'Diana',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
			},
		],
		count: 0,
	};

	title = 'Hello world!';

	handleDisplayEventAlert = (event) => {
		alert(`A ${event.type} event has been triggered.`);
	};

	handleDisplayUsernameInAlert = (username) => {
		alert(`Hello ${username}!`);
	};

	handleTriggeredEventTypeFromButton = (eventType) => {
		if (eventType === 'click') {
			console.log('You clicked on the button.');
			this.setState({
				isDateDisplayed: !this.state.isDateDisplayed,
			});
		}
		if (eventType === 'mouseover') {
			console.log(('You are hovering the button.'));
		}
		if (eventType === 'mouseleave') {
			console.log('You are leaving the button.');
		}
	};

	handleIncrement = (eventType) => {
		if (eventType === 'click') {
			this.setState({
				count: this.state.count + 1,
			});
			this.setState((prevState) => {
				return {
					count: prevState.count + 1,
				};
			});
		}
	};

	render() {
		console.log('RENDER APP');
		return (
			<>
				<h1 className={style.title}>{ this.title }</h1>
				<SectionTitle>
					<span style={{ fontWeight: 'normal' }}>This is a super</span>
					<strong>Clock</strong>
				</SectionTitle>
				{ 
					this.state.isDateDisplayed ? <Clock /> : null
				}
				<Button className={style.btn} onTriggerEvent={ this.handleTriggeredEventTypeFromButton } disabled={ false } type="button">Toggle date</Button>
				<SectionTitle color="secondary">Users</SectionTitle>
				<div>
					<dl>
						{ 
							this.state.users.map((user) => {
								return (
									<Fragment key={user.id}>
										<dt key={user.id}>{ user.name }</dt>
										<dd>{ user.description }</dd>
									</Fragment>
								);
							})
						}
					</dl>
				</div>
				<div>
					<SectionTitle>Counter</SectionTitle>
					<p>Count: { this.state.count }</p>
					<Button onTriggerEvent={ this.handleIncrement } className={style.btn}>Increment</Button>
				</div>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur voluptatum ut architecto sequi cumque quam sunt autem impedit corporis expedita, nesciunt numquam optio, esse debitis consectetur maiores aperiam corrupti quidem.
				</p>
			</>
		);
	}

}

export default App;