import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';


function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title='NEW GAME' onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
