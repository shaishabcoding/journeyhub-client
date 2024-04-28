import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import Loading from "../components/Loading";
import { Fade } from "react-awesome-reveal";

const Root = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading";

  return (
    <div className="bg-white dark:bg-black font-open-sans">
      <div className="lg:px-28 lg:pt-6 ">
        <Navbar></Navbar>
        {loading && <Loading></Loading>}
        <Outlet></Outlet>
      </div>
      <Fade>
        <Footer></Footer>
      </Fade>
    </div>
  );
};

export default Root;
