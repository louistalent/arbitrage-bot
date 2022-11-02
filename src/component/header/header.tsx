
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, } from "react-redux";
import { simpleAddress } from "../../util";
import { BsChevronDown, BsChevronCompactUp } from "react-icons/bs";
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { FaTwitter, FaTelegramPlane, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import "./header.scss";
import WalletModal from '../WalletModal';


const Header = () => {
	const G = useSelector((state: any) => state);
	const [walletModal, setWalletModal] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	return (
		<header className='white'>
			<div className='container dis-f'>
				{/* row-reverse-991 : class name*/}
				<div className='flex items-center justify-between mobile-just-start flex4 '>
					<div className='flex items-center justify-evenly w-full sm:w-0'>
						<div onClick={() => setIsMobile(true)} className='hamburger-icon-container'>
							<AiOutlineMinus className='' style={{ position: 'absolute', color: 'black', top: '0%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', color: 'black', top: '20%' }} fontSize={'25px'} />
							<AiOutlineMinus className='' style={{ position: 'absolute', color: 'black', top: '40%' }} fontSize={'25px'} />
						</div>
						<Link to='/'>
							<div className="flex items-center sm:absolute sm:top-1/4 justify-start gap-2" >
								<img src="/url-logo.jpg" alt="" className="site-logo" />
							</div>
						</Link>
					</div>

					<div className={`${isMobile ? 'hamburger-box' : ''} justify`}>
						<div className={`${isMobile ? 'hamburger-cancel-container' : ''} dis-n`}>
							<AiOutlineClose onClick={() => setIsMobile(false)} className='cu-po hamburger-cancel-btn black-color' fontSize={'35px'} />
						</div>
						<button className='w10 primary-bg hidden sm:inline-block sm:opacity-0' style={{ borderRadius: '25px', padding: "7px 10px" }}>
							Wallet&nbsp;Connect
						</button>
						<ul className='hamburger justify li-none-style'>
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
						</ul>

					</div>
					<div onClick={() => setIsMobile(false)} className={`${isMobile ? 'hamburger-bg' : ''} dis-n`}></div>
					<button onClick={() => setWalletModal(true)} className='btn w10 primary-bg' style={{ borderRadius: '25px', padding: "7px 10px" }}>
						Wallet&nbsp;Connect
					</button>
				</div>
				{/* <div className='dis-f ai-c flex1'>
					<div className='justify jc-e flex2'>
					</div>
				</div> */}
			</div>
			{walletModal &&
				<WalletModal setWalletModal={setWalletModal} />
			}
		</header>
	);
};

export default Header;
