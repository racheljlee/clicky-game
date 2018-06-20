import React from "react";
import "./Header.css";

const Header = props => (
    <header>
      <div className="row header-bar">
        <div className="col-4 header-items">
          <span><a onClick={props.resetGame} className="reload-link">
            Clicky Game
        </a></span>
        </div>
        <div className="col-4 header-items">
          <span>Are you a visual racist?</span>
        </div>
        <div className="col-4 header-items">
          <span className="scores">Score: {props.currentScore} | Top Score: {props.topScore}
          </span>
        </div>
      </div>
    </header>
);

export default Header;
