import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from '../components/TitleText';
import { Colors } from "react-native/Libraries/NewAppScreen";

function Header(props) {
  return (
    <View style={{...styles.headerBase, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    
    alignItems: "center",
    justifyContent: 'center',

    
  },
  headerIOS:{
    borderBottomColor: '#ccc',
    borderBottomWidth:  1,
    backgroundColor: 'white',
  },
  headerAndroid:{
    backgroundColor: colors.secondary,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.Primary : 'white',

  },
});
export default Header;
