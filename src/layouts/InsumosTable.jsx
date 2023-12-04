import React from "react";

import styles from "@/styles/layouts/InsumosTable.module.scss"
import { InputText } from "@/components/forms/InputText";

function InsumosTable({ data, headers, user }) {
    return (
        <div className={styles.insumos_table}>
            <div className={styles.insumos_table__head}>
                {headers.map((item, i) => (
                    <p className="p1 bold" key={i}>
                        {item}
                    </p>
                ))}
            </div>
            <div className={styles.insumos_table__main}>
                {
                    data &&
                    data.map((item, i) => {
                        return (
                            <div className={`${styles.insumos_table__row} ${i % 2 === 0 ? "" : "coral200-back"}`} key={i}>
                                <p className="psmall">
                                    {item.id}
                                </p>
                                <p className="psmall">
                                    {item.descripcion}
                                </p>
                                <p className="psmall bold">
                                    {`${item.solicitado} unidades`}
                                </p>

                                {
                                    user === "warehouse" ?
                                        null
                                        :
                                        <>
                                            {item.recibido === undefined ?
                                                null
                                                :
                                                <InputText />
                                            }
                                        </>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export { InsumosTable }