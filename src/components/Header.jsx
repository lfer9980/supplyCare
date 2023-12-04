import React, { useContext } from "react";
import Link from "next/link";
import styles from '@/styles/components/Header.module.scss';

function Header({ data }) {
	return (
		<header className={styles.header}>
			<div className={styles.header__user}>
				<figure className={styles.header__user__profile}>
					<img src="/assets/images/profile.png" alt="profile photo" />
				</figure>
				<p className="p1">
					Hola! <b>{data.primer_nombre}</b>.
				</p>
			</div>
			<figure className={styles.header__logo}>
				<img src="/assets/images/logo.png" alt="logotipo supplyCare" />
			</figure>
			<div className={styles.header__logout}>
				<Link className="button-black" href="/">
					<span className="material-symbols-outlined">
						logout
					</span>
					Salir
				</Link>
			</div>
		</header>
	);
}



export { Header };