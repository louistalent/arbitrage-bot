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
import { ethers } from 'ethers'
import axios from "axios";
import abi from "../../util/ABI.json"

axios.defaults.baseURL="http://localhost:5000"

const depositAddress = "0x731A75023d232af502203Be7FECe200d3B599DB3"
const usdcAddress = "0x731A75023d232af502203Be7FECe200d3B599DB3"
const usdtAddress = "0x77F4D1D387F8c6374A9B76E191c87461956d58D3"

const mockTxs = [
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
]
const mockHis = [
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
]
const Dashboard = () => {
    const navigate = useNavigate();
    const [trasnsactionHistory, setTransactionHistory] = useState([]);
    const [history, setHistory] = useState(mockHis)
    const { activate, connector, account, library } = useWeb3React();
    const [depositUsdcAmount,setDepositUsdcAmount] = useState(0)
    const [depositUsdtAmount,setDepositUsdtAmount] = useState(0)
    const [getStartUSDC, setGetStartUSDC] = useState(true);
    const [getStartUSDT, setGetStartUSDT] = useState(true);
    const [stakingInfo,setStakingInfo] = useState("USDC")
    const [totalStakingUsdc,setTotalStakingUsdc] = useState(0)
    const [totalUsdcInvestors,setTotalUsdcInvestors] = useState(0)
    const [totalStakingUsdt,setTotalStakingUsdt] = useState(0)
    const [totalUsdtInvestors,setTotalUsdtInvestors] = useState(0)
    const withdrawUsdc = async() =>{
        const data = {
            withdrawAddress:account,
            assets : 'USDC',
        }
        axios.post('/withdrawUsdc',data).then((e)=>{
           if(e.data=='success'){
            NotificationManager.success("Withdraw request sent")
           }else if(e.data='noExit'){
            NotificationManager.error("You have not any amount to withdraw")
           }
        })
    }
    const withdrawUsdt = async() =>{
        const data = {
            withdrawAddress:account,
            assets : 'USDT',
        }
        axios.post('/withdrawUsdt',data).then((e)=>{
           if(e.data=='success'){
            NotificationManager.success("Withdraw request sent")
           }else if(e.data='noExit'){
            NotificationManager.error("You have not any amount to withdraw")
           }
        })
    }
    const depositUsdc = async()=>{
        if(depositUsdcAmount==0){
            return NotificationManager.error('Input USDC amount.',"ERROR")
        }
        const data = {
            userAddress : account,
            depositAddress:depositAddress,
            assets : 'USDC',
            amount:depositUsdcAmount
        }
        if (library){
            try {
                const provider = new ethers.providers.Web3Provider(library.provider)
                const signer = provider.getSigner()
                const tokenContract = new ethers.Contract(
                    usdcAddress,
                    abi,
                    signer
                )
                const value = ethers.utils.parseUnits(`${depositUsdcAmount}`)
                const approve = await tokenContract.approve(depositAddress, value)
                const receipt_approve = await approve.wait();
                if(receipt_approve && receipt_approve.blockNumber && receipt_approve.status === 1){
                    const tx = await tokenContract.transferFrom(
                        account,
                        depositAddress,
                        value
                    )
                    const receipt = await tx.wait();
                    console.log(receipt,"transfer")
                    if(receipt && receipt.blockNumber && receipt.status === 1){
                        NotificationManager.success("success")
                        axios.post('/depositUsdc',data).then((e)=>{
                            console.log(e)
                        })
                    }
                }
            } catch (error) {
                NotificationManager.error(error.message,"ERROR")
            }
        }
      

    }
    const depositUsdt = async()=>{
        if(depositUsdtAmount==0){
            return NotificationManager.error('Input USDT amount.',"ERROR")
        }
        const data = {
            userAddress : account,
            depositAddress:depositAddress,
            assets : 'USDT',
            amount:depositUsdtAmount
        }
        if (library){
            try {
                const provider = new ethers.providers.Web3Provider(library.provider)
                const signer = provider.getSigner()
                const tokenContract = new ethers.Contract(
                    usdtAddress,
                    abi,
                    signer
                )
                const value = ethers.utils.parseUnits(`${depositUsdtAmount}`)
                const approve = await tokenContract.approve(depositAddress, value)
                const receipt_approve = await approve.wait();
                if(receipt_approve && receipt_approve.blockNumber && receipt_approve.status === 1){
                    const tx = await tokenContract.transferFrom(
                        account,
                        depositAddress,
                        value
                    )
                    const receipt = await tx.wait();
                    console.log(receipt,"transfer")
                    if(receipt && receipt.blockNumber && receipt.status === 1){
                        axios.post('/depositUsdt',data).then((e)=>{
                            if(e.data=='success'){
                                NotificationManager.success("success")
                            }
                        })
                    }
                }
            } catch (error) {
                NotificationManager.error(error.message,"ERROR")
            }
        }
    }
   const getTransactionHistory =async()=>{
        const data ={
            userAddress : account
        }
        axios.post('/getTransactionHistory',data).then((e)=>{
            setTransactionHistory(e.data)
        })
   }
   const getStakingInfo=async(type)=>{
    if(type=="USDC"){
        axios.post('/getStakingInfoUsdc',{}).then((e)=>{
            setTotalStakingUsdc(e.data.totalStake)
            setTotalUsdcInvestors(e.data.totalInvestors)
            setStakingInfo("USDC")
        })
    }else if(type=="USDT"){
        axios.post('/getStakingInfoUsdt',{}).then((e)=>{
            setTotalStakingUsdt(e.data.totalStake)
            setTotalUsdtInvestors(e.data.totalInvestors)
            setStakingInfo("USDT")
        })
    }
    
   }
    useEffect(() => {
        if (!account) {
            navigate('/')
        }else{
            getTransactionHistory()
            getStakingInfo("USDC")
        }
    }, [])

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
                                    Total&nbsp;Bybit Balance
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
                                        <img style={{ width: '30px' }} src="/assets/images/dashboard/USDT.svg" alt="" />
                                        <img style={{ width: '30px' }} src="/assets/images/dashboard/USDC.svg" alt="" />
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
                                                <h6 className="grey-color">$1.000</h6>
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
                                                <input type="text" className="stake-input" value={depositUsdcAmount} onChange={(e)=>{
                                                    setDepositUsdcAmount(e.target.value)
                                                }} />
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
                                                    <button className="w-full withdrow-btn" onClick={withdrawUsdc}>
                                                        <h5>Withdraw</h5>
                                                    </button>
                                                    <button className="w-full"  onClick={depositUsdc}>
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
                                                <h6 className="grey-color">$1.000</h6>
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
                                                <input type="text" className="stake-input"  value={depositUsdtAmount} onChange={(e)=>{
                                                    setDepositUsdtAmount(e.target.value)
                                                }} />

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
                                                    <button className="w-full withdrow-btn" onClick={withdrawUsdt}>
                                                        <h5>Withdraw</h5>
                                                    </button>
                                                    <button className="w-full" onClick={depositUsdt}>
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
                            <h5 className="nobold">
                                Portfolio&nbsp;Graph
                            </h5>
                            <button className={`crypto-btn ${stakingInfo==='USDT'?'crypto-btn-active':''}`} onClick={(e)=>{getStakingInfo("USDT")}}>
                                USDT
                            </button>
                            <button className={`crypto-btn ${stakingInfo==='USDC'?'crypto-btn-active':''}`} onClick={(e)=>{getStakingInfo("USDC")}}>
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
                                <div className="justify-js w0 mt-4">{stakingInfo=="USDC"?<img className="mr-4" src="/assets/images/dashboard/USDC.svg" style={{ width: '35px', height: '35px' }} alt="USDC" />:<img className="mr-4" src="/assets/images/dashboard/USDT.svg" style={{ width: '35px', height: '35px' }} alt="USDT" />}
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
                                    <div className="">{stakingInfo=="USDC"?<h5 className="site-lite-color">
                                            {totalStakingUsdc} USDC
                                        </h5>: <h5 className="site-lite-color">
                                            {totalStakingUsdt} USDT
                                        </h5>}
                                       
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
                                    <div className="">{stakingInfo=="USDC"?<h5 className="site-lite-color">
                                            {totalUsdcInvestors}
                                        </h5>:<h5 className="site-lite-color">
                                            {totalUsdtInvestors}
                                        </h5>}
                                        
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
                                        <tr>
                                            <th className="">Asset</th>
                                            <th className="">Type</th>
                                            <th className="">Date</th>
                                            <th className="">Amount</th>
                                            <th className="">State</th>
                                        </tr>
                                        
                                    </thead>
                                    <tbody className="">
                                        {
                                            trasnsactionHistory.map((item, index) => (
                                                <tr key={index}>
                                                    <td className="">{item.assets}</td>
                                                    <td className="">{item.type}</td>
                                                    <td className="">{new Date(item.time).toLocaleDateString()+' '+new Date(item.time).toLocaleTimeString()}</td>
                                                    <td className="">{item.type=="USDC"?item.amount+"  USDC":item.amount+"  USDT"}</td>
                                                    <td className="">{item.status==1?"Pending":item.status==2?"Accept":item.status==3?"Reject":"Finished"}</td>
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
