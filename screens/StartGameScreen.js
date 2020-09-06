import React from 'react'
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'

const StartGameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>🔥 START A NEW GAME 🔥 </Text>
            <View style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title='RESET'onPress={() => {}}/>
                    <Button title='CONFIRM' onPress={() => {}}/>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems:'center',
        shadow
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    }

})

export default StartGameScreen;

