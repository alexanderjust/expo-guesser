import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";
import MainButton from '../components/MainButton';

function GameOverScreen(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          //source={{uri:'https://pbs.twimg.com/profile_images/438756755397300224/kp8rmJes_400x400.jpeg'}}
          source={require("../assets/success.png")}
          resizeMethod="resize"
          //fadeDuration={1000} fade duration for the image fetched from the internet
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}> 
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>
    NEW GAME

      </MainButton>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 3,
    overflow: "hidden",
    marginVertical: 20,
  },
  highlight: {
    color: colors.secondary,
    fontFamily: "open-sans-bold",
  },
  resultContainer:{
    marginHorizontal: 40,
    marginVertical: 15,
  },
  resultText:{
    textAlign: 'center',
    fontSize: 20,
  }
});

export default GameOverScreen;
