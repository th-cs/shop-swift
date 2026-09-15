import { Image, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./style";
import Logo from "../../assets/logo-img.png";

export const Login = () => {
	return(
		<View style={styles.loginContainer}>
			<Image source={Logo}/>
			<View style={styles.loginContent}>
				<Text style={styles.titleText}>
					Faça login e se <Text style={styles.highlightText}>surpreenda</Text>
				</Text>
				<View style={styles.formContainer}>
					<View style={styles.inputsContainer}>
						<View>
							<Text>E-mail:</Text>
							<TextInput keyboardType="email-address" style={styles.input}/>
						</View>
						<View>
							<Text>Senha:</Text>
							<TextInput secureTextEntry={true} style={styles.input}/>
						</View>
					</View>
					<Pressable style={styles.loginButton}>
						<Text style={styles.loginText}>Entrar</Text>
					</Pressable>
				</View>
				<Text style={styles.signUp}>
					Não tem uma conta? <Text style={styles.signUpText}>Criar conta</Text>
				</Text>
			</View>
		</View>
	);
}
