import { Outlet } from "react-router-dom";
import Navabar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
      <Navabar />
      <Outlet />
      <ToastContainer/>
    </>
  );
};

export default MainLayout;
