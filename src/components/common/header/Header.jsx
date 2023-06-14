import Head from "./Head";
import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setnavbar] = useState(false);
  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setnavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Culture</Link>
              </li>
              <li>
                <Link to="/">Politics</Link>
              </li>
              <li>
                <Link to="/">Memes</Link>
              </li>
              <li>
                <Link to="/">Sports</Link>
              </li>
              <li>
                <Link to="/">Boxed</Link>
              </li>
              <li>
                <Link to="/">Reviews</Link>
              </li>
            </ul>
            <button className="barIco" onClick={() => setnavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
