import React from 'react';
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";
import "./footer.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='res-pt6 res-pb6 white-color'>
            <section className='container'>
                <div className='row'>

                    <div className="col-sm-12 col-md-3 col-lg-3 mb-6 flex flex-col gap-8">
                        <div className="flex items-center justify-start gap-2" style={{ width: '230px' }}>

                            <img src="/url-logo.jpg" style={{ width: '100%', maxHeight: '100%' }} alt="" className="" />
                            {/* <div className='text-center leading-4'>
                                <h5 className='' style={{ margin: '0!important' }}>FLASH</h5>
                                <span style={{ fontSize: '10px' }}>
                                    <span className='primary-color'>AU</span>DIT
                                </span>
                            </div> */}
                        </div>
                        <p className="grey-color">
                            Flash Technologies : Business Center 1, M Floor, The Meydan Hotel, Nad Al
                            Sheba, Dubai, U.A.E.
                        </p>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-2 mb-6">
                        <h5 className="">Features</h5>
                        <br />
                        <h6 className="">Automatic Trading</h6>
                        <h6 className="">Exchange Arbitrage</h6>
                        <h6 className="">Market Making Bot</h6>
                        <h6 className="">Social trading</h6>
                        <h6 className="">Algorithm Intelligence (AI)</h6>
                        <h6 className="">Trailing Stops</h6>
                        <h6 className="">Paper Trading</h6>
                        <h6 className="">Strategy Designer</h6>
                        <h6 className="">Backtesting</h6>
                        <h6 className="">Exchanges</h6>
                        <h6 className="">All Features</h6>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-2 mb-6">
                        <h5 className="">Resources</h5>
                        <br />
                        <Link to={'/'}>
                            <h6 className="">Get Started</h6>
                        </Link>
                        <h6 className="">
                            <Link to={'/portolio'}>
                                Tutorials
                            </Link>
                        </h6>
                        <h6 className="">
                            <a href="" className="">
                                Documentation
                            </a>
                        </h6>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-2 mb-6">
                        <h5 className="">Company</h5>
                        <br />
                        <h6 className="">
                            <a href="" target={'_blank'} className="">About Us</a>
                        </h6>
                        <h6 className="">
                            <a href="" target={'_blank'} className="">Careers</a>
                        </h6>
                        <h6 className="">
                            <a href="" target={'_blank'} className="">Press</a>
                        </h6>
                        <h6 className="">
                            <a href="" target={'_blank'} className="">Contact</a>
                        </h6>
                        <h6 className="">
                            <a href="" target={'_blank'} className="">Terms</a>
                        </h6>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3 mb-6">
                        <h5 className="">Join Our Newsletter</h5>
                        <br />
                        <p>
                            Will send you weekly updates for your better
                            finance management.
                        </p>
                    </div>
                </div>
                <div className='res-mt3' style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}></div>
                <div className="mt-4 text-center">
                    <h6 className="grey-color">
                        ©2017 - 2022 Copyright by Arbitrage Bot - All rights reserved.
                    </h6>
                </div>
            </section>
        </footer>
    )
};

export default Footer; 