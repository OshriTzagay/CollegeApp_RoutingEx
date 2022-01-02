import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div id="theLinks">
      <Link to="/">Home</Link>
      <Link to="/stud">Student</Link>
      <Link to="/parent">Parent</Link>
      <Link to="/teacher">Teacher</Link>
    </div>
  );
}
