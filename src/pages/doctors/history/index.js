import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { CardTimeline } from "@/components/cards/CardTimeline";
import { SessionContext } from "@/context/SessionContext";
import React, { useContext } from "react";

import styles from "@/styles/pages/History.module.scss";

export default function History() {

    const { user_data, order } = useContext(SessionContext);

    return (
        <>
            <Header data={user_data[0]} />
            <main className="main-home">
                <SideMenu />
                <section className="section-home">
                    <div className={styles.timeline_scroller}>
                        {order ?
                            order.map((item, i) => (
                                <CardTimeline 
                                    info={item} 
                                    user={"doctors"}
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
