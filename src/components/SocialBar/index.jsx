import React from "react";
import * as S from "./socialbar.styled";

export default function SocialBar() {
	return (
		<S.SocialBar>
			<img src="/assets/social/facebook.png" alt="facebook icon" />
			<img src="/assets/social/twitter.png" alt="twitter icon" />
			<img src="/assets/social/instagram.png" alt="instagram icon" />
		</S.SocialBar>
	);
}
