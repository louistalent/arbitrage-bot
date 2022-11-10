
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowRightLine, RiCloseCircleLine } from "react-icons/ri";
import { useWeb3React } from '@web3-react/core';
import { NotificationManager } from 'react-notifications';
import { useNavigate, Link } from 'react-router-dom';
import Layout from "../../component/layout/layout";
import { FaArrowDown } from "react-icons/fa";
import CustomLoader from "../../component/Spinner";
import defaultImage from "../../assets/images/unknown_user.webp";
import ExpandedComponent from "../../component/UserDetail";
import './admin.scss';

import DataTable, {
    TableColumn,
    createTheme,
} from "react-data-table-component";

createTheme(
    "solarized",
    {
        text: {
            primary: "var(--light)",
        },
        background: {
            default: "var(--secondary)",
        },
        button: {
            default: "var(--light)",
            hover: "rgba(0,0,0,.08)",
            focus: "rgba(255,255,255,.12)",
            disabled: "rgba(255, 255, 255, .34)",
        },
    },
    "dark"
);

const customStyles = {
    rows: {
        style: {
            padding: "5px",
            fontSize: "16px",
            fontWeight: 700,
        },
    },
    headCells: {
        style: {
            padding: "10px",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            minHeight: "40px",
        },
    },
    pagination: {
        style: {
            fontSize: "14px",
            fontWeight: 600,
        },
    },
};

const WithdrawUsdcTable = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([
        {
            id: '1',
            asset: 'USDT',
            type: 'Type',
            date: '11/25/2002',
            amount: '8546',
        },
        {
            id: '2',
            asset: 'USDC',
            type: 'Type',
            date: '11/25/2022',
            amount: '8546',
        }
    ]);

    const columns = [
        {
            name: "Id",
            selector: (row) => row.id,
            sortable: true,
            style: {
                width: "50px",
            },
        },
        {
            name: "Asset",
            selector: (row) => row.asset,
            sortable: true,
            style: {
                width: "0px",
            },
        },
        {
            name: "Type",
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: "Date",
            selector: (row) => row.date,
            sortable: true,
        },
        {
            name: "Amount",
            selector: (row) => row.amount,
            sortable: true,
        },
        {
            name: "State",
            selector: (row) => (
                <select className='select-action' name="" id="">
                    <option value="1">Pending</option>
                    <option value="2">Accept</option>
                    <option value="3">Reject</option>
                    <option value="4">Finished</option>
                </select>
            ),
        },
    ];

    // useEffect(() => {
    //     setLoading(true);

    //     let bump = [];
    //     Object.keys(state.usersInfo).map((item) => {
    //         bump.push(state.usersInfo[item]);
    //     });
    //     setData(bump);

    //     setLoading(false);
    // }, [state.usersInfo]);



    const [walletModal, setWalletModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const { activate, connector, chainId, account, library, ...props } = useWeb3React();

    return (
        <Layout>
            <h1 className='white'>Withdraw USDT</h1>
            <br />
            <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
                fixedHeader
                sortIcon={<FaArrowDown />}
                // expandableRows
                // expandableRowsComponent={ExpandedComponent}
                progressPending={loading}
                theme="solarized"
                pagination
                progressComponent={<CustomLoader />}
            />
        </Layout>
    );
};

export default WithdrawUsdcTable;
