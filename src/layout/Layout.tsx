import { ErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";

import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Fallback from "../components/fallback/FallBack";
import ErrorHandler from "../components/fallback/ErrorHandler";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

const Layout = () => {
    const loacation = useLocation();
    const errorLocation = useRef(loacation.pathname);
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <ErrorBoundary FallbackComponent={Fallback}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '88vh' }}>
                        <Outlet />
                    </div>
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default Layout;