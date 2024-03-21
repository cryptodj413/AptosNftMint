import { FC } from "react"
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer, Bounce } from "react-toastify";

const Layout : FC = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default Layout;