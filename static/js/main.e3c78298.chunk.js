(this.webpackJsonppresentation=this.webpackJsonppresentation||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),s=a.n(r),o=(a(19),a(12),a(20),a(2)),c=a(3),l=a(4),h=a(5),u=a(9),m=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).options=n.props.options,n.state={current:0,disableLeft:!0,disableRight:1===n.props.options.length},n}return Object(c.a)(a,[{key:"goLeft",value:function(e){console.log("before",this.state.current);var t=this.state.current;t<=1?this.setState({disableLeft:!0}):this.setState({disableLeft:!1,disableRight:!1,current:t-1})}},{key:"goRight",value:function(e){console.log("before",this.state.current);var t=this.state.current;t>=this.options.length-1?this.setState({disableRight:!0}):this.setState({disableRight:!1,disableLeft:!1,current:t+1})}},{key:"content",value:function(e){var t=this;return i.a.createElement("div",{className:"columns level "},i.a.createElement("div",{className:"column level-left level-item is-size-2"},i.a.createElement(u.a,{icon:"arrow-left",className:"icon-4x my-icon "+(this.state.disableLeft?"fa-disabled":""),onClick:function(e){t.goLeft(e)}})),i.a.createElement("div",{className:"column is-three-quarters level-item is-size-2"},this.props.options[this.state.current]),i.a.createElement("div",{className:"column level-item level-right is-size-2"},i.a.createElement(u.a,{icon:"arrow-right",className:"icon-4x my-icon "+(this.state.disableRight?"fa-disabled":""),onClick:function(e){t.goRight(e)}})))}},{key:"render",value:function(){var e=this,t=this.content(),a=this.props.header;return i.a.createElement("section",{className:" section fullScreen"},i.a.createElement("div",{className:"container "},i.a.createElement("header",{className:"is-size-1",onClick:function(){return e.setState({current:0})}},a),t))}}]),a}(n.Component),d=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).aiHistory=["In 1956, John McCarthy and Marvin Minsky hosted the Dartmouth Summer Research Project on Artificial Intelligence\u2014where the term AI was coined. ","41 years later, IBM\u2019s chess AI beat a chess grandmaster, officially the first time machine was proven to think more intelligently than the best human chess player in the world. ","So what is AI? Simply put, artificial intelligence is machines having enough intelligence to perform tasks comparable to tasks thought that only humans could accomplish\u2013 even tasks considered hard for the average human."],n.header="What is Artificial Intelligence?",n}return Object(c.a)(a,[{key:"goLeft",value:function(e){}},{key:"goRight",value:function(e){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(m,{options:this.aiHistory,header:this.header}))}}]),a}(n.Component),p=a(7),f=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).options=n.props.options,n.state={options:n.props.options,circles:!0},n.displayOption=n.displayOption.bind(Object(p.a)(n)),n}return Object(c.a)(a,[{key:"displayOption",value:function(e){var t=this.state.options;1===t.length?this.setState({circles:!0,options:this.props.options}):(console.log(t,t[e],t[e][1]),this.setState({circles:!1,options:[t[e][1]]}))}},{key:"content",value:function(e){var t=this,a=this.state.options.map((function(e,a){return i.a.createElement("div",{key:a,className:t.state.circles?"circle":"",onClick:function(){return t.displayOption(a)}},Array.isArray(e)?e[0]:e)}));return i.a.createElement("section",{className:"section "},i.a.createElement("div",{className:"container  has-text-centered"},a))}},{key:"render",value:function(){var e=this,t=this.content(),a=this.props.header;return i.a.createElement("section",{className:"section fullScreen"},i.a.createElement("div",{className:"container"},i.a.createElement("header",{className:"has-text-centered  is-size-1",onClick:function(){return e.setState({circles:!0,options:e.props.options})}},a),t))}}]),a}(n.Component),v=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).aiToolkit=[["NLP","nlp stuff"],["Tactile","One example of AI using tactile input to gain intelligence is being tasked to walk. How does a human learn how to walk? First, a baby that is trying to walk has to be told that it should be learning to walk. This is equivalent to a computer scientist writing a program to tell a robot to walk. Next, both machine and baby have to fall and fail a lot. This is where the learning happens. A baby can't balance because it doesn't know that if it leans forward it will fall. The same holds for a robot. A robot has to make a decision to move as per the program\u2019s instructions and it will either fall or not. The program will maximize successful movements mathematically so that the machine can understand where it went wrong. Same thing happens with a child when it falls and cries or successfully takes a step and gets applause from its parents. "],["Visual","visual stiuff"]],n.header="How is it done?",n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,{options:this.aiToolkit,header:this.header}))}}]),a}(n.Component),b=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).aiApplications=[["pandemic prediction","extra 1"],["diagnosis","extra 1"],["creating cures","extra 1"],["more?","extra 1"]],n.header="What Applications are there in healthcare?",n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,{options:this.aiApplications,header:this.header}))}}]),a}(n.Component),g=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={color:"coral-reef"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.state.color},i.a.createElement("div",{onMouseEnter:function(){return e.setState({color:"coral-reef"})}},i.a.createElement(d,null)),i.a.createElement("div",{onMouseEnter:function(){return e.setState({color:"black"})}},i.a.createElement(v,null)),i.a.createElement("div",{onMouseEnter:function(){return e.setState({color:"tangerine"})}},i.a.createElement(b,null)))}}]),a}(n.Component),k=a(6),y=a(10);k.b.add(y.b,y.a);var E=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e3c78298.chunk.js.map