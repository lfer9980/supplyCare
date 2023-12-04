import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { SessionContext } from "@/context/SessionContext";
import React, { useContext, useEffect, useState } from "react";

import styles from '@/styles/pages/Detail.module.scss'
import { DataElement } from "@/components/DataElement";
import { useRouter } from "next/router";
import { TagsDeck } from "@/components/TagsDeck";
import { CardOrderData } from "@/components/cards/CardOrderData";
import { InsumosTable } from "@/layouts/InsumosTable";

export default function Detail() {

    const { query } = useRouter();
    const [orderById, setOrderById] = useState();
    const { user_data, order } = useContext(SessionContext);

    useEffect(() => {
        let order_id = order.find((element) => element.id === query.id);
        setOrderById(order_id);
    }, [query.id])

    return (
        <>
            <Header data={user_data[1]} />
            {
                orderById &&
                <>
                    <main className="main-home">
                        <SideMenu />
                        <section className="section-home">
                            <h3>Detalle de la orden</h3>
                            <div className={styles.detail_head}>
                                <DataElement data={{
                                    "title": "Orden No.",
                                    "text": `${orderById.id}`,
                                    "style": "blue100 bold"
                                }} />
                                <TagsDeck
                                    text={orderById.status}
                                    color={orderById.color}
                                />
                            </div>
                            <CardOrderData data={orderById.data} />
                            <InsumosTable 
                                data={orderById.insumos} 
                                headers={[
                                    'Clave del articulo',
                                    'Descripcion',
                                    'Cantidad solicitada',
                                ]}
                                user={"warehouse"}
                            />

                            <div className={styles.detail_buttons}>
                                <button className="button-red" type="button">
                                    <span className="material-symbols-outlined">
                                        warning
                                    </span>
                                    Reportar un problema
                                </button>
                                <button className="button-green" type="button">
                                    <span className="material-symbols-outlined">
                                        check_circle
                                    </span>
                                    Marcar como enviada
                                </button>
                            </div>
                        </section>
                    </main>
                </>
            }
        </>
    )
}
