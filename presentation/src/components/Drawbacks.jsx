import React, { Component } from 'react'
import SlideShowClickableOptions from './SlideShowClickableOptions.jsx'

class Drawbacks extends Component {
	constructor(props) {
		super(props);
		
		this.drawbacks = [
		'The first drawback AI in medicine is the constant need for updating software and machine repair and maintenance. This becomes very costly as the computers are very complex. ',
		'An AI arms race could lead to mass casualties. Another danger with this level of AI could be that a machine is programmed to do something beneficial, but it will do anything possible to achieve its goal. This may mean destruction to solve its task, something bad happens as an unintended side effect',
		'Any artificially intelligent system had to be created by a human developer. Such developers have biases and it is not uncommon that these biases get programmed into the system. '
		]
		this.header = "What are the drawbacks of Artificial Intelligence in medicine?"

	}

  	render() {

	    return (
	    	<div >
	    		<SlideShowClickableOptions fullScreen ={true} options={this.drawbacks} header={this.header}/>
	    	</div>
	    )
	}
}

export default Drawbacks;
