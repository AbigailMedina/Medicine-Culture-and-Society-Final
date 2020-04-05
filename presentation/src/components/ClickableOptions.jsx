import React, { Component } from 'react'

class ClickableOptions extends Component {
	constructor(props) {
		super(props);
		//props
		// this.aiHistory = this.props.aiHistory
		this.options = this.props.options
		this.state = {
			options:this.props.options,
			disableLeft:true,
			disableRight:this.props.options.length===1
		}
		this.displayOption = this.displayOption.bind(this);
	}
	
	displayOption(index){
		const currOptions = this.state.options
		if (currOptions.length===1){
			this.setState({options:this.props.options})
		}else{
			this.setState({options:[currOptions[index]]})	
		}	
	}

	content(props){
		const options = this.state.options
		if (!options){
			return <div>no options</div>
		}else{
			console.log("options:",options)
		}
		const map = options.map((item, index) => (
		    	<div 
		    		key={index}
		    		className="circle"
		    		onClick={()=>this.displayOption(index)}>
		    	{item}</div>

			))
		return (
			<section className="section ">
				<div className="container  has-text-centered">
					{map}
				</div>
			</section>
		    
		); 
	}  		
	

  	render() {
  		const content = this.content();
  		const header = this.props.header;
	    return (
	    	<section className="section fullScreen">
	    	<div className="container">

	    		<header 
		    		className="has-text-centered  is-size-1" 
		    		onClick={()=>this.setState({options:this.props.options})}>{header}
		    	</header>
		    	
		    	{content}
		    </div>
	    	</section>
	    )
	}
}

export default ClickableOptions;
