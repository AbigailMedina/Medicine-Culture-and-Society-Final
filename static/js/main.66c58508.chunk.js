(this.webpackJsonppresentation=this.webpackJsonppresentation||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),s=a.n(r),o=(a(19),a(12),a(20),a(2)),c=a(3),l=a(4),u=a(5),h=a(9),d=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).options=n.props.options,n.state={current:0,disableLeft:!0,disableRight:1===n.props.options.length},n}return Object(c.a)(a,[{key:"goLeft",value:function(e){console.log("before",this.state.current);var t=this.state.current;t<=1?this.setState({disableLeft:!0}):this.setState({disableLeft:!1,disableRight:!1,current:t-1})}},{key:"goRight",value:function(e){console.log("before",this.state.current);var t=this.state.current;t>=this.options.length-1?this.setState({disableRight:!0}):this.setState({disableRight:!1,disableLeft:!1,current:t+1})}},{key:"content",value:function(e){var t=this,a=this.props.subHeader;return i.a.createElement("div",{className:"columns level "},i.a.createElement("div",{className:"column level-left level-item is-size-2"},i.a.createElement(h.a,{icon:"arrow-left",className:"icon-4x my-icon "+(this.state.disableLeft?"fa-disabled":""),onClick:function(e){t.goLeft(e)}})),i.a.createElement("div",{className:"column is-three-quarters level-item is-size-2"},this.props.subHeader?i.a.createElement("span",null,i.a.createElement("header",{className:"is-size-2"},a[this.state.current])):i.a.createElement("span",null),this.props.options[this.state.current]),i.a.createElement("div",{className:"column level-item level-right is-size-2"},i.a.createElement(h.a,{icon:"arrow-right",className:"icon-4x my-icon "+(this.state.disableRight?"fa-disabled":""),onClick:function(e){t.goRight(e)}})))}},{key:"render",value:function(){var e=this,t=this.content(),a=this.props.header;return i.a.createElement("section",{className:"section fullScreen slideShow"},i.a.createElement("div",{className:"container "},i.a.createElement("header",{className:"is-size-1",onClick:function(){return e.setState({current:0})}},a),t))}}]),a}(n.Component),m=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).aiHistory=["In 1956, John McCarthy and Marvin Minsky hosted the Dartmouth Summer Research Project on Artificial Intelligence\u2014where the term AI was coined. ","41 years later, IBM\u2019s chess AI beat a chess grandmaster, officially the first time machine was proven to think more intelligently than the best human chess player in the world. ","So what is AI? Simply put, artificial intelligence is machines having enough intelligence to perform tasks comparable to tasks thought that only humans could accomplish\u2013 even tasks considered hard for the average human."],n.header="What is Artificial Intelligence?",n}return Object(c.a)(a,[{key:"goLeft",value:function(e){}},{key:"goRight",value:function(e){}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,{options:this.aiHistory,header:this.header}))}}]),a}(n.Component),f=a(6),p=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={options:n.props.options,index:0},n.clicked=n.clicked.bind(Object(f.a)(n)),n}return Object(c.a)(a,[{key:"clicked",value:function(){var e=this.state.index;e<this.state.options.length-1?this.setState({index:e+1}):this.setState({index:0}),this.props.circleClicked()}},{key:"render",value:function(){var e=this,t=this.state.index,a=this.state.options;return i.a.createElement("div",{className:"circle-container"},i.a.createElement("div",{className:0===t?"circle":"is-size-2",onClick:function(){e.clicked()}},a[t]))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={options:n.props.options,showOne:!1,showIndex:0},n.circleClicked.bind(Object(f.a)(n)),n}return Object(c.a)(a,[{key:"headerClicked",value:function(){this.setState({options:this.props.options,showOne:!1})}},{key:"circleClicked",value:function(e,t){!1===this.state.showOne&&this.setState({showIndex:t,showOne:!0})}},{key:"content",value:function(e){var t=this,a=this.state.showIndex;return i.a.createElement("section",{className:"section "},i.a.createElement("div",{className:"container  has-text-centered"},!0===this.state.showOne?i.a.createElement(p,{options:this.state.options[a],circleClicked:function(){t.circleClicked()}}):this.state.options.map((function(e,a){return i.a.createElement(p,{key:a,options:e,circleClicked:function(){t.circleClicked(e,a)}})}))))}},{key:"render",value:function(){var e=this.content(),t=this.props.header;return i.a.createElement("section",{className:"section fullScreen"},i.a.createElement("div",{className:"container"},i.a.createElement("header",{className:"has-text-centered  is-size-1",onClick:this.headerClicked.bind(this)},t),e))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).aiToolkit=[["Tactile","A program can take in tactile input to learn its way through a maze with no vision or learn to walk based off a goal of minimize falling"],["Visual","A program can take in visual input to differentiate items such as faces, used in facial recognition or recognize lane boundries for self-driving cars"],["Auditory","A program can take in auditory input used to id a voice as an individual it has heard before or simply take commands like Siri or Alexa"],["Structured vs Unstructured Data","Structured data is organized in a way machines can take as input, manipulate and output. One example being data in a csv file from IMDB about movies where movies are related to genres; An AI can analyze patterns in titles and 'learn' to guess what genre a title might belong to.","Unstructured data comes in requiring manipulation to become useful in making decisions on. A letter for example- if you hand an AI a letter and tell it to tell you if the author is mad at you, the AI will have to structure the letter into words with associated connotations in order to make this calculation."],["Quiz yourself...","Is data understood through Tactile, Visual, or Auditory observations structured or unstructured data?","Unstructured"]],n.header="How is it done? Step one: taking in data",n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,{options:this.aiToolkit,header:this.header}))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).aiToolkit2=[["Natural Language Processing","Natural Language processing is the use of unstructured language-based data in the form of text or audio that AI can process into structured data it can useto make decisions."],["Machine Learning","Machine Learning (ML) is a technique focused on analyzing structured data such as a csv of data representing relationships between traits"],["Learning Types","Reinforcement learning: the machine learned through trial and error and feedback it gained from those trials.","Supervised learning gives the machine labels for known solutions to a problem to guide the machine when it is learning.","Unsupervised is the opposite where the robot is given no information to go off of and is expected to form patterns to learn from data it creates on its own."],["Deep Learning","Deep Learning is a tool that AI use to explore complex non-linear patterns in data as opposed to ML that can handle only limited amounts of dimentions (traits) and their relationships."]],n.header="How is it done? Step two: understanding data",n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,{options:this.aiToolkit2,header:this.header}))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).aiApplications=["AI is used in treatments for stroke by analyzing a patients normal movements versus movements right before and during a stroke through the use of wearable technology to alert the patient of a oncoming stroke","CNN has successfully been used in the medical field for disease diagnosis. Congenital cataract disease through learning ocular images. CNN has over 90% accuracy on diagnosis and treatment suggestions. CNN has also identified skin cancer from clinical images and had over 90% accuracy for indicating both malignant and benign lesions.","Intelligent artificial medical assistants assist doctors on the surgery table and have the ability to decrease invasiveness while improving accuracy, leading the patient to faster healing times and lower rates of infection."],n.header="What Applications are there in healthcare?",n}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d,{subHeader:["Treatment","Diagnosis","Smart robotic surgery"],options:this.aiApplications,header:this.header}))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={color:"coral-reef"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:this.state.color},i.a.createElement("div",{onMouseEnter:function(){return e.setState({color:"coral-reef"})}},i.a.createElement(m,null)),i.a.createElement("div",{onMouseEnter:function(){return e.setState({color:"black"})}},i.a.createElement(v,null)),i.a.createElement("div",{onMouseEnter:function(){return e.setState({color:"coral-reef"})}},i.a.createElement(b,null)),i.a.createElement("div",{onMouseEnter:function(){return e.setState({color:"black"})}},i.a.createElement(k,null)))}}]),a}(n.Component),E=a(7),w=a(10);E.b.add(w.b,w.a);var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.66c58508.chunk.js.map