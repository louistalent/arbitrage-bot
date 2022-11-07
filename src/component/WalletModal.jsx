import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { injected, walletconnect, walletlink } from '../util/connector';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';

// import { toast } from 'react-toast'
import { RiArrowRightLine } from "react-icons/ri";

const WalletModal = ({ setIsWalletConnect, setWalletModal, walletModal }) => {

	const { activate, connector, account, library, ...props } = useWeb3React();
	const [height, setHeight] = useState(0);
	useEffect(() => {
		setHeight(window.innerHeight);
	}, [window.innerHeight])
	const connect = async (type) => {
		console.log(type)
		if (type == "metamask") {
			try {
				await activate(injected, undefined, true, (error) => console.log(error));
				if (account) {
					setIsWalletConnect(true)
					setWalletModal(false)
				} else {
					setIsWalletConnect(false)
				}
			} catch (error) {
				setIsWalletConnect(false)
				console.log(error)
				// toast.error(error.message)
			}
		} else if (type == "walletconnect") {
			try {
				await activate(walletconnect, undefined, true, (error) => console.log(error));
				if (account) {
					setIsWalletConnect(true)
					setWalletModal(false)
				} else {
					setIsWalletConnect(false)
				}
			} catch (error) {
				console.log(error)
				// toast.error(error.message)
			}
		} else if (type == "coinbase") {
			try {
				await activate(walletlink, undefined, true, (error) => console.log(error));
				if (account) {
					setIsWalletConnect(true)
					setWalletModal(false)
				} else {
					setIsWalletConnect(false)
				}
			} catch (error) {
				console.log(error)
				// toast.error(error.message)
			}
		}
	}
	return (
		<>

			<div className={`request-setting-modal-container ${walletModal ? 'modal-show' : ''}`}>
				<div
					className="request-setting-modal-bg"
					onClick={() => setWalletModal(false)}
				></div>
				<div className="request-setting-modal-body" style={{ maxHeight: `${height - 150}px` }}>
					<div className="request-modal-header w-full m-auto p-5 ">
						<div className="dis-f ai-c jc-sb w-full">
							<h4 className="white-color">Connect</h4>
							<div onClick={() => setWalletModal(false)} className="p-2 rounded-full cu-po">
								<AiOutlineClose className="white-color" fontSize={'25px'} />
							</div>
						</div>
					</div>
					<div className="p-10 w-full modal-content">
						<div className="mt-6">
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full dis-f ai-c jc-sb" onClick={() => connect("metamask")}>
										<div className="flex1">
											<span className="cu-po bold">MetaMask</span>
										</div>
										<div className="rounded-full p-2 white-bg dis-f mr-4">
											<img src="/assets/wallet/metamask.png" alt="" className="" style={{ width: '20px', height: '20px' }} />
										</div>
										<RiArrowRightLine style={{ color: 'white', fontSize: '22px' }} />
									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full dis-f ai-c jc-sb" onClick={() => connect("walletconnect")}>
										<div className="flex1">
											<span className="cu-po bold">WalletConnect</span>
										</div>
										<div className="rounded-full p-2 white-bg dis-f mr-4">
											<img src="/assets/wallet/walletconnect.png" alt="" className="" style={{ width: '20px', height: '20px' }} />
										</div>
										<RiArrowRightLine style={{ color: 'white', fontSize: '22px' }} />

									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full dis-f ai-c jc-sb" onClick={() => connect("coinbase")}>
										<div className="flex1">
											<span className="cu-po bold">Coinbase&nbsp;Wallet</span>
										</div>
										<div className="rounded-full p-2 white-bg dis-f mr-4">
											<img src="/assets/wallet/coinbase.png" alt="" className="" style={{ width: '20px', height: '20px' }} />
										</div>
										<RiArrowRightLine style={{ color: 'white', fontSize: '22px' }} />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default WalletModal;
