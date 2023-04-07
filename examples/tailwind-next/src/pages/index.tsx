import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Flek Next Demo</title>
        <meta name="description" content="Flek Next Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className="text-white text-text bg-primary rounded-s">Hello</div>
      <div className="text-white text-head w-1/2 bg-secondary rounded-s">Flek</div>
      </main>
    </>
  );
}
