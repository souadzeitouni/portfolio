import Link from 'next/link';
import Navbar from '../components/Navbar';
import Head from 'next/head'

function About() {
	return (
		<>
			<Head>
			  <title>About</title>
			</Head>
			<Navbar />
			<section className="hero">
			  <div className="container">
			    <div className="text-wrapper w-full">
			      <h1 className="title">About</h1>
			      <p className="description">
					My name is <b>Souad Zeitouni</b>, a freelance Frontend Developer and a Interior design architecture post-graduate from <a href="https://www.uauim.ro/en/">“Ion Mincu” University of Architecture and Urban Planning</a>.
			      </p>
		      </div>
	      </div>
			</section>
		</>
	);
}

export default About;