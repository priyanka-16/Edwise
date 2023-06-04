import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Modal, Button } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import defaultStyles from '../config/styles';
import { useNavigation } from '@react-navigation/native';

function BottomToolsQuestionScreen({review, setReview, bookmark, setBookmark, notes, setNotes, quesData}) {
    const [showTools, setShowTools]=useState(false)
    const [showNotes, setShowNotes]=useState(false)
    const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)
    const navigation = useNavigation();
    const AllTools = ({iconName, toolName, onPress, pressed})=>{
        return(
            <TouchableWithoutFeedback onPress={onPress}>
                <View style={{alignItems:'center'}}>
                    <View style={[styles.allTools,{backgroundColor:pressed ? colors.primary : colors.white}]}> 
                        <MaterialCommunityIcons size={24} color={pressed ? colors.white : colors.primary} name={iconName}/>
                    </View>
                    <Text style={styles.allToolsText}>{toolName}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
        }

    
    return  (
        <View style={styles.bottomButtons}>
            <Modal visible={showNotes} animationType='fade' transparent={true} style={styles.notesModal}>
                <View style={styles.notesModal}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontSize:20, fontWeight:700, color:colors.primary}}>Notes</Text>
                        <TouchableWithoutFeedback onPress={()=>setShowNotes(false)}>
                            <MaterialCommunityIcons size={28} name='close' color={colors.primary}/>
                        </TouchableWithoutFeedback>
                    </View>
                    <TextInput style={[defaultStyles.text,styles.notesInput]} onChangeText={setNotes} value={notes} 
                    multiline placeholder='You can write anything here which you can always see by clicking on notes for this question'/>
                </View>
            </Modal>
            <Modal visible={showConfirmSubmit} transparent={true} style={styles.submitModal}>
                <View style={styles.submitModal}>
                    <Text style={{fontSize:20, fontWeight:700, color:colors.primary}}>Confirm Submit</Text>
                    <Text style={[defaultStyles.text,{marginVertical:10}]}>You will not be able to edit your responses after submission.</Text> 
                    <View style={styles.confirmSubmitButtonsContainer}>
                        <TouchableWithoutFeedback onPress={()=>setShowConfirmSubmit(false)}>
                            <View style={[styles.confirmSubmitButtons,{backgroundColor:colors.dark}]}>
                                <Text style={styles.confirmSubmitButtonsText}>Cancel</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={()=>navigation.navigate('OnSubmit',{"quesData":quesData})}>
                            <View style={[styles.confirmSubmitButtons,{backgroundColor:colors.primary}]}>
                                <Text style={styles.confirmSubmitButtonsText}>Submit</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </View>
            </Modal>
            <TouchableWithoutFeedback onPress={()=>setShowTools(!showTools)}>
                <View style={showTools ? [styles.tools,{backgroundColor:colors.red}] : styles.tools}>
                    <MaterialCommunityIcons size={24} color={colors.white} name={showTools ? 'arrow-collapse-left' : 'arrow-expand-right'}/>
                </View>
            </TouchableWithoutFeedback>
            {showTools && (
                <View style={{flexDirection:'row', flex:1, marginHorizontal:5}}>
                    <AllTools iconName='file-find-outline' toolName='Review' pressed={review} onPress={()=>setReview(!review)} />
                    <AllTools iconName='file-document-edit-outline' toolName='Notes' pressed={notes!=""} onPress={()=>setShowNotes(!showNotes)}/>
                    <AllTools iconName='bookmark-outline' toolName='Bookmark' pressed={bookmark} onPress={()=>setBookmark(!bookmark)} />
                    <AllTools iconName='floppy' toolName='Save' />
                </View>
            )}
            <TouchableWithoutFeedback onPress={()=>setShowConfirmSubmit(true)}>
                <View style={styles.submitButton}>
                    <Text style={styles.submitText}>Submit</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
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
    notesModal:{
        width:'92%',
        height:'30%',
        padding:5,
        top:'60%',
        alignSelf:'center',
        backgroundColor:colors.white,
        borderRadius:10,
        borderWidth:1,  
    },
    submitModal:{
        width:'92%',
        height:'23%',
        padding:5,
        top:'35%',
        alignSelf:'center',
        backgroundColor:colors.white,
        borderRadius:10,
        borderWidth:1,  
    },
    confirmSubmitButtonsContainer:{
        flexDirection:'row',
        width:'60%',
        alignSelf:'flex-end',
        justifyContent:'space-between',
        marginTop:10
    },
    confirmSubmitButtons:{
        height:40,
        width:100,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    confirmSubmitButtonsText:{
        color:colors.white, 
        fontSize:16, 
        fontWeight:600
    }
    
});

export default BottomToolsQuestionScreen;