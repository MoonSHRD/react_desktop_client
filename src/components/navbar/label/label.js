import React, { Component } from 'react';
import './label.css';



class Label extends Component {




    render() {
        return (
            <div className="label">
                <span>{this.props.notice}</span>

            </div>

        );
    }
}

export default Label;
