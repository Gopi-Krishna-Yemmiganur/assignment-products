import React from "react";
import "./styles.css";

function Hedder() {
  const innerWidth = window.innerWidth;

  const RenderResponsive = () => {
    if (innerWidth > 600) {
      return (
        <div className="Hedder">
          <p className="hedding">Contacts</p>

          <div className="flexbox">
            <p className="left">hi</p>
            <p className="left">hi</p>
          </div>
        </div>
      );
    }
    else {
        return (
            <div className="Hedder">
                  <p className="hedding">Contacts</p>
            </div>
        )
    }
  };

  return RenderResponsive();
}

export default Hedder;
