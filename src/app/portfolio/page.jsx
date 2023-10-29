import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <Link href="/portfolio/applications">Applications</Link>
            <Link href="/portfolio/illustrations">Illustrations</Link>
            <Link href="/portfolio/websites">Websites</Link>
        </div>
    )
}

export default Portfolio