import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import { APP_ID } from 'env';
import Menu from './screens/Menu';

export default function App() {
	const [city, setCity] = useState('Arica');
	const [temperatura, setTemperatura] = useState('');
	const [humedad, setHumedad] = useState('');
	const [viento, setViento] = useState('');
	const [icon, setIcon] = useState('');
	const [move, setMove] = useState(false);

	const valisteMadres = () => {
		setHumedad('0');
		setTemperatura('0');
		setViento('0');
		alert(`No pos mi king, si valiste madres, no existe la ciudad "${city}"`);
	};

	useEffect(() => {
		const options = {
			method: 'GET',
		};

		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`,
			options
		)
			.then((res) => res.json())
			.then((data) => {
				setTemperatura(Math.round(data.main.temp - 273.15));
				setHumedad(data.main.humidity);
				setViento(data.wind.speed);
				setIcon(`http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
			})
			.catch(() => valisteMadres());
	}, [city]);

	return (
		<>
			<View style={move ? styles.container_left : styles.container}>
				<Home
					city={city.charAt(0).toUpperCase() + city.slice(1)}
					humedad={humedad}
					icon={icon}
					temperatura={temperatura}
					viento={viento}
				/>
				<Menu setMove={setMove} setCity={setCity} />
			</View>
			<Navbar setMove={setMove} />
			<StatusBar style="light" />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#2A2A2A',
	},
	container_left: {
		position: 'absolute',
		left: '-100%',
		width: '100%',
		height: '100%',
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#2A2A2A',
	},
});
