import type { NextPage } from "next";
import Head from "next/head";
import { PopularCategories, ProductModal } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Unity Recruitment Tasks</title>
      </Head>

      <PopularCategories />
      <ProductModal />
    </div>
  );
};

export default Home;
