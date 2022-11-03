import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { injected, walletconnect, walletlink } from '../util/connector';
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core';
// import { toast } from 'react-toastify';

const WalletModal = ({ setWalletModal }) => {

	const { activate, connector,account,library, ...props } = useWeb3React();
	const [height, setHeight] = useState(0);
	useEffect(() => {
		setHeight(window.innerHeight);
	}, [window.innerHeight])
	const connect = async(type)=>{
		console.log(type)
		if(type=="metamask")
		{
			try {
				 await activate(injected, undefined, true,(error) => console.log(error));
			} catch (e) {
				// toast.error(e.message)
				console.log(e.message)
			}
		}else if(type=="walletconnect"){
			try {
				await activate(walletconnect, undefined, true,(error) => console.log(error));
			} catch (error) {
				console.log(error)
				// toast.error(error)
			}
		}else if(type=="coinbase"){
			try {
				await activate(walletlink, undefined, true,(error) => console.log(error));
			} catch (error) {
				console.log(error)
				// toast.error(error)
			}
		}
	}
	return (
		<>

			<div className="request-setting-modal-container">
				<div
					className="request-setting-modal-bg"
					onClick={() => setWalletModal(false)}
				></div>
				<div className="request-setting-modal-body" style={{ maxHeight: `${height - 150}px` }}>
					<div className="request-modal-header w-full m-auto py-5 px-5 ">
						<div className="flex items-center justify-between w-full">
							<h4 className="black-color">Wallet Connect</h4>
							<div onClick={() => setWalletModal(false)} className="p-2 rounded-full border border-gray-600 cursor-pointer">
								<AiOutlineClose className="black-color" fontSize={'25px'} />
							</div>
						</div>
						<div className="w-full grey-color">
							<h6 className="">
								Please connect your wallet
							</h6>
						</div>
					</div>
					<div className="p-10 w-full modal-content">
						<div className="mt-6">
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full flex items-center justify-between" onClick={()=>connect("metamask")}>
										<div className="">
											<img src="/assets/wallet/metamask.png" alt="" className="" style={{ width: '50px', height: '50px' }} />
										</div>
										<div className="flex1 text-center">
											<h4 className="black-color cursor-pointer hover:text-blue-500">Metamask</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full flex items-center justify-between" onClick={()=>connect("walletconnect")}>
										<div className="">
											<img src="/assets/wallet/walletconnect.png" alt="" className="" style={{ width: '50px', height: '50px' }} />
										</div>
										<div className="flex1 text-center">
											<h4 className="black-color cursor-pointer hover:text-blue-500">Wallet&nbsp;Connect</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full flex items-center justify-between" onClick={()=>connect("coinbase")}>
										<div className="">
											<img src="/assets/wallet/coinbase.png" alt="" className="" style={{ width: '50px', height: '50px' }} />
										</div>
										<div className="flex1 text-center">
											<h4 className="black-color cursor-pointer hover:text-blue-500">Coinbase</h4>
										</div>
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
