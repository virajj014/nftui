import Image from 'next/image'
import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'

import styles from '../styles/HomeCards1.module.css'
const HomeCards1 = () => {
    return (
        <div className={styles.homecards1}>
            <div className={styles.homecards1__card1}>
                <Image src={img1} alt="img1" width={80} />
                <p>NFT Management</p>
            </div>
            <div className={styles.homecards1__card2}>
                <Image src={img2} alt="img2" width={80}/>
                <p>Find Holders</p>

            </div>
            <div className={styles.homecards1__card3}>
                <Image src={img3} alt="img3" width={80} />
                <p>Airdrop</p>
            </div>
            <div className={styles.homecards1__card4}>
                <Image src={img4} alt="img4" width={80} />
                <p>Trade-in</p>
            </div>
            <div className={styles.homecards1__card5}>
                <Image src={img5} alt="img5" width={80} />
                <p>Sales</p>
            </div>
        </div>
    )
}

export default HomeCards1