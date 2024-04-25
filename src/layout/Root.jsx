import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Root = () => {
  return (
    <div className="lg:mx-28 lg:mt-6 font-open-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
