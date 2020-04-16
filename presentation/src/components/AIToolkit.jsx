import React, { Component } from 'react'
import ClickableOptions from './ClickableOptions.jsx'

class AIToolkit extends Component {
	constructor(props) {
		super(props);
		
		this.aiToolkit = [
		['Tactile',"A program can take in tactile input to learn its way through a maze with no vision or learn to walk based off a goal of minimize falling"],
		['Visual',"A program can take in visual input to differentiate items such as faces, used in facial recognition or recognize lane boundries for self-driving cars"],
		['Auditory',"A program can take in auditory input used to id a voice as an individual it has heard before or simply take commands like Siri or Alexa"],

		['Structured vs Unstructured Data', 
			'Structured data is organized in a way machines can take as input, manipulate and output. One example being data in a csv file from IMDB about movies where movies are related to genres; An AI can analyze patterns in titles and \'learn\' to guess what genre a title might belong to.',
			'Unstructured data comes in requiring manipulation to become useful in making decisions on. A letter for example- if you hand an AI a letter and tell it to tell you if the author is mad at you, the AI will have to structure the letter into words with associated connotations in order to make this calculation.']
		]

		this.header = "How is it done? Step one: taking in data"
	
	}

  	render() {

	    return (
	    	<div>
	    		<ClickableOptions fullScreen ={true} options={this.aiToolkit} header={this.header}/>
	    	</div>
	    )
	}
}

export default AIToolkit;
