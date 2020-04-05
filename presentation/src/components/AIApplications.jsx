import React, { Component } from 'react'
import ClickableOptions from './ClickableOptions.jsx'

class AIApplications extends Component {
	constructor(props) {
		super(props);
		
		this.aiApplications = [
		'pandemic prediction',
		'diagnosis',
		'creating cures',
		'more?'
		]
		this.header = "What Applications are there in healthcare?"
		this.state = {
			
		}
	}

  	render() {

	    return (
	    	<div >
	    		<ClickableOptions options={this.aiApplications} header={this.header}/>
	    	</div>
	    )
	}
}

export default AIApplications;
