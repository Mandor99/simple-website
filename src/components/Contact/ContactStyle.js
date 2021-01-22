import styled from 'styled-components';
import { margins, colors, media, H2 } from '../Styles/Global';

const Section = styled.section`
	min-height: 80vh;
`;

const Head = styled(H2)`
	font-size: 3.5rem;
	text-align: center;
`;

const Form = styled.form`
	margin: ${margins.gap2} auto;
	/* height: 80vh; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${margins.gap0};
	width: 70%;

	${media.tab} {
		width: 100%;
	}

	.input__wrapper {
		display: flex;
		gap: ${margins.gap0};
		justify-content: space-between;
		width: 90%;

		${media.tab} {
			flex-direction: column;
			/* width: 100%; */
		}

		input[type='text'] {
			flex-basis: 50%;

			${media.tab} {
				flex-basis: 100%;
				width: 100%;
			}
		}

		input[type='email'] {
			flex: 1 1 50%;

			${media.tab} {
				flex: 1 1 100%;
				width: 100%;
			}
		}
	}

	input,
	textarea {
		width: 90%;
		border-radius: 10px;
		border: 1px solid ${colors.gray1};
		outline: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		font-family: inherit;
		font-size: 1.1rem;
		font-weight: 400;

		::placeholder {
			font-size: 0.9rem;
		}
	}
`;

export { Form, Section, Head };
