import React from 'react';
import { BoardCell } from "./BoardCell";

export class QuestionField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="board" 
                 style={{display: this.props.DisplayStatus}}>
                {this.props
                     .Content
                     .map(id => <BoardCell key={id} 
                                           onClickHandler = {this.props.onClickHandler}
                                           className="star"
                                           Content="&#9733;"/>)}
            </div>
        );
    }
}
