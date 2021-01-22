import styled from 'styled-components';
const colors = {
	primary: '#eb552f',
	white: '#fff',
	black: '#000',
	gray1: '#5e5e5e',
	gray2: '#888888',
	gray3: '#f8f8f8',
	light1: 'rgba(285, 85, 47, .4)',
};

const shadows = {
	shadow1: '0 3px 3px rgba(0, 0, 0, .2)',
};

const paddings = {
	innerPadding: '7rem',
	padding1: '1rem',
};

const margins = {
	gap0: '1rem',
	gap1: '2rem',
	gap2: '4rem',
};

const size = {
	iconSize1: '2.5rem',
};

const H2 = styled.h2`
	color: ${colors.black};
	font-size: 3rem;
	font-weight: bold;
	text-transform: capitalize;
`;

const H3 = styled(H2)`
	font-size: 2.5rem;
`;

const bp = {
	mobile: '500px',
	tab: '768px',
	lap: '992px',
	desk: '1200px',
};

const media = {
	mobile: `@media only screen and (max-width: ${bp.mobile})`,
	tab: `@media only screen and (max-width: ${bp.tab})`,
	lap: `@media only screen and (min-width: ${bp.tap})`,
};

export { colors, shadows, H2, H3, paddings, size, margins, bp, media };
