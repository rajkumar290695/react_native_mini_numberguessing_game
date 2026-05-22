import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';   


function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>{guess}</Text>
        </View>
    );
}
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4, // Android    
        shadowColor: 'black', // iOS
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
    },
    itemText: { 
        fontSize: 16,
        fontFamily: 'open-sans',
    },
});     

