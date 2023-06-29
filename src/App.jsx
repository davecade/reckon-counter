import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import ReckonLogo from "./components/ReckonLogo/ReckonLogo";

function App() {
	const [increment, setIncrement] = useState(0);

	useEffect(() => {
		const interval = setInterval(
			() => setIncrement((prev) => prev + 1),
			2000
		);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className={styles.app}>
			<div className={styles.counter_container}>
				<ReckonLogo />
				<h1 className={styles.counter_label}>Counter: {increment}</h1>
				<button
					className={styles.custom_button}
					onClick={() => setIncrement((prev) => prev + 1)}
				>
					Increment
				</button>
			</div>
		</div>
	);
}

export default App;
