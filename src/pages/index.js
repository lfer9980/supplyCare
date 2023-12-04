import React, { useContext, useEffect } from 'react';

import styles from "@/styles/pages/Landing.module.scss";
import { MenuSign } from '@/components/forms/MenuSign';
import { MenuSelectUser } from '@/components/forms/MenuSelectUser';

export default function Home() {

	const [SignIn, setSignIn] = React.useState(false);

	const hanlderSignIn = () => {
		setSignIn(true)
	}

	return (
		<>
			<main className={styles.landing_hero_container}>
				<div className={styles.landing_hero}>
					<figure className={styles.landing_hero__icon}>
						<img src='/assets/images/logo.png' />
					</figure>
				</div>
				{SignIn ?
					<MenuSelectUser />
					:
					<MenuSign onClick={hanlderSignIn}/>
				}
			</main>
		</>
	);
}

