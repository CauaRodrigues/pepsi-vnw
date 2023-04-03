import styled from "styled-components";

export const Hero = styled.section`
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.content--text {
		width: 45%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 1rem;

		button {
			cursor: pointer;
			padding: 12px 16px;
			border-radius: 43px;
			text-transform: uppercase;
			font-weight: 500;
			font-size: min(0.9rem, 3vw);
			background-color: #fff;
		}

		p {
			font-size: min(1.08rem, 4vw);
		}

		h1 {
			font-size: min(3rem, 6vw);
			line-height: 0.5;
			span {
				display: block;
				font-size: min(4.5rem, 8vw);
			}
		}
	}

	figure {
		flex: 1;
	}
`;
