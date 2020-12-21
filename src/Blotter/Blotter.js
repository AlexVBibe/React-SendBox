import React from 'react';


export class Blotter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state: ''};
    }

    render() {
        return (
            <div>
                <p>
                    Blotter
                </p>
            </div>
        );
    }
}