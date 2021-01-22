import styled from 'styled-components';
import { colors, paddings, size, margins, media } from '../Styles/Global';

const WorkContent = styled.section`
	padding: 2rem 0;
	/* display: flex;
	flex-wrap: wrap; */
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	justify-content: space-between;
	align-items: center;
	gap: ${margins.gap1};

	${media.mobile} {
		grid-template-columns: 1fr;
	}

	& > * {
		/* flex: 1; */
		padding: ${paddings.innerPadding} 0;
		border: 1px solid ${colors.gray2};
		text-align: center;
	}

	.work__icon {
		width: ${size.iconSize1};
		height: ${size.iconSize1};
		fill: ${colors.gray2};
	}

	.work__title {
		color: ${colors.primary};
		font-weight: bold;
		font-size: 1.5rem;

		&::after {
			content: '';
			display: block;
			border-bottom: 1px solid ${colors.gray2};
			margin: 1rem auto;
			width: 60%;

			${media.mobile} {
				width: 40%;
			}
		}
	}

	.work__content {
		color: ${colors.gray2};
		font-size: 0.8em;
		padding: ${paddings.padding1};
	}
`;

export { WorkContent };
