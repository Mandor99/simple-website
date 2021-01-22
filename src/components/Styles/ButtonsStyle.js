import styled from 'styled-components';
import { colors } from './Global';

const Btn1 = styled.a`
	color: ${colors.white};
	background-color: ${colors.primary};
	padding: 0.5em 1em;
	text-transform: capitalize;
	font-size: 1.3rem;
	font-weight: 500;
	border: none;
	outline: none;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: ${colors.primary};
		background-color: ${colors.white};
	}
`;

const Btn2 = styled(Btn1)`
	background-color: ${colors.white};
	color: ${colors.primary};
	border: 2px solid ${colors.primary};
	font-size: 1rem;
	color: ${colors.black};
`;

export { Btn1, Btn2 };
