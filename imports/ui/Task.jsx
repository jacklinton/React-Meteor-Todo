import React, { Component, PropTypes } from 'react';

//Task component - represents a single todo item
export default class Task extends Component {
	render() {
		render (
			<li>{this.props.task.text}</li>
		);
	}
}

Task.propTypes = {
	// This component gets the task to display through a React prop
	// We can use propTypes.object.isRequired,
};