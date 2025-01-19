import { Link } from "react-router";

import "./Home.css";

const Home = () => {
  return (
    <div className="background-home">
      <div className="container">
        <h1 className="home-header">is this home??</h1>
        <Link className="home-link" to="/w">
          Click me!!!
        </Link>
      </div>
    </div>
  );
};
export default Home;
