import React from "react";
import * as S from "./footer.styled";

export default function Footer({ handlerPepsi }) {
	return (
		<S.Footer>
			<button onClick={() => handlerPepsi("blue")}>
				<img src="/assets/pepsi/blue.png" alt="pepsi blue" />
			</button>

			<button onClick={() => handlerPepsi("diet")}>
				<img src="/assets/pepsi/diet.png" alt="pepsi diet" />
			</button>

			<button onClick={() => handlerPepsi("zero")}>
				<img src="/assets/pepsi/zero.png" alt="pepsi zero sugar" />
			</button>
		</S.Footer>
	);
}
