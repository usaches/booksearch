import React from "react";
import "./style.css";

function Card({ icon, title, children }) {
  return (
    <div className="card fiffteen mt-4">
      <div className="card-header">
        <h3>
          <strong>
          {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
