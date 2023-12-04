import React from 'react'
import { InputSign } from '@/components/forms/InputSign';

import styles from "@/styles/components/MenuSign.module.scss";

function MenuSign({onClick}) {
    return (
        <div className={styles.menu_sign__container}>
            <form className={styles.menu_sign}>
                <h3>
                    Inicia sesión en SupplyCare.
                </h3>
                <p className={styles.menu_sign__text}>
                    Accede a la plataforma SupplyCare® con tu Correo y Contraseña.
                </p>
                <InputSign
                    title={"Correo electrónico"}
                />
                <InputSign
                    title={"Contraseña"}
                />
                <div className={"button-blue button-blue-margin"} onClick={onClick}>
                    Inicia sesión
                </div>
            </form>
        </div>
    );
}

export { MenuSign };