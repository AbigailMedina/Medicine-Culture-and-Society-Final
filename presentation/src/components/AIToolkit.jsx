import React, { Component } from 'react'
import ClickableOptions from './ClickableOptions.jsx'

class AIToolkit extends Component {
	constructor(props) {
		super(props);
		//props
		// this.aiHistory = this.props.aiHistory
		this.aiToolkit = [
		'NLP',
		//takes into acount auditory and processing of digital language
		'Tactile',
		'Visual'		]
		this.header = "How is it done?"
		this.state = {
			
		}
	}

  	render() {

	    return (
	    	<div onHover>
	    		<ClickableOptions options={this.aiToolkit} header={this.header}/>
	    	</div>
	    )
	}
}

export default AIToolkit;
