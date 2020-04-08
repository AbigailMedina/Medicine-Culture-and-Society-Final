import React, { Component } from 'react'
import ClickableOptions from './ClickableOptions.jsx'

class AIApplications extends Component {
	constructor(props) {
		super(props);
		
		this.aiApplications = [
		['pandemic prediction',"extra 1"],
		['diagnosis',"extra 1"],
		['creating cures',"extra 1"],
		['Smart robotic surgery',"extra 1"]
		]
		this.header = "What Applications are there in healthcare?"
		
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
