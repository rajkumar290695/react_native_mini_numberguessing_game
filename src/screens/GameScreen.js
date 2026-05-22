import { useState, useEffect } from "react";
import { Alert, FlatList, Image, StyleSheet, View } from "react-native";
import Card from '../ui/Card'
import InstructionText from "../ui/InstructionText";
import NumberContainer from '../game/NumberContainer'
import PrimaryButton from "../ui/PrimaryButton";
import Title from '../ui/Title'
import GuessLogItem from "../ui/GuessLoginItem";


let minBoundary = 1;
let maxBoundary = 100;

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}   

function GameScreen({userNumber, onGameOver}) {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(minBoundary, maxBoundary, userNumber)
    )
    const [guessRounds, setGuessRounds] = useState([]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;  
    }, [])

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }   
    }, [currentGuess, userNumber, onGameOver])


    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
           Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }   
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLength = guessRounds.length;


    return (      
          <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Image source={require('../images/minus.png')} style={styles.image}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                             <Image source={require('../images/add.png')} style={styles.image}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.guessRoundsContainer}>
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item} />}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',   
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderwidth: 1,
    },
    guessRoundsContainer: {
        flex: 1,
        padding: 16,
    },
    image : {
        width: 24,
        height: 24,
    }
});   

export default GameScreen;
