import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from '../constants/colors';


function NumberComponent(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
}

const styles=StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor:colors.primary,
        padding: 10,
        marginVertical: 10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,

    },
    number: {
        color: colors.secondary
    }
})

export default NumberComponent;
