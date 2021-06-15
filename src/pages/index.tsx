import Head from "next/head";
import { MouseEvent, useState } from "react";
import { InputRadio } from "../components/Form/InputRadio";
import { InputValue } from "../components/Form/InputValue";

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
          <InputRadio
            name="gender"
            label="Gênero"
            value={gender}
            onSelect={setGender}
          >
            <InputValue name="female">Feminino</InputValue>
            <InputValue name="male">Masculino</InputValue>
          </InputRadio>

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

          <InputRadio
            name="activity"
            label="Atividade física"
            value={activity}
            onSelect={setActivity}
          >
            <InputValue name="sedentary">Sedentária</InputValue>
            <InputValue name="regular">Moderada</InputValue>
            <InputValue name="intense">Intensa</InputValue>
          </InputRadio>
          <button type="submit">Calcular</button>
        </form>
      </main>
    </>
  );
}
