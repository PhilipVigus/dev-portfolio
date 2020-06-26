import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function LoadingScreen2() {
  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      history.push("/about");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Link to="/about">
      <div>Loading screen 2</div>
    </Link>
  );
}

export default LoadingScreen2;
