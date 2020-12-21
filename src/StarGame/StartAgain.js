import React from 'react';


export class StartAgain extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = () => {
            this.props.onClickHandler();
        }
    }

    render() {
        return (
            <button className="resetButton" 
                    style={{display: this.props.DisplayStatus}}
                    onClick={this.clickHandler}>
                Restart
            </button>
        );
    }
}
