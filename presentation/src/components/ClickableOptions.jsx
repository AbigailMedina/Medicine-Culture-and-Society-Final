import React, { Component } from 'react'
import Circle from './Circle.jsx'
class ClickableOptions extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			options:this.props.options,
			showOne:false,
			showIndex:0
		}
		this.circleClicked.bind(this)
	}
	

	headerClicked(){
		this.setState({options:this.props.options, showOne:false})
	}
	circleClicked(item,index){
		if(this.state.showOne===false){//currently showing all options
			this.setState({showIndex:index,showOne:true})
		}
	}

	content(props){
		const showIndex = this.state.showIndex;
		return (
			<section className="section ">
				<div className="container  has-text-centered">
					{(this.state.showOne === true?
						<Circle 
				    		options = {this.state.options[showIndex]}
				    		circleClicked = {()=>{this.circleClicked()}}
				    		startIndex = {this.state.showOne}
				    	/>:
				    		(this.state.options.map((item, index) => (
				    			<Circle 
						    		key={index}
						    		options = {item}
						    		circleClicked = {()=>{this.circleClicked(item,index)}}
						    		
						    	/>))
							)
						)}
					
				</div>
			</section>
		    
		); 
	}  		
	

  	render() {
  		const content = this.content();
  		const header = this.props.header;
	    return (
	    	<section className="section fullScreen non-circle-text">
	    	<div className="container">

	    		<header 
		    		className="has-text-centered " 
		    		onClick={this.headerClicked.bind(this)}>{header}
		    	</header>
		    	
		    	{content}
		    </div>
	    	</section>
	    )
	}
}

export default ClickableOptions;
