import React from 'react';
import Screen from '../components/Screen';
import { Image, View, StyleSheet, Text, FlatList } from 'react-native';
import colors from '../config/colors';
import icons from '../config/icons';
import subjects from '../config/subjects';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function SelfStudyGoalNotSet(props) {
    const RenderSubject = ({codeName, displayName}) => {
        return(
            <View style={{marginTop:20, alignItems:'center', width:"33.33%"}}>
                <View style={[styles.subjectIconBG, {backgroundColor:colors[codeName]}]}>
                    <MaterialCommunityIcons size={50} color={colors.white} name={icons[codeName]} />
                </View>
                    <Text style={styles.subjectText}>{displayName}</Text>
                </View>
        )
    }
    return (
       <>
        <Screen>
            <View style={styles.setGoalBox}>
                <Text style={styles.setGoalTitle}>Get your self study plan</Text>
                <Text style={styles.setGoalSubtitle}>Set your goal by entering few details and get a customized plan made just for you!</Text>
                <View style={styles.setGoalButton}>
                    <Text style={styles.setGoal}>Set Goal</Text>
                </View>
            </View>
            <View style={styles.selfStudy}>
                <Text style={styles.selfStudyWOGoalTitle}>You can practice without setting your goal also</Text>
                <FlatList data={subjects} keyExtractor={(subject)=>subject['code name']} numColumns={3}
                contentContainerStyle={{justifyContent:'space-between'}}
                renderItem={({item})=><RenderSubject codeName={item['code name']} displayName={item['display name']}/>}/>
            </View>
        </Screen>
        <Image style={{left:"25%"}} source={require('../assets/tabSelected.png')} resizeMode='stretch'/>
       </>
    );
}
const styles = StyleSheet.create({
    setGoalBox:{
        width:"90%", 
        height:142, 
        backgroundColor:colors.primary, 
        alignSelf:'center',
        borderRadius:10,
        padding:15,
    },
    setGoalTitle:{
        fontSize:18,
        fontWeight: 700,
        color:colors.white
    },
    setGoalSubtitle:{
        fontSize:14,
        fontWeight: 500,
        color:colors.white,
        marginTop:5
    },
    setGoalButton:{
        width:"50%",
        height: 35,
        backgroundColor: colors.white,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        marginTop:10,
        borderRadius:18
    },
    setGoal:{
        fontWeight:500,
        fontSize:16,
        color:colors.black
    },
    selfStudy:{
        marginTop:25,
        width:"90%",
        alignSelf:'center'
    },
    selfStudyWOGoalTitle:{
        fontSize:16,
        fontWeight:700,
        color:colors.black
    },
    subjectIconBG:{
        width:75,
        height:75,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },
    subjectText:{
        fontWeight:700,
        fontSize:15,
        marginTop:5,
        color:colors.black,
    },
    listContents: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
})

export default SelfStudyGoalNotSet;