import React from "react";

export const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Movies
        </a>
        <ul className="nav-items">
          <li>
            <a href="#" className="nav-items__item">
              Saas
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
