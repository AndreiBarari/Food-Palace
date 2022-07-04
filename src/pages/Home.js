import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="title">
          <h1>Food Palace</h1>
          <h3>Food fit for any taste!</h3>
        </div>
        <Link to="/menu">
          <button>Order now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
