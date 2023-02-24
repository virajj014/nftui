import React from 'react'
import styles from '../styles/EventsAndOverview.module.css'
import event1 from '../assets/event1.png'
import event2 from '../assets/event2.png'
import Image from 'next/image'
import Fruiticon1 from '../assets/fruit1.png'
import Fruiticon2 from '../assets/fruit.png'
const Eventsandoverview = () => {
    return (
        <div className={styles.eventsandoverview}>
            <div className={styles.events}>
                <h1>Events</h1>
                <div className={styles.card}>
                    <Image src={event1} alt="event1" width={300} height={300} className={styles.backimg} />
                    <div className={styles.filter}>
                    </div>

                    <div className={styles.cardin}>
                        <div className={styles.cardinleft}>
                            <div className={styles.row1}>
                                <div className={styles.greenbtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>

                                    <p>Airdrop</p>
                                </div>

                                <div className={styles.weather}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    <p>Harvest</p>
                                </div>

                                <div className={styles.date}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>
                                    <h2>Started </h2>
                                    <p>2023-02-25 12:35:05</p>
                                </div>
                            </div>

                            <div className={styles.row2}>
                                {/* fruits */}
                                <Image src={Fruiticon1} alt="event1" width={300} height={300} className={styles.fruits} />
                                <p>Fruit Salad Game</p>
                                <Image src={Fruiticon2} alt="event1" width={300} height={300} className={styles.fruits} />
                            </div>

                            <div className={styles.row3}>
                                <h2>Manure</h2>
                                <p>x 100</p>
                            </div>

                            <div className={styles.row4}>
                                <p>Wallet Transactions:</p>
                                <div>
                                    <span>44</span>
                                    <p>Success</p>
                                </div>

                                <div>
                                    <span>8</span>
                                    <p>Processing</p>
                                </div>

                                <div>
                                    <span>2</span>
                                    <p>Failed</p>
                                </div>
                            </div>

                            <div className={styles.fillout}>
                                <div className={styles.fillin}></div>
                            </div>

                            <div className={styles.row5}>
                                <p className={styles.btnblack}>More Details</p>
                                <p className={styles.btnwhite}>Cancel</p>
                                <div>
                                    <input type="checkbox" />
                                    <p>Recieve report on email</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardinright}>
                            <Image className={styles.img1} src={event1} alt="event1" width={300} height={300} />
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <Image src={event2} alt="event2" width={300} height={300} className={styles.backimg} />
                    <div className={styles.filter}>
                    </div>

                    <div className={styles.cardin}>
                        <div className={styles.cardinleft}>
                            <div className={styles.row1}>
                                <div className={styles.bluebtn}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>


                                    <p>Airdrop</p>
                                </div>

                                <div className={styles.weather}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                    </svg>
                                    <p>It's Raining</p>
                                </div>

                                <div className={styles.date}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                                    </svg>
                                    <h2>Started </h2>
                                    <p>2023-02-25 12:35:05</p>
                                </div>
                            </div>

                            <div className={styles.row2}>
                                {/* fruits */}
                                <Image src={Fruiticon1} alt="event1" width={300} height={300} className={styles.fruits} />
                                <p>Fruit Salad Game</p>
                                <Image src={Fruiticon2} alt="event1" width={300} height={300} className={styles.fruits} />
                            </div>

                            <div className={styles.row3}>
                                <h2>Water</h2>
                                <p>x 100</p>
                            </div>

                            <div className={styles.row4}>
                                <p>Water Transactions:</p>
                                <div>
                                    <span>100</span>
                                    <p>Success</p>
                                </div>

                                <div>
                                    <span>0</span>
                                    <p>Processing</p>
                                </div>

                                <div>
                                    <span>0</span>
                                    <p>Failed</p>
                                </div>
                            </div>

                            <div className={styles.fillout}>
                                <div className={styles.fillin1}></div>
                            </div>

                            <div className={styles.row5}>
                                <p className={styles.btnblack}>More Details</p>
                                {/* <p className={styles.btnwhite}>Cancel</p> */}
                                {/* <div>
                                    <input type="checkbox" />
                                    <p>Recieve report on email</p>
                                </div> */}
                            </div>
                        </div>
                        <div className={styles.cardinright}>
                            <Image className={styles.img1} src={event2} alt="event1" width={300} height={300} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.overview}>
                <h2>Overview</h2>
                <div className={styles.overviewcard}>
                    <div className={styles.overviewcardin}>
                        <p>Wallet balance</p>

                        <span>0.489 ETH

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>
                </div>

                <div className={styles.overviewcard}>
                    <h3>NFTs</h3>
                    <div className={styles.overviewcardin}>
                        <p>NFT Items</p>
                        <span>187

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>

                    <div className={styles.overviewcardin}>
                        <p>Collections</p>
                        <span>5

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>

                    <div className={styles.overviewcardin}>
                        <p>Minted</p>
                        <span>39

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>
                </div>

                <div className={styles.overviewcard}>
                    <h3>Saved Searches</h3>
                    <div className={styles.overviewcardin}>
                        <p>Green apple</p>
                        <span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>

                    <div className={styles.overviewcardin}>
                        <p>Christmas tree</p>
                        <span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>
                </div>

                <div className={styles.overviewcard}>
                    <h3>Recent Activity</h3>
                    <div className={styles.overviewcardin}>
                        <p>Settings &gt; Account</p>
                        <span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>

                    <div className={styles.overviewcardin}>
                        <p>Sales reports</p>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventsandoverview