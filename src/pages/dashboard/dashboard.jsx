import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";
import Layout from "../../component/layout/layout";
import WalletModal from "../../component/WalletModal";
import "./dashboard.scss";

const Dashboard = () => {

    const [trasnsactionHistory, setTransactionHistory] = useState([
        {
            asset: "BUSD",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "BUSD",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "BUSD",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDC",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDC",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        }
    ]);
    const [history, setHistory] = useState([
        {
            date: '15th August, 2022',
            content: 'USDC token launched on stable fund for staking'
        },
        {
            date: '15th August, 2022',
            content: 'USDC token launched on stable fund for staking'
        },
        {
            date: '15th August, 2022',
            content: 'USDC token launched on stable fund for staking'
        }
    ])
    const [getStartUSDC, setGetStartUSDC] = useState(false);
    const [getStartUSDT, setGetStartUSDT] = useState(false);

    return (
        <Layout>
            <section className="dashboard-section">
                <div className="dashboard-container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 mb-9">
                            <h5 className="grey-color">
                                Hello, Nick Nechanicky!
                            </h5>
                            <div className="justify-js w0 mt-6 gap-2">
                                <h1>
                                    $0.00
                                </h1>
                                <h5 className="grey-color">
                                    Total Balance
                                </h5>
                            </div>
                            <div className="justify-js w0 mt-6 gap-2">
                                <button className="">Send</button>
                                <button className="">Deposit</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-9">
                            <div className="announcement-box">
                                <h4>Announcement!</h4>
                                <span>Please click here to view the refund amount you qualify for.</span>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 mb-9">
                            <div className="daily-box">
                                <h3>Earn 1.5% Interest Daily</h3>
                                <h3>on Chain</h3>
                            </div>
                        </div>


                    </div>

                    <br />
                    <br />
                    <br />

                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-9">
                            <div className="get-start">
                                <div className="get-start-body">
                                    <div className="w0 justify-js gap-2">
                                        <div className="crypto-logo">
                                            <img src="/assets/images/dashboard/USDC.svg" alt="USDC" />
                                        </div>
                                        <div>
                                            <h5>USDC</h5>
                                            <h6 className="grey-color">$0.0000</h6>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h5 className="site-lite-color">Start Earning 1.5% interest on your USDC daily</h5>
                                    </div>
                                    <div className="mt-6 justify-s">
                                        <h5 className="">Didn't start yet?</h5>
                                        <img className="emoticon" src="/assets/images/dashboard/emoticon.png" alt="" />
                                    </div>
                                    <div className="mt-12">
                                        <button className="w-full">
                                            <h5>Get Started</h5>
                                        </button>
                                    </div>
                                </div>
                                <div className="get-start-footer">
                                    <div className="justify-s">
                                        <h5 className="">
                                            Daily USDC Rewards
                                        </h5>
                                        <h5 className="">
                                            0.0000
                                        </h5>
                                    </div>
                                    <div className="justify-s mt-2">
                                        <h5 className="nobold">
                                            Hourly USDC Rewards
                                        </h5>
                                        <h5 className="nobold">
                                            0.0000
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-9">
                            <div className="get-start">
                                <div className="get-start-body">
                                    <div className="w0 justify-js gap-2">
                                        <div className="crypto-logo">
                                            <img src="/assets/images/dashboard/USDT.svg" className="usdt-img" alt="USDC" />
                                        </div>
                                        <div>
                                            <h5>USDT</h5>
                                            <h6 className="grey-color">$0.0000</h6>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <h5 className="site-lite-color">Start Earning 1.5% interest on your USDT daily</h5>
                                    </div>
                                    <div className="mt-6 justify-s">
                                        <h5 className="">Didn't start yet?</h5>
                                        <img className="emoticon" src="/assets/images/dashboard/emoticon.png" alt="" />
                                    </div>
                                    <div className="mt-12">
                                        <button className="w-full">
                                            <h5>Get Started</h5>
                                        </button>
                                    </div>
                                </div>
                                <div className="get-start-footer">
                                    <div className="justify-s">
                                        <h5 className="">
                                            Daily USDT Rewards
                                        </h5>
                                        <h5 className="">
                                            0.0000
                                        </h5>
                                    </div>
                                    <div className="justify-s mt-2">
                                        <h5 className="nobold">
                                            Hourly BUUSDTSD Rewards
                                        </h5>
                                        <h5 className="nobold">
                                            0.0000
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="assets-container">
                        <div className="justify-js gap-4 w0">
                            <h5 className="nobold">
                                PortFolio&nbsp;Graph
                            </h5>
                            <button className="grey-bg">
                                MATIC
                            </button>
                            <button className="grey-bg">
                                MATIC
                            </button>
                            <button className="">
                                USDC
                            </button>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-8 mt-4">
                                <div className="h10 justify">
                                    <h2 className="site-lite-color">Calculating Your Assets...</h2>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 mt-4">
                                <div className="justify-js w0 mt-4">
                                    <img className="mr-4" src="/assets/images/dashboard/USDC.svg" style={{ width: '35px', height: '35px' }} alt="USDC" />
                                    <h4 className="">Staking&nbsp;Info</h4>
                                </div>
                                <div className="justify-s mt-8">
                                    <div className="justify-s gap-2">
                                        <div className="staking-img-box">
                                            <img src="/assets/images/staking/invest.png" alt="" className="" />
                                        </div>
                                        <div className="">
                                            <h5 className="nobold">Total investment</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="site-lite-color">
                                            126071062.49 USDC
                                        </h5>
                                    </div>
                                </div>
                                <div className="justify-s mt-6">
                                    <div className="justify-s gap-2">
                                        <div className="staking-img-box">
                                            <img src="/assets/images/staking/investors.png" alt="" className="" />
                                        </div>
                                        <div className="">
                                            <h5 className="nobold">Total investors</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="site-lite-color">
                                            12747
                                        </h5>
                                    </div>
                                </div>
                                <div className="justify-s mt-6">
                                    <div className="justify-s gap-2">
                                        <div className="staking-img-box">
                                            <img src="/assets/images/staking/reward.png" alt="" className="" />
                                        </div>
                                        <div className="">
                                            <h5 className="nobold">Total rewards</h5>
                                        </div>
                                    </div>
                                    <div className="">
                                        <h5 className="site-lite-color">
                                            64164106.84 USDC
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="history-container mt-8">
                        <div className="justify-js gap-4 w0">
                            <h5 className="nobold">
                                Transaction&nbsp;history
                            </h5>
                        </div>
                        <br />
                        <div className="row ">
                            <div className="col-sm-12 col-md-9 mt-4">
                                <table className="">
                                    <thead className="">
                                        <th className="">Asset</th>
                                        <th className="">Type</th>
                                        <th className="">Date</th>
                                        <th className="">Amount</th>
                                        <th className="">Destination</th>
                                        <th className="">TxID</th>
                                    </thead>
                                    <tbody className="">
                                        {
                                            trasnsactionHistory.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="">{item.asset}</td>
                                                    <td className="">{item.type}</td>
                                                    <td className="">{item.date}</td>
                                                    <td className="">{item.amount}</td>
                                                    <td className="">{item.desination}</td>
                                                    <td className="">{item.txid}</td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>

                            <div className="col-sm-12 col-md-3 mt-4">
                                <div className="history">
                                    {
                                        history.map((item, index) => (
                                            <div key={index} className="history-row">
                                                <div className="history-row-container">
                                                    {
                                                        history && history.length - 1 !== index && <>
                                                            <div className="history-tail"></div>
                                                        </>
                                                    }

                                                    <div className="history-icon">
                                                        <span className="">
                                                            <img src="/assets/images/dashboard/circle.svg" alt="" className="" />
                                                        </span>
                                                    </div>
                                                    <div className="history-content">
                                                        <div className="history-title">
                                                            {item.date}
                                                        </div>
                                                        <div className="history-description">
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </Layout>
    );
};
export default Dashboard;
