import { Image } from "react-native";
import { CategoryBox, CategoryText } from "./style";

export const CategoryCard = ({ image, name }) => {

	return (
		<CategoryBox>
			<Image source={image}/>
			<CategoryText>{name}</CategoryText>
		</CategoryBox>
	);
}
