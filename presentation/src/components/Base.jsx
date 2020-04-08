import React, { Component } from 'react'
import AIHistoryTimeline from './AIHistoryTimeline.jsx'
import AIToolKit from './AIToolkit.jsx'
import AIToolKit2 from './AIToolkit2.jsx'
// import AIApplications from './AIApplications.jsx'
import AIApplicationsSlideShow from './AIApplicationsSlideShow.jsx'

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
	    		<div onMouseEnter={()=>this.setState({color:"coral-reef"})}>
		    		<AIHistoryTimeline/>
		    	</div>
		    	<div onMouseEnter={()=>this.setState({ color:"black"})}>
		    		<AIToolKit />
		    	</div>
		    	<div onMouseEnter={()=>this.setState({ color:"coral-reef"})}>
		    		<AIToolKit2 />
		    	</div>
		    	<div onMouseEnter={()=>this.setState({ color:"black"})}>
		    		<AIApplicationsSlideShow />
		    	</div>
		    	
	    	</div>
	    )
	}
}

export default Base;
