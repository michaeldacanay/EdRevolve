'use client';

import styles from './FormComponent.module.css';

import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { ConvexProvider, ConvexReactClient } from 'convex/react';
import { useMutation, useQuery } from '../convex/_generated/react';
import MyApp from '../pages/_app.jsx';

export default function FormComponent() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [addIn, setAddIn] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    // const sendMessage = useMutation("sendMessage");
    // const [newMessageText, setNewMessageText] = useState("");

    // async function handleSendMessage(event) {
    //     event.preventDefault();
    //     setNewMessageText("");
    //     await sendMessage(newMessageText, username);
    // }

    return (
        <main className={styles.main}>
        {/* <ul>
            {messages.map(message => (
            <li key={message._id.toString()}>
                <span>{message.author}:</span>
                <span>{message.body}</span>
                <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
            </li>
            ))}
        </ul> */}
        {/* <form onSubmit={handleSendMessage}> */}
        <form>
            <h1>Booking Details</h1>
            <div>
                <ul>
                    <li>
                        <input className={styles.radioBtn} type="radio" value="Geography" name="subject" /> Geography
                    </li>
                    <li>
                        <input className={styles.radioBtn} type="radio" value="Science" name="subject" /> Science
                    </li>
                    <li>
                        <input className={styles.radioBtn} type="radio" value="History" name="subject" /> History
                    </li>
                </ul>
                <DatePicker className={styles.formInput} selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            
            
            <h3>Contact Information</h3>
            <input
                value={name}
                onChange={event => setName(event.target.value)}
                placeholder="Name"
                className={styles.formInput}
            />
            <input
                value={phoneNumber}
                onChange={event => setPhoneNumber(event.target.value)}
                placeholder="Phone Number"
                className={styles.formInput}
            />
            <input
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder="Email"
                className={styles.formInput}
            />
            <input
                value={school}
                onChange={event => setSchool(event.target.value)}
                placeholder="School"
                className={styles.formInput}
            />
            <h2>School Address</h2>
            <input
                value={street}
                onChange={event => setStreet(event.target.value)}
                placeholder="Street"
                className={styles.formInput}
            />
            <input
                value={city}
                onChange={event => setCity(event.target.value)}
                placeholder="City"
                className={styles.formInput}
            />
            <input
                value={state}
                onChange={event => setState(event.target.value)}
                placeholder="State"
                className={styles.formInput}
            />
            <input
                value={zip}
                onChange={event => setZip(event.target.value)}
                placeholder="Zip"
                className={styles.formInput}
            />
            <input
                value={addIn}
                onChange={event => setAddIn(event.target.value)}
                placeholder="Additional Information/Remarks"
                className={styles.formInput}
            />

        </form>
        </main>
    );
}

// function FormComponentApp() {
//     return (
//       <ConvexProvider>
//         <FormComponent />
//       </ConvexProvider>
//     );
// }

// export default FormComponentApp;