// import fetch from 'isomorphic-unfetch';
'use client';

import styles from './ButtonComponent.module.css';

export default function ButtonComponent() {
  const handleClick = async () => {
    // const res = await fetch('/api/handleClick');
    // const data = await res.json();
    // console.log(data.message);
    const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            accept: 'application/json', 'content-type': 'application/json',
            Authorization: 'e0e83de00f1676669e6dc2686e872ee8:49bfd2be6e8bff2e8b0b20bee5e49f5e',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          recipient: 'mzdacana@ncsu.edu',
          name: 'EdRevolve',
          amount: 5,
          description: 'Test Payment'
        })
    };
    fetch('https://sandbox.checkbook.io/v3/check/digital', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  };

  return (
    <button className={styles.button1} onClick={handleClick}>Submit</button>
  );
};