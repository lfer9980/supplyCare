import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { SessionContext } from "@/context/SessionContext";
import React, { useContext, useEffect, useState } from "react";

import styles from "@/styles/pages/Home.module.scss"
import { CardOrderData } from "@/components/cards/CardOrderData";

export default function Home() {

    const [orderById, setOrderById] = useState();

    const { user_data, order } = useContext(SessionContext);

    useEffect(() => {
        let order_id = order[0]
        setOrderById(order_id);
    }, [])


    return (
        <>
            <Header data={user_data[0]} />
            <main className="main-home--doctors">
                <SideMenu />
                <section className="section-home">
                    <h3>Pagina principal</h3>
                    <div className={styles.home_order}>
                        <p className="p1 bold green100">
                            Ultima orden pendiente de surtirse
                        </p>
                        {orderById ?
                            <CardOrderData data={orderById.data} />
                            :
                            null
                        }
                        <div className={styles.home_buttons}>
                            <button className="button-blue" type="button">
                                Ver detalle de la solicitud
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}