import React from "react";
import styles from "@/styles/components/forms/FormAdd.module.scss";

function FormAdd({ children, onClick }) {
	return (
		<div 
			className={styles.form_add}
			onClick={onClick}
		>
			<p className="p1">
				Añadir {children}
			</p>
			<div className={styles.form_add__button}>
				<span className="material-symbols-outlined">
					library_add
				</span>
			</div>
		</div>
	);
}

export { FormAdd };