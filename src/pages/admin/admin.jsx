import { useState, useEffect } from "react";
import Layout from "../../component/layout/layout";
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { useNavigate, Link } from 'react-router-dom';
import "./admin.scss";
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Dashboard = () => {


    return (
        <Layout>
            <section className="dashboard-section">
                <div className="dashboard-container">
                    <h1 className="white-color tc">Welcome to Administrator</h1>
                </div>
            </section>
        </Layout>
    );
};
export default Dashboard;
