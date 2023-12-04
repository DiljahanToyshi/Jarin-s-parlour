import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Home/Home/Home/Navbar";
import Footer from "./Home/Home/Home/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        {" "}
        <Outlet></Outlet>
      </div>{" "}
      <Footer></Footer>
    </>
  );
}

export default App;
