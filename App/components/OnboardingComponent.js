import React from 'react';
import {View, StyleSheet, ImageBackground, Text, Image, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';

function OnboardingComponent({id, imageLink, title, subtitle}) {
    const navigation = useNavigation();
    return  (
        <ImageBackground style={styles.background} source={require('../assets/onboarding.png')}>
            <Text style={styles.skip} onPress={()=>navigation.navigate("Onb5")}>SKIP</Text>
            <Image style={styles.onbpic} source={imageLink}/>  
            <Text style={styles.title}>{title}</Text>  
            <Text style={styles.subtitle}>{subtitle}</Text>     
            <View style={styles.navcircle}>
               {id==1 && <View style={styles.selnav}/>}
               <View style={styles.unselnav}/>
               {id==2 && <View style={styles.selnav}/>}
               <View style={styles.unselnav}/>
               {id==3 && <View style={styles.selnav}/>}
               <View style={styles.unselnav}/>
               {id==4 && <View style={styles.selnav}/>}
            </View>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("Onb"+(id+1))}>
            <View style={styles.nextbutton}>
                {id!==4 && <Text style={styles.pntext}>Next</Text>}
                {id==4 && <Text style={styles.pntext}>Start</Text>}
            </View>
            </TouchableWithoutFeedback>
            {id!==1 && 
            <TouchableWithoutFeedback onPress={()=>navigation.navigate("Onb"+(id-1))}>
            <View style={styles.prevbutton}>
                <Text style={styles.pntext}>Previous</Text>
            </View>
            </TouchableWithoutFeedback>
            }
        </ImageBackground>  
    );
}

const styles = StyleSheet.create({
    background: {
        height:'100%',
        width:'100%'
    },
    onbpic:{
        height: 220,
        width: 250,
        left: 85,
        top: 80,
        position:'absolute'
    },
    skip:{
        color:colors.white,
        position:'absolute',
        top: 40,
        left: 330,
    },
    title:{
        position:'absolute',
        top: 400,
        fontSize:28,
        textAlign:'center',
        color:colors.black,
        alignSelf:'center',
        fontWeight:800,

    },
    subtitle:{
        position:'absolute',
        top:500,
        textAlign:'center',
        fontSize:22,
        alignSelf:'center',
        fontWeight: 400,
    },
    navcircle:{
        flexDirection:'row',
        alignSelf:'center',
        top:700,
    },
    selnav:{
        width:28,
        height:10,
        borderRadius:10,
        backgroundColor:colors.primary,
        margin:5,
    },
    unselnav:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:colors.light,
        margin:5,
    },
    nextbutton:{
        alignSelf:'flex-end',
        width:120,
        height:50,
        backgroundColor:colors.primary,
        top:665,
        borderBottomLeftRadius:25,
        borderTopLeftRadius:25,
        alignItems:'center',
        justifyContent:'center',
    },
    pntext:{
        color:colors.white,
        fontSize: 20,
        fontWeight:400,
    },
    prevbutton:{
        width:120,
        height:50,
        backgroundColor:colors.primary,
        top:615,
        borderBottomRightRadius:25,
        borderTopRightRadius:25,
        alignItems:'center',
        justifyContent:'center',
    },
});

export default OnboardingComponent;