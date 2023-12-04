"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/components/cards/CardTimeline.module.scss";

function CardTimeline({ info, isSelected, user }) {

	return (
		<Link
			className={styles.timeline_card_wrapper}
			href={`/${user}/detail/${info.id}`}
		>
			<div className={styles.timebar}>
				<span className={`${info.color}-back ${styles.timebar__icon}`} />
				<div className={`${styles.timebar__line} ${info.color}-back`} />
			</div>


			<article className={`${styles.timeline_card} ${isSelected ? styles.timeline_card_selected : ''}`}>
				<div className={styles.timeline_card__date} >
					<span className="pills black-back psmall">
						{info.data["Fecha de la cirugia"]}
					</span>
				</div>
				<div className={styles.timeline_card__info}>
					<p className="psmall green100">
						orden No. {info.id}
					</p>
					<p className="p1 bold">
						{info.data["Hospital"]}
					</p>
					<p className={"psmall bold blue100"}>
						{info.data["Paciente"]}
					</p>
					<p className={"psmall"}>
						{info.data["Sala de operacion"]}
					</p>
					<p className={"psmall gray700"}>
						{info.data["Cirugia realizada"]}
					</p>
				</div>

				<div className={styles.timeline_card__end}>
					<span className={`pills ${info.color}-back p1`}>
						{info.status}
					</span>
					<div
						className={styles.timeline_card__end__button}
					>
						Ver orden completa
						<span className="material-symbols-outlined">
							arrow_forward
						</span>
					</div>
				</div>
			</article>
		</Link>
	);
}

export { CardTimeline };