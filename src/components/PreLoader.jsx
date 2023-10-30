import React from "react";
import PropTypes from "prop-types";

function PreLoader({ load }) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

PreLoader.propTypes = {
  load: PropTypes.bool,
};

export default PreLoader;
