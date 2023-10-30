import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <Link href="/portfolio/applications" className={styles.portfolio}>
                <div className={styles.title}>Applications</div>
            </Link>
            <Link href="/portfolio/illustrations" className={styles.portfolio}>
                <div className={styles.title}>Illustration</div>
            </Link>
            <Link href="/portfolio/websites" className={styles.portfolio}>
                <div className={styles.title}>Websites</div>
            </Link>
        </div>
    )
}

export default Portfolio