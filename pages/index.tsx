import Head from "next/head";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShapeCademy</title>
      </Head>

      <main className={styles.mainContainer}>
        <h1>Hello World!</h1>
      </main>
    </>
  );
}
