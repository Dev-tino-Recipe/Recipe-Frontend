import { Link } from "react-router-dom";
import React from "react";

const ContentComp = ({ content }) => {
  return (
    <Link to={"/contents"} className="content-item">
      {content}
    </Link>
  );
};

export default ContentComp;
