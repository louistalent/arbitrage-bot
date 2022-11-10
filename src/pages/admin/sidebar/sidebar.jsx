import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SidebarList } from "./sidebarlist";
import { useParams } from "react-router-dom";
import './sidebar.scss';

const AdminSidebar = (props) => {

    const { sidebarFlag } = props;
    const [pageName, setPageName] = useState('')

    useEffect(() => {

        let name = window.location.pathname;
        let _name = name.replaceAll('/', '');
        let __name = _name.replaceAll('admin', '');
        setPageName(__name)

    }, [window.location.pathname])

    return (
        <div className={sidebarFlag ? "sidebar" : "sidebar open"}>
            <nav className="navbar">
                <Link to="/">
                    <h3 className="text-primary text-center">Admin</h3>
                </Link>
                <div className="" style={{ padding: '4px' }}></div>

                <div className="flex column navbar-nav w100">
                    {SidebarList.map(
                        (item, index) => (
                            <Link to={item.to} key={index}>
                                <div
                                    className={
                                        item.title === pageName
                                            ? "dis-f jc-s ai-c nav-link active"
                                            : "dis-f jc-s ai-c nav-link"
                                    }
                                >
                                    <item.icon />
                                    <span>{item.title}</span>
                                </div>
                            </Link>
                        )
                    )}
                </div>
            </nav>
        </div>
    );
}

export default AdminSidebar;
