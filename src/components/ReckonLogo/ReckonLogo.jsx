import styles from "./ReckonLogo.module.scss";

const ReckonLogo = () => {
	return (
		<div className={styles.logo_container}>
			<div className={styles.logo}>
				<div className={styles.logo_letter}>R</div>
				<div className={styles.color_one}></div>
				<div className={styles.color_two}></div>
				<div className={styles.color_three}></div>
				<div className={styles.color_four}></div>
				<div className={styles.color_five}></div>
				<div className={styles.color_six}></div>
			</div>
		</div>
	);
};

export default ReckonLogo;
