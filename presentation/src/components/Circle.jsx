import React, { Component } from 'react'

class Circle extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			options:this.props.options,
			index:this.props.startIndex? 1:0,
			//represents the index of info for this circle from options to display
		}
		this.clicked = this.clicked.bind(this);
	}
	
	clicked(){
		const index = this.state.index
		const options = this.state.options

		if(index < options.length-1){
			this.setState({index:index+1})	
		}
		else{
			this.props.resetChoices()
			this.setState({index:0})
		}
		this.props.circleClicked()//to display only this circle
	}

  	render() {
  		const index = this.state.index;
  		const options = this.state.options;
	    return (
			<div className={ index===0 ? "circle-container":""}>
    			<div 
		    		className={ index===0 ? "circle" : "non-circle-text"}
		    		onClick={()=>{this.clicked()}}>
		    			{options[index]}
		    	</div>
    		</div>				

	    )
	}
}

export default Circle;
