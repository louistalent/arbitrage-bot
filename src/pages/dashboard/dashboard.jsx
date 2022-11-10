import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";
import Layout from "../../component/layout/layout";
import WalletModal from "../../component/WalletModal";
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
import { useNavigate } from 'react-router-dom';
import "./dashboard.scss";
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Dashboard = () => {
    const navigate = useNavigate();

    const [trasnsactionHistory, setTransactionHistory] = useState([
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
            type: "type",
            date: "10/25/2022",
            amount: "9814",
            desination: "desination",
            txid: "28721"
        },
        {
            asset: "USDT",
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

    const { activate, connector, account, library, ...props } = useWeb3React();

    useEffect(() => {
        if (!account) {
            navigate('/')
        }
    }, [])
    const [getStartUSDC, setGetStartUSDC] = useState(true);
    const [getStartUSDT, setGetStartUSDT] = useState(true);

    return (
        <Layout>
            <section className="dashboard-section">
                <div className="dashboard-container">
                    <div className="info-container">
                        <div className="">
                            <h5 className="grey-color">
                                Hello!
                            </h5>
                            <div className="justify-js w0 mo-w10 mt-6 gap-2 mo-tc">
                                <h1>
                                    $0.00
                                </h1>
                                <h5 className="grey-color">
                                    Total Balance
                                </h5>
                            </div>
                        </div>


                        <div className="daily-box mt-2">
                            <h4>Earn 1% Interest Daily</h4>
                            <br />
                            <div className="justify-js">
                                <div className="justify gap-2 tc w10">
                                    <div className="justify gap-2">
                                        <h5 className="w10 tc">with Token</h5>
                                        <img style={{ height: '100%', width: '30px' }} src="/assets/images/dashboard/USDT.svg" alt="" />
                                        <img style={{ height: '100%', width: '28px' }} src="/assets/images/dashboard/USDC.svg" alt="" />
                                    </div>
                                </div>
                                <div className="">
                                    <img src="/assets/images/dashboard/wallet.svg" alt="" />
                                </div>
                            </div>
                        </div>


                    </div>

                    <br className="mo-dis-none" />
                    <br className="mo-dis-none" />
                    <br />

                    <div className="row">
                        <div className="col-sm-12 col-md-6 mb-9">
                            <div className="get-start">
                                <div className="get-start-body">
                                    <div className="w10 justify-s">

                                        <div className="w0 justify-js gap-2">
                                            <div className="crypto-logo">
                                                <img src="/assets/images/dashboard/USDC.svg" alt="USDC" />
                                            </div>
                                            <div>
                                                <h5>USDC</h5>
                                                <h6 className="grey-color">$0.0000</h6>
                                            </div>
                                        </div>
                                        {
                                            !getStartUSDC &&
                                            <div className="">
                                                <img src="/assets/images/dashboard/emoticon-2.png" style={{ width: '100px' }} alt="" className="" />
                                            </div>
                                        }
                                    </div>
                                    {
                                        getStartUSDC ? <>
                                            <div className="mt-12">
                                                <h5 className="site-lite-color">Start Earning 1% interest on your USDC daily</h5>
                                            </div>
                                            <div className="justify-s">
                                                <h5 className="">Didn't start yet?</h5>
                                                <img className="emoticon" src="/assets/images/dashboard/emoticon.png" alt="" />
                                            </div>
                                        </> : <>
                                            {/* <div className="justify-js font18 mt-4 ">
                                                <div className="">Balance</div>
                                                <div className="">0.0000 USDC</div>
                                            </div> */}
                                            <div className="justify-js font18 mt-4">
                                                <h5>Deposit amount</h5>
                                            </div>
                                            <div className="justify-js mt-4">
                                                <input type="text" className="stake-input" />

                                            </div>

                                        </>
                                    }
                                    <div className="mt-8">
                                        {
                                            getStartUSDC ?
                                                <button onClick={() => setGetStartUSDC(false)} className="w-full">
                                                    <h5>Get Started</h5>
                                                </button>
                                                :
                                                <div className="justify-js gap-4">
                                                    <button className="w-full withdrow-btn">
                                                        <h5>Withdraw</h5>
                                                    </button>
                                                    <button className="w-full">
                                                        <h5>Deposit</h5>
                                                    </button>
                                                </div>
                                        }
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
                                    {/* <div className="justify-s mt-2">
                                        <h5 className="nobold">
                                            Hourly USDC Rewards
                                        </h5>
                                        <h5 className="nobold">
                                            0.0000
                                        </h5>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 mb-9">
                            <div className="get-start">
                                <div className="get-start-body">
                                    <div className="w10 justify-s">

                                        <div className="w0 justify-js gap-2">
                                            <div className="crypto-logo">
                                                <img src="/assets/images/dashboard/USDT.svg" alt="USDT" />
                                            </div>
                                            <div>
                                                <h5>USDT</h5>
                                                <h6 className="grey-color">$0.0000</h6>
                                            </div>
                                        </div>
                                        {
                                            !getStartUSDT &&
                                            <div className="">
                                                <img src="/assets/images/dashboard/emoticon-2.png" style={{ width: '100px' }} alt="" className="" />
                                            </div>
                                        }
                                    </div>
                                    {
                                        getStartUSDT ? <>
                                            <div className="mt-12">
                                                <h5 className="site-lite-color">Start Earning 1% interest on your USDT daily</h5>
                                            </div>
                                            <div className="justify-s">
                                                <h5 className="">Didn't start yet?</h5>
                                                <img className="emoticon" src="/assets/images/dashboard/emoticon.png" alt="" />
                                            </div>
                                        </> : <>
                                            {/* <div className="justify-js font18 mt-4 ">
                                                <div className="">Balance</div>
                                                <div className="">0.0000 BUST</div>
                                            </div> */}
                                            <div className="justify-js font18 mt-4">
                                                <h5>Deposit amount</h5>
                                            </div>
                                            <div className="justify-js mt-4">
                                                <input type="text" className="stake-input" />

                                            </div>

                                        </>
                                    }
                                    <div className="mt-8">
                                        {
                                            getStartUSDT ?
                                                <button onClick={() => setGetStartUSDT(false)} className="w-full">
                                                    <h5>Get Started</h5>
                                                </button>
                                                :
                                                <div className="justify-js gap-4">
                                                    <button className="w-full withdrow-btn">
                                                        <h5>Withdraw</h5>
                                                    </button>
                                                    <button className="w-full">
                                                        <h5>Deposit</h5>
                                                    </button>
                                                </div>
                                        }
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
                                    {/* <div className="justify-s mt-2">
                                        <h5 className="nobold">
                                            Hourly USDT Rewards
                                        </h5>
                                        <h5 className="nobold">
                                            0.0000
                                        </h5>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="assets-container">
                        <div className="justify-js gap-4 w0">

                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-8 mt-4">
                                <div className="h10 justify">
                                    <h2 className="site-lite-color">Calculating Your Assets...</h2>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-4 mt-4">
                                <div className="dis-f jc-s ai-c gap-4">
                                    <button className="crypto-btn grey-bg">
                                        USDT
                                    </button>
                                    <button className="crypto-btn">
                                        USDC
                                    </button>
                                </div>
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
