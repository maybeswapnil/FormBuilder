import React, { Component } from 'react';
import './FormBuilder.css';
import Input from './typeOfFields/input'
import Button from './typeOfFields/Button';

class FieldInGenerator extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="fieldsTop">
                {
                    this.props.item.typefield === 'text'?
                    <Input index={this.props.item.index} placeholder={this.props.item.placeholder} changeValue={this.props.changeValue}/>:
                    <Button index={this.props.item.index} changeValue={this.props.changeValue}/>
                }
            </div>
        );
    }
}

export default FieldInGenerator;
