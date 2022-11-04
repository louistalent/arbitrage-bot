import React from 'react';
import { RiGooglePlayFill, RiStarSFill } from "react-icons/ri";
import "./footer.scss";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='res-pt6 res-pb6 white-color'>
            <section className='container'>
                <div className='row mobile-p2rem'>

                    <div className="top-line col-sm-12 col-md-6 col-lg-6 mb-6 flex flex-col gap-8">
                        <div className="flex items-center justify-start gap-2" >
                            <br />
                            <h1 className='grey-color'>Community</h1>
                            <h4 className='grey-color mo-dis-none'>
                                Join Arbitrage Plus thriving community on...
                            </h4>
                        </div>
                        <div className="social-link-container gap-4 mt-8">
                            <h4 className='grey-color social-link'><a href="" className="grey-color">Telegram</a></h4>
                            <h4 className='grey-color social-link'><a href="" className="grey-color">Discord</a></h4>
                            <h4 className='grey-color social-link'><a href="" className="grey-color">Twitter</a></h4>
                            <h4 className='grey-color social-link'><a href="" className="grey-color">Medium</a></h4>
                        </div>
                    </div>

                    <div className="top-line col-sm-12 col-md-6 col-lg-6 mb-6">
                        <br />
                        <h1 className='grey-color'>Tutorials</h1>
                        <div className="">
                            <h4 className='grey-color '>
                                Stuck? Check out our tutorials on
                                {' '}
                                <span className='underline'>
                                    Arbitrage Plus Academy.
                                </span>
                                <span className='desktop-none'>
                                    {' '}Still can't find what you're looking for?
                                </span>
                            </h4>
                            <br className='desktop-none' />
                            <div className=" mt-8 desktop-none ">
                                <h4 className='grey-color underline'>
                                    <a href="arbitrageplus@protonmail.com">
                                        Contact us
                                    </a>
                                </h4>
                            </div>
                            <div className="contactus mt-8">
                                <h4 className="grey-color">
                                    Still can't find what you're looking for?
                                </h4>
                                <h4 className='grey-color underline'>
                                    <a href="arbitrageplus@protonmail.com grey-color underline">
                                        Contact us
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='res-mt3' style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}></div> */}
                {/* <div className="mt-4 text-center">
                    <h6 className="grey-color">
                        ©2017 - 2022 Copyright by Arbitrage Bot - All rights reserved.
                    </h6>
                </div> */}
            </section>
        </footer>
    )
};

export default Footer; 