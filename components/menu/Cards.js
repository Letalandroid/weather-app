import CardMini from './CardMini';
import { Fetching } from '../../utilities/fetching';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { useFonts } from 'expo-font';
import Icon_Search from 'react-native-vector-icons/Fontisto';
import Icon_Move from 'react-native-vector-icons/AntDesign';

export default function Cards({
	country='',
	setCity,
	setMove,
	setViewSearch,
	viewSearch,
}) {
	const setearCountry = (text) => {
		country = text;
	};

	country === '' || country.startsWith(' ') && setearCountry('Dejaste el campo vacio gil.');

	const [scroll, setScroll] = useState(0);
	const [url] = useState(`https://restcountries.com/v3.1/name/${country}`);
	const estado = Fetching(url);
	const { cargando, data } = estado;

	const [loaded] = useFonts({
		Impact: require('../../assets/fonts/impact.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<View
			style={{
				position: 'relative',
				top: scroll,
				width: '100%',
				height: '85%',
				paddingVertical: 20,
				justifyContent: 'space-evenly',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: 20,
			}}>
			{cargando ? (
				<Text style={styles.text}>Cargando...</Text>
			) : data.status !== 404 ? (
				data.map((country, index) => {
					return (
						<CardMini
							name={country.translations.spa.common}
							flag={country.flags.png}
							setMove={setMove}
							setCity={setCity}
							key={`${index}_${country}`}
						/>
					);
				})
			) : (
				<View>
					<Text style={styles.text}>Pais no encontrado</Text>
					<TouchableHighlight
						onPress={() => {
							setCity(country);
							setMove(false);
						}}
						underlayColor="#fffc"
						style={styles.btn}>
						<Text style={styles.btn_text}>Pos chinga a tu madre</Text>
					</TouchableHighlight>
				</View>
			)}
			<View
				style={{
					position: 'absolute',
					bottom: viewSearch ? scroll + 170 : scroll - 10,
					right: 0,
				}}>
				<TouchableHighlight
					underlayColor="#fffd"
					style={styles.btn_search}
					onPress={() => setScroll(scroll + 20)}>
					<Icon_Move name="caretup" size={30} />
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="#fffd"
					style={styles.btn_search}
					onPress={() => setScroll(scroll - 20)}>
					<Icon_Move name="caretdown" size={30} />
				</TouchableHighlight>
				<TouchableHighlight
					underlayColor="#fffa"
					style={styles.btn_search}
					onPress={() => setViewSearch(true)}>
					<Icon_Search name="search" size={30} />
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		fontSize: 24,
		fontFamily: 'Impact',
		letterSpacing: 2.5,
		textAlign: 'center',
		marginTop: 20,
	},
	btn: {
		height: 60,
		marginVertical: 20,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: '#fff',
		borderRadius: 15,
	},
	btn_text: {
		textAlign: 'center',
		fontFamily: 'Boogaloo',
		fontSize: 30,
	},
	btn_search: {
		marginVertical: 10,
		backgroundColor: '#fff',
		padding: 15,
		borderRadius: 15,
	},
});
