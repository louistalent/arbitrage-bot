import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Slice from "../../reducer";
import axios from "axios";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";

import FAQ from '../../component/fap/fap';
import Layout from "../../component/layout/layout";
import WalletModal from "../../component/WalletModal";
import "./home.scss";

const Home = () => {
	const global = useSelector((state: any) => state);
	const dispatch = useDispatch();
	const update = (payload: { [key: string]: any }) => {
		dispatch(Slice.actions.update(payload));
	};

	return (
		<Layout>
			<section className="exchange-section">
				<div className="container mx-auto flex flex-col pt-32 sm:pt-56 text-center sm:text-left">
					<div className="row">
						<div className="col-sm-12 col-md-6 mb-9">
							<span className="arb-btn primary-color">Arbitrage</span>

							<h2 className="font-bold">
								<div className="">
									Exchange prices are <br />
									inefficient. You can<br />
									profit from that<br />
								</div>
							</h2>
							<div className="mt-4"></div>
							<h5 className="grey-color">
								Prices between exchanges and pairs differ. Profit from that. Without withdrawing your funds from your exchange.
							</h5>
							<div className="flex items-center justify-center sm:justify-start">
								<div className="mt-10 flex items-center justify-start gap-4">
									<button className="primary-bg p-2 text-black" style={{ borderRadius: '50%' }}>
										<span>
											<FaLongArrowAltRight style={{ color: 'white', fontSize: '25px' }} />
										</span>
									</button>
									Let's get started
								</div>
							</div>
						</div>
						<div className="col-sm-12 col-md-6 mb-9">
							<img src="/assets/images/exchange/exchange-section.svg" className="max-w-md w-full m-auto" alt="" />
						</div>
					</div>

				</div>
			</section>
			<section className="icon-section pt-4 ">
				<div className="container mx-auto flex flex-col py-4 sm:pt-12">
					<div className="row py-6">
						<div className="col-md-4 mb-10 text-center">
							<div className="flex gap-7 items-center m-auto w-52">
								<img src="/assets/images/exchange/exchange.svg" alt="" className="" />
								<div className="">
									<h4 className="">Exchange</h4>
									<span>Arbitrage differences</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-10 text-center">
							<div className="flex gap-7 items-center m-auto w-52">
								<img src="/assets/images/exchange/market.svg" alt="" className="" />
								<div className="">
									<h4 className="">Exchange</h4>
									<span>Arbitrage</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-10 text-center">
							<div className="flex gap-7 items-center m-auto w-52">
								<img src="/assets/images/exchange/profit.svg" alt="" className="" />
								<div className="">
									<h4 className="">Exchange</h4>
									<span>From profit</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="intro-section pt-4 ">
				<div className="container mx-auto flex flex-col py-4 sm:pb-24">
					<div className="mt-16">
						<div className="row">
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="security-card frame-div p-7">
									<div className="">
										<h1 className="opacity-20">01</h1>
									</div>
									<div>
										<h4 className="black-color">
											AI Trading Bot
										</h4>

									</div>
									<div>
										<span className="black-color">
											Optimus is an AI trading bot that will generate revenue for OPT3 hodlers. Optimus earns about 1% per day, just by trading the OPT3 token.
										</span>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="security-card frame-div p-7">
									<h1 className="opacity-20">02</h1>
									<h4 className="black-color">
										Daily Income
									</h4>
									<span className="black-color">
										Holding OPT3 is the best way to earn passive income from AI bot trading. Earn daily compound interest simply by holding OPT3 in your wallet.
									</span>
								</div>
							</div>
							<div className="col-sm-12 col-md-4 mb-4">
								<div className="security-card frame-div p-7">
									<h1 className="opacity-20">03</h1>
									<h4 className="black-color">
										Zero Fees
									</h4>
									<span className="black-color">
										We believe that passive income is for everyone. You shouldn't have to pay crazy high fees. Optimus is 100% free to use. You're welcome!
										<br />
										<br />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Home;
