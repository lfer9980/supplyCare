import React from "react";
import styles from "@/styles/components/cards/CardUserSelect.module.scss";
import Link from "next/link";

function CardUserSelect({ data, isblocked }) {

    return (
        <Link href={data.link}>
            <article
                className={`${styles.card_user_select} ${isblocked ? styles.card_user_select__blocked : ""
                    }`}
            >
                <figure className={styles.card_user_select__photo}>
                    <img src={data.foto} alt="foto de perfil" />
                </figure>
                <div
                    className={`${styles.card_user_select__main} ${isblocked ? styles.card_user_select__blocked__main : ""
                        }`}
                >
                    <p className="p1 bold">
                        {data.tipo === "almacen"
                            ? "Personal Almacen"
                            : "Médico Residente de Quirofano"}
                    </p>
                    <p className="psmall">
                        {`${data.primer_nombre} ${data.segundo_nombre} ${data.apellido_paterno} ${data.apellido_materno}`}
                    </p>
                </div>
            </article>
        </Link>
    );
}

export { CardUserSelect };
