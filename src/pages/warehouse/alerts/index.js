import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { CardNotification } from "@/components/cards/CardNotification";
import { SessionContext } from "@/context/SessionContext";
import React, { useContext } from "react";

import styles from "@/styles/pages/Alerts.module.scss"

export default function Alerts() {

    const { user_data, alerts } = useContext(SessionContext);


    return (
        <>
            <Header data={user_data[1]} />
            <main className="main-home">
                <SideMenu />
                <section className="section-home">
                    <h3>Alertas</h3>
                    <div className={styles.alerts_container}>
                        {alerts ?
                            alerts.map((item, i) => (
                                <CardNotification
                                    title={item.title}
                                    text={item.text}
                                    isRead={item.read}
                                    key={i}
                                />
                            ))
                            :
                            null
                        }
                    </div>
                </section>
            </main>
        </>
    )
}
