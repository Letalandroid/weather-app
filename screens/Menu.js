import {
	StyleSheet,
	View,
	TextInput,
	StatusBar,
	TouchableHighlight,
	Text,
	ScrollView,
} from 'react-native';
import { useFonts } from 'expo-font';
import Cards from '../components/menu/Cards';
import { useState } from 'react';

export default function Menu({ setCity, setMove }) {
	const [country, setCountry] = useState('');
	const [search, setSearch] = useState(false);
	const [viewSearch, setViewSearch] = useState(true);

	const [loaded] = useFonts({
		Boogaloo: require('../assets/fonts/Boogaloo-Regular.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<>
			<View style={styles.container}>
				{viewSearch && (
					<>
						<TextInput
							style={styles.input}
							placeholder="Busca tu ciudad/pais"
							placeholderTextColor="#595959"
							onChangeText={(value) => {
								setSearch(false);
								setCountry(value);
							}}
						/>
						<TouchableHighlight
							onPress={() => {
								setSearch(true);
								setViewSearch(false);
							}}
							underlayColor="#fffc"
							style={styles.btn}>
							<Text style={styles.btn_text}>Buscar</Text>
						</TouchableHighlight>
					</>
				)}
				{search != '' && (
					<Cards
						setViewSearch={setViewSearch}
						setMove={setMove}
						setCity={setCity}
						country={country}
					/>
				)}
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'relative',
		zIndex: 5,
		width: '100%',
		alignItems: 'center',
		backgroundColor: '#2A2A2A',
		paddingTop: StatusBar.currentHeight,
		paddingHorizontal: 20,
	},
	input: {
		position: 'relative',
		zIndex: 5,
		width: '100%',
		height: 60,
		borderColor: '#8B8B8B',
		borderWidth: 3,
		margin: 20,
		borderRadius: 15,
		paddingHorizontal: 20,
		color: '#ddd',
		fontSize: 26,
		fontFamily: 'Boogaloo',
	},
	btn: {
		position: 'relative',
		zIndex: 5,
		width: '100%',
		paddingVertical: 10,
		backgroundColor: '#fff',
		borderRadius: 15,
	},
	btn_text: {
		textAlign: 'center',
		fontFamily: 'Boogaloo',
		fontSize: 30,
	},
});
