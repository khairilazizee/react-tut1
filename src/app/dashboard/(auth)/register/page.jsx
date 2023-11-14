"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Register = () => {
    const [err, setError] = useState(false);
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input className={styles.input} name="name" type="text" placeholder="Name" />
                <input className={styles.input} name="email" type="email" placeholder="Email" />
                <input className={styles.input} name="password" type="password" placeholder="Password" />
                <button className={styles.button}>Register</button>
            </form>
            <Link href="/login">Have an account. Login</Link>
        </div>
    )
}

export default Register