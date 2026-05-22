import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import PrimaryButton from "../ui/PrimaryButton";
import Title from "../ui/Title";
    

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style = {styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style = {styles.imageContainer}>
                <Image source={require('../images/gameover.jpg')} style={styles.image}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> {''} rounds to guess the number <Text style={styles.highlight}>{userNumber}  </Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {   
        width: 300,
        height: 300,
        borderRadius: 150,  
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },  
    highlight: {
        fontWeight: 'bold',
        color: colors.primary500,
    },
});


export default GameOverScreen;