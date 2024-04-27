import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Loading from "../components/Loading";

const Root = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  return (
    <div>
      <div className="lg:mx-28 lg:mt-6 font-open-sans">
        <Navbar></Navbar>
        {loading && <Loading></Loading>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
