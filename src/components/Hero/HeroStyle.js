import styled from 'styled-components';
import { colors } from '../Styles/Global';

const Header = styled.header`
	height: 85vh;
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		url('./images/home-bg.jpg') center/cover fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1.5rem;
`;

const HeroName = styled.h2`
	color: ${colors.gray1};
	font-size: 3rem;
	text-transform: capitalize;
`;
const HeroJob = styled(HeroName)`
	color: ${colors.primary};
	font-size: 2.5rem;
`;
const JobDescription = styled.p`
	color: ${colors.gray2};
	text-transform: capitalize;
	font-size: 1.2rem;
	text-align: center;
	width: 60%;

	span {
		color: ${colors.black};
		text-transform: uppercase;
	}
`;
export { Header, HeroName, HeroJob, JobDescription };
