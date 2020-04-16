import React, { Component } from 'react'
import ClickableOptions from './ClickableOptions.jsx'

class Questions extends Component {
	constructor(props) {
		super(props);
		
		this.aiToolkit = [
		['Structured vs Unstructured data','Is data understood through Tactile, Visual, or Auditory observations structured or unstructured data?', 'Unstructured'],
		['AI device categories','What are two major categories of AI devices we talked about?',"Machine Learning and Natural Language Processing"],
		['Applications of AI','What are 4 health issues AI is applied in?','Cancer, Neurology, Cardiology and Stroke']
		]

		this.header = "Quiz yourself"
	
	}

  	render() {

	    return (
	    	<div>
	    		<ClickableOptions fullScreen ={true} options={this.aiToolkit} header={this.header}/>
	    	</div>
	    )
	}
}

export default Questions;
