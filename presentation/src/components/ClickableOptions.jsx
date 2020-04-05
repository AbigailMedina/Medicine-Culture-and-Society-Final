import React, { Component } from 'react'

class ClickableOptions extends Component {
	constructor(props) {
		super(props);
		//props
		// this.aiHistory = this.props.aiHistory
		this.options = this.props.options
		this.state = {
			options:this.props.options,
			circles:true
		}
		this.displayOption = this.displayOption.bind(this);
	}
	
	displayOption(index){
		const currOptions = this.state.options
		if (currOptions.length===1){
			this.setState({circles:true,options:this.props.options})
		}else{
			console.log(currOptions,currOptions[index],currOptions[index][1])
			this.setState({circles:false,options:[currOptions[index][1]]})	
		}	
	}

	content(props){
		const options = this.state.options
		const map = options.map((item, index) => (
		    	<div 
		    		key={index}
		    		className={this.state.circles?"circle":""}
		    		onClick={()=>this.displayOption(index)}>
		    	{(!Array.isArray(item) ?item:item[0])}</div>

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
		    		onClick={()=>this.setState({circles:true,options:this.props.options})}>{header}
		    	</header>
		    	
		    	{content}
		    </div>
	    	</section>
	    )
	}
}

export default ClickableOptions;
