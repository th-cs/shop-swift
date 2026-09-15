import { Image } from "react-native";
import {
	ButtonText,
	CreateAccountButton,
	Field,
	FormContainer,
	HighlightText,
	Input,
	InputsContainer,
	LabelText,
	LoginText,
	NavigationText,
	SignUpContainer,
	SignUpContent,
	TitleText
} from "./style";
import Logo from "../../assets/logo-img.png";

export const SignUp = () => {
	return(
		<SignUpContainer>
			<Image source={Logo}/>
			<SignUpContent>
				<TitleText>
					Crie uma conta <HighlightText>e se surpreenda</HighlightText>
				</TitleText>
				<FormContainer>
					<InputsContainer>
						<Field>
							<LabelText>E-mail: </LabelText>
							<Input keyboardType="email-address"/>
						</Field>
						<Field>
							<LabelText>Senha: </LabelText>
							<Input secureTextEntry={true}/>
						</Field>
					</InputsContainer>
					<CreateAccountButton>
						<ButtonText>Criar conta</ButtonText>
					</CreateAccountButton>
				</FormContainer>
				<LoginText>
					Já tem uma conta? <NavigationText>Fazer login</NavigationText>
				</LoginText>
			</SignUpContent>
		</SignUpContainer>
	);
}
