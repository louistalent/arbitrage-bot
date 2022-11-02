import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slice from "../reducer";
import { AiOutlineClose, AiOutlineDown } from "react-icons/ai";

const WalletModal = ({ setWalletModal }: any) => {
	const global = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const update = (payload: { [key: string]: any }) => {
		dispatch(Slice.actions.update(payload));
	};


	const [height, setHeight] = useState<number>(0);
	useEffect(() => {
		setHeight(window.innerHeight);
	}, [window.innerHeight])

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
									<div className="rect-frame-modal w-full flex items-center justify-between">
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
									<div className="rect-frame-modal w-full flex items-center justify-between">
										<div className="">
											<img src="/assets/wallet/coinbase.png" alt="" className="" style={{ width: '50px', height: '50px' }} />
										</div>
										<div className="flex1 text-center">
											<h4 className="black-color cursor-pointer hover:text-blue-500">Coinbase</h4>
										</div>
									</div>
								</div>
							</div>
							<div className="row flex-1">
								<div className="col-sm-12 col-md-12 mb-6">
									<div className="rect-frame-modal w-full flex items-center justify-between">
										<div className="">
											<img src="/assets/wallet/walletconnect.png" alt="" className="" style={{ width: '50px', height: '50px' }} />
										</div>
										<div className="flex1 text-center">
											<h4 className="black-color cursor-pointer hover:text-blue-500">Wallet&nbsp;Connect</h4>
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
