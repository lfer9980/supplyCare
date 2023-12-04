import React from 'react'
import styles from "@/styles/components/forms/InputSign.module.scss";

function InputSign({ title, name, date, type }) {
    return (
        <label className={styles.input_sign}>
            <p className={styles.input_sign__title}>
                {title}
            </p>
            <div className={styles.input_sign__main}>
                <input
                    name={name}
                    id={name}
                    type={type}
                    value={date}
                    required={true}
                />
            </div>
            <p className={styles.input_sign__trigger}>
                
            </p>
        </label>
    );
}

export { InputSign };