import {
	CategoryContainer,
	HighlightText,
	Scroll,
	TitleText
} from "./style";
import { CategoryCard } from "./CategoryCard";
import ShoeIcon from "../../assets/shoe-icon.png";
import HeadsetIcon from "../../assets/headset-icon.png";
import ShirtIcon from "../../assets/shirt-icon.png";
import GamesIcon from "../../assets/games-icon.png";
import IceBoxIcon from "../../assets/ice-box-icon.png";

export const CategorySection = () => {

	return (
		<CategoryContainer>
			<TitleText>
				Nossas <HighlightText>Categorias</HighlightText>
			</TitleText>
			<Scroll horizontal showsHorizontalScrollIndicator={false}>
				<CategoryCard image={ShoeIcon} name="Tênis"/>
				<CategoryCard image={HeadsetIcon} name="Eletrônicos"/>
				<CategoryCard image={ShirtIcon} name="Camisetas"/>
				<CategoryCard image={GamesIcon} name="Jogos"/>
				<CategoryCard image={IceBoxIcon} name="Eletrodomésticos"/>
			</Scroll>
		</CategoryContainer>
	);
}
