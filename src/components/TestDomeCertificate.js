import React, { useEffect } from "react";
import AOS from "aos";

const TestDomeCertificate = (props) => {
  useEffect(() => {
    const stylesheet =
      "https://www.testdome.com/content/source/stylesheets/embed.css";
    const link = document.createElement("link");
    link.href = stylesheet;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
    AOS.init();
  }, []);

  return (
    <a
      href={props.url}
      target="_blank"
      className="testdome-certificate-stamp gold"
      data-aos="fade-up"
      rel="noreferrer"
    >
      <span className="testdome-certificate-name">Edmond Vitel</span>
      <span className="testdome-certificate-test-name">{props.skill}</span>
      <span className="testdome-certificate-card-logo">
        TestDome
        <br />
        Certificate
      </span>
    </a>
  );
};

export default TestDomeCertificate;
