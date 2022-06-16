import React, { Component } from 'react';


class Button extends Component {



    //initial state
    constructor(props){
        super(props);
    }



    render() {
        return (
            <div className="field-input">
                <label className="mainLabel">
                    <button>Press</button>
                </label>
            </div>
        );
    }
}



export default Button;