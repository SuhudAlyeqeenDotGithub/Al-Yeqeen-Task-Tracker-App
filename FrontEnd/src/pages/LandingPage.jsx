import React from "react";
import { Link } from "react-router-dom";
import AllPurposeLabel from "../components/AllPurposeLabel";

function LandingPage() {
  return (
    <div>
      Hi Welcome to Alyeqeen Task Tracker
      <br />
      <Link to="/login">Have an Account Already? Log in</Link>
      <br />
      <Link to="/signup">Have no Account? Register</Link>
    </div>
  );
}

export default LandingPage;
