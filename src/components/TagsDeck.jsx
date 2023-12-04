import React from "react";
import styles from "@/styles/components/TagsDeck.module.scss";

function TagsDeck({text, color}) {
	return (
		<div className={styles.tag_deck}>
			<span className={`${styles.pill} p1 ${color}-back`}>
				{text}
			</span>
		</div>
	);
}

export { TagsDeck };