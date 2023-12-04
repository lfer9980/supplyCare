import React from "react";

import styles from "@/styles/components/cards/CardOrderData.module.scss"
import { DataElement } from "../DataElement";

function CardOrderData({ data }) {

    let order_data = Object.entries(data)
    console.log(order_data)
    return (
        <div className={styles.card_order_data}>
            {
                order_data.map((item, i) => (
                    <DataElement data={{
                        "title": item[0],
                        "text": item[1],
                    }}
                        key={i}
                    />
                ))
            }
        </div>
    )
}

export { CardOrderData };