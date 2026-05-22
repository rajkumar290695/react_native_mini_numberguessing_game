import React, { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from 'react-native-linear-gradient';
import StartGameScreen from '../minigame/src/screens/StartGameScreen';
import GameScreen from '../minigame/src/screens/GameScreen';
import GameOverScreen from '../minigame/src/screens/GameOverScreen';
import colors from "../minigame/src/constants/colors";
 

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
