import React from 'react';
import './App.scss';
import Base from './components/Base.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faGithub} from '@fortawesome/free-brands-svg-icons'

import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './fonts/Neoteric-32A8.ttf'
import './fonts/NeotericBold-xq1q.ttf'
import 'bulma/css/bulma.css'
 
library.add( faArrowRight, faArrowLeft, faGithub)

function App() {
  return (
    <div className="App">

      <Base/>
      
    </div>
  );
}

export default App;
