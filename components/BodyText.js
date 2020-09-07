import React from "react";
import { StyleSheet, View, Text } from "react-native";

function BodyText(props) {
  return (
    <View>
      <Text style={styles.body}>
          {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    body: {
        fontFamily:'open-sans',
    }
});

export default BodyText;
