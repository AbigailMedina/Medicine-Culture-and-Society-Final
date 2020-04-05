import React, { Component } from 'react'
import ClickableOptions from './ClickableOptions.jsx'

class AIToolkit extends Component {
	constructor(props) {
		super(props);
		//props
		// this.aiHistory = this.props.aiHistory
		this.aiToolkit = [
		['NLP',"nlp stuff"],
		//takes into acount auditory and processing of digital language
		['Tactile',"One example of AI using tactile input to gain intelligence is being tasked to walk. How does a human learn how to walk? First, a baby that is trying to walk has to be told that it should be learning to walk. This is equivalent to a computer scientist writing a program to tell a robot to walk. Next, both machine and baby have to fall and fail a lot. This is where the learning happens. A baby can't balance because it doesn't know that if it leans forward it will fall. The same holds for a robot. A robot has to make a decision to move as per the program’s instructions and it will either fall or not. The program will maximize successful movements mathematically so that the machine can understand where it went wrong. Same thing happens with a child when it falls and cries or successfully takes a step and gets applause from its parents. "],
		['Visual',"visual stiuff"]]
		this.header = "How is it done?"
		this.state = {
			
		}
	}

  	render() {

	    return (
	    	<div>
	    		<ClickableOptions options={this.aiToolkit} header={this.header}/>
	    	</div>
	    )
	}
}

export default AIToolkit;
