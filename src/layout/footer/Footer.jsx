import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-copyright">
          © {new Date().getFullYear()} React Movies
        </div>
      </div>
    </footer>
  );
};
