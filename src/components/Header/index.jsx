import React from "react";
import * as S from "./header.styled";

export default function Header() {
	return (
		<S.Header>
			<img src="assets/logo.png" alt="logo pepsi" />

			<S.Menu>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>

					<li>
						<a href="#produtos">Products</a>
					</li>

					<li>
						<a href="#new">What's New</a>
					</li>

					<li>
						<a href="#newsletter">Newsletter</a>
					</li>

					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</S.Menu>
		</S.Header>
	);
}
