import styled, { css } from 'styled-components';
import { colors, margins, media } from '../Styles/Global';

const Profile = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	${media.tab} {
		grid-template-columns: 1fr;
		gap: ${margins.gap2};
	}
`;

const Ul = styled.ul`
	margin-top: ${margins.gap0};

	.profile {
		&__wrapper {
			display: flex;
			gap: ${margins.gap1};
		}
		&__heading {
			flex-basis: 60px;
			text-transform: capitalize;
		}
		&__details {
			text-transform: capitalize;
		}
	}
`;
const Article = styled.article`
	display: flex;
	flex-direction: column;
	gap: ${margins.gap0};

	.skills {
		&__details {
			line-height: 1.5;
			color: ${colors.gray2};
			font-size: 0.9rem;
		}
	}
`;

const Skill = styled.div`
	display: flex;
	justify-content: space-between;

	.skill {
		&__lang {
			text-transform: capitalize;
		}

		&__progress {
			padding-right: 10rem;
		}
	}
`;

const Hr = styled.hr`
	background-color: ${colors.primary};
	width: ${(props) => props.width || 0};
	height: 2px;
	border: none;
	outline: none;
`;

export { Profile, Ul, Article, Skill, Hr };
