import Head from 'next/head';
import styles from 'styles/Home.module.css';
import { url } from 'utils/config';

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>pages/index.tsx</code>
					</p>
					<div>
						<a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
							{/* By <img src='/vercel.svg' alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} /> */}
							By <img src={url('/vercel.svg')} alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} />
						</a>
					</div>
				</div>
			</main>
		</>
	);
}
