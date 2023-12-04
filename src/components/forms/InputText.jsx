import React from "react";
import styles from "@/styles/components/forms/InputText.module.scss";

function InputText({ title, name, placeholder, onChange, value}) {
	return (
		<label className={styles.input_text} htmlFor={name}>
			{
				title ?
					<p className="p1">
						{title}
					</p>
				:
				null
			}
			<input
				name={name}
				id={name}
				placeholder={placeholder}
				type="text"
				onChange={onChange}
				value={value}
			/>
		</label>
	);
}

export { InputText };