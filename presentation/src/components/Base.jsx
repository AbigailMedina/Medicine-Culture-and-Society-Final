import React, { Component } from 'react'
import AIHistoryTimeline from './AIHistoryTimeline.jsx'
import AIToolKit from './AIToolkit.jsx'
import AIApplications from './AIApplications.jsx'

class Base extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color:"coral-reef"
		}
	}
	

  	render() {
	    return (
	    	<div className={this.state.color}>
	    		<span onMouseEnter={()=>this.setState({color:"coral-reef"})}>
		    		<AIHistoryTimeline />
		    	</span>
		    	<span onMouseEnter={()=>this.setState({ color:"black"})}>
		    		<AIToolKit />
		    	</span>
		    	<span onMouseEnter={()=>this.setState({ color:"tangerine"})}>
		    		<AIApplications />
		    	</span>
	    	</div>
	    )
	}
}

export default Base;
