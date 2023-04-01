import React, { Component } from 'react';
import style from './SectionTitle.module.css';

const isString = (value) => {
	return typeof value === 'string';
};

const isArray = (value) => {
	return Array.isArray(value);
};

class SectionTitle extends Component {

	color = `title--${this.props.color || 'primary'}`;

	shouldComponentUpdate(nextProps) {
		if (isString(nextProps.children) && isString(this.props.children) && nextProps.children !== this.props.children) {
			return true;
		}
		if (isArray(nextProps.children) && isArray(this.props.children)) {
			// We cannot just do (nextProps.children === this.props.children) because it does not make a comparison of values but a comprison of references
			const areChildrenEqual = nextProps.children.every((val, index) => val.props.children === this.props.children[index].props.children);
			return !areChildrenEqual;
		}
		// This method should return a boolean
		return false;
	}

	render() {
		console.log('RENDER SECTION TITLE', this.props.children);
		return (
			<h2 className={`${style.title} ${style[this.color]}`}>{ this.props.children }</h2>
		);
	}

}

export default SectionTitle;