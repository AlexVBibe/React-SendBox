import './Application.css';
import {StarGame} from './StarGame/StarGame.js';
import {SeaBattle} from './SeaBattle/SeaBattle.js';
import {CrossGame} from './CrossGame/CrossGame.js';
import {Blotter} from './Blotter/Blotter.js';
import {IncrementButton} from './IncrementButton/IncrementButton.js';
import {GithubCards} from './GithubCards/GithubCards.js';
import {ChuckNorris} from './ChuckNorris/ChuckNorris.js';

import React, { /*useEffect,*/ useState } from "react";

function Application() {
  const [currentViewId, setCurrentViewId] = useState("Star match");
  const handleClick = (event) => {
    setCurrentViewId(event.target.innerText)
  }

  const LoadView = () => {
    if (currentViewId === "Increment button")
        return <IncrementButton />;
    if (currentViewId === "Star match")
        return <StarGame />;
    if (currentViewId === "Sea battle")
        return <SeaBattle />;
    if (currentViewId === "Cross game")
        return <CrossGame />;
    if (currentViewId === "Blotter")
        return <Blotter />;
    if (currentViewId === "Github cards")
        return <GithubCards />
  }

  return (
    <div className="Application">
      <div>
        <ul className="menu">
          <li>Vertical margins collapse</li>
          <li><a href="http://www.w3.org/Style/CSS/">Css Specifications</a></li>
          <li><a href="http://www.w3.org/Style/CSS/">Css Specifications</a></li>
          <li><a href="http://www.csszengardem.com/">Css zen garden</a></li>
          <li><a href="http://www.blueprintcss.org/">Blueprint</a></li>
          <li><a href="http://www.developer.yahoo.com/yui/">YUI</a></li>
          <li><a href="https://www.htmlsymbols.xyz/star-symbols/">HTML Symbols</a></li>

          <li><button onClick={handleClick}>Increment button</button></li>
          <li><button onClick={handleClick}>Github cards</button></li>
          <li><button onClick={handleClick}>Star match</button></li>
          <li><button onClick={handleClick}>Sea battle</button></li>
          <li><button onClick={handleClick}>Blotter</button></li>
          <li><button onClick={handleClick}>Cross game</button></li>
        </ul>
      </div>

      {LoadView()}

      <p>
        The chuck norris jokes.
      </p>
      
      <ChuckNorris />
    </div>
  );
}

export default Application;