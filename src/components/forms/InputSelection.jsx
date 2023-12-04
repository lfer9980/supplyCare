import React from "react";
import styles from "@/styles/components/forms/InputSelection.module.scss";

function InputSelection({ title, name, isHelp, children, isBold, onChange, value }) {
	return (
		<label className={styles.input_selection} htmlFor={name}>
			<p className={`p1 ${isBold ? 'bold' : ''}`}>
				{title}
				{isHelp &&
					<span className="material-symbols-rounded">
						help
					</span>
				}
			</p>
			<input
				list={name}
				onChange={onChange}
				value={value}
			/>
			<datalist
				id={name}
			>
				{children}
			</datalist>
		</label>
	);
}

export { InputSelection };