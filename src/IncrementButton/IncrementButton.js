import React, { /*useEffect,*/ useState } from "react";

export function IncrementButton() {
    const [counter, setCounter] = useState(5);
    const onClickHandler = (incremtntAmount) => {
      console.log(counter);
      setCounter(counter + incremtntAmount);
    }
    return (
      <div>
        <Button Handler={onClickHandler} 
                Message={counter}
                Increment={1}/>
        <Button Handler={onClickHandler} 
                Message={counter}
                Increment={3}/>
        <Button Handler={onClickHandler} 
                Message={counter}
                Increment={10}/>
        <Title Message={counter} />
      </div>
    );
  }

  function Button(props) {
    const handleClick = () => props.Handler(props.Increment);
    return (
      <button onClick={handleClick}>
        + {props.Increment} --- {props.Message}
      </button>);
  }
  
  function Title(props) {
      return (
        <div>{props.Message}</div>
      );
  }
