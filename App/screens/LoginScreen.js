import React from 'react';
import {Text, StyleSheet, ImageBackground, Image } from 'react-native';
import colors from '../config/colors';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    mobileNumber: Yup.string().matches(/^\d{10}$/, 'Please enter a valid mobile number').required().label("Mobile Number")
})

function LoginScreen({navigation}) {
    return  (
        <ImageBackground style={styles.background} 
        source={require('../assets/loginBackground.png')}>
            <Image resizeMode='contain' style={styles.logo} 
              source={require('../assets/edwiseLogo.png')}/>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.subHeading}>Please sign in to continue</Text>
            
            <AppForm initialValues={{mobileNumber:''}} onSubmit={(values)=>navigation.navigate("Login2", {"mob": values.mobileNumber})}
              validationSchema={validationSchema}>
                <AppFormField fieldTitle={"Enter Mobile Number"}  name={"mobileNumber"}
                fieldContent={"+91"} keyboardType="numeric" textContentType="telephoneNumber" errTops={478}/>
                
                <SubmitButton name={"mobileNumber"} title={"Send OTP"} tops={400}/>
            </AppForm>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        height:'100%',
        width:'100%'
    },
    logo:{
        width:'80%',
        top: 80,
        alignSelf:'center',
    },
    heading:{
        color:colors.black,
        position:'absolute',
        top:370,
        left:30,
        fontWeight:800,
        fontSize:36,
    },
    subHeading:{
        color:colors.black,
        fontWeight:400,
        fontSize:22,
        position:'absolute',
        top:420,
        left:30
    },
});

export default LoginScreen;