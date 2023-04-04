import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";

export default function Home() {
	const hasStorage = localStorage.getItem("pepsi") || "blue";

	const [pepsi, setPepsi] = useState(hasStorage);

	const handlerPepsi = (pepsiType) => setPepsi(pepsiType);

	useEffect(() => {
		localStorage.setItem("pepsi", pepsi);
	}, [handlerPepsi]);

	return (
		<>
			<GlobalStyles bgcolor={pepsi} />

			<Header />

			<main>
				<Hero image={pepsi} />
				<SocialBar />
				<Footer handlerPepsi={handlerPepsi} />
			</main>
		</>
	);
}
