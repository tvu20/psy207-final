import "./style.css";

import github from "../images/github.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        Giao Vu Dinh
        <br />
        Final Project for <b>PSY 207: Psychopathology,</b> Fall 2022
      </p>
      <a href="https://github.com/tvu20" target="_blank" rel="noreferrer">
        <img src={github} alt="github" style={{ width: "30px" }} />
      </a>
    </div>
  );
};
