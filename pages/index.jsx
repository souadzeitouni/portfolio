import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title bg-black">Hello! My name is Souad Zeitouni</h1>
            <p className="description">Currently looking for open positions as a Frontend Developer<a href="https://www.uauim.ro/en/"></a>“Ion Mincu” University of Architecture and Urban Planning</p>
            <Link href="/CV.pdf"><a className="cta">My Resume</a></Link>
          </div>
        <img className="image-wrapper" src="/souad.jpg" alt="cartoon me" />

        </div>
      </section>
    </>
  );
}

export default Home;