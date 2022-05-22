import type { NextPage } from "next";
import Head from "next/head";
import { PopularCategories } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unity Recruitment Tasks</title>
      </Head>

      <PopularCategories />
    </div>
  );
};

export default Home;
