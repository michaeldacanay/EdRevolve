'use client';

import React, { useState } from 'react';
import styles from './FormComponent.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        
        
        <h3>Contact Information</h3>
        <input
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="Name"
            className='input'
        />
        <input
            value={phoneNumber}
            onChange={event => setPhoneNumber(event.target.value)}
            placeholder="Phone Number"
            className='input'
        />
        <input
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="Email"
            className='input'
        />
        <input
            value={school}
            onChange={event => setSchool(event.target.value)}
            placeholder="School"
            className='input'
        />
        <h2>School Address</h2>
        <input
            value={street}
            onChange={event => setStreet(event.target.value)}
            placeholder="Street"
            className='input'
        />
        <input
            value={city}
            onChange={event => setCity(event.target.value)}
            placeholder="City"
            className='input'
        />
        <input
            value={state}
            onChange={event => setState(event.target.value)}
            placeholder="State"
            className='input'
        />
        <input
            value={zip}
            onChange={event => setZip(event.target.value)}
            placeholder="Zip"
            className='input'
        />
        <input
            value={addIn}
            onChange={event => setAddIn(event.target.value)}
            placeholder="Additional Information/Remarks"
            className='input'
        />
        </main>
    );
}