import React, { useState, useEffect } from 'react';
import { WorkContent } from './WorkStyle.js';
import { H2 } from '../Styles/Global';
import axios from 'axios';

function Work() {
	const [hobby, setHobby] = useState([]);

	useEffect(() => {
		axios.get('./data.json').then((res) => {
			setHobby(res.data.works);
		});
	}, []);

	const hobbiesList = hobby.map((item) => (
		<div className='work' key={item.id}>
			<svg className='work__icon'>
				<use xlinkHref={item.icon}></use>
			</svg>
			<h3 className='work__title'>{item.title}</h3>
			<p className='work__content'>{item.body}</p>
		</div>
	));

	return (
		<section className='main__gap'>
			<div className='container'>
				<H2>my work</H2>
				<WorkContent>{hobbiesList}</WorkContent>
			</div>
		</section>
	);
}

export default Work;
