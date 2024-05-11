import React from "react";

import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import AppRoutes from "../../routes/routes";
//import routes from "../../routes/routes";

const MasterLayout = () => {
    return (
        <div >
            <Navbar />

            <div className="SideMenuAndPageContent">
                <Sidebar />
            </div>
            <main>
                <div className="PageContent">
                    <AppRoutes />
                </div>

            </main>
            <Footer />
        </div>


    );
}

export default MasterLayout;

