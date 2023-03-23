import {
	StyleSheet,
	Text,
	Image,
	View,
	TouchableHighlight,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function CardMini({
	name,
	flag,
	setCity,
	setMove,
}) {
	const [loaded] = useFonts({
		Boogaloo: require('../../assets/fonts/Boogaloo-Regular.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<View>
			<TouchableHighlight
				onPress={() => {
					setMove(false);
					setCity(name);
				}}
				underlayColor="#8B8B8B"
				style={styles.container}>
				<View style={styles.container}>
					{flag && <Image source={{ uri: flag }} style={styles.flag} />}
					<Text style={styles.name}>{name}</Text>
				</View>
			</TouchableHighlight>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 160,
		height: 170,
		borderWidth: 5,
		borderColor: '#8B8B8B',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: 15,
	},
	flag: {
		width: 120,
		height: 85,
		borderRadius: 10,
	},
	name: {
		color: '#fff',
		fontSize: 25,
		fontFamily: 'Boogaloo',
		textAlign: 'center',
	},
});
