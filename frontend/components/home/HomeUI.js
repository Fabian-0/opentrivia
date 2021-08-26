import * as React from "react";
import { Link } from "react-router-dom";

export default function HomeUI() {
  return (
    <div className="section p-0">
      <div className="container is-fluid bg-secondary">
        <header className="p-4">
          <div className="container">
          <div className="level">
            <div className="level-item">
              <a href="https://opentdb.com/" className="is-size-4 has-text-white">OpenTriviaApi</a>
            </div>
            <div className="level-right">
              <div className="level-item button is-normal bg-fifth border-none">
                <Link to="/register"><span className="primary-color">Register</span></Link>
              </div>
              <div className="level-item button is-normal bg-fifth border-none">
                <Link to="/login"><span className="primary-color">Login</span></Link>
              </div>
            </div>
          </div>
          </div>
        </header>
      </div>
    </div>
  )
}