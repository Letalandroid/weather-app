import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';

export default function DataHome_Mini({ tipo, data, last }) {

	const [loaded] = useFonts({
		Boogaloo: require('../assets/fonts/Boogaloo-Regular.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<View style={last ? styles.last : styles.container}>
			<Text style={styles.text}>{tipo}:</Text>
			<Text style={styles.margin}>{data}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 150,
		alignItems: 'center',
		borderBottomColor: '#fff',
		borderBottomWidth: 2,
		paddingVertical: 15,
	},
	last: {
		paddingTop: 15,
		alignItems: 'center',
	},
	text: {
		fontFamily: 'Boogaloo',
		fontSize: 26,
		color: '#fff',
	},
	margin: {
		fontFamily: 'Boogaloo',
		color: '#fff',
		fontSize: 26,
		textAlign: 'center',
	},
});