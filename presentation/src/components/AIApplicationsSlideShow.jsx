import React, { Component } from 'react'
import SlideShowClickableOptions from './SlideShowClickableOptions.jsx'

class AIApplicationsSlideshow extends Component {
	constructor(props) {
		super(props);
		//todo: find a way to combine the content into one ds with optional subheaders
		this.aiApplications = [
			'AI is used in treatments for stroke by analyzing a patients normal movements versus movements right before and during a stroke through the use of wearable technology to alert the patient of a oncoming stroke',
			'CNN has successfully been used in the medical field for disease diagnosis. Congenital cataract disease through learning ocular images. CNN has over 90% accuracy on diagnosis and treatment suggestions. CNN has also identified skin cancer from clinical images and had over 90% accuracy for indicating both malignant and benign lesions.',
			'Intelligent artificial medical assistants assist doctors on the surgery table and have the ability to decrease invasiveness while improving accuracy, leading the patient to faster healing times and lower rates of infection.'
		]
		this.header = "What Applications are there in healthcare?"
		
	}
	
  	render() {

	    return (
	    	<div >
	    		<SlideShowClickableOptions 
		    		subHeader={['Treatment','Diagnosis','Smart robotic surgery']} 
		    		options={this.aiApplications} header={this.header}/>
	    	</div>
	    )
	}
}

export default AIApplicationsSlideshow;
