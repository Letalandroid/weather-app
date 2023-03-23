import { View, StyleSheet, TouchableHighlight } from 'react-native';
import Icon_Home from 'react-native-vector-icons/Entypo';
import Icon_Menu from 'react-native-vector-icons/Feather';

export default function Navbar({ setMove }) {
	return (
		<View style={styles.container}>
			<View style={styles.subcontainer}>
				<TouchableHighlight
					onPress={() => {
						setMove(false);
					}}
					underlayColor="#363636"
					style={styles.navLeft}>
					<Icon_Home name="home" size={35} color="#fff" />
				</TouchableHighlight>
				<TouchableHighlight
					onPress={() => {
						setMove(true);
					}}
					underlayColor="#363636"
					style={styles.navright}>
					<Icon_Menu name="menu" size={35} color="#fff" />
				</TouchableHighlight>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		paddingTop: 10,
		backgroundColor: '#585858',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	subcontainer: {
		backgroundColor: '#2A2A2A',
		flexDirection: 'row',
		justifyContent: 'center',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	navLeft: {
		paddingVertical: 20,
		paddingHorizontal: '20.5%',
		borderTopLeftRadius: 20,
	},
	navright: {
		paddingVertical: 20,
		paddingHorizontal: '20.5%',
		borderTopRightRadius: 20,
	},
});
