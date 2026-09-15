import { Image, ScrollView } from "react-native";
import {
	HomeContainer,
	Scroll,
	SectionHighlights,
	TextHighlight,
	TitleHighlight
} from "./style";
import Logo from "../../assets/logo-img.png";
import Highlight01 from "../../assets/highlight-image-01.png";
import Highlight02 from "../../assets/highlight-image-02.png";
import Highlight03 from "../../assets/highlight-image-03.png";
import {CategorySection} from "../../components/CategorySection";

export const Home = () => {
	return (
		<ScrollView>
			<HomeContainer>
				<Image source={Logo}/>
				<SectionHighlights>
					<TitleHighlight>
						Nossos <TextHighlight>Destaques</TextHighlight>
					</TitleHighlight>
					<Scroll horizontal showsHorizontalScrollIndicator={false}>
						<Image source={Highlight01}/>
						<Image source={Highlight02}/>
						<Image source={Highlight03}/>
					</Scroll>
				</SectionHighlights>
				<CategorySection />
			</HomeContainer>
		</ScrollView>
	);
}
