import React from 'react';
import { Header, HeroName, HeroJob, JobDescription } from './HeroStyle';
import { Btn1 } from '../Styles/ButtonsStyle';

function Hero() {
	return (
		<Header>
			<HeroName>mahmoud mandor</HeroName>
			<HeroJob as='h3'>front end developer</HeroJob>
			<JobDescription>
				Iam a professional <span>UX Designer</span> and{' '}
				<span>Front-End Developer</span> creating modern and responsive designs
				to Web and Mobile. Let us work together. Thank you.
			</JobDescription>
			<Btn1>let's begin</Btn1>
		</Header>
	);
}

export default Hero;
