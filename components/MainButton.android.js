import React from "react";
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  Text,
  TouchableNativeFeedback,
  Platform,
  TouchableNativeFeedbackBase,
} from "react-native";
import Colors from "../constants/colors";
import colors from "../constants/colors";

function MainButton(props) {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS ===  Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: "open-sans",  
    fontSize: 18,
  },
  buttonContainer:{
    borderRadius: 25,
    overflow: 'hidden'
  }
});

export default MainButton;