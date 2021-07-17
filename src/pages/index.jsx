import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Banner from "../components/Hero";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div className="bg-black">
      <Head>
        <title>Promoção de Livros</title>
        <meta name="description" content="Sebo virtual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full">
        <NavBar />
      </header>

      <main className="flex w-full md:flex-column">
        <ContactUs />
        <Banner />
      </main>

      <footer className="block py-5 text-center text-gray-600 w-full  md:flex-column">
        @Copyright João Guilherme - 2021
      </footer>
    </div>
  );
}
