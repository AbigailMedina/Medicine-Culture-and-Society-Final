import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faGithub} from '@fortawesome/free-brands-svg-icons'

import Instructions from './Instructions.jsx'
import AIHistoryTimeline from './AIHistoryTimeline.jsx'
import AIToolKit from './AIToolkit.jsx'
import AIToolKit2 from './AIToolkit2.jsx'
import AIApplicationsSlideShow from './AIApplicationsSlideShow.jsx'
import Drawbacks from './Drawbacks.jsx'
import Questions from './Questions.jsx'

class Base extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color:"coral-reef"
		}
	}
	scrollToTop() {
    	window.scrollTo({
	      top: 0,
	      behavior: "smooth"
	    });
	 }
	

  	render() {
	    return (
	    	<div className={this.state.color}>
	    		<div className="navbar is-fixed-top"
	    			onClick={()=>{this.scrollToTop()}}>
		    		
		    		<header className="neo">AI and Medicine</header>
		    		
	    		</div>
	    		
	    		<div style={{marginTop:'50px;'}}>
		    		<div onMouseEnter={()=>this.setState({color:"coral-reef"})}>
			    		<Instructions/>
			    	</div>
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
			    	<div onMouseEnter={()=>this.setState({ color:"coral-reef"})}>
			    		<Drawbacks />
			    	</div>
			    	<div onMouseEnter={()=>this.setState({ color:"black"})}>
			    		<Questions />
			    	</div>
			    </div>
			    <div className="navbar is-fixed-bottom">
		    		
		    		<div>
		    			<a href={"https://github.com/AbigailMedina/Medicine-Culture-and-Society-Final"}>{"source code | "}
		    			<FontAwesomeIcon 
							icon={faGithub}
				    		className={"icon-6x my-icon "}
				    		/>
				    	</a>
				    </div>
		    		<header>Content written by group: Abigail, Michelle, Hallie, and Schuchen | Site created by Abigail</header>
	    		</div>
		    	
	    	</div>
	    )
	}
}

export default Base;
