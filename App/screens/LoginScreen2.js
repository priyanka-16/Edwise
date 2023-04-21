import React from 'react';
import {Text, StyleSheet, ImageBackground, Image, View } from 'react-native';
import colors from '../config/colors';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
 
const validationSchema = Yup.object().shape({
    // mobileNumber: Yup.string().matches(/^\d{10}$/, 'Please enter a valid mobile number').required().label("Mobile Number"),
    otp: Yup.string().matches(/^\d{6}$/, 'Please enter 6 digit otp sent to your phone').required().label("OTP"),
})

function LoginScreen2({navigation, route}) {
    return  (
        <ImageBackground style={styles.background} 
        source={require('../assets/loginBackground.png')}>
            <Image resizeMode='contain' style={styles.logo} 
              source={require('../assets/edwiseLogo.png')}/>
            <Text style={styles.heading}>Welcome </Text>
            <Text style={styles.subHeading}>Please sign in to continue</Text>
            
            <AppForm initialValues={{mobileNumber:'', otp:''}} onSubmit={()=>navigation.navigate("Login3")}
              validationSchema={validationSchema}>
                <AppFormField fieldTitle={"Enter Mobile Number"}  name={"mobileNumber"}
                fieldContent={"+91"} keyboardType="numeric" textContentType="telephoneNumber" tops={300}
                defaultValue={route.params.mob} editable={false} clr={true}/>
                
                <AppFormField fieldTitle={"Enter OTP"}  name={"otp"} keyboardType="numeric" 
                textContentType="oneTimeCode" secureTextEntry tops={320} errTops={500}/>

                <SubmitButton name={"otp"} title={"Verify"} tops={340}/>

                <View style={styles.resendotp}>
                    <Text style={{color:colors.dark, fontSize:16, fontWeight:600}}>Didn’t receive a OTP? </Text>
                    <Text style={{color:colors.primary, fontSize:16, fontWeight:800}}>00:30 Sec</Text>
                </View>
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
        top:300,
        left:30,
        fontWeight:800,
        fontSize:36,
    },
    subHeading:{
        color:colors.black,
        fontWeight:400,
        fontSize:22,
        position:'absolute',
        top:350,
        left:30
    },
    resendotp:{
        flexDirection:'row',
        top:340,
        alignSelf:'center',
    }
});

export default LoginScreen2;