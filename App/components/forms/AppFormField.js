import React from 'react';
import InputField from '../InputField';
import ErrorMessage from './ErrorMessage';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from 'formik';
import { TouchableWithoutFeedback, View } from 'react-native';
import colors from '../../config/colors';
import { useNavigation } from '@react-navigation/native';



function AppFormField({name, errLefts=50, tops=370,lefts=30, errTops=410, chleft=320, heights=75, clr=false,...otherProps}) {
    const {handleChange, setFieldTouched, errors, touched} = useFormikContext();
    const navigation=useNavigation();
    return (
        <>
        <InputField tops={tops} lefts={lefts} heights={heights}{...otherProps} 
        onChangeText={handleChange(name)} onBlur= {()=>setFieldTouched(name)}/>

        {!errors[name] && touched[name] &&
        <View style={{left:chleft, top:errTops+20, position:'absolute'}}>
            <MaterialCommunityIcons name="checkbox-marked-circle" size={30} color="green" />
        </View>}

        {clr &&
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Onb5")}>
            <View style={{left:chleft, top:errTops+20, position:'absolute'}}>
                <MaterialCommunityIcons name="close-circle" size={30} color={colors.dark} />
            </View>
        </TouchableWithoutFeedback>}

        <ErrorMessage errorMessage={errors[name]}
        tops={errTops+45} lefts={errLefts} visible={touched[name]}/>
        </>

    );
}

export default AppFormField;