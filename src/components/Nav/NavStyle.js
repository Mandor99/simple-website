import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, shadows, media } from '../Styles/Global';

const Navbar = styled.nav`
	background-color: ${colors.white};
	box-shadow: ${shadows.shadow1};
	position: relative;

	${media.tab} {
		/* box-shadow: none; */
	}

	.nav__content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 10vh;
		position: relative;

		input[type='checkbox'] {
			display: none;

			&:checked ~ ul {
				opacity: 1;
				visibility: visible;
				/* width: 100%; */
				transform: scale(1);
			}

			&:checked ~ .nav__label span {
				background: transparent;

				&::before {
					transform: rotate(135deg);
					top: 0;
				}
				&:after {
					transform: rotate(-135deg);
					top: 0;
				}
			}
		}

		.nav__label {
			display: none;

			${media.tab} {
				width: 5rem;
				height: 5rem;
				border: 2px solid ${colors.primary};
				border-radius: 50%;
				text-align: center;
				cursor: pointer;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			span {
				display: none;

				${media.tab} {
					width: 3rem;
					height: 2px;
					position: relative;
					background-color: #000;
					display: inline-block;
					/* margin-top: 1.2rem; */
					cursor: pointer;
					transition: all 0.2s ease;

					&::before,
					&::after {
						left: 0;
						width: 3rem;
						height: 2px;
						background-color: #000;
						display: inline-block;
						cursor: pointer;
						content: '';
						position: absolute;
						transition: all 0.2s ease;
					}

					&::before {
						top: -0.8rem;
					}

					&::after {
						top: 0.8rem;
					}
				}
			}
		}
	}
`;

const NavLogo = styled.h1`
	font-size: 2rem;
	text-transform: capitalize;
	color: ${colors.black};
	cursor: pointer;
`;

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	align-items: center;

	${media.tab} {
		flex-direction: column;
		position: absolute;
		top: 10vh;
		width: 100%;
		background-color: rgba(255, 255, 255, 0.9);
		padding: 2rem 0;
		visibility: hidden;
		/* width: 0; */
		opacity: 0;
		transform: scale(0);
		box-shadow: ${shadows.shadow1};
		transition: all 0.2s ease-in-out;
	}
`;

const LinkNav = styled(Link)`
	color: ${colors.black};
	text-transform: capitalize;
	font-size: 1.2rem;
	transition: color 0.1s ease;

	&:hover {
		color: ${colors.primary};
	}
`;

export { Navbar, NavLogo, Ul, LinkNav };
