import { useMutation, useQuery } from '../../convex/_generated/react';
import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './page.module.css'


const FormComponent = dynamic(() => import('../../components/FormComponent'), {
    ssr: false,
});

async function getDataTreehack() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return data;
}

export default function AboutPage() {
    return (
        <>
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
            
            
            <FormComponent />
        </>
    );
}