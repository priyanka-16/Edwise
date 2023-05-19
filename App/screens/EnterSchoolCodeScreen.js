import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import BottomTab from '../components/BottomTab';
import colors from '../config/colors';
import Screen from '../components/Screen';
import * as Yup from 'yup';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    schoolCode: Yup.string().matches(/^\d{9}$/, 'Please enter correct school code').required().label("School Code")
})

function EnterSchoolCodeScreen({navigation}) {
    return  (
        <Screen>
            <View style = {styles.container}>
                <View style={styles.secContainer}>
                    <Text style={[styles.l1, {fontWeight:600}]}>Access all your homework by joining the class</Text>
                    <Text style={[styles.l2, {fontWeight:800}]}>Use the code shared by school</Text>
                    <AppForm initialValues={{schoolCode:''}} onSubmit={(values)=>navigation.navigate("Login6",{"schoolCode":values.schoolCode})}
                        validationSchema={validationSchema}>
                        <AppFormField fieldTitle={"Enter the school code"} tops={70} lefts={0}  name={"schoolCode"} keyboardType="numeric" 
                        textContentType="oneTimeCode" errTops={125} onChangeText={(text)=>{
                            var len=text.length;
                            if (len===3 || len===16){
                                text = text +"-"
                              }
                        }}/>
                
                        <SubmitButton name={"schoolCode"} title={"Join School"} tops={230}/>
                    </AppForm>
                    <Text style={styles.l4}>{"\u2022"} Once you enter school code, it will go for{"\n"}   approval to the school.{"\n"}</Text>
                    <Text style={styles.l4}>{"\u2022"} Once approved, You won’t be able to change{"\n"}   your school code / grade without the{"\n"}   permission of your school.</Text>
                </View>    
            </View>
            <BottomTab/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:colors.dark,

    },
    secContainer:{
        height:"60%",
        backgroundColor:colors.white,
        borderBottomStartRadius:25,
        borderBottomEndRadius:25,
        alignItems:'center',
    },
    l1:{
        top:30,
        fontSize:16,
        color: colors.black
    },
    l2:{
        top:40,
        fontSize:20,
        color: colors.primary
    },
    l4:{
        top: 20,
        fontSize:16,
        alignSelf:'flex-start',
        left:30
    }
});

export default EnterSchoolCodeScreen;