import { StyleSheet, Text, View, Image } from 'react-native';
import DataHome_Mini from '../components/dataHome_mini';
import GeoLocation from 'react-native-geolocation-service';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function Home({ temperatura, icon, city, humedad, viento }) {
	const [loaded] = useFonts({
		Impact: require('../assets/fonts/impact.ttf'),
	});

	if (!loaded) {
		return null;
	}

	return (
		<View style={styles.borderWhite}>
			<LinearGradient
				colors={['#0000ff', '#80d1ff']}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.subcontainer}>
				<View style={{ alignItems: 'center' }}>
					{icon && <Image source={{ uri: icon }} style={styles.icon} />}
					<Text style={styles.text}>{temperatura}°C</Text>
				</View>
				<View>
					<DataHome_Mini tipo="Ciudad" data={city} />
					<DataHome_Mini tipo="Humedad" data={`${humedad}%`} />
					<DataHome_Mini last={true} tipo="Viento" data={`${viento}mph`} />
				</View>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	subcontainer: {
		height: '98%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		borderColor: '#fff',
		borderBottomLeftRadius: 110,
		borderBottomRightRadius: 110,
		paddingVertical: 50,
	},
	text: {
		fontFamily: 'Impact',
		fontSize: RFPercentage(15),
		color: '#fff',
	},
	borderWhite: {
		width: '100%',
		height: '82%',
		backgroundColor: '#fff',
		borderBottomLeftRadius: 110,
		borderBottomRightRadius: 110,
		elevation: 15,
		shadowColor: '#fff',
	},
	icon: {
		width: 100,
		height: 100,
	},
});
