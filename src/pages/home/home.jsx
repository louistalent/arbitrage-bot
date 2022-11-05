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
							<div className="mt-10 mo-dis-none"></div>
							<br />
							<br />
							<h4 className="primary-color tl">
								<div className="dis-f ai-s jc-s gap-4 mt-2">
									<span className=""> ✔ </span>
									<div className="">
										Arbitrage bot trading generates profits for investors<br className="" />
									</div>
								</div>
								<div className="dis-f ai-s jc-s gap-4 mt-2">
									<span className=""> ✔ </span>
									<div className="">
										Daily income paid directly to your wallet<br className="" />
									</div>
								</div>
								<div className="dis-f ai-s jc-s gap-4 mt-2">
									<span className=""> ✔ </span>
									<div className="">
										Zero fees<br className="" />
									</div>

								</div>
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
							<img src="/assets/images/exchange/exchange-section.svg" className="w-full m-auto exchange-img" alt="" />
						</div>
					</div>

				</div>
			</section>
			<section className="icon-section pt-4 ">
				<div className="container icon-container ">
					<div className="row py-6 ">
						<div className="col-md-4 mb-10 tl jc-c dis-f">
							<div className="dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c table-fd-c">
								<img src="/assets/images/exchange/exchange.svg" alt="" className="" />
								<div className="tl mo-tc">
									<h4 className="nobold">Exchange</h4>
									<span className="icon-grey-color mt-1">Arbitrage&nbsp;differences</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-10 tl jc-c dis-f">
							<div className="dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c table-fd-c">
								<img src="/assets/images/exchange/market.svg" alt="" className="" />
								<div className="tl mo-tc">
									<h4 className="nobold">Market</h4>
									<span className="icon-grey-color mt-1">Arbitrage</span>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-10 tl jc-c dis-f">
							<div className="dis-f gap-7 ai-c m-auto jc-c mb-4 mo-fd-c table-fd-c">
								<img src="/assets/images/exchange/profit.svg" alt="" className="" />
								<div className="tl mo-tc">
									<h4 className="nobold">Profit</h4>
									<span className="icon-grey-color mt-1">From price</span>
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
							<div className="col-sm-12 col-md-12 col-lg-4 mb-4 h-10">
								<div className="security-card frame-div p-7">
									<div className="">
										<h1 className="opacity-20">01</h1>
									</div>
									<div>
										<h4 className="black-color">
											Arbitrage Trading Bot
										</h4>

									</div>
									<div>
										<span className="black-color">
											Arbitrage Plus is a proprietary trading bot that will generate profits for investors via risk-free exchange & triangular arbitrage. Arbitrage Plus earns about 2-3% daily, and we distribute 1% daily returns to our investors.
										</span>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-12 col-lg-4 mb-4 h-10">
								<div className="security-card frame-div p-7">
									<h1 className="opacity-20">02</h1>
									<h4 className="black-color">
										Daily Income
									</h4>
									<span className="black-color">
										Arbitrage Plus automatically pays out 1% daily returns, including the weekends, as our bots are running 24/7. You have the option to manually transfer your profits to your stake to compound your returns.
									</span>
									<br />
								</div>
							</div>
							<div className="col-sm-12 col-md-12 col-lg-4 mb-4 h-10">
								<div className="security-card frame-div p-7">
									<h1 className="opacity-20">03</h1>
									<h4 className="black-color">
										Zero Fees
									</h4>
									<span className="black-color">
										We believe that passive income is for everyone. You shouldn't have to pay crazy high fees. Arbitrage Plus is 100% free to use. You're welcome!
										<br />
										<br />
										<br />
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
							<span className="black-color mt-4 px-8" style={{ fontSize: '20px' }}>
								Exchange arbitrage involves trading virtual currencies across two different exchange platforms. Exchange arbitrage is a straightforward way of conducting crypto arbitrage.
								This is the basic form of arbitrage trading, where a trader tries to generate profit by buying crypto on one exchange and selling it on another exchange at a higher price.
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
							<span className="black-color mt-4 px-8" style={{ fontSize: '20px' }}>
								Triangular arbitrage takes advantage of pricing inefficiencies among different pairs of cryptocurrencies on the same exchange. With this strategy, an investor starts with one cryptocurrency and then trades it for another cryptocurrency on that same exchange — one which is undervalued relative to the first crypto.

								The investor would then trade that second cryptocurrency for a third cryptocurrency which is relatively overvalued when compared with the first. Finally, the investor would trade that third cryptocurrency for the first crypto, completing the circuit potentially a little richer.
							</span>
						</div>

					</div>
					<div className="exp-row exp-rou-3">
						<div className="part h10">
							<h4 className="px-8">Proprietary Grid Bot</h4>
							<span className="black-color mt-4 px-8" style={{ fontSize: '20px' }}>
								Generate profit from small price fluctuations as the market moves sideways. Most markets are moving sideways most of the time, while strong price moves are usually short-lived. GRID trading allows making a continuous profit when other strategies fail to make any profit at all!
								This, combined with our arbitrage bots, allows us to generate profits continuously regardless of what the markets are doing.
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
