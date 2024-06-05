import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <strong>Oooopsss. | Page not found</strong>
      <Link to="/"> Go back home</Link>
    </section>
  );
};

export default NotFound;
