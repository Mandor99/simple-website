import styled from 'styled-components';
import { colors, paddings, margins, media } from '../Styles/Global';

const Section = styled.section`
	height: 80vh;
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url('./images/about-bg.jpg') center/cover fixed;

	${media.tab} {
		display: flex;
		align-items: center;
	}

	.content {
		width: 50%;
		float: right;
		padding-top: ${paddings.innerPadding};

		${media.tab} {
			width: 100%;
			float: none;
			padding: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${margins.gap1};
		}
	}

	h3 {
		font-size: 3rem;
		text-transform: capitalize;
	}

	h4 {
		font-size: 2.5rem;
		text-transform: capitalize;
		color: ${colors.primary};
	}

	p {
		font-size: 0.9rem;
		color: ${colors.gray1};
		margin-top: ${margins.gap0};
	}
`;

export { Section };
