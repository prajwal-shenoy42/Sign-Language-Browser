import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Demo from './demo';
import DenseAppBar from './DenseAppBar';
import App from './App';

function Index() {

return (
  <div>
    <div>
    <DenseAppBar />
    </div>
    <div>
    <App />
    </div>
    </div>
);
}
export default Index;