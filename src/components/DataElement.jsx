import React from "react";
import styles from "@/styles/components/DataElement.module.scss"

function DataElement({ data }) {
	return (
		<div className={styles.data_element}>
			<p className="psmall gray300">
				{data.title}
			</p>
			<p className={`p1 ${data.style}`}>
				{data.text}
			</p>
		</div>
	);
}

export { DataElement }; 