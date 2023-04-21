import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

function ErrorMessage({errorMessage, tops, lefts, visible}) {
    if(!visible || !errorMessage) return null;

    return  (
        <Text style = {[styles.errors, {top:tops, left:lefts}]}>{errorMessage}</Text>
    );
}

const styles = StyleSheet.create({
    errors: {
        color:'red',
        position:'absolute'
    }
});

export default ErrorMessage;