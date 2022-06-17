import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Calculator from './components/Calc';
// import Demo from './components/Demo'
import Darkmode from './components/Darkmode'

// let css = {
//   "text-align": "center" ,
//   "color": "red"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Darkmode/> */}
    <App />
    {/* <Calculator/> */}
    {/* <Demo name="dhruv" last="ghelani">
    <p className="bcd">A professional developer</p>
    </Demo>
    <Demo name="sid" last="vaghani">
    <p className="bcd">chutiyoo</p>
    </Demo>
    <Demo name="panyo" last="chalodiya">
    <p className="bcd">vaghrii</p>
    </Demo>
    <Demo name="vruti" last="savani">
      <p className="bcd">labad</p>
    </Demo> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
