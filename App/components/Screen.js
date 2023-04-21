import React from 'react';
import constants from 'expo-constants';
import { View, StyleSheet } from 'react-native';

function Screen({children}) {
    return (
        <View style={styles.screen}> 
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: constants.statusBarHeight,
        flex:1
    }
})

export default Screen;