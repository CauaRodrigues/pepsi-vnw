import React, { useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";

export default function Home() {
	const [theme, setTheme] = useState("blue");
	const [pepsi, setPepsi] = useState("blue");

	const handlerPepsi = (pepsiAndTheme) => {
		setTheme(pepsiAndTheme);
		setPepsi(pepsiAndTheme);
	};

	return (
		<>
			<GlobalStyles bgcolor={theme} />

			<Header />

			<main>
				<Hero image={pepsi} />
				<SocialBar />
				<Footer handlerPepsi={handlerPepsi} />
			</main>
		</>
	);
}
