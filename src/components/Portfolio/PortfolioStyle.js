// import React from 'react';
import styled, { css } from 'styled-components';
import { colors, H2, paddings, margins } from '../Styles/Global';

const Section = styled.section`
	background-color: ${colors.gray3};
`;

const Heading = styled(H2)`
	text-align: center;
`;

const Ul = styled.ul`
	display: flex;
	justify-content: center;
	/* gap: ${margins.gap1}; */
	padding: ${paddings.padding1} 0;
`;
const Li = styled.li`
	text-transform: capitalize;
	${(props) =>
		props.active &&
		css`
			background-color: ${colors.primary};
			color: ${colors.white};
		`}
	padding: 0.5em 2em;
	text-transform: capitalize;
	font-size: 1.2rem;
	font-weight: 400;
	transition: all 0.2s ease;
	cursor: pointer;
`;
const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));

	.gallery {
		&__img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		&__wrapper {
			position: relative;
			height: 100%;
		}

		&__caption {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			background-color: ${colors.light1};
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0;
			transition: opacity 0.2s ease;

			&:hover {
				opacity: 1;
			}
		}
	}
`;

// const CaptionBtn = styled(Btn2)`

// `;
export { Section, Heading, Ul, Li, Gallery };
