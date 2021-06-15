import Head from "next/head";
import { useState } from "react";

import styles from "./home.module.scss";

export default function Home() {
  const [gender, setGender] = useState('female');
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [waist, setWaist] = useState();
  const [neck, setNeck] = useState();
  const [hip, setHip] = useState();
  const [activity, setActivity] = useState('regular');

  return (
    <>
      <Head>
        <title>GymStation</title>
      </Head>

      <main className={styles.mainContainer}>
        <form>
          <label htmlFor="gender">Gênero</label>
          <div id="gender">
            <button type="button" name="female" className={styles.selected}>Feminino</button>
            <button type="button" name="male">Masculino</button>
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
          <label htmlFor="activity">Atividade física</label>
          <div id="activity">
            <button type="button">Sedentária</button>
            <button type="button" name="regular" className={styles.selected}>Moderada</button>
            <button type="button">Intensa</button>
          </div>
          <button type="submit">Calcular</button>
        </form>
      </main>
    </>
  );
}
