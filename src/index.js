import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FormBuilder from './App';

//change to insert cutom input feilds
let fields = [
  {
      "typefield": "text",
      "number": 24,
      "index": "1",
        "typeField": "text",
        "type": "text",
        "placeholder": "username"
  },
  {
    "typefield": "text",
    "number": 4,
    "index": "2",
      "typeField": "text",
      "type": "text",
      "placeholder": "password"
  },
  {
    "typefield": "button",
    "number": 49,
    "index": "3",
    "typeField": "button"
}
]

ReactDOM.render(
  <React.StrictMode>
    <h1 style={{marginLeft: "20%", paddingLeft: "19px"}}>Form Generator</h1>
    <FormBuilder fieldsToEdit={fields}>
      <input className='one' type="text"/>
      <input className='two' type="text"/>
      <input className='three' type="text"/>
    </FormBuilder>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a functio
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
