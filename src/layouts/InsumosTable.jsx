import React from "react";

import styles from "@/styles/layouts/InsumosTable.module.scss"
import { InputText } from "@/components/forms/InputText";

function InsumosTable({ data }) {
    return (
        <div className={styles.insumos_table}>
            <div className={styles.insumos_table__head}>
                <p className="p1 bold">
                    Clave del articulo
                </p>
                <p className="p1 bold">
                    Descripcion
                </p>
                <p className="p1 bold">
                    Cantidad solicitada
                </p>
                <p className="p1 bold">
                    Cantidad recibida
                </p>
            </div>
            <div className={styles.insumos_table__main}>
                {
                    data.map((item, i) => {
                        return (
                            <div className={`${styles.insumos_table__row} ${i % 2 === 0 ? "coral200-back" : ""}`} key={i}>
                                <p className="psmall">
                                    {item.id}
                                </p>
                                <p className="psmall">
                                    {item.descripcion}
                                </p>
                                <p className="psmall bold">
                                    {`${item.solicitado} unidades`}
                                </p>
                                <InputText />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { InsumosTable }