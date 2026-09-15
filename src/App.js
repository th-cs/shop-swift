import { SafeAreaView } from "react-native-safe-area-context";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Home } from "./screens/Home";

export default function App() {
	return (
		<SafeAreaView>
			{/*<Login />*/}
			{/*<SignUp />*/}
			<Home />
		</SafeAreaView>
	);
}
