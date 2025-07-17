import React from "react";
import Navbar from "../components/Navbar";
import Premium from "../components/Premium";
import Footer from "../components/Footer";
//import list from "../../public/list.json"
function Premiums() {
  //console.log(list);
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Premium />
      </div>
      <Footer />
    </>
  );
}

export default Premiums;