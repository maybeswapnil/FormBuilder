import React, { Component, useState, useEffect} from 'react';
import './FormBuilder.css';
import FieldInGenerator from './FieldInGenerator.js'

function FormBuilder(props) {
    const [input, setInput] = useState({})
 
    useEffect(() => {
        props.children.map((r, i) => {
        var element = document.getElementsByClassName(r.props.className);
        element[0].className = "child_" + i;
        document.getElementsByClassName("child_" + i)[0].addEventListener("keydown", (e) => {changeValue({["child_" + i]: e.target.value})});
        })
    }, [])
    
    //change input value
    function changeValue(value) {
        if(value.fieldName==='button') {
            //API calls
            console.log('submitted')
            return;
        }
        let key = Object.keys(value)
        input[key[0]] = value[key[0]]
        console.log(input)
    }

    return (
        <div id="formBuilder">
            <form id="formBuilder-form" className="" onSubmit={(e) => {
                e.preventDefault();
                changeValue({"fieldName": "button"})
            }}>
                {props.fieldsToEdit.map(item => (
                    <div key={item.index}>
                        <FieldInGenerator item={item} changeValue={changeValue} />
                    </div>
                )
                )}
               {props.children.map(r => {return (
                    <div className="fieldsTop">
                        <div className="field-input">
                            <label className="mainLabel inputLabel">
                                {r}
                            </label>
                        </div>
                    </div>)
               })}
            </form>
        </div>
    );
}

export default FormBuilder;