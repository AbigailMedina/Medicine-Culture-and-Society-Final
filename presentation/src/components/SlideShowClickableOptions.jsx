import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class SlideShowClickableOptions extends Component {
	constructor(props) {
		super(props);
		
		this.options = this.props.options
		this.state = {
			current:0,
			disableLeft:true,
			disableRight:this.props.options.length===1
		}
	}
	goLeft(e){
		console.log("before",this.state.current)
		const curr = this.state.current
		if (curr <= 1){
			this.setState({disableLeft:true})
		}else{
			this.setState({
				disableLeft:false,
				disableRight:false,
				current:curr-1})
		}
	}
	goRight(e){
		console.log("before",this.state.current)
		const curr = this.state.current
		if (curr >= this.options.length-1){
			this.setState({disableRight:true})
		}else{
			this.setState({
				disableRight:false,
				disableLeft:false,
				current:curr+1})
		}
	}
	content(props){
		 const subHeader = this.props.subHeader;

		return (

		    <div className="columns level ">
			    <div className="column level-left level-item is-size-2">
					<FontAwesomeIcon 
						icon="arrow-left"
			    		className={"icon-4x my-icon " + (this.state.disableLeft?"fa-disabled":"")}
			    		onClick={(e)=>{this.goLeft(e)}}
			    		/>
	    		</div>
			    <div className="column is-three-quarters level-item is-size-2">
			    	{(this.props.subHeader ? 
			    		<header className="is-size-2">{subHeader[this.state.current]}</header>:
			    		<span></span>)}

			    	{this.props.options[this.state.current]}
			    </div>
			    <div className="column level-item level-right is-size-2">
			    	<FontAwesomeIcon 
			    		icon="arrow-right"
			    		className={"icon-4x my-icon " + (this.state.disableRight? "fa-disabled":"")}
			    		onClick={(e)=>{this.goRight(e)}}
			    		/>
	    		</div>
		     
		    </div>
		  ); 
	}  		

  	render() {
  		const content = this.content();
  		const header = this.props.header;
  		const subHeader = this.props.subHeader;
	    return (
	    	<section className=" section fullScreen" >
		    	<div className="container ">
		    		<header 
		    			className="is-size-1"
		    			onClick={()=>this.setState({current:0})}>{header}
		    		</header>
			    	{content}
			    </div>
	    	</section>
	    )
	}
}

export default SlideShowClickableOptions;
