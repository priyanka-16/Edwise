import React, { useState } from 'react';
import {Text, StyleSheet, ImageBackground, Image, View, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
 
const validationSchema = Yup.object().shape({
    name: Yup.string().min(5).required().label("Name"),
})

function LoginScreen3({navigation}) {
    const [gender,setGender] = useState('');
    const [grade, setGrade] = useState();
    const [board, setBoard] = useState();
    return  (
        <ImageBackground style={styles.background} 
        source={require('../assets/loginBackground2.png')}>
            <Text style={styles.heading}>Let's get to{"\n"}know you</Text>
            <Text style={styles.heading2}>Better!</Text>
            <Text style={styles.subHeading}>Signing up with</Text>

            <View style={styles.gender}>
                <TouchableWithoutFeedback onPress={()=>setGender(gender=="male" ? "" : "male")}>
                    <View style={[styles.genderBox,{borderColor: gender=="male" ? colors.primary : colors.light}]}>
                        <View style={{position:'absolute', top:0, left:110}}>
                            {gender=="male" && <MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="green"/>}
                        </View>
                        <View style={[styles.genderCircle, {backgroundColor:"#7189FF"}]}>
                        <Fontisto name="male" size={50} color={colors.white} />
                        </View>
                        <Text style={{fontSize:18, fontWeight:700, color: colors.black}}>Male</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>setGender(gender=="female" ? "" : "female")}>
                    <View style={[styles.genderBox, {borderColor: gender=="female" ? colors.primary : colors.light}]}>
                        <View style={{position:'absolute', top:0, left:110}}>
                            {gender=="female" && <MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="green"/>}
                        </View>
                        <View style={[styles.genderCircle, {backgroundColor:"#FF83CD"}]}>
                        <Fontisto name="female" size={50} color={colors.white} />
                        </View>
                        <Text style={{fontSize:18, fontWeight:700, color: colors.black}}>Female</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
            <AppForm initialValues={{name:''}} onSubmit={()=>navigation.navigate("Login4")}
              validationSchema={validationSchema}>
                
                <AppFormField fieldTitle={"Your Name"}  name={"name"} 
                textContentType="name" tops={270} heights={75} errTops={460}/>

                <SubmitButton name={"name"} title={"Get Started"} tops={350}/>

            </AppForm>

            <View style={styles.dropDownContainer}>
                {/* <Picker mode='dropdown' selectedValue={grade} dropdownIconColor={'#FF8527'}
                onValueChange={(itemValue,itemIndex)=>setGrade(itemValue)}>
                    <Picker.item label="9" value="9"/>
                    <Picker.item label="10" value="10"/>
                </Picker> */}
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        height:'100%',
        width:'100%'
    },
    heading:{
        color:colors.black,
        position:'absolute',
        top:140,
        left:30,
        fontWeight:800,
        fontSize:36,
    },
    heading2:{
        color:colors.primary,
        position:'absolute',
        top:182,
        left:195,
        fontWeight:800,
        fontSize:36,
    },
    subHeading:{
        fontWeight: 400,
        fontSize: 22,
        top:230,
        left: 30
    },
    gender:{
        flexDirection:'row',
        justifyContent:'center'
    },
    genderBox:{
        height:155,
        width: 150,
        borderWidth: 2,
        top: 250,
        marginHorizontal: 15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },
    genderCircle:{
        width:100, 
        height:100, 
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    dropDownContainer:{
        flexDirection:'row',
    },
    dropDown:{
        height:60,
        width: 150,
        borderColor: colors.light,
        borderWidth: 2,
        top:200,
        left:17,
        marginHorizontal:15,
        borderRadius:5,
    }
});

export default LoginScreen3;