import React from "react";

function ContactMe() {
  return (
    <div>
      <p>
        <a
          href="https://github.com/PhilipVigus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./github-logo.png" alt="My Github account" width="50px" />
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/philvigus/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./linkedin-logo.png"
            alt="My LinkedIn profile"
            width="50px"
          />
        </a>
      </p>
      <p>
        <a
          href="https://medium.com/@philvigus"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./medium-logo.png" alt="My Medium blog" width="50px" />
        </a>
      </p>
      <p>
        <a href="./Phil Vigus CV.pdf" target="_blank" rel="noopener noreferrer">
          <img src="./CV-icon.png" alt="My CV" width="50px" />
        </a>
      </p>
      <p>
        <a
          href="mailto:philipvigus@yahoo.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./email-icon.png" alt="Email me" width="50px" />
        </a>
      </p>
    </div>
  );
}

export default ContactMe;
