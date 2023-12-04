import { Header } from "@/components/Header";
import { SideMenu } from "@/components/SideMenu";
import { SessionContext } from "@/context/SessionContext";
import React, { useContext } from "react";

import styles from "@/styles/pages/Create.module.scss"
import { InputText } from "@/components/forms/InputText";
import { InputSelection } from "@/components/forms/InputSelection";
import { FormAdd } from "@/components/forms/FormAdd";
import { InsumosTable } from "@/layouts/InsumosTable";

export default function Create() {

    const { user_data } = useContext(SessionContext);

    const form_head_keys = [
        'Hospital',
        'Departamento',
        'Paciente',
        'Sala de operación',
        'Cirugia realizada',
        'Hora programada de la cirugia',
        'Fecha de la cirugia',
    ]

    return (
        <>
            <Header data={user_data[1]} />
            <main className="main-home">
                <SideMenu />
                <section className="section-home">
                    <h3>Crear orden de insumos para almacén</h3>
                    <div className={styles.create_head}>
                        <p className="p1 bold green100">
                            Datos de la cirugía
                        </p>
                        <form className={styles.create_form}>
                            <div className={styles.create_form__head}>
                                {form_head_keys.map((item, i) => (
                                    <InputText
                                        title={item}
                                        name={item}
                                        key={i}
                                    />
                                ))}
                            </div>
                        </form>
                    </div>

                    <div className={styles.create_insumos}>
                        <p className="p1 bold green100">
                            Añadir insumos
                        </p>
                        <form className={styles.create_form}>
                            <div className={styles.create_form__search}>
                                <InputSelection
                                    title={'Buscar rápida por clave'}
                                    name={'clave'}
                                >
                                    <option value="opcion 1"></option>
                                    <option value="opcion 2"></option>
                                </InputSelection>
                                <InputSelection
                                    title={'Buscar por nombre'}
                                    name={'nombre'}
                                >
                                    <option value="opcion nombre 1"></option>
                                    <option value="opcion nombre 2"></option>
                                </InputSelection>
                                <FormAdd >
                                    nuevo insumo
                                </FormAdd>
                            </div>
                        </form>
                    </div>

                    <div className={styles.create_list}>
                        <p className="p1 bold green100">
                            Listado de insumos
                        </p>
                        <InsumosTable
                            data={[
                                {
                                    "id": "1234567890",
                                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                                    "solicitado": 2,
                                },
                                {
                                    "id": "1234567890",
                                    "descripcion": "Aguja para estimulación nerviosa A025MM",
                                    "solicitado": 2,
                                },
                            ]}
                            headers={[
                                'Clave del articulo',
                                'Descripcion',
                                'Cantidad solicitada',
                            ]}
                        />
                    </div>
                    <div className={styles.create_buttons}>
                        <button className="button-green" type="button">
                            <span className="material-symbols-outlined">
                                check_circle
                            </span>
                            Confirmar orden
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}