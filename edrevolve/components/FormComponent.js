'use client';

import { useState } from 'react';
import styles from './FormComponent.module.css';

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

    return (
        <main className={styles.main}>
        <h1>Booking Details</h1>
        <div>
            <ul>
                <li>
                    <input type="radio" value="Geography" name="subject" /> Geography
                </li>
                <li>
                    <input type="radio" value="Science" name="subject" /> Science
                </li>
                <li>
                    <input type="radio" value="History" name="subject" /> History
                </li>
            </ul>
        </div>
        <h3>Contact Information</h3>
        <input
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Name"
        />
        <input
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
            placeholder="Phone Number"
        />
        <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="Email"
        />
        <input
            value={school}
            onChange={event => setSchool(event.target.value)}
            placeholder="School"
        />
        <h2>School Address</h2>
        <input
            value={street}
            onChange={event => setStreet(event.target.value)}
            placeholder="Street"
        />
        <input
            value={city}
            onChange={event => setCity(event.target.value)}
            placeholder="City"
        />
        <input
            value={state}
            onChange={event => setState(event.target.value)}
            placeholder="State"
        />
        <input
            value={zip}
            onChange={event => setZip(event.target.value)}
            placeholder="Zip"
        />
        <input
            value={addIn}
            onChange={event => setAddIn(event.target.value)}
            placeholder="Additional Information/Remarks"
        />
        </main>
    );
}