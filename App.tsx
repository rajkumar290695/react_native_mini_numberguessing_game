import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';
import StartGameScreen from '../minigame/src/screens/StartGameScreen';
import GameScreen from '../minigame/src/screens/GameScreen';
import GameOverScreen from '../minigame/src/screens/GameOverScreen';
import colors from "../minigame/src/constants/colors";
 

// Hi this is the main App component for a number guessing game.
//  It manages the state of the game, including the user's picked number, 
//  whether the game is over, and the number of rounds taken to guess the number.
//   The component renders different screens based on the current state of the game, 
//   such as the start screen, game screen, and game over screen. It also uses a linear
//    gradient background and an image background for styling.


function App() {
  
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  
  function pickedNumberHandler(pickedNumber : any) {
    console.log(pickedNumber);
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  function gameOverHandler(numberOfRounds : any) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  
  function startNewGameHandler() {
    setUserNumber('');
    setGuessRounds(0);
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }
  
  return (
    <LinearGradient colors={[colors.primary700, colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('../minigame/src/images/bgImg.jpg')} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient> 
  );

}

export default App;


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
