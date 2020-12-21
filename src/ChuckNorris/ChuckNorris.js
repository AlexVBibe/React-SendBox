import './ChuckNorris.css';
import React from "react";


export class ChuckNorris extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comments: "" };
    }

    componentDidMount() {
        this.getNextJoke();
    }

    render() {
        return (
            <div>
                <button className="nextButton"
                        onClick={() => this.nextButtonHandler()}>
                    Next
                </button>
                <img className="chuckNorrisImage" 
                        src={this.state.url}
                        alt="" />
                <div className="comment">
                    {this.state.comments}
                </div>
            </div>
        );
    }

    getNextJoke() {
        let urlname = "https://api.chucknorris.io/jokes/random";

        const fetchData = () => {
            fetch(urlname).then(resp => {
              resp.json()
                  .then(data => {
                      console.log(data);
                      this.setState({
                          comments: data.value,
                          url: data.icon_url
                        });
                  })
            })
          }

        fetchData();
        return "ok";
    }

    nextButtonHandler(event) {
        this.getNextJoke();
    }
}