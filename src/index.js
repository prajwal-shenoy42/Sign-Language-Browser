import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Demo from './demo';
import DenseAppBar from './DenseAppBar';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <div>
    <DenseAppBar />
    </div>
    <div style={{margin: "0 auto", marginTop: "80px"}} >
    <Demo />
    </div>
    
    </div>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);