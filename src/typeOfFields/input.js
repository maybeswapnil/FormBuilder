import React, { Component } from 'react';


class Input extends Component {


    //initial state
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="field-input">
                <label className="inputLabel">
                    <input type="text" placeholder={this.props.placeholder} onChange={e => this.props.changeValue({[this.props.index]: e.target.value})}/>
                </label>
            </div>
        );
    }
}



export default Input;