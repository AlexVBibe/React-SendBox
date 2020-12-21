import './GithubCards.css';
import React, { /*useEffect,*/ useState } from "react";
import axios from "axios";

export function GithubCards(props) {
    const [itemSource, setItemSource] = useState(testData);
    const handleSubmit = async (name) => {
        let urlname = `https://api.github.com/users/${name}`;
        const resp = await axios.get(urlname);
        setItemSource([...itemSource, resp.data]);
        console.log(resp.data);
};

return (
        <div>
            <Title Title={props.Title} />
            <Form onSubmit={handleSubmit}/>
            <CardList ItemSource={itemSource} />
        </div>
    );
}

class CardList extends React.Component {
render() {
        let items = this.props.ItemSource;
        return (
        <div>
            {items.map(profile => <Card {...profile} />)}
        </div>
        );
    }
}

function Card(props) {
return (
        <div className="card-style">
            <img className="githubCarsImage" 
                 src={props.avatar_url}
                 alt="" />
            <div className="info">
                <div className="name">
                    {props.name}
                </div>
                <div className="company">
                    {props.company}
                </div>
            </div>
        </div>
    );
}

class Title extends React.Component {
render() {
        return (
            <div className="title-class">
                {this.props.Title}
            </div>
        );
    }
}


function Form(props) {
    const [userName, setUserName] = useState("");
    const onSubmitHandler = event => {
        event.preventDefault();
        props.onSubmit(userName);
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <input 
                className="baseInput"
                type="text" 
                placeholder="input some name" 
                value={userName}
                onChange={event => setUserName(event.target.value)}
            />
            <button>Add user</button>
        </form>
    );
}


const testData = [
    {
      avatar_url: "https://placeholder.it/75",
      name: "Alex V Bibe",
      company: "Labit international"
    },
    {
      avatar_url: "https://placeholder.it/75",
      name: "Elena V Bel",
      company: "Home office limited"
    }
];