import React from "react";

import styles from "@/styles/components/SideMenu.module.scss"

function SideMenu() {
    return (
        <aside className={styles.side_menu}>
            <div className={styles.side_menu__stick}>
                <p className={styles.side_menu__button}>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    Inicio
                </p>
                <p className={styles.side_menu__button}>
                    <span className="material-symbols-outlined">
                        History
                    </span>
                    Historial
                </p>
                <p className={styles.side_menu__button}>
                    <span className="material-symbols-outlined">
                        notification_important
                    </span>
                    Alertas
                </p>
            </div>
        </aside>
    )
}

export { SideMenu }