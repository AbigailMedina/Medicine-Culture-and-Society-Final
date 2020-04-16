import React, { Component } from 'react'
import SlideShowClickableOptions from './SlideShowClickableOptions.jsx'
import ClickableOptions from './ClickableOptions.jsx'

class Instructions extends Component {
	constructor(props) {
		super(props);
		
		this.slideShowInstructions = [
		'Click on either arrow to look at related info. Faded arrow means that there is no more info to be seen in that direction.',
		'This is more info. Click left to return to first slide. Scroll down for the rest of the presentation',
		'Notice the right arrow is faded, meaning there is not another slide following this'
		]
		this.circleInstructions = [
		['Click either circle',"I have the same info as the other circle","Click on me again to see more info related to this topic or click on the header to return to the group of circles.","This is the last bit of info for this topic. Click on me again to return to the circle grouping."],
		['This is an example topic',"I have the same info as the other circle","Click on me again to see more info related to this topic or click on the header to return to the group of circles.","This is the last bit of info for this topic. Click on me again to return to the circle grouping."]
		]
		this.header = "Welcome to our Presentation"
		this.circleHeader = "Click on any circle for related info"

	}

  	render() {

	    return (
	    	<div >
	    		
	    		<SlideShowClickableOptions fullScreen={true} options={this.slideShowInstructions} header={this.header}/>
	    		<ClickableOptions fullScreen = {true} options={this.circleInstructions} header={this.circleHeader} />
	    		<span className={'non-circle-text'}> 
	    			<header>Scroll down for the rest of the presentation</header>
	    		</span>
	    		
	    		
	    		
	    	</div>
	    )
	}
}

export default Instructions;
