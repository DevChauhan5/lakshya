'use client';
import React from 'react'
import styles from './style.module.css';

export default function index({index, title, desc, setModal}:{index: number, title: string, desc:string, setModal: any}) {

    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}