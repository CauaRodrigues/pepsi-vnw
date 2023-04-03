import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	padding: 24px 16px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const Menu = styled.nav`
	width: 45%;

	ul {
		width: 100%;
		display: flex;
		justify-content: space-around;
		gap: 1rem;

		li {
			transition: ease 0.2s;

			&:hover {
				transform: scale(1.1);
				opacity: 0.7;
			}

			a {
				font-size: min(1.2rem, 3.2vw);
				font-weight: 400;
				color: #fff;
				text-transform: capitalize;
			}
		}
	}
`;
