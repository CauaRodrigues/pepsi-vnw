import React from "react";
import * as S from "./hero.styled";

export default function Hero({ image }) {
	return (
		<S.Hero>
			<div className="content--text">
				<h1>
					THAT'S WHAT <span>I LIKE</span>
				</h1>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sapiente
					aspernatur possimus odio accusantium inventore. Vel perferendis
					molestias a unde eum dolorem officia doloremque! Doloribus asperiores
					quas vitae quisquam libero.
				</p>

				<button>View all products</button>
			</div>

			<img src={`/assets/pepsi/${image}.png`} alt="pepsi" />
		</S.Hero>
	);
}
