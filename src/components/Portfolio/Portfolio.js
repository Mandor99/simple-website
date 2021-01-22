import React, { useState, useEffect } from 'react';
import { Heading, Section, Ul, Li, Gallery } from './PortfolioStyle';
import axios from 'axios';
import { Btn2 } from '../Styles/ButtonsStyle';

function Portfolio() {
	const [photo, setPhoto] = useState([]);
	useEffect(() => {
		axios.get('./data.json').then((res) => {
			setPhoto(res.data.portfolio);
		});
	}, []);
	const gallery = photo.map((item) => {
		return (
			<figure className='gallery__wrapper' key={item.id}>
				<img src={item.image} alt='project thumb' className='gallery__img' />
				<figcaption className='gallery__caption'>
					<Btn2>show image</Btn2>
				</figcaption>
			</figure>
		);
	}, []);
	return (
		<Section className='main__gap'>
			<Heading>my portfolio</Heading>
			<Ul>
				<Li className='portfolio__items' active={true}>
					all
				</Li>
				<Li className='portfolio__items'>react</Li>
				<Li className='portfolio__items'>photoshop</Li>
				<Li className='portfolio__items'>wordpress</Li>
				<Li className='portfolio__items'>mobile</Li>
			</Ul>
			<Gallery>{gallery}</Gallery>
		</Section>
	);
}

export default Portfolio;
