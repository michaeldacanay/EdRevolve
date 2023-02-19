import * as React from 'react';

import Image from 'next/image'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './page.module.css'

import FormComponent from '../../components/FormComponent';
import ButtonComponent from '../../components/ButtonComponent';

// const FormComponent = dynamic(() => import('../../components/FormComponent'), {
//     ssr: false,
// });

async function getDataTreehack() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    return data;
}

function handleSubmit(event: React.MouseEvent) {
    event.preventDefault();

    const options = {
        method: 'POST',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        body: JSON.stringify({
          recipient: 'testing@checkbook.io',
          name: 'Widgets Inc.',
          amount: 5,
          description: 'Test Payment'
        })
    };
    fetch('https://demo.checkbook.io/v3/check/digital', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
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
            
            <div className={styles.form}>
                <FormComponent />
            </div>

            <div className={styles.submitBtn}>
                <Link href="/confirmation">
                    <ButtonComponent />
                </Link>
            </div>
        </>
    );
}