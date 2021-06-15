import Head from "next/head";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>GymStation</title>
      </Head>

      <main className={styles.mainContainer}>
        <form>
          <label htmlFor="gender">Gênero</label>
          <div id="gender">
            <button type="button" className={styles.selected}>Feminino</button>
            <button type="button">Masculino</button>
          </div>
          <label htmlFor="age">Idade</label>
          <div id="age">
            <input type="number" placeholder="35" />
            <span>35</span>
          </div>
          <label htmlFor="height">Altura</label>
          <div id="height">
            <input type="number" placeholder="1.60" />
            <span>m</span>
          </div>
          <label htmlFor="weight">Peso</label>
          <div id="weight">
            <input type="number" placeholder="62.5" />
            <span>m</span>
          </div>
          <label htmlFor="waist">Circunferência da cintura</label>
          <div id="waist">
            <input type="number" placeholder="120" />
            <span>cm</span>
          </div>
          <label htmlFor="neck">Circunferência do pescoço</label>
          <div id="neck">
            <input type="number" placeholder="120" />
            <span>cm</span>
          </div>
          <label htmlFor="hip">Circunferência do quadril</label>
          <div id="hip">
            <input type="number" placeholder="120" />
            <span>cm</span>
          </div>
          <label htmlFor="gender">Atividade física</label>
          <div id="gender">
            <button type="button">Sedentária</button>
            <button type="button" className={styles.selected}>Moderada</button>
            <button type="button">Intensa</button>
          </div>
          <button type="submit">Calcular</button>
        </form>
      </main>
    </>
  );
}
