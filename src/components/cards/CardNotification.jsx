import React from 'react';
import styles from "@/styles/components/cards/CardNotification.module.scss"

function CardNotification({ title, text, isRead }) {
	return (
		<div className={`${styles.card_notification} ${isRead ? styles.card_notification_read : ''} `}>
			<div>
				<span className={`${styles.card_notification__bullet}  ${isRead ? styles.card_notification__bullet_green : ''}`} />
			</div>
			<figure className={styles.card_notification__img}>				
				<span className="material-symbols-outlined">
					notification_important
				</span>
			</figure>
			<main className={styles.card_notification__main}>
				<p className='p1 bold'>
					{title}
				</p>
				<p className='psmall'>
					{text}
				</p>
			</main>
		</div>
	);
}

export { CardNotification };