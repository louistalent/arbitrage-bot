
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowRightLine, RiCloseCircleLine } from "react-icons/ri";
import { useWeb3React } from '@web3-react/core';
import { NotificationManager } from 'react-notifications';
import { useNavigate, Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";
import CustomLoader from "../../component/Spinner";
import defaultImage from "../../assets/images/unknown_user.webp";
import ExpandedComponent from "../../component/UserDetail";
import './admin.scss';

const Login = ({ setLogin }) => {

    const [loading, setLoading] = useState(false);

    const [walletModal, setWalletModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const { activate, connector, chainId, account, library, ...props } = useWeb3React();

    return (
        <div className="login-container">
            <div className="login-body">
                <h3 className=''>
                    Sign In
                </h3>
                <div className="justify fd-c mt-8">
                    <input type="text" className="" placeholder='User Name' defaultValue={''} />
                    <input type="password" className="" placeholder='Password' defaultValue={''} />
                </div>
                <div className="mt-8 dis-f jc-e">
                    <button onClick={() => setLogin(true)} className="btn signin-btn">Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
