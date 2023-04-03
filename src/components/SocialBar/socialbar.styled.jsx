import styled from "styled-components";

export const SocialBar = styled.nav`
	margin-top: 8rem;
	min-height: 25vh;
	width: 5vw;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	position: absolute;
	right: 0;

	img {
		transition: ease-in 0.3s;
		cursor: pointer;

		&:hover {
			transform: translateY(-0.2rem);
			opacity: 0.6;
		}
	}
`;
