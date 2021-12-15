import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";


export default function Card(props) {

    const [propsList, setPropsList] = useState([])

    const handleClick = (e) => {
        console.log(props);
    }

    return (
        <div className={styles.cards}>
            <h1>{props.title}</h1>
            <h3>{props.desc}</h3>
            {props.image && <img src={props.image} alt="Mon image" width="100%" height="100%"/>}
            <h3>{props.price}€</h3>
            <button onClick={handleClick}>View props</button>
        </div>
    )
}