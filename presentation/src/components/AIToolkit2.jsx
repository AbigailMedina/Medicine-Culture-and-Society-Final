import React, { Component } from 'react'
import ClickableOptions from './ClickableOptions.jsx'

class AIToolkit2 extends Component {
	constructor(props) {
		super(props);
		
		this.aiToolkit2 = [
		['Natural Language Processing',"Natural Language processing is the use of unstructured language-based data in the form of text or audio that AI can process into structured data it can use to make decisions."],
		['Machine Learning','Machine Learning (ML) is a technique focused on analyzing structured data such as a csv of data representing relationships between traits'],
		
		['Learning Types','Reinforcement learning: the machine learned through trial and error and feedback it gained from those trials.',
							'Supervised learning gives the machine labels for known solutions to a problem to guide the machine when it is learning.', 
							'Unsupervised is the opposite where the robot is given no information to go off of and is expected to form patterns to learn from data it creates on its own.'],
		['Deep Learning',"Deep Learning is a tool that AI use to explore complex non-linear patterns in data as opposed to ML that can handle only limited amounts of dimentions (traits) and their relationships."]
		]
		
		this.header = "How is it done? Step two: understanding data"
		
	}

  	render() {

	    return (
	    	<div>
	    		<ClickableOptions options={this.aiToolkit2} header={this.header}/>
	    	</div>
	    )
	}
}

export default AIToolkit2;
