import React, { useState } from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Modal } from 'react-native';
import Screen from '../components/Screen';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import QuestionScreenHeading from '../components/QuestionScreenHeading';
import MCQQuestionAndOptions from '../components/MCQQuestionAndOptions';
import NumberPalette from '../components/NumberPalette';

function QuestionScreen(props) {
    const ques = [{
        "id":"1",
        "queText":"In the shown figure (not to scale), ABC is an isosceles triangle in which AB = AC. AEDC is a parallelogram. If CDF = 70º and BFE = 100º then find FBA.",
        "queImg":require('../assets/queImg1.png'),
        "optA":"30º",
        "optB":"40º",
        "optC":"50º",
        "optD":"80º",
        "answer":"B",
        "selectedOpt":"",
        "review":false,
        "bookmark":false,
        "notes":""
    }]
    const numOfQue = ques.length
    const [showTools, setShowTools]=useState(false)
    const [showNumPalette,setShowNumPalette] = useState(false)
    const AllTools = ({iconName, toolName, onPress})=>{
        return(
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{alignItems:'center'}}>
                    <View style={styles.allTools}> 
                        <MaterialCommunityIcons size={24} color={colors.primary} name={iconName}/>
                    </View>
                    <Text style={styles.allToolsText}>{toolName}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    return  (
        <Screen>
            <QuestionScreenHeading queNum={ques[0].id} numOfQue={numOfQue} openNumPalette={()=>setShowNumPalette(true)}/>
            <MCQQuestionAndOptions queText={ques[0].queText} queImg={ques[0].queImg} optA={ques[0].optA} 
            optB={ques[0].optB} optC={ques[0].optC} optD={ques[0].optD}/>

            <Modal visible={showNumPalette} transparent={true}>
                <NumberPalette closeNumPalette={()=>setShowNumPalette(false)}/>
            </Modal>

            <View style={styles.bottomButtons}>
                <TouchableWithoutFeedback onPress={()=>setShowTools(!showTools)}>
                    <View style={showTools ? [styles.tools,{backgroundColor:colors.red}] : styles.tools}>
                        <MaterialCommunityIcons size={24} color={colors.white} name={showTools ? 'arrow-collapse-left' : 'arrow-expand-right'}/>
                    </View>
                </TouchableWithoutFeedback>
                {showTools && (
                    <View style={{flexDirection:'row', flex:1, marginHorizontal:5}}>
                        <AllTools iconName='file-find-outline' toolName='Review' />
                        <AllTools iconName='file-document-edit-outline' toolName='Notes' />
                        <AllTools iconName='bookmark-outline' toolName='Bookmark' />
                        <AllTools iconName='floppy' toolName='Save' />
                    </View>
                )}

                <View style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    tools:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    allTools:{
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        borderColor:colors.primary,
        borderWidth:1,
        marginHorizontal:8
    },
    bottomButtons:{
        width:'92%',
        height: 50,
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        bottom : 18,
        position:'absolute'
    },
    submitButton:{
        width:80,
        height:40,
        borderRadius:18,
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center'
    },
    submitText:{
        fontSize:14,
        fontWeight:500,
        color:colors.white
    },
    allToolsText:{
        color:colors.primary,
        fontWeight:600
    },
});

export default QuestionScreen;