import React from 'react';
import { colors } from './Colors.js';

export class BoardCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content:''
        };

        this.clickHandler = () => this.props.onClickHandler(this.props.Content, 
                                                            this.props.State);
    }

    render() {
        return (
            <div className={this.props.className}
                 style={{color: colors[this.props.State]}}
                 onClick={this.clickHandler}>
                {this.props.Content}
            </div>
        );
    }
}
