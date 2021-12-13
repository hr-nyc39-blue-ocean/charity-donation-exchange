import React from "react";
import Button from "../shared/Button.jsx";

const Header = ({ headerTitle, buttons, colorClassName, logo }) => {
  return (
    <div className={`home-header ${colorClassName}`}>
      <div className="header-row">
        <img id="logo" src={logo} alt="Logo" />
        <div className="header-layout">
          <div className="header-title">{headerTitle}</div>
        </div>
        <div className="header-buttons-container">
          {buttons &&
            buttons.map((b) => {
              return (
                <Button
                  className="header-buttons-styles btn-bg-yellow"
                  text={b.text}
                  handleOnClick={b.handleOnClick}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
