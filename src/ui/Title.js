import { Text } from "react-native";
import { StyleSheet } from "react-native";

function Title({children}) {    
    return (
        <Text style={styles.title}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        margin : 20
    },
});

export default Title;