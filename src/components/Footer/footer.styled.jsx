import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	margin: 10px 0;

	position: absolute;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	img {
		width: 64px;
	}

	button {
		cursor: pointer;
		background: transparent;
		transition: ease-in 0.6s;

		&:hover {
			transform: translateY(-1.5rem);
		}
	}
`;
