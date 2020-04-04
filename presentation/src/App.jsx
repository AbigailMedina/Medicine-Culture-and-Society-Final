import React from 'react';
import './App.css';
import Base from './components/Base.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import 'bulma/css/bulma.css'
 
library.add( faArrowRight, faArrowLeft)

function App() {
  return (
    <div className="App">

      <Base/>
    </div>
  );
}

export default App;
