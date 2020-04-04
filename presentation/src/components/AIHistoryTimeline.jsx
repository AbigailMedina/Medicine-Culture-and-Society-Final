import React, { Component } from 'react'
import SlideShowClickableOptions from './SlideShowClickableOptions.jsx'

class AIHistoryTimeline extends Component {
	constructor(props) {
		super(props);
		
		this.aiHistory = [
		'In 1956, John McCarthy and Marvin Minsky hosted the Dartmouth Summer Research Project on Artificial Intelligence—where the term AI was coined. ',
		'41 years later, IBM’s chess AI beat a chess grandmaster, officially the first time machine was proven to think more intelligently than the best human chess player in the world. ',
		'So what is AI? Simply put, artificial intelligence is machines having enough intelligence to perform tasks comparable to tasks thought that only humans could accomplish– even tasks considered hard for the average human.'
		]
		this.header = "What is Artificial Intelligence?"

	}
	goLeft(e){

	}
	goRight(e){

	}

  	render() {

	    return (
	    	<div >
	    		<SlideShowClickableOptions options={this.aiHistory} header={this.header}/>
	    	</div>
	    )
	}
}

export default AIHistoryTimeline;
