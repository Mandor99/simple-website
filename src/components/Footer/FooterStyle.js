import styled from 'styled-components';
import { colors, paddings } from '../Styles/Global';

const FOOTER = styled.footer`
	background-color: #f1f1f1;
	padding: ${paddings.padding1} 0;

	p {
		color: ${colors.gray1};
		text-transform: capitalize;
		text-align: center;

		span {
			color: ${colors.primary};
			text-transform: uppercase;
			font-weight: bold;
		}
	}
`;

export { FOOTER };
