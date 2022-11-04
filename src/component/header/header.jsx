
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown, BsChevronCompactUp } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaTelegramPlane, FaInstagram, FaFacebookF, FaGithub, FaSleigh } from "react-icons/fa";
import "./header.scss";
import WalletModal from '../WalletModal';
import { RiArrowRightLine, RiCloseCircleLine } from "react-icons/ri";
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';

const Header = () => {
	const [walletModal, setWalletModal] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [walletAddress, setWalletaddress] = useState();
	const [isWalletConnect, setIsWalletConnect] = useState(false);
	const [walletBtnClick, setWalletBtnClick] = useState(false);

	const { activate, connector, chainId, account, library, ...props } = useWeb3React();


	const setWallet = async (add) => {
		const address = add.slice(0, 6) + '...' + add.slice(-3)
		setWalletaddress(address);
		setWalletModal(false)
	}
	useEffect(() => {
		console.log('asdf')
		if (account) {
			setWallet(account)
			setIsWalletConnect(true)
		} else {
			setIsWalletConnect(false)
		}
	}, [account])
	return (
		<header className='white'>
			<div className='container dis-f'>
				{/* row-reverse-991 : class name*/}
				<div className='dis-f ai-c jc-sb mobile-just-start flex4 gap-2'>
					<div className='dis-f ai-c jc-se header-container'>
						{/* <div onClick={() => setIsMobile(true)} className='hamburger-icon-container'>
							<AiOutlineMinus className='' style={{ position: 'absolute', color: 'black', top: '0%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', color: 'black', top: '20%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', color: 'black', top: '40%' }} fontSize={'25px'} />
						</div> */}
						<Link to='/'>
							<div className="logo-container" >
								<img src="/url-logo.png" alt="" className="site-logo" />
							</div>
						</Link>
					</div>

					<div className={`${isMobile ? 'hamburger-box' : ''} justify`}>
						<div className={`${isMobile ? 'hamburger-cancel-container' : ''} dis-n`}>
							<AiOutlineClose onClick={() => setIsMobile(false)} className='cu-po hamburger-cancel-btn black-color' fontSize={'35px'} />
						</div>

						{/* <ul className='hamburger justify li-none-style'>
							<li className='hamburger-list'>
								<Link to='/'>
									Why Cryptohopper
								</Link>
							</li>
							<li className='hamburger-list'>
								<Link to='/'>Solutions</Link>
							</li>
							<li className='hamburger-list' onClick={() => setWalletModal(true)}>
								<Link to='/'>Pricing</Link>
							</li>
							<li className='hamburger-list'>
								<Link to='/'>Marketplace</Link>
							</li>
							<li className='hamburger-list'>
								<Link to='/'>Learn</Link>
							</li>
							<li className='hamburger-list'>
								<Link to='/'>Company</Link>
							</li>
						</ul> */}

					</div>
					<div onClick={() => setIsMobile(false)} className={`${isMobile ? 'hamburger-bg' : ''} dis-n`}></div>
					{(walletAddress && walletAddress.length <= 0 || isWalletConnect === false) ? <button onClick={() => setWalletModal(true)} className='btn w10 white-bg grey-color' style={{ borderRadius: '10px', padding: "7px 40px", gap: '10px' }}>
						<h6>CONNECT</h6>
						<RiArrowRightLine style={{ fontSize: '20px', fontWeight: 'bold' }} />
					</button> :
						<div className="connected-btn">
							<button onClick={() => { setWalletBtnClick(!walletBtnClick) }} className='btn w10 white-bg grey-color' style={{ borderRadius: '10px', padding: "7px 40px", gap: '10px' }}>
								<h6>{walletAddress}</h6>
								<RiArrowRightLine style={{ fontSize: '20px', fontWeight: 'bold' }} />
							</button>
							{
								walletBtnClick &&
								<>
									<button onClick={() => { setIsWalletConnect(false); setWalletBtnClick(!walletBtnClick); }} className='disconnect-drop'>
										<h5>Disconnect</h5>
										<RiCloseCircleLine style={{ fontSize: '20px', fontWeight: 'bold' }} />
									</button>
									{/* <div onClick={setWalletBtnClick(!walletBtnClick)} className="disconnect-drop-bg"></div> */}
								</>
							}
						</div>
					}

				</div>
				{/* <div className='dis-f ai-c flex1'>
					<div className='justify jc-e flex2'>
					</div>
				</div> */}
			</div>
			{walletModal &&
				<WalletModal setIsWalletConnect={setIsWalletConnect} walletModal={walletModal} setWalletModal={setWalletModal} />
			}
		</header>
	);
};

export default Header;
