import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Work from '../Work/Work';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';

function Home() {
	return (
		<div>
			<Hero />
			<Work />
			<Portfolio />
			<Skills />
			<About />
		</div>
	);
}

export default Home;
