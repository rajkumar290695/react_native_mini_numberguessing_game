import { StyleSheet, View } from 'react-native';
import colors from '../constants/colors';

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.primary500,
        padding: 36,
        marginVertical: 8,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4, // Android
        shadowColor: 'black', // iOS
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
    },
});

export default Card;