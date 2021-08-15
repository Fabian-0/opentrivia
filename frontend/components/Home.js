import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return(
    <>
      <h2 className="title">Home</h2>
      <Link to="/register/">Register</Link>
    </>
  )
}