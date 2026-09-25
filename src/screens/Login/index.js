import { Image, Text, View } from "react-native";
import * as S from "./style";
import Logo from "../../assets/logo-img.png";

export const Login = () => {
	return(
		<S.LoginContainer>
			<Image source={Logo}/>
			<S.LoginContent>
				<S.TitleText>
					Faça login e se <S.HighlightText>surpreenda</S.HighlightText>
				</S.TitleText>
				<S.FormContainer>
					<S.InputsContainer>
						<View>
							<Text>E-mail:</Text>
							<S.Input keyboardType="email-address"/>
						</View>
						<View>
							<Text>Senha:</Text>
							<S.Input secureTextEntry={true}/>
						</View>
					</S.InputsContainer>
					<S.LoginButton>
						<S.LoginText>Entrar</S.LoginText>
					</S.LoginButton>
				</S.FormContainer>
				<S.SignUp>
					Não tem uma conta? <S.SignUpText>Criar conta</S.SignUpText>
				</S.SignUp>
			</S.LoginContent>
		</S.LoginContainer>
	);
}
