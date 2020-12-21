import React from 'react';
import { BoardCell } from "./BoardCell";

export class AnswersField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="board">
                {this.props
                     .Content
                     .map(id => <BoardCell key={id} 
                                           onClickHandler = {this.props.onClickHandler}
                                           State = {this.props.getCellState(id)}
                                           className="answer"
                                           Content={id} />)}
            </div>
        );
    }
}
