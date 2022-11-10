
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { RiStackLine, RiCloseCircleLine } from "react-icons/ri";
import { useWeb3React } from '@web3-react/core';
import { NotificationManager } from 'react-notifications';
import { useNavigate, Link } from 'react-router-dom';

import "./header.scss";
const AdminHeader = ({ ToggleSidebar }) => {

    const [logout, setLogout] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const { activate, connector, chainId, account, library, ...props } = useWeb3React();

    return (
        <div className='admin-header'>
            <div className='justify-s'>
                <div className="">
                    <span style={{ fontSize: '40px' }} onClick={ToggleSidebar}>
                        <RiStackLine className='toggle-icon' />
                    </span>

                </div>
                <div onClick={() => setLogout(!logout)} className="admin-avatar">
                    <img src="/assets/admin.jpg" alt="" className="" />
                    <div className={`drop ${logout ? 'drop-open' : ''}`}>
                        <span className=''>Log Out</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
