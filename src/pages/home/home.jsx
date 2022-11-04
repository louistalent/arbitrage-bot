import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FaTelegramPlane, FaPlus, FaMinus } from "react-icons/fa";
import Layout from "../../component/layout/layout";
import WalletModal from "../../component/WalletModal";
import "./home.scss";

const Home = () => {

	return (
		<Layout>
			<section className="exchange-section">
				<div className="container home-container">
					<div className="row">
						<div className="col-sm-12 col-md-6 mb-9">
							<span className="arb-btn primary-color">Crypto Arbitrage Bot</span>
							<br />
							<br />
							<h1 className="font-bold big-font">
								<div className="">
									Earn 1% daily <br className="mo-dis-none" />
									passive income<br className="mo-dis-none" />
								</div>
							</h1>
							<div className="mt-10"></div>
							<br />
							<br />
							<h4 className="primary-color">
								✔  Arbitrage bot trading generates profits for investors<br className="mo-dis-none" /><br className="mo-dis-none" />
								✔  Daily income paid directly to your wallet<br className="mo-dis-none" /><br className="mo-dis-none" />
								✔  Zero fees<br className="mo-dis-none" /><br className="mo-dis-none" />
							</h4>
							{/* <div className="get-started">
								<div className="mt-10 dis-f ai-c jc-s gap-4">
									<button className="primary-bg p-2 black-color" style={{ borderRadius: '50%' }}>
										<span>
											<FaLongArrowAltRight style={{ color: 'white', fontSize: '25px' }} />
										</span>
									</button>
									Let's get started
								</div>
							</div> */}
						</div>
						<div className="col-sm-12 col-md-6 mb-9">
							<img src="/assets/images/exchange/exchange-section.svg" style={{ height: '470px' }} className="w-full m-auto" alt="" />
						</div>
					</div>

				</div>
			</section>
			<section className="icon-section pt-4 ">
				<div className="container icon-container ">
					<div className="row py-6 ">
						<div className="col-md-4 mb-10 tl jc-c dis-f">
							<div className="dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c">
								<img src="/assets/images/exchange/exchange.svg" alt="" className="" />
								<div className="tl">
									<h4 className="nobold">Exchange</h4>
									<span className="icon-grey-color mt-1">Arbitrage&nbsp;differences</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-10 tl jc-c dis-f">
							<div className="dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c">
								<img src="/assets/images/exchange/market.svg" alt="" className="" />
								<div className="tl">
									<h4 className="nobold">Market</h4>
									<span className="icon-grey-color mt-1">Arbitrage</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-10 tl jc-c dis-f">
							<div className="dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c">
								<img src="/assets/images/exchange/profit.svg" alt="" className="" />
								<div className="tl">
									<h4 className="nobold">Profit</h4>
									<span className="icon-grey-color mt-1">From profit</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="cross-section">
				<div className="container home-container ">
					<div className="row">

						<div className="col-sm-12 col-md-6 mb-9">
							<img src="/assets/images/cross/cross.webp" className="w-full m-auto" alt="" />
						</div>
						<div className="col-sm-12 col-md-6 mb-9 dis-f ai-s jc-c fd-c">
							<span className="primary-color">Risk-free profits</span>

							<h2 className="font-bold">
								<div className="">
									Exchange Arbitrage,<br className="mo-dis-none" />
									without withdrawls<br className="mo-dis-none" />
								</div>
							</h2>
							<div className="mt-4"></div>
							<h5 className="grey-color">
								Our crypto bots execute profitable arbitrage trades between exchanges without sending funds from one exchange to another. This allows our proprietary bots to buy and sell cryptocurrencies simultaneously and profit from the price difference instantly. We remove the risk entirely from arbitrage trading.
							</h5>
						</div>
					</div>

				</div>
			</section>

			<section className="intro-section pt-4 ">
				<div className="container intro-container">
					<div className="">
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
											Arbitrage Plus is an AI trading bot that will generate revenue for OPT3 hodlers. Arbitrage Plus earns about 1% per day, just by trading the OPT3 token.
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

										<br />
										<br />
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
										We believe that passive income is for everyone. You shouldn't have to pay crazy high fees. Arbitrage Plus is 100% free to use. You're welcome!
										<br />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="font-section pt-4 ">
				<div className="container intro-container">
					<div className="dis-f">
						<div className="row big-font">
							Experience bot trading that works
						</div>
					</div>
				</div>
			</section>

			<section className="exp-section pb-4">
				<div className="container exp-container">
					<div className="exp-row exp-rou-1">
						<div className="part h10">
							<h4 className="px-8">Exchange Arbitrage</h4>
							<span className="black-color mt-4 px-8">
								Arbitrage bot is an AI trading bot that was trained on real historical market data. Arbitrage bot automatically executes profitable trades, earning an average return of 1% every single day.
							</span>
						</div>
						<div className="flex1 h10">
							<div className="h10 exp-background" style={{ background: 'url(/assets/images/exp/ai.png)' }}>

							</div>
						</div>
					</div>
					<div className="exp-row exp-rou-2">
						<div className="flex1 h10">
							<div className="h10 exp-background" style={{ background: 'url(/assets/images/exp/price.png)' }}>

							</div>
						</div>
						<div className="part h10">
							<h4 className="px-8">Triangular Arbitrage</h4>
							<span className="black-color mt-4 px-8">
								Arbitrage bot can buy tokens back from the market to stop the price from falling. Arbitrage bot will always keep the price in a stable range and maintain an unbreakable floor.
							</span>
						</div>

					</div>
					<div className="exp-row exp-rou-3">
						<div className="part h10">
							<h4 className="px-8">Proprietary Grid Bot</h4>
							<span className="black-color mt-4 px-8">
								Arbitrage bot uses a portion of the revenue it creates to buy up more liquidity over time. This creates resilience to liquidity shocks and creates additional revenue through swap fees.
							</span>
						</div>
						<div className="flex1 h10">
							<div className="h10 exp-background" style={{ background: 'url(/assets/images/exp/liquidity.png)' }}>

							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Home;
