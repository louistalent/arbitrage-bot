import { useEffect, useState } from "react";
/* import React from 'react'; */
import { Link } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';
import AdminHeader from '../../pages/admin/header/header'
import AdminSidebar from '../../pages/admin/sidebar/sidebar'
import Login from '../../pages/admin/login';

import "./layout.scss";

import { useParams } from "react-router-dom";

const Layout = (props) => {
    const { id } = useParams();
    const [sidebarFlag, setSidebarFlag] = useState(false);
    const [login, setLogin] = useState(false);
    useEffect(() => {
        console.log('id : ')
        console.log(id)
    }, [])

    useEffect(() => {
        const SetResponsiveness = () => {
            return window.innerWidth < 990
                ? setSidebarFlag(true)
                : setSidebarFlag(false);
        };

        SetResponsiveness();
        window.addEventListener("resize", () => SetResponsiveness());
    }, []);

    const ToggleSidebar = async () => {
        setSidebarFlag(!sidebarFlag);
    };

    return (<>
        {
            id === 'admin' ?
                <>
                    {
                        login ?
                            <div className={id === 'admin' && !sidebarFlag ? "content" : "content open"}>
                                <AdminHeader ToggleSidebar={ToggleSidebar} />
                                <main className={'admin-container'} >
                                    <div className={'container'}>

                                        <AdminSidebar sidebarFlag={sidebarFlag} />
                                        {props.children}
                                    </div>
                                </main>
                            </div>
                            :
                            <Login setLogin={setLogin} />

                    }
                </> : <>

                    <div className={id === 'admin' && !sidebarFlag ? "content" : "content open"}>
                        <Header />
                        <main className={''} >
                            <div className={''}>
                                {props.children}
                            </div>
                        </main>
                        <Footer />
                    </div>
                </>
        }
    </>);
}

export default Layout;