import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './page.module.css'

export default function AboutPage() {

    return (
        <div className={styles.main}>
            <div className={styles.banner}>
                <Link href="/">
                    <Image
                        src="/EdRevolve Logo (TreeHacks).png"
                        alt="EdRevolve Logo"
                        width={180}
                        height={180}
                        priority
                    />
                </Link>
            </div>

            <h3>You have been booked.</h3>
            <h3>Thank you for booking with us! You will receive an invoice soon.</h3>
        </div>
    );
}